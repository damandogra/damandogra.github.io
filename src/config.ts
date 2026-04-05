type Project = {
  name: string;
  slug: string;
  description: string;
  link?: string;
  skills: string[];
  cover?: string;

  summary?: string;
  context?: string;
  objective?: string;
  methodology?: string[];
  data?: string[];
  process?: string[];
  analysis?: string[];
  results?: string[];
  discussion?: string[];
  gallery?: string[];
  resultVisuals?: {
    src: string;
    caption: string;
  }[];
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