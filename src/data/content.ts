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
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    alt: "Roofing project",
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
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200",
    alt: "Pool and backyard",
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
];

export type Location = {
  slug: string;
  name: string;
  desc: string;
  intro: string;
};

export const locations: Location[] = [
  { slug: "san-diego-county", name: "San Diego County", desc: "Full county service area overview", intro: "Prime Projects serves homeowners throughout San Diego County with a focus on premium residential remodeling and additions." },
  { slug: "oceanside", name: "Oceanside", desc: "North County coastal projects", intro: "Coastal and inland Oceanside homes benefit from durable material choices and thoughtful coastal-aware planning." },
  { slug: "carlsbad", name: "Carlsbad", desc: "Premium remodeling in Carlsbad", intro: "Carlsbad homeowners look for premium kitchens, baths, ADUs, and outdoor living projects with refined execution." },
  { slug: "encinitas", name: "Encinitas", desc: "Coastal and inland home upgrades", intro: "Encinitas projects blend coastal character with modern, livable interiors and well-planned outdoor spaces." },
  { slug: "san-marcos", name: "San Marcos", desc: "Growing community project support", intro: "Growing San Marcos neighborhoods present strong opportunities for kitchen, bath, and ADU upgrades." },
  { slug: "vista", name: "Vista", desc: "Residential improvement services", intro: "Vista homes are well suited to whole-home upgrades, additions, and outdoor living transformations." },
  { slug: "del-mar", name: "Del Mar", desc: "Luxury coastal home projects", intro: "Luxury Del Mar properties demand refined materials, careful coordination, and discreet execution." },
  { slug: "rancho-santa-fe", name: "Rancho Santa Fe", desc: "Estate and premium property work", intro: "Estate-level Rancho Santa Fe projects benefit from senior project oversight and high-end trade partners." },
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
