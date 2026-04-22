export type Service = {
  slug: string;
  title: string;
  img: string;
  alt: string;
  body: string;
  intro: string;
  highlights: string[];
  scope: string[];
};

export const services: Service[] = [
  {
    slug: "adu",
    title: "ADUs",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200",
    alt: "ADU cottage exterior",
    body: "Add flexible living space with a smarter planning process for detached ADUs, attached units, conversions, and early feasibility guidance.",
    intro:
      "Accessory Dwelling Units add long-term flexibility and value to a property. We help homeowners evaluate site feasibility, layout direction, and realistic project scope before construction begins.",
    highlights: [
      "Detached ADUs from 400 to 1,200 sq ft",
      "Garage and basement conversions",
      "Attached additions with separate entry",
      "Pre-design feasibility and zoning review",
    ],
    scope: [
      "Site evaluation and feasibility review",
      "Concept layout and exterior direction",
      "Permit-ready documentation coordination",
      "Construction execution with quality oversight",
    ],
  },
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodels",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
    alt: "Kitchen remodel",
    body: "Create a kitchen that functions better, feels more refined, and fits the way your household actually lives.",
    intro:
      "A kitchen remodel should improve daily flow, storage, and finish quality together. We coordinate the layout, cabinetry, surfaces, and lighting to deliver a kitchen that performs as well as it looks.",
    highlights: [
      "Layout improvements and island planning",
      "Custom and semi-custom cabinetry",
      "Quartz, stone, and engineered surfaces",
      "Lighting, electrical, and ventilation upgrades",
    ],
    scope: [
      "Design direction and material selection",
      "Demolition and structural adjustments",
      "Cabinetry, countertops, and appliances",
      "Final detailing, paint, and walkthrough",
    ],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodels",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200",
    alt: "Bathroom remodel",
    body: "Upgrade comfort, layout, finishes, and long-term value with a more thoughtful bathroom remodel plan.",
    intro:
      "From primary suites to secondary baths, our bathroom remodels focus on layout, materials, and long-term durability with finishes that elevate the everyday.",
    highlights: [
      "Primary suite reconfigurations",
      "Walk-in showers and freestanding tubs",
      "Tile, stone, and custom vanity work",
      "Plumbing, ventilation, and lighting",
    ],
    scope: [
      "Design and finish coordination",
      "Plumbing and electrical updates",
      "Tile, stone, and fixture installation",
      "Final detailing and quality review",
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    img: "https://images.unsplash.com/photo-1632759145355-8b8f3ab6c1f3?w=1600&q=80",
    alt: "Roofer installing shingles on a residential rooftop",
    body: "Protect the home with roofing guidance centered on condition, options, scope clarity, and quality workmanship.",
    intro:
      "Roofing decisions need clear information. We assess existing condition, review material and system options, and coordinate replacement or repair scopes that hold up over time.",
    highlights: [
      "Full roof replacement",
      "Tile, shingle, and flat roof systems",
      "Fascia, gutter, and trim coordination",
      "Storm and wear assessments",
    ],
    scope: [
      "Roof condition assessment",
      "Material and system recommendations",
      "Tear-off and replacement execution",
      "Cleanup, inspection, and warranty",
    ],
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
    alt: "Outdoor living patio",
    body: "Transform underused exterior space into a more functional, attractive extension of the home.",
    intro:
      "Outdoor living projects extend the usable footprint of the home. We plan covered patios, outdoor kitchens, and hardscape with the same care as interior remodels.",
    highlights: [
      "Covered patios and pergolas",
      "Outdoor kitchens and built-in BBQs",
      "Hardscape, pavers, and stonework",
      "Lighting and shade systems",
    ],
    scope: [
      "Site planning and concept direction",
      "Hardscape and structural execution",
      "Outdoor kitchen and utility work",
      "Lighting, finishes, and final touches",
    ],
  },
  {
    slug: "pool-backyard-projects",
    title: "Pool & Backyard Projects",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80",
    alt: "Residential backyard with swimming pool and patio",
    body: "Bring together hardscape, pool updates, landscape features, and layout improvements with a coordinated backyard vision.",
    intro:
      "Backyards work best when the pool, hardscape, landscape, and outdoor structures are planned together. We coordinate the full vision so the result feels intentional.",
    highlights: [
      "Pool remodels and resurfacing",
      "Decking, coping, and tile work",
      "Landscape and planting integration",
      "Backyard layout and flow planning",
    ],
    scope: [
      "Backyard concept and layout",
      "Pool, hardscape, and structure work",
      "Landscape and lighting integration",
      "Final coordination and walkthrough",
    ],
  },
  {
    slug: "home-audio",
    title: "Home Audio",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&q=80",
    alt: "Modern home audio system in living room",
    body: "Whole-home audio, media rooms, and integrated sound systems planned for clarity, coverage, and clean installation.",
    intro:
      "Home audio works best when speakers, wiring, and controls are planned alongside the room. We coordinate clean installs that look and sound intentional.",
    highlights: [
      "Whole-home distributed audio",
      "Media rooms and theater setups",
      "In-ceiling and in-wall speakers",
      "Smart controls and zone management",
    ],
    scope: [
      "System design and zone planning",
      "Pre-wire and rough-in coordination",
      "Speaker, amp, and control install",
      "Tuning, calibration, and walkthrough",
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80",
    alt: "Modern residential landscaping",
    body: "Front and back yard landscape design, planting, irrigation, and hardscape integration for lasting curb appeal.",
    intro:
      "Landscape projects are most successful when planting, hardscape, lighting, and irrigation are coordinated up front. We plan yards that hold up year-round.",
    highlights: [
      "Front and back yard redesigns",
      "Drought-tolerant planting plans",
      "Irrigation and drainage updates",
      "Hardscape and lighting integration",
    ],
    scope: [
      "Site review and concept direction",
      "Planting, irrigation, and grading",
      "Hardscape and lighting installation",
      "Walkthrough and care guidance",
    ],
  },
  {
    slug: "general-contractor",
    title: "General Contractor",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    alt: "General contractor on residential job site",
    body: "Whole-home renovations, additions, and multi-trade projects coordinated under a single point of accountability.",
    intro:
      "As your general contractor, we coordinate trades, schedule, and quality so larger renovations and additions move forward without the usual friction.",
    highlights: [
      "Whole-home renovations",
      "Room additions and reconfigurations",
      "Multi-trade project coordination",
      "Schedule, budget, and quality oversight",
    ],
    scope: [
      "Pre-construction planning",
      "Trade coordination and scheduling",
      "On-site quality oversight",
      "Final walkthrough and punch list",
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    img: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1600&q=80",
    alt: "Wide plank flooring in a modern home",
    body: "Hardwood, LVP, tile, and stone flooring installed with proper subfloor prep and clean transitions.",
    intro: "Flooring done right starts with the substrate, not the showroom.",
    highlights: ["Hardwood and engineered wood", "Luxury vinyl plank (LVP)", "Tile and natural stone", "Transitions and trim"],
    scope: ["Substrate evaluation", "Material acclimation", "Install and transitions", "Trim and walkthrough"],
  },
  {
    slug: "painting",
    title: "Painting (Interior & Exterior)",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80",
    alt: "Painter rolling paint on an interior wall",
    body: "Interior and exterior painting where prep is treated as the real job — not a step to skip.",
    intro: "A great paint job is mostly prep. We treat it that way.",
    highlights: ["Interior walls and trim", "Exterior siding and stucco", "Patching and surface prep", "Color consultation"],
    scope: ["Walkthrough and color", "Prep and protection", "Paint application", "Final walkthrough"],
  },
  {
    slug: "hvac",
    title: "HVAC & Mechanical",
    img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80",
    alt: "HVAC system in a residential mechanical space",
    body: "HVAC and mechanical work sized for the house you actually have, with honest duct evaluation up front.",
    intro: "Most HVAC problems are sizing and duct problems wearing equipment costumes.",
    highlights: ["Load calculations", "Furnace and AC replacement", "Duct repair and sealing", "Mini-split and zoning"],
    scope: ["Assessment and sizing", "Equipment order", "Install", "Commissioning and balancing"],
  },
];

export type Location = {
  slug: string;
  name: string;
  desc: string;
  intro: string;
  img: string;
  whyLocal: string;
};

export const locations: Location[] = [
  {
    slug: "san-diego-county",
    name: "San Diego County",
    desc: "Full county service area overview",
    intro: "Prime Projects serves homeowners throughout San Diego County with a focus on premium residential remodeling and additions.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    whyLocal: "We know the permitting nuances, climate considerations, and neighborhood character across San Diego County and tailor every project accordingly.",
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    desc: "North County coastal projects",
    intro: "Coastal and inland Oceanside homes benefit from durable material choices and thoughtful coastal-aware planning.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    whyLocal: "Oceanside's coastal exposure calls for materials and detailing that resist salt air and sun. We plan projects with that longevity in mind.",
  },
  {
    slug: "carlsbad",
    name: "Carlsbad",
    desc: "Premium remodeling in Carlsbad",
    intro: "Carlsbad homeowners look for premium kitchens, baths, ADUs, and outdoor living projects with refined execution.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    whyLocal: "Carlsbad properties span coastal, village, and inland neighborhoods — we adapt scope and finishes to match the home and the street.",
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    desc: "Coastal and inland home upgrades",
    intro: "Encinitas projects blend coastal character with modern, livable interiors and well-planned outdoor spaces.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    whyLocal: "Encinitas homes reward thoughtful indoor-outdoor planning. We design for natural light, breeze, and easy flow to the yard.",
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    desc: "Growing community project support",
    intro: "Growing San Marcos neighborhoods present strong opportunities for kitchen, bath, and ADU upgrades.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
    whyLocal: "San Marcos has a strong mix of newer and established homes — we tailor scope to whatever stage your home is in.",
  },
  {
    slug: "vista",
    name: "Vista",
    desc: "Residential improvement services",
    intro: "Vista homes are well suited to whole-home upgrades, additions, and outdoor living transformations.",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&q=80",
    whyLocal: "Vista's larger lots and varied terrain open up real possibilities for additions, ADUs, and outdoor living investments.",
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    desc: "Luxury coastal home projects",
    intro: "Luxury Del Mar properties demand refined materials, careful coordination, and discreet execution.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    whyLocal: "Del Mar projects deserve a quiet, organized job site and senior-level oversight from start to finish.",
  },
  {
    slug: "rancho-santa-fe",
    name: "Rancho Santa Fe",
    desc: "Estate and premium property work",
    intro: "Estate-level Rancho Santa Fe projects benefit from senior project oversight and high-end trade partners.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    whyLocal: "Rancho Santa Fe estates require discreet scheduling, senior trades, and the kind of detail-level oversight Prime Projects is built for.",
  },
];

export type Article = {
  slug: string;
  cat: string;
  title: string;
  img: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "adu-cost-san-diego-county",
    cat: "ADU Planning",
    title: "ADU planning in San Diego County",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200",
    intro: "Planning an ADU in San Diego County involves zoning, site feasibility, and realistic budgeting before design begins.",
    sections: [
      { heading: "Feasibility first", body: "Confirm lot size, setbacks, and utility access before committing to a layout direction." },
      { heading: "Realistic budgeting", body: "ADU budgets vary widely by size, finishes, and site conditions. Plan ranges, not single numbers." },
      { heading: "Timeline expectations", body: "Permit, design, and build cycles typically span several months end-to-end." },
    ],
  },
  {
    slug: "kitchen-remodel-timeline",
    cat: "Kitchen Remodel",
    title: "Kitchen remodel budgeting and scope priorities",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
    intro: "Kitchen remodels reward early decisions about scope, layout, and finish tier.",
    sections: [
      { heading: "Define scope early", body: "Decide whether the project is cosmetic, functional, or a full layout change before pricing." },
      { heading: "Prioritize finishes", body: "Cabinetry and counters drive both budget and visual impact more than most other categories." },
      { heading: "Plan for downtime", body: "Most kitchens are fully out of service for several weeks during execution." },
    ],
  },
  {
    slug: "roof-replacement-vs-repair",
    cat: "Roofing",
    title: "What to consider before replacing a roof",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    intro: "Roof decisions hinge on age, system condition, and how long you plan to stay in the home.",
    sections: [
      { heading: "Condition assessment", body: "An honest assessment compares localized repairs against full replacement." },
      { heading: "System options", body: "Tile, shingle, and flat systems each carry different lifespans and costs." },
      { heading: "Surrounding scope", body: "Fascia, gutters, and trim are often best addressed during a replacement." },
    ],
  },
  {
    slug: "outdoor-living-budget-guide",
    cat: "Outdoor Living",
    title: "Outdoor living upgrades that improve daily use",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
    intro: "The best outdoor living upgrades are the ones a household actually uses every week.",
    sections: [
      { heading: "Start with use cases", body: "Cooking, lounging, dining, and shade each call for different layout decisions." },
      { heading: "Hardscape vs. structure", body: "Patios, pergolas, and outdoor kitchens carry very different cost levels." },
      { heading: "Lighting matters", body: "Thoughtful lighting often makes the difference between a space used or ignored." },
    ],
  },
  {
    slug: "pool-backyard-planning",
    cat: "Pool & Backyard",
    title: "Pool and backyard planning for better flow and function",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200",
    intro: "Pool and backyard projects work best when planned as a single coordinated vision.",
    sections: [
      { heading: "Coordinate trades", body: "Pool, hardscape, and landscape teams should plan together, not sequentially." },
      { heading: "Flow and zones", body: "Define lounging, dining, and play zones before finalizing pool placement." },
      { heading: "Long-term maintenance", body: "Material and system choices have a major impact on annual upkeep." },
    ],
  },
];

export type Project = {
  slug: string;
  badge: string;
  location: string;
  overlay: string;
  img: string;
  intro: string;
};

export const projects: Project[] = [
  {
    slug: "encinitas-kitchen-remodel",
    badge: "Kitchen Remodel",
    location: "Encinitas, CA",
    overlay: "Coastal kitchen remodel featuring custom cabinetry, quartz countertops, and improved natural light.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400",
    intro: "A full coastal kitchen remodel focused on light, flow, and refined material selection.",
  },
  {
    slug: "carlsbad-outdoor-living",
    badge: "Outdoor Living",
    location: "Carlsbad, CA",
    overlay: "Backyard living upgrade with covered patio, built-in BBQ, and hardscape redesign.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400",
    intro: "Backyard transformation pairing a covered patio, outdoor kitchen, and updated hardscape.",
  },
  {
    slug: "oceanside-roof-replacement",
    badge: "Roofing",
    location: "Oceanside, CA",
    overlay: "Full roof replacement and exterior refresh including fascia, gutters, and trim painting.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400",
    intro: "Complete roof replacement coordinated with fascia, gutter, and trim refresh.",
  },
  {
    slug: "north-county-adu",
    badge: "ADU",
    location: "North County, CA",
    overlay: "ADU planning and feasibility project for a 600 sq ft detached unit with separate entrance.",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400",
    intro: "Detached 600 sq ft ADU with independent entry, planned from feasibility through build.",
  },
];
