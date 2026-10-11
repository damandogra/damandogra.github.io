/* ==================================================================
   SITE CONTENT
   Everything shown on the website lives in this file.
   - Project images go in src/assets/projects/<slug>/ and are referenced
     here as "/projects/<slug>/<file>" (they are optimised at build time).
   - Colours and fonts live in src/styles/global.css.
   ================================================================== */

export type Figure = {
  src: string;
  caption: string;
};

/** A visual is either an image path or an image with a caption. */
export type Visual = string | Figure;

export type Project = {
  name: string;
  slug: string;
  /** Label shown on cards and project pages. */
  type: "tech" | "thesis" | "web";
  /** One-line description used on cards and for SEO. */
  description: string;
  link?: string;
  linkLabel?: string;
  /** Optional second link, e.g. a live demo. */
  demo?: string;
  demoLabel?: string;
  skills: string[];
  cover?: string;

  // Every section below is optional and only rendered when filled in.
  summary?: string;
  summaryVisuals?: Visual[];

  context?: string;
  contextVisuals?: Visual[];

  objective?: string;
  objectiveVisuals?: Visual[];

  methodology?: string[];
  methodologyVisuals?: Visual[];

  data?: string[];

  process?: string[];
  processVisuals?: Visual[];

  analysis?: string[];
  analysisVisuals?: Visual[];

  results?: string[];
  resultVisuals?: Figure[];

  discussion?: string[];
  discussionVisuals?: Visual[];

  /** Extra figures shown in a "Visuals" section after the method. */
  gallery?: Figure[];
};

export type Experience = {
  company: string;
  link?: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type Education = {
  school: string;
  link?: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

export type SiteConfig = {
  name: string;
  title: string;
  /** Short line under the name in the hero. */
  tagline: string;
  /** Used for the <meta name="description"> and link previews. */
  description: string;
  location?: string;
  social: {
    email: string;
    linkedin?: string;
    github?: string;
    googleScholar?: string;
  };
  aboutMe: string[];
  skills: { label: string; items: string[] }[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
};

export const projectTypeLabel: Record<Project["type"], string> = {
  tech: "Technical project",
  thesis: "Thesis & research",
  web: "Web mapping",
};

export const siteConfig: SiteConfig = {
  name: "Daman Dogra",
  title: "MSc Geomatics Student, TU Delft",
  tagline:
    "I build geospatial data pipelines, point cloud workflows and 3D web visualisations that turn complex spatial data into better urban decisions.",
  description:
    "Portfolio of Daman Dogra, MSc Geomatics student at TU Delft and urban planner, working on geospatial data pipelines, LiDAR point cloud processing, 3D city models and spatial analysis.",

  social: {
    email: "damandograa@gmail.com",
    linkedin: "https://www.linkedin.com/in/daman-dogra/",
    github: "https://github.com/damandogra",
    googleScholar: "https://scholar.google.com/citations?user=mCsx-J0AAAAJ&hl=en",
  },

  aboutMe: [
    "I develop geospatial data pipelines and spatial models that integrate heterogeneous datasets to extract, structure, and analyze urban information, supporting scenario-based decision-making in spatial planning.",
    "With a background in urban planning and two years of research on 3D heritage documentation at IIT Roorkee, I now focus on point cloud processing, 3D reconstruction and BIM–GIS integration in the MSc Geomatics programme at TU Delft.",
    "I'm currently interning at TNO – Geological Survey of the Netherlands, streaming national subsurface voxel models to the web with OGC 3D Tiles and CesiumJS.",
  ],

  skills: [
    { label: "Languages", items: ["Python", "C++", "R", "Java", "SQL"] },
    {
      label: "Geospatial",
      items: ["QGIS", "PostGIS", "OpenStreetMap", "GTFS", "InSAR (SARPROZ)", "Spatial MCDA"],
    },
    {
      label: "3D & point clouds",
      items: ["LiDAR", "Photogrammetry", "CGAL", "CityJSON", "IFC / BIM", "OGC 3D Tiles", "CesiumJS"],
    },
    {
      label: "Data & tooling",
      items: ["PostgreSQL", "Docker", "Machine learning (YOLO)", "Flask", "Git"],
    },
  ],

  projects: [
    {
      name: "Point Cloud Classification",
      slug: "point-cloud-classification",
      type: "tech",
      description:
        "Geometric pipeline to classify LiDAR data into ground, buildings, and vegetation.",
      link: "https://github.com/damandogra/Automatic-classification-of-Point-Cloud",
      linkLabel: "Source code",
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

      results: [
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
        {
          src: "/projects/point-cloud/method-diagram-1.jpg",
          caption: "Geometric classification strategy combining PCA-based local features with region growing and sampling consensus."
        },
        {
          src: "/projects/point-cloud/building-workflow.jpg",
          caption: "Building extraction using planar segmentation and region growing with normal constraints."
        },
        {
          src: "/projects/point-cloud/vegetation-tuning.jpg",
          caption: "Vegetation classification using sphericity and neighborhood scattering features."
        },
        {
          src: "/projects/point-cloud/results-comparison.jpg",
          caption: "Comparison with AHN reference classification showing strong agreement and overclassification zones."
        }
      ]
    },
    {
      name: "Waste Detection in the Built Environment",
      slug: "waste-detection-ml",
      type: "tech",
      description:
        "Automatic classification of waste in street-view images using a YOLO-based object detection pipeline.",
      link: "https://github.com/damandogra/ML_Assignment03_Group03",
      linkLabel: "Source code",
      skills: ["Machine Learning", "Python", "Computer Vision"],
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
        {
          src: "/projects/waste-detection/sample-correct.jpg",
          caption: "Example of correct detection where the model identifies visible waste objects with high confidence."
        },
        {
          src: "/projects/waste-detection/sample-errors.jpg",
          caption: "False positive: non-waste object incorrectly classified as a garbage bag with near-zero confidence."
        }
      ]
    },
    {
      name: "BIM to Geo Conversion via Voxelisation",
      slug: "bim2geo",
      type: "tech",
      description:
        "C++ pipeline that converts IFC building models into CityJSON by voxelising geometry and extracting semantic room volumes.",
      link: "https://github.com/damandogra/BIM2Geo",
      linkLabel: "Source code",
      skills: ["C++", "CGAL", "IFC", "CityJSON", "Voxelisation"],
      cover: "/projects/bim2geo/cover.png",

      summary:
        "Built a voxel-based pipeline in C++ that converts IFC building models into CityJSON 2.0. The pipeline voxelises structural geometry, classifies voxels as filled, exterior, or interior via BFS flood-fill, extracts per-room and envelope shells, and writes a semantically structured output with Building, BuildingStorey, and BuildingRoom hierarchy.",

      objective:
        "To convert IFC building models into valid CityJSON by voxelising wall, slab, roof, window, and door geometry; detecting enclosed interior spaces via flood-fill; and filtering spurious volumes using width and size thresholds.",

      methodology: [
        "IFC-to-OBJ conversion using IfcOpenShell's IfcConvert, retaining walls, slabs, roofs, windows and doors while excluding furnishings, openings, stairs and railings",
        "OBJ parsing into Triangle and Mesh structures; bounding box computed only from retained geometry to avoid inflating the grid",
        "Voxel grid initialisation with one-voxel padding on all sides, ensuring the corner voxel is guaranteed exterior and the flood fill can move freely around the building",
        "Solid voxelisation using CGAL triangle-voxel intersection tests (Iso_cuboid_3), marking intersected cells as FILLED",
        "BFS flood-fill from corner voxel to label exterior; remaining unlabelled voxels seeded individually to assign unique room IDs",
        "Room filtering by minimum volume (6 m³) and minimum width (0.3 m via erosion passes) to remove wall cavities and thin gaps",
        "Surface extraction by checking all six face-neighbours of each FILLED voxel, generating quads where adjacent to exterior or room voxels, split into triangles with consistent winding",
        "CityJSON 2.0 serialisation with Building → BuildingStorey → BuildingRoom hierarchy; storeys grouped by minimum z-coordinate with voxel-size tolerance"
      ],

      analysis: [
        "Room count is highly unstable with respect to voxel size — no plateau was found, disproving the initial stability hypothesis",
        "Volume-based filtering (min_volume = 6 m³) pushed room counts below ground truth in most cases, making results worse rather than better",
        "Width-based filtering (min_width = 0.3 m) at fine resolutions brought counts closer to reality — e.g. ~50 rooms at 0.25 m for the Wellness Centre vs ground truth of 50",
        "No single parameter setting generalises across buildings: the voxel size that works for the Wellness Centre does not work for the Duplex",
      ],

      results: [
        "Pipeline produces valid CityJSON 2.0 output confirmed with cjval, with full Building → BuildingStorey → BuildingRoom semantic hierarchy",
        "Tested on two IFC models: Sama Wellness Centre (50 rooms ground truth) and Duplex (20 rooms ground truth)",
        "Width-based filtering at voxel size 0.25 m recovered ~50 rooms for the Wellness Centre, closely matching ground truth",
        "Room count remains chaotic across voxel sizes with no universally optimal parameter — explicit inspection of input and output remains necessary",
      ],

      resultVisuals: [
        {
          src: "/projects/bim2geo/fig3-sweep.png",
          caption: "Voxel size sweep showing recovered room count for the Wellness Centre and Duplex. Room count is unstable across resolutions, disproving the plateau hypothesis."
        },
        {
          src: "/projects/bim2geo/fig5-minwidth.png",
          caption: "Effect of min_width = 0.3 m filtering at fine resolutions. Width-based filtering brings the room count substantially closer to ground truth compared to no thresholding."
        }
      ],

      discussion: [
        "Compile-time filter constants (min_volume, min_width) require a full rebuild to change — runtime parameters would significantly improve iteration speed during experiments",
        "The pipeline assumes watertight OBJ geometry; IFC models with missing or incomplete elements caused ray-casting artefacts and spurious room detections",
        "Boxy voxel artefacts in the CityJSON output could be reduced with post-processing methods such as Marching Cubes, Dual Contouring, or mesh simplification",
        "Parameter sweeps should be extended to multiple axes (voxel size, min_volume, min_width simultaneously) for a more complete stability analysis",
      ],
      
      gallery: [
        {
          src: "/projects/bim2geo/fig1-zslice.png",
          caption: "Horizontal Z-slice of the voxel grid for the Sama Wellness Centre. Room labels assigned by flood-fill are visible as distinct numeric regions separated by filled wall voxels."
        },
        {
          src: "/projects/bim2geo/fig2-comparison.png",
          caption: "Comparison between the original IFC model and the voxel-based CityJSON reconstruction. The envelope and room subdivisions are preserved, with characteristic boxy artefacts from the discrete voxel grid."
        }
      ]
    },
    {
      name: "Spatial Justice through Urban Green Space Connectivity",
      slug: "urban-green-space",
      type: "tech",
      description:
        "Reproducible R pipeline and spatial MCDA that assesses green space accessibility, ecological quality, equity and connectivity in Delft and Yuexiu (Guangzhou) to prioritise nature-based solutions.",
      link: "https://github.com/Applied-Spatial-Analytics/create-your-report-groupe",
      linkLabel: "Source code",
      demo: "https://applied-spatial-analytics.github.io/create-your-report-groupe/",
      demoLabel: "Read the full report",
      skills: ["R", "sf / terra", "Quarto", "OSM", "Sentinel-2 NDVI", "GBIF", "Spatial MCDA"],
      cover: "/projects/urban-green-space/cover.jpg",

      summary:
        "Group project for Applied Spatial Analytics at TU Delft (2026), with Roxanne Vuijk and Belina Aileen. We built a fully reproducible R pipeline that evaluates urban green space (UGS) quality across Delft (Netherlands) and Yuexiu District, Guangzhou (China), and combines four dimensions — accessibility, ecological quality, spatial justice and connectivity — in a Spatial Multi-Criteria Decision Analysis (S-MCDA) that pinpoints where nature-based solutions are needed most.",

      context:
        "Rapid urbanisation puts pressure on green space, and its benefits — cooling, health, biodiversity, social contact — are often unevenly shared. Accessibility, ecological quality and connectivity are usually assessed separately. The two study sites contrast sharply: Yuexiu is the dense historic core of Guangzhou, a city that grew its greenway network through the Pearl River Delta programme, while Delft integrates small-scale blue-green infrastructure into compact Dutch urban planning.",
      contextVisuals: [
        {
          src: "/projects/urban-green-space/context-ugs-overview.jpg",
          caption: "Urban green space in Yuexiu (jiedao, left) and Delft (wijken, right).",
        },
      ],

      objective:
        "Answer the question: how can urban green space quality assessment inform nature-based interventions in Delft and Yuexiu? Five sub-questions cover accessibility, typology and ecological quality, equity of distribution, connectivity, and prioritisation of interventions.",

      methodology: [
        "Accessibility (SQ1): green space per capita from WorldPop, population share within 300 m and 500 m buffers, distance to nearest green space, and access points where the road network meets green boundaries",
        "Ecological quality (SQ2): OSM/BGT typology classification, Sentinel-2 NDVI zonal statistics, GBIF observation density per hectare, and a blue-green balance index",
        "Spatial justice (SQ3): Lorenz curve and Gini coefficient of green space per capita, a 3×3 bivariate choropleth of green vs population density, and correlation with CBS income (Delft) or VIIRS night-time light (Yuexiu)",
        "Connectivity (SQ4): fragmentation metrics (NP, MPS, ENN) and a patch graph with edges at a 150 m dispersal threshold, analysed for degree, betweenness and connected components",
        "S-MCDA (SQ5): min-max normalised sub-scores weighted 30% accessibility, 25% ecology, 25% connectivity and 20% equity, classified into priority tiers and overlaid with proposed green corridors for isolated patches",
        "Engineering: eight sequential R scripts with every path, CRS and parameter in 00_config.R, rendered with Quarto and published on GitHub Pages",
      ],
      methodologyVisuals: [
        {
          src: "/projects/urban-green-space/method-pipeline.jpg",
          caption: "Analytical pipeline: five sub-questions integrated through a weighted MCDA synthesis.",
        },
      ],

      data: [
        "OpenStreetMap (green space, roads, water) and BGT for Delft",
        "WorldPop 100 m population grids",
        "Sentinel-2 NDVI and ESA WorldCover",
        "GBIF species occurrence records",
        "CBS neighbourhood income (Delft) and VIIRS night-time lights (Yuexiu)",
      ],

      analysis: [
        "Yuexiu is about 5× denser than Delft (≈25,000 vs 4,856 residents/km²), so its low green space per capita (≤10 m² vs up to 400 m² in Delft) reflects more people sharing green space, not only less green space",
        "Almost all of Delft lives within 300 m of green space; Yuexiu's coverage is clearly lower at 300 m and improves considerably at 500 m",
        "Green space is distributed more equally in Delft (Gini 0.598) than in Yuexiu (Gini 0.742); income/night-light correlations are near zero in both cities (r = −0.082 and −0.116)",
        "At a 150 m threshold, Delft forms a dense network (37,936 edges across 4,039 patches), while Yuexiu has only 42 edges across 114 patches, split into 83 isolated components",
        "Over 30% of Yuexiu's patches exceed 1 ha, against less than 10% in Delft: a few large, isolated parks versus many small, close-knit patches",
      ],
      analysisVisuals: [
        {
          src: "/projects/urban-green-space/access-per-capita.jpg",
          caption: "Green space per capita by administrative unit (pseudo-log scale).",
        },
        {
          src: "/projects/urban-green-space/lorenz-gini.jpg",
          caption: "Lorenz curves of green space per capita: Delft (Gini 0.598) vs Yuexiu (Gini 0.742).",
        },
        {
          src: "/projects/urban-green-space/connectivity-maps.jpg",
          caption: "Green patch network at a 150 m dispersal threshold.",
        },
        {
          src: "/projects/urban-green-space/fragmentation-metrics.jpg",
          caption: "Landscape fragmentation metrics: patch count, mean patch size, nearest-neighbour distance and share of patches over 1 ha.",
        },
      ],

      results: [
        "Delft performs better on every dimension: higher accessibility, more consistent vegetation, lower inequality and a denser green network",
        "Both cities' historic cores score highest in the MCDA, with Delft's Binnenstad the strongest priority in the dataset (0.95) and Kuangquan leading in Yuexiu (0.83)",
        "Connectivity is the most urgent criterion in both cities (mean urgency ≈ 0.81–0.82)",
        "Yuexiu needs far more corridor interventions, such as stepping stones, green roofs and street trees, to link its isolated parks, while Delft can reinforce an already connected network with small interventions",
        "The pipeline relies on open, global datasets and can be transferred to other cities by editing a single config file",
      ],
      resultVisuals: [
        {
          src: "/projects/urban-green-space/mcda-maps.jpg",
          caption: "MCDA composite urgency score per subdistrict/wijk. Darker red indicates higher priority for intervention.",
        },
        {
          src: "/projects/urban-green-space/mcda-radar.jpg",
          caption: "City-mean MCDA sub-scores. Connectivity carries the highest relative urgency in both cities.",
        },
        {
          src: "/projects/urban-green-space/nbs-corridors.jpg",
          caption: "Proposed green corridors linking isolated patches, overlaid on high-priority areas.",
        },
      ],

      discussion: [
        "OSM completeness is lower in Chinese cities than in Western Europe, which can bias typology and connectivity metrics for Yuexiu",
        "The socio-economic proxies differ (CBS income vs VIIRS night-light), so equity correlations are exploratory rather than directly comparable",
        "GBIF density reflects recording effort as much as biodiversity, and WorldPop placeholder values had to be filtered (pop ≥ 100) to avoid spurious priorities",
        "MCDA weights were set a priori and priority tiers are relative rankings, so the next steps are sensitivity analysis, network-based walking access and validation with residents",
      ],
    },
    {
      name: "Interactive Transit Accessibility Map of Delhi",
      slug: "transit-delhi",
      type: "web",
      description:
        "Interactive web map of Delhi's public transit network — bus stops, metro lines, and stations visualised with toggleable layers and stop-level popups.",
      link: "https://github.com/damandogra/transit_delhi",
      linkLabel: "Source code",
      demo: "https://damandogra.github.io/transit_delhi/",
      demoLabel: "Open live map",
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


      gallery: [
        {
          src: "/projects/transit-delhi/methodology.png",
          caption: "Pipeline for integrating OSM and GTFS data into the interactive map."
        },
        {
          src: "/projects/transit-delhi/data-layers.png",
          caption: "Layer structure showing bus stops, metro lines, and stations."
        },
        {
          src: "/projects/transit-delhi/popup-detail.png",
          caption: "Interactive popup showing stop-level attributes and clustering behavior."
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
      linkLabel: "Read the paper",

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
      company: "TNO – Geological Survey of the Netherlands (GDN), Utrecht",
      link: "https://www.tno.nl/en/",
      title: "Intern, 3D Geospatial Visualisation",
      dateRange: "Sep 2026 - Present",
      bullets: [
        "Streaming national subsurface models (GeoTOP, REGIS II, DGM) on the web with OGC 3D Tiles.",
        "Adding 3D Tiles 1.1 voxel tiles to a Java/Quarkus backend, with a CesiumJS viewer.",
        "Implemented sub-millimetre RD/NAP → WGS84 transforms (RDNAPTRANS™2018) and automated tileset validation.",
      ],
    },
    {
      company: "EEFIT – Earthquake Engineering Field Investigation Team",
      link: "https://www.linkedin.com/company/the-earthquake-engineering-field-investigation-team-eefit/",
      title: "Working Student",
      dateRange: "Aug 2026 - Present",
      bullets: [
        "Working on the CHASE-funded Hatay (Türkiye) earthquake project.",
        "Ran InSAR coherence analysis in SARPROZ to flag potentially damaged sites for the field survey team.",
      ],
    },
    {
      company: "Rbanism",
      link: "https://rbanism.org/",
      title: "Student Assistant",
      dateRange: "Oct 2026 - Present",
      bullets: [
        "Supporting workshops, events and open resources on reproducible urban data analysis in R.",
      ],
    },
    {
      company: "Indian Institute of Technology Roorkee, India",
      link: "https://www.iitr.ac.in/",
      title: "Project Associate",
      dateRange: "Apr 2023 - Jul 2025",
      bullets: [
        "Deployed an Arches heritage data system using CIDOC-CRM ontologies.",
        "Built photogrammetry and LiDAR workflows for 3D heritage documentation.",
        "Researched FAIR data interoperability and co-wrote funding proposals."
      ],
    },
    {
      company: "National Programme on Technology Enhanced Learning",
      link: "https://nptel.ac.in/",
      title: "Teaching Assistant",
      dateRange: "Aug 2023 - Sep 2023",
      bullets: [],
    },
    {
      company: "PLADECO Consultants, India",
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
      school: "Delft University of Technology",
      link: "https://www.tudelft.nl/onderwijs/opleidingen/masters/gm/msc-geomatics",
      degree: "Master of Science in Geomatics",
      dateRange: "2025 - 2027",
      achievements: [
        "Coursework and labs on 3D reconstruction, point cloud classification, geo-web development and spatial database management."
      ],
    },
    {
      school: "School of Planning and Architecture, India",
      link: "https://spabhopal.ac.in/Home.aspx",
      degree: "Bachelor of Urban Planning",
      dateRange: "2018 - 2022",
      achievements: [
        "Received a €600 research grant for my thesis on Water Transit-Oriented Development (WaTOD), later published in a peer-reviewed journal.",
        "Elected representative of the National Organisation of Students of Planning (NOSPlan)."
      ],
    }
  ],
};