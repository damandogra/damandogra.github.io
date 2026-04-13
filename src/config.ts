type Project = {
  name: string;
  slug: string;
  type: "tech" | "thesis" | "TransitDelhi";
  description: string;
  link?: string;
  skills: string[];
  cover?: string;

  summary?: string;
  summaryVisuals?: string[];

  context?: string;
  contextVisuals?: string[];

  objective?: string;
  objectiveVisuals?: string[];

  methodology?: string[];
  methodologyVisuals?: string[];

  data?: string[];

  process?: string[];
  processVisuals?: string[];

  analysis?: string[];
  analysisVisuals?: string[];

  results?: string[];
  resultVisuals?: {
    src: string;
    caption: string;
  }[];

  discussion?: string[];
  discussionVisuals?: string[];

  gallery?: string[];
};

export const siteConfig: {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email: string;
    linkedin: string;
    github: string;
    googleScholar: string;
  };
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: {
    company: string;
    link: string,
    title: string;
    dateRange: string;
    bullets: string[];
  }[];
  education: {
    school: string;
    link: string,
    degree: string;
    dateRange: string;
    achievements: string[];
  }[];
} = {
  name: "Daman Dogra",
  title: "MSc Geomatics Student, TU Delft",
  description: "Portfolio website of Daman Dogra",
  accentColor: "#1d4ed8",

  social: {
    email: "damandograa@gmail.com",
    linkedin: "https://www.linkedin.com/in/daman-dogra/",
    github: "https://github.com/damandogra",
    googleScholar: "https://scholar.google.com/citations?user=mCsx-J0AAAAJ&hl=en"
  },

  aboutMe:
    "Experience in 3D reconstruction, point cloud processing, and building geospatial data pipelines. Interested in scalable 3D data workflows.",

  skills: ["Python", "C++", "PostgreSQL", "PostGIS", "Docker", "QGIS"],

  projects: [
    {
      name: "Point Cloud Classification",
      slug: "point-cloud-classification",
      type: "tech",
      description:
        "Geometric pipeline to classify LiDAR data into ground, buildings, and vegetation.",
      link: "https://github.com/damandogra/Automatic-classification-of-Point-Cloud",
      skills: ["Python", "LiDAR", "PCA", "KD-Tree"],
      cover: "/projects/point-cloud/cover.jpg",

      summary:
        "Built a full geometric workflow to classify a raw LAZ point cloud, generate a terrain model, and compare the output against AHN reference data.",

      context:
        "Developed as part of GEO1015 Digital Terrain Modelling at TU Delft, this project focused on building an interpretable classification pipeline using geometric methods rather than black-box models.",

      objective:
        "To classify a raw point cloud into ground, buildings, and vegetation, generate a DTM from classified ground points, and evaluate the output against AHN reference data.",

      methodology: [
        "Ground extraction using the Cloth Simulation Filter (CSF) algorithm",
        "DTM generation via Laplace interpolation on ground-classified points",
        "Local geometric feature extraction using PCA on KD-tree–derived neighborhoods",
        "Building detection via planar seed extraction, normal-constrained region growing, and RANSAC-based plane fitting with smoothing",
        "Vegetation detection using PCA-derived sphericity features, region growing on scattered neighborhoods and return attributes, and consensus-based refinement with smoothing"
      ],

      analysis: [
        "Planarity and normal-angle thresholds strongly affected building extraction",
        "Sphericity alone overgrew into buildings, so return information became important for vegetation",
        "Performance was strongest in open terrain and weaker around rivers and data voids"
      ],

      results: [" "
        // "97.7% of AHN ground points were correctly classified as ground",
        // "93.1% of AHN non-ground points were correctly identified as non-ground",
        // "The generated DTM matched the AHN-based DTM closely in smooth open areas",
        // "Buildings were overclassified by around 17%, partly due to river-related planar regions and wall surfaces"
      ],
      resultVisuals: [
        {
          src: "/projects/point-cloud/results-confusion.jpg",
          caption:
            "Normalized confusion matrix comparing predicted classification with AHN reference data. Ground accuracy reaches 97.7% and non-ground 93.1%, with minor confusion at class boundaries and complex surfaces."
        }
      ],

      discussion: [
        "The project showed that geometric methods can perform strongly without deep learning",
        "Runtime and memory constraints required chunk-based processing",
        "Parameter tuning had a major influence on classification quality",
        "The workflow also improved collaboration and GitHub-based project organization"
      ],

      gallery: [
        "/projects/point-cloud/method-diagram-1.jpg",
        "/projects/point-cloud/building-workflow.jpg",
        "/projects/point-cloud/vegetation-tuning.jpg",
        "/projects/point-cloud/results-comparison.jpg"
      ]
    },
    {
      name: "Transit Accessibility Analysis – Delhi",
      slug: "transit-delhi",
      type: "TransitDelhi",
      description:
        "Quantifying public transport equity across Delhi using open GTFS data, multimodal network graphs, and travel-time isochrones — revealing where 20 million residents are underserved.",
      link: "https://github.com/damandogra/transit_delhi",
      skills: ["Python", "GeoPandas", "NetworkX", "OSMnx", "Pandana", "GTFS", "Network Analysis", "GIS"],
      cover: "/projects/transit-delhi/cover.jpg",
 
      summary:
        "Built a multimodal pedestrian-transit network for Delhi NCT by combining open GTFS bus data with OSM street geometry. Computed 30-minute travel-time accessibility scores for every node in the network, aggregated results to ward level, and mapped the spatial distribution of transit inequity across the city.",
 
      context:
        "Delhi's public transport network spans buses, Metro, and shared autos — yet daily commutes for millions are shaped less by where people want to go and more by where transit actually reaches. GTFS data for Delhi's bus network is publicly available through the city's Open Transit Data portal, making it possible to reconstruct the full scheduled network and measure its real coverage.",
 
      objective:
        "To quantify transit accessibility across Delhi using travel time and network connectivity rather than simple stop-density counts, and to identify the wards and corridors where coverage falls below a meaningful threshold.",
 
      methodology: [
        "Parsed and validated the Delhi GTFS feed (stops.txt, routes.txt, trips.txt, stop_times.txt) using pandas and GeoPandas, filtering duplicate stops and incomplete route entries",
        "Retrieved the Delhi NCT pedestrian street network from OpenStreetMap via OSMnx and appended transit boarding, in-vehicle, and alighting edges to build a unified multimodal graph",
        "Weighted walk edges by distance ÷ 1.2 m/s; transit edges by scheduled in-vehicle time; boarding nodes by average route headway derived from stop_times, with a 3-minute transfer penalty",
        "Used Pandana to compute cumulative accessibility scores — the number of transit stops reachable within a 30-minute travel time — for every node in the network",
        "Spatially joined node-level scores to Delhi ward boundaries, aggregated by median, and visualised as a choropleth using matplotlib and contextily"
      ],
 
      analysis: [
        "High-accessibility zones align almost perfectly with Metro corridors rather than bus route density — the Metro is driving accessibility outcomes even though buses cover more of the city's area",
        "Several peripheral wards have high stop counts but poor scores, showing that stop presence without adequate frequency does not translate to usable access within a 30-minute window",
        "A cluster of north-west Delhi wards scores poorly despite proximity to the outer ring road — the absence of walkable connections from residential streets to stops creates accessibility dead zones even where buses run",
        "Central and south Delhi wards score 3–4× higher than peripheral areas, confirming a pronounced core–periphery gradient in transit equity"
      ],
 
      results: [" "],
      resultVisuals: [
        {
          src: "/projects/transit-delhi/result-map.jpg",
          caption:
            "Ward-level choropleth of median transit accessibility scores across Delhi. Darker wards can reach significantly more of the network within 30 minutes. The gradient from the central corridors to the urban periphery highlights where investment in frequency or feeder routes would have the greatest equity impact."
        }
      ],
 
      discussion: [
        "The methodology is reproducible with any open GTFS feed — the same pipeline can be applied to Bengaluru, Mumbai, or any city publishing open transit data with minimal reconfiguration",
        "Delhi's GTFS stop_times use estimated constant-speed values rather than measured travel times, which introduces noise in the headway and in-vehicle time calculations; real-time GTFS-RT feeds would improve accuracy",
        "Incorporating population density and employment data would shift the output from raw connectivity to weighted accessibility, measuring not just how many stops you can reach but how many people or jobs those stops serve",
        "Transit-oriented development in peripheral zones and targeted frequency increases on low-headway routes serving underserved wards are the two interventions most supported by the analysis"
      ],
 
      gallery: [
        "/projects/transit-delhi/gtfs-network.jpg",       // 01 — raw GTFS stop network plotted on Delhi NCT
        "/projects/transit-delhi/multimodal-graph.jpg",   // 02 — combined walk + transit graph
        "/projects/transit-delhi/isochrones.jpg",         // 03 — 30-min isochrones from sample origins
        "/projects/transit-delhi/ward-choropleth.jpg"     // 04 — ward-level accessibility choropleth
      ]
    },
    {
      name: "Revitalization of Urban Waterfronts through WaTOD",
      slug: "watod-srinagar",
      type: "thesis",
      description:
        "Water Transit-Oriented Development framework integrating land use and mobility along the Jhelum River in Srinagar.",
      link: "https://niua.in/sites/default/files/2025-07/2023_S2_Revitalization%20of%20Urban.pdf",

      skills: ["Urban Planning", "Land Use Analysis", "Transport Planning", "GIS"],

      cover: "/projects/watod/01-cover.jpg",

      summary:
        "Water transit is explored as a low-cost, flexible and environmentally friendly supplement to land-based transport.",
      summaryVisuals: [
        // "/projects/watod/01-cover.jpg"
      ],

      context:
        "Inland waterways are widely used in many developed countries, but in India they account for only a very small share of overall transportation. Literature pointed to low CAPEX, route flexibility, reusable infrastructure, and the unique appeal of ferries through comfort, aesthetics, and reliability. In Srinagar, rapid urbanization, corridor-based growth, congestion, wetland fragmentation, and the underuse of the Jhelum River created the need for a water-centric planning approach.",
      contextVisuals: [
        "/projects/watod/02-water-transit-rationale.jpg",
        "/projects/watod/03-srinagar-context.jpg"
      ],

      objective:
        "To develop a water-centric model that integrates land use and water transit, and to formulate a WaTOD plan through density, diversity, design, and multimodal integration strategies.",
      objectiveVisuals: [],

      methodology: [
        // "Established the existing land-use and transport scenario along the river",
        // "Evaluated TOD principles against existing land-use regulations along the water body",
        // "Mapped land use using Google Earth imagery and QGIS",
        // "Studied density, built form, demand-supply conditions, and connectivity",
        // "Applied the TOD framework through Density, Diversity, and Design"
      ],
      methodologyVisuals: [
        "/projects/watod/04-methodology.jpg"
      ],

      data: [
        // "Primary survey",
        // "Srinagar Master Plan 2035",
        // "Comprehensive Mobility Plan for Srinagar",
        // "National TOD Policy",
        // "Google Earth imagery"
      ],

      process: [
        "Mapped 16 terminals along the Jhelum River",
        "Divided the study area into new city and old city sections",
        "Conducted terminal-wise land-use evaluation",
        "Compared terminal characteristics across plot size, road width, congestion, and land use",
        "Selected Zero Bridge and Khanqah-e-Maula as representative terminals for detailed study"
      ],
      processVisuals: [
        "/projects/watod/05-terminal-comparison.jpg",
        "/projects/watod/06-terminal-conditions.jpg"
      ],

      analysis: [
        "Water transit between Terminal 1 and Terminal 11 was observed to take roughly 50% less time than road travel due to congestion points and bottlenecks",
        "In Khanqah-e-Maula, 65% of buildings were either warehouses or abandoned",
        "74% of households reported low incentive to reinvest due to congestion, low connectivity, and poor quality of life",
        "Land-use comparison showed growing residential demand at Zero Bridge and adaptive reuse for tourism at Khanqah-e-Maula"
      ],
      analysisVisuals: [
        "/projects/watod/07-major-issues.jpg",
        "/projects/watod/08-landuse-change.jpg"
      ],

      results: [
        "Developed three density scenarios: Existing, Moderate, and Dynamic",
        "Used TOD-based land-use mix to derive built-up distribution for both terminals",
        "Proposed a better mixed-use structure for Zero Bridge to support increased residential demand",
        "Proposed a river-sensitive zoning logic with low density near the water edge, followed by high and then moderate density",
        "Prepared distinct WaTOD responses for the new city and old city conditions"
      ],
      resultVisuals: [
        {
          src: "/projects/watod/09-density-diversity-design.jpg",
          caption: "Density, diversity, and design framework. Unlike conventional TOD, low density is placed immediately along the river edge, followed by high and then moderate density to respond to water sensitivity and existing built form."
        },
        {
          src: "/projects/watod/10-zero-bridge-distribution.jpg",
          caption: "Built-up distribution for Zero Bridge. The proposal introduces a stronger mix of uses to support increased residential demand and improve the balance between residential and commercial functions."
        },
        {
          src: "/projects/watod/11-khanqah-distribution.jpg",
          caption: "Built-up distribution for Khanqah-e-Maula. The proposal responds to the old city condition through a more regulated framework and adaptive reuse rather than major restructuring."
        }
      ],

      discussion: [
        "Water transit can function as an efficient bypass to congestion in Srinagar",
        "Multimodal integration is necessary, including pedestrian access, NMT, integrated ticketing, and wayfinding",
        "The river edge should not be treated only as infrastructure, but as a sensitive public interface with recreation, cycling, and ferry access",
        "A 15 m river buffer and supportive land uses help make the proposal both transit-oriented and river-sensitive"
      ],
      discussionVisuals: [
        "/projects/watod/12-multimodal.jpg",
        "/projects/watod/13-river-edge.jpg"
      ],

      gallery: []
    }
  ],

  experience: [
    {
      company: "Indian Institute of Technology Roorkee, India",
      link: "https://www.iitr.ac.in/",
      title: "Project Associate",
      dateRange: "Apr 2023 - Jul 2025",
      bullets: [
        "Deployed and configured an Arches-based geospatial system to structure and manage cultural heritage data using ontology-driven workflows (CIDOC-CRM).",
        "Developed 3D reconstruction workflows using photogrammetry and LiDAR, processing point cloud data for heritage documentation.",
        "Conducted research on data interoperability and visualization, adhering to FAIR principles.",
        "Contributed to writing funding proposals in Geomatics and Urban Planning."
      ],
    },
    {
      company: "National Programme on Technology Enhanced Learning",
      link: "https://nptel.ac.in/",
      title: "Teaching Assistant",
      dateRange: "Aug 2023 - Sep 2023",
      bullets: [
      ],
    },
    {
      company: "PLADECO Consultants, India",
      link: "",
      title: "Junior Urban Planner",
      dateRange: "Oct 2022 - Mar 2023",
      bullets: [
        "Developed a comprehensive neighbourhood plan, focusing on infrastructure and spatial optimisation."
      ],
    },
    {
      company: "Nangia & Co LLP, India",
      link: "https://nangia.com/",
      title: "Associate - Government and Public Sector Advisory",
      dateRange: "Jul 2022 - Sep 2022",
      bullets: [
        "Worked with surveyors to develop a survey platform for Street Vendor Plan for Urban Local Bodies."
      ],
    },
    {
      company: "Janaagraha - Center for Citizenship and Democracy, India",
      link: "https://www.janaagraha.org/",
      title: "Urban Transport and Green Financing Intern",
      dateRange: "Jul 2021 - Aug 2021",
      bullets: [
        "Compiled and analysed datasets to support Sustainable Public Bus Transport Financing (SPBTF) Project."
      ],
    }
  ],

  education: [
    {
      school: "Delft Unveristy of Technology",
      link: "https://www.tudelft.nl/onderwijs/opleidingen/masters/gm/msc-geomatics",
      degree: "Master of Science in Geomatics",
      dateRange: "2025 - 2027",
      achievements: [
        "Coursework and labs on 3D Reconstruction, Classifying point clouds, Geo-web development and Database management."
      ],
    },
    {
      school: "School of Planning and Architecture, India",
      link: "https://spabhopal.ac.in/Home.aspx",
      degree: "Bachelor of Urban Planning",
      dateRange: "2018 - 2022",
      achievements: [
        "Received a grant of 600 Euros to support my research project on Water Transit Oriented Development (WaTOD), which was later published in a Peer reviewed Journal.",
        "Elected representation for the National Organisation of students of Planning (NOSPlan)"
      ],
    }
  ],
};