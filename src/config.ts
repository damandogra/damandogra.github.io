type Project = {
  name: string;
  slug: string;
  type: "tech" | "thesis";
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
      type: "tech",
      description:
        "Spatial analysis of public transport accessibility in Delhi using GTFS data and network-based metrics.",
      link: "https://github.com/damandogra/transit_delhi",
      skills: ["Python", "GTFS", "Network Analysis", "GIS"],
      cover: "/projects/transit-delhi/cover.jpg",

      summary:
        "This project evaluates public transport accessibility across Delhi by combining GTFS data with spatial network analysis. It identifies areas with high and low accessibility and highlights spatial inequalities in transit coverage.",

      context:
        "Developed as part of a geospatial analysis project, focusing on understanding how transit infrastructure serves different parts of a large metropolitan region.",

      objective:
        "To quantify accessibility to public transport using travel time and network connectivity, and identify underserved areas within the city.",

      methodology: [
        "Processing GTFS data to extract transit routes, stops, and schedules",
        "Building a multimodal network combining walking and transit links",
        "Computing accessibility metrics based on travel time thresholds",
        "Spatial aggregation and visualization of accessibility patterns"
      ],

      analysis: [
        "High accessibility is concentrated around central and well-connected corridors",
        "Peripheral areas show significantly lower transit accessibility",
        "Network structure strongly influences accessibility more than stop density alone"
      ],

      discussion: [
        "Transit-oriented development can improve accessibility in peripheral zones",
        "Service frequency plays a key role alongside spatial coverage",
        "The workflow demonstrates scalable analysis using open GTFS data"
      ],

      gallery: [
        "/projects/transit-delhi/map-accessibility.jpg",
        "/projects/transit-delhi/network-structure.jpg"
      ],

      resultVisuals: [
        {
          src: "/projects/transit-delhi/result-map.jpg",
          caption:
            "Spatial distribution of transit accessibility across Delhi based on travel time thresholds, highlighting central concentration and peripheral gaps."
        }
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