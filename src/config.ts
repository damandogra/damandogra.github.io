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
  galleryCaptions?: string[];
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
      ],

      galleryCaptions: [
        "Geometric classification strategy combining PCA-based local features with region growing and sampling consensus.",
        "Building extraction using planar segmentation and region growing with normal constraints.",
        "Vegetation classification using sphericity and neighborhood scattering features.",
        "Comparison with AHN reference classification showing strong agreement and overclassification zones."
      ],
    },
    {
      name: "Waste Detection in the Built Environment",
      slug: "waste-detection-ml",
      type: "tech",
      description:
        "Automatic classification of waste in street-view images using a YOLO-based object detection pipeline.",
      link: "https://github.com/damandogra/ML_Assignment03_Group03",
      skills: ["Python", "YOLO", "Computer Vision", "CVAT", "Deep Learning"],
      cover: "/projects/waste-detection/cover.jpg",

      summary:
        "This project addresses the automatic classification of waste using 10,000 street-view images. The objective is to build a machine learning pipeline that trains, validates, and tests on data to identify whether an image contains waste and classify it into five predefined categories.",

      context:
        "Waste detection in the built environment is crucial for maintaining a liveable urban environment. Traditional monitoring methods are labour-intensive, motivating the use of machine learning for automated detection.",

      objective:
        "To identify whether an image contains waste and classify it into five predefined categories: bulky waste, garbage bag, cardboard, litter, and other.",

      methodology: [
        "Images were manually annotated in CVAT using five predefined classes, with bounding boxes assigned to visible waste objects",
        "A temporal dataset split was used to prevent data leakage and simulate real-world deployment",
        "The YOLO26n model was selected for its lightweight architecture and trained for 100 epochs with early stopping (patience = 20), image size 512 and batch size 8",
        "Both classification and detection approaches were evaluated; the detection model was selected due to its ability to provide spatial localisation and multi-class predictions",
        "Predictions were ranked based on highest confidence detection per image, and evaluation was conducted using Precision at 100 (P@100)"
      ],

      data: [
        "10,000 street-view images split into training (2844), validation (3064), and testing (4092)",
        "Five annotated classes: bulky waste, garbage bag, cardboard, litter, and other",
        "Strong class imbalance with most images containing no waste objects"
      ],

      analysis: [
        "The dataset exhibits strong class imbalance, leading to dominance of background samples during training",
        "This results in reduced recall and a bias toward predicting clean scenes",
        "Class-wise performance shows garbage bag achieving the highest performance (AP = 0.186), while cardboard and other remain near zero",
        "Precision remains stable at low recall but drops rapidly as recall increases"
      ],

      results: [
        "The model achieves low detection performance (mAP@50: 0.102 on test, mAP@50-95: 0.046)",
        "P@100 = 0.90, indicating strong performance in ranking images containing waste",
        "The model is effective for prioritisation tasks despite low detection accuracy"
      ],

      resultVisuals: [
        {
          src: "/projects/waste-detection/confusion-matrix.jpg",
          caption:
            "Confusion matrix showing class-wise detection performance on the test dataset, highlighting strong background bias and missed detections."
        },
        {
          src: "/projects/waste-detection/pr-curve.jpg",
          caption:
            "Precision–Recall curve showing low recall across all classes, with the garbage bag class achieving the highest performance."
        }
      ],

      discussion: [
        "The dominant error type is false negatives due to class imbalance and low object frequency",
        "The model is recall-limited rather than precision-limited",
        "Labelling ambiguity affects evaluation, where correct detections may be penalised due to class mismatch",
        "Ranking-based evaluation (P@100) remains effective even when detection metrics are low"
      ],

      gallery: [
        "/projects/waste-detection/sample-correct.jpg",
        "/projects/waste-detection/sample-errors.jpg"
      ],

      galleryCaptions: [
        "Example of correct detection where the model identifies visible waste objects with high confidence.",
        "Examples of incorrect detections showing overlapping bounding boxes and missed objects."
      ]
    },
    {
      name: "Transit Accessibility Map – Delhi",
      slug: "transit-delhi",
      type: "TransitDelhi",
      description:
        "Interactive web map of Delhi's public transit network — bus stops, metro lines, and stations visualised with toggleable layers and stop-level popups.",
      link: "https://github.com/damandogra/transit_delhi",
      skills: ["Python", "Flask", "Folium", "OpenStreetMap", "GeoJSON", "GTFS"],
      cover: "/projects/transit-delhi/cover.jpg",

      summary:
        "A Flask web app that loads open OSM and GTFS data and renders it as an interactive Folium map. Users can explore bus stop locations, toggle metro lines and stations, and click any marker to see stop-level attributes.",

      objective:
        "To make Delhi's public transit network spatially legible — combining bus, metro, and boundary data from open sources into a single browsable map.",

      methodology: [
        "Loaded bus stop nodes from OSM (JSON) with attributes: name, operator, network, wheelchair, shelter, departures board",
        "Added Delhi Metro lines and stations from GeoJSON files as separate toggleable layers",
        "Used Folium's MarkerCluster to group dense stop areas and reduce visual noise at city scale",
        "Rendered the Delhi NCT administrative boundary as a GeoJSON overlay",
        "Served the map through a Flask route, with a custom HTML legend injected via folium.Element",
      ],

      analysis: [
        "Bus stops cluster heavily around the central corridors — peripheral areas of Delhi have noticeably lower stop density",
        "Metro lines connect major corridors but large residential areas in the north-west and south remain without rail coverage",
        "A significant share of stops lack shelter or wheelchair accessibility data in OSM, reflecting gaps in open data completeness",
      ],

      discussion: [
        "The project is a starting point — adding frequency data or travel-time analysis would make the map analytically stronger",
        "OSM data quality varies across the city; stops in outer Delhi often have incomplete or missing attribute tags",
        "Switching to a frontend framework (Leaflet.js directly) would allow faster load times and more interactive filtering",
      ],

      results: [" "],
      resultVisuals: [],

      gallery: [
        "/projects/transit-delhi/methodology.png",   // pipeline diagram
        "/projects/transit-delhi/data-layers.png",   // 4-panel layer breakdown
        "/projects/transit-delhi/popup-detail.png",  // popup + cluster UI
      ],
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