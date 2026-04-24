import roofingImg from "@/assets/service-roofing.jpg";
import audioImg from "@/assets/service-audio.jpg";
import landscapingImg from "@/assets/service-landscaping.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";

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
    img: "https://images.unsplash.com/photo-1564182999932-bc192d89ab22?w=1600&q=80",
    alt: "Roofer actively working on a residential rooftop",
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
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
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
    intro:
      "Planning an ADU in San Diego County involves zoning, site feasibility, and realistic budgeting before design begins. The homeowners who avoid mid-project surprises are the ones who invest a few weeks up front to pressure-test the basics.",
    sections: [
      {
        heading: "Feasibility first",
        body: "Before sketching a layout, confirm lot size, setbacks, easements, and utility access. San Diego County jurisdictions each interpret state ADU law slightly differently, and a one-hour feasibility review can reveal hard constraints — sewer capacity, slope, fire access, or overhead lines — that would otherwise surface during permit review. The goal at this stage is to validate that an ADU is actually buildable on your specific lot, not just allowed in your zone.",
      },
      {
        heading: "Realistic budgeting",
        body: "ADU budgets vary widely by size, finishes, and site conditions. Detached new construction in San Diego County generally runs higher per square foot than the main-house renovation most homeowners use as a mental benchmark, because every system — foundation, framing, roof, HVAC, plumbing, electrical — is built from scratch on a small footprint. Plan ranges, not single numbers, and reserve a contingency for site work, utility upgrades, and impact fees that don't appear on glossy ADU brochures.",
      },
      {
        heading: "Timeline expectations",
        body: "From first conversation to certificate of occupancy, most ADU projects span eight to fourteen months. Design and engineering typically take two to three months, jurisdictional review another two to four, and construction four to six. Building seasonally — starting design in fall so construction lands in spring — often produces a smoother schedule than reacting to whichever month you happened to start.",
      },
      {
        heading: "Detached, attached, or conversion",
        body: "Detached ADUs offer the most privacy and resale flexibility but cost the most. Attached additions can share utilities and a wall with the main house, trimming cost but tightening design constraints. Garage and basement conversions are usually the fastest and least expensive path, though existing slab, ceiling height, and ventilation often dictate what's actually possible. The right choice depends on how the unit will be used over the next ten years, not just today.",
      },
      {
        heading: "How the unit will be used",
        body: "A long-term rental, a multigenerational suite, and a short-term guest unit each push the design in different directions — laundry placement, sound separation, kitchen scope, and entry sequence all change. Decide the primary use before locking the floor plan, and the finished ADU will feel purpose-built rather than generic.",
      },
    ],
  },
  {
    slug: "kitchen-remodel-timeline",
    cat: "Kitchen Remodel",
    title: "Kitchen remodel budgeting and scope priorities",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
    intro:
      "Kitchen remodels reward early decisions about scope, layout, and finish tier. The biggest budget swings almost always trace back to choices made in the first two weeks — not the last two.",
    sections: [
      {
        heading: "Define scope early",
        body: "The single most useful question to answer before pricing anything is whether the project is cosmetic, functional, or a full layout change. Cosmetic refreshes — paint, hardware, lighting, maybe counters — stay in a tight budget band. Functional updates that keep the existing footprint but replace cabinets, counters, and appliances sit in the middle. Layout changes that move walls, plumbing, or gas lines are a different category entirely, and pretending otherwise is how budgets quietly double.",
      },
      {
        heading: "Prioritize finishes",
        body: "Cabinetry and counters drive both budget and visual impact more than any other category. Spending well on cabinet construction and door style, then choosing a calmer counter, almost always reads better than the reverse. Tile, hardware, and lighting are easier to upgrade later — cabinets are not. Treat the cabinet decision as the anchor and let the rest of the palette respond to it.",
      },
      {
        heading: "Plan for downtime",
        body: "Most kitchens are fully out of service for four to eight weeks during execution, longer if there are structural changes or long-lead appliances. Set up a temporary kitchen with a microwave, toaster oven, fridge, and a clear surface — and decide in advance which meals you'll cook, which you'll outsource, and where the dishes will get washed. Households that plan the downtime as carefully as the design come out the other side much happier.",
      },
      {
        heading: "Long-lead items",
        body: "Custom cabinetry, specialty appliances, and natural stone slabs commonly carry lead times of eight to sixteen weeks. Selecting and ordering these before demolition begins is the difference between a project that flows and one that stalls with an open ceiling for a month. Build the schedule backwards from the longest lead item, not forward from the demolition date.",
      },
      {
        heading: "Where to invest, where to save",
        body: "Invest in the items you touch and look at every day — cabinet hardware, faucet, range, primary lighting. Save on items that are easy to swap later or that no one notices, like trim profiles, secondary fixtures, and pantry interiors. A disciplined invest/save list keeps the budget honest without making the kitchen feel compromised.",
      },
    ],
  },
  {
    slug: "roof-replacement-vs-repair",
    cat: "Roofing",
    title: "What to consider before replacing a roof",
    img: "https://images.unsplash.com/photo-1564182999932-bc192d89ab22?w=1200",
    intro:
      "Roof decisions hinge on age, system condition, and how long you plan to stay in the home. A clear-eyed assessment up front is worth more than any single bid.",
    sections: [
      {
        heading: "Condition assessment",
        body: "An honest assessment compares localized repairs against full replacement, not just patch-by-patch pricing. The right roofer will look at the underlayment, flashing, valleys, and ventilation — not only the surface material — and tell you which failures are isolated and which suggest the system is at the end of its useful life. If three different repair zones appear in two years, the roof is usually telling you something.",
      },
      {
        heading: "System options",
        body: "Tile, asphalt shingle, and flat membrane systems each carry different lifespans, costs, and maintenance profiles. Concrete and clay tile can last fifty years or more but weigh significantly more and demand specific underlayment and fastening detail. Architectural shingles are the most cost-effective and typically last twenty-five to thirty years. Single-ply membranes on flat sections require careful seam and edge detailing — the material is rarely the failure point, the install almost always is.",
      },
      {
        heading: "Surrounding scope",
        body: "Fascia, gutters, skylights, and trim are nearly always best addressed during a replacement. Tearing into them later means lifting roofing material and breaking warranties. If the budget allows only one pass, pull the surrounding scope into the roofing project rather than scheduling a separate visit a year later.",
      },
      {
        heading: "Timing and weather",
        body: "In Southern California, dry-season replacement (late spring through early fall) is the norm, but the best crews book months ahead. Scheduling early lets you choose the contractor rather than settling for whoever is available the week your leak appears. Emergency replacements almost always cost more and offer fewer material choices.",
      },
      {
        heading: "How long you plan to stay",
        body: "If you expect to sell within two to three years, a well-executed repair plus disclosure may serve better than a full replacement. If you're staying ten-plus years, replacement with a longer-life system and proper ventilation will out-perform a series of repairs on both cost and peace of mind. Match the roof decision to the ownership timeline, not to a generic rule of thumb.",
      },
    ],
  },
  {
    slug: "outdoor-living-budget-guide",
    cat: "Outdoor Living",
    title: "Outdoor living upgrades that improve daily use",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
    intro:
      "The best outdoor living upgrades are the ones a household actually uses every week. Start with how you want to spend evenings outside, then design backwards from there.",
    sections: [
      {
        heading: "Start with use cases",
        body: "Cooking, lounging, dining, shade, and play each call for different layout decisions. A built-in BBQ wants prep space, ventilation, and a clear traffic path. A lounge area wants sun control, soft surfaces, and a sense of enclosure. Listing the two or three activities you actually want to do — not the ten a brochure suggests — keeps the project focused and the budget proportional.",
      },
      {
        heading: "Hardscape vs. structure",
        body: "Patios, pergolas, and outdoor kitchens carry very different cost levels and permitting requirements. A new patio is usually the lowest-cost, highest-impact move. Adding a covered structure roughly doubles the investment but extends usable hours per year considerably. Outdoor kitchens with gas, water, and electrical sit in their own category and benefit from the same planning rigor as an indoor remodel.",
      },
      {
        heading: "Lighting matters",
        body: "Thoughtful lighting often makes the difference between a space used or ignored after sunset. Layered lighting — path, ambient, and task — extends usable hours and dramatically changes how the space feels. Plan conduit and low-voltage runs during hardscape work, even if some fixtures are added later. Trenching a finished patio is the kind of regret you only feel once.",
      },
      {
        heading: "Materials that age well",
        body: "Concrete, natural stone, porcelain pavers, and IPE all weather differently in coastal Southern California. Salt air, UV, and irrigation overspray are unforgiving — choose materials that look intentional as they age rather than ones that depend on a perfect first year. Sample boards left outside for thirty days are the cheapest insurance you can buy.",
      },
      {
        heading: "Phasing the project",
        body: "If the full vision is out of reach today, phase it in a way that doesn't require redoing earlier work. Set the hardscape footprint, run utilities and lighting conduit, and finish the structures and outdoor kitchen later. A clear master plan turns a multi-year build into a coherent result rather than a collage.",
      },
    ],
  },
  {
    slug: "pool-backyard-planning",
    cat: "Pool & Backyard",
    title: "Pool and backyard planning for better flow and function",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80",
    intro:
      "Pool and backyard projects work best when planned as a single coordinated vision. Treating the pool, hardscape, and landscape as one project — instead of three sequential ones — produces a backyard that feels designed rather than assembled.",
    sections: [
      {
        heading: "Coordinate trades",
        body: "Pool, hardscape, and landscape teams should plan together, not sequentially. When the pool builder, mason, and landscape designer share one site plan, equipment access, drainage, and finish elevations all line up. When they don't, you end up with a beautiful pool surrounded by patched grass and a coping line that fights the deck.",
      },
      {
        heading: "Flow and zones",
        body: "Define lounging, dining, shade, and play zones before finalizing pool placement. The pool is the gravitational center of the yard, but it shouldn't crowd out the spaces around it. A useful exercise: tape out furniture footprints on the existing yard for a weekend and live with the layout before any concrete is poured.",
      },
      {
        heading: "Long-term maintenance",
        body: "Material and system choices have a major impact on annual upkeep. Pebble vs. plaster interior, salt vs. chlorine, automated vs. manual covers, and planting palette all change how many hours per month the backyard demands. Choose with both the install cost and the next ten years of weekends in mind.",
      },
      {
        heading: "Drainage and grading",
        body: "Backyards live or die on drainage. A pool, deck, planters, and lawn each shed water differently, and grading mistakes show up as standing puddles, foundation moisture, or eroded planters within the first rainy season. Get the civil and drainage plan right before any decorative decisions are finalized.",
      },
      {
        heading: "Lighting and after-dark use",
        body: "A backyard you only use until sunset is half a backyard. Underwater pool lighting, perimeter wash lighting, path lights, and a few statement fixtures over dining and lounging zones turn the space into something used year-round. Plan the electrical and conduit during hardscape, not after the deck has cured.",
      },
    ],
  },
  {
    slug: "bathroom-remodel-planning",
    cat: "Bathroom Remodel",
    title: "Bathroom remodel planning for layout, plumbing, and finish",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200",
    intro:
      "Bathroom remodels punch above their weight on daily quality of life and resale value, but the small footprint hides a surprising amount of complexity. Plumbing, waterproofing, ventilation, and finish detailing all have to land in a room that's often under one hundred square feet.",
    sections: [
      {
        heading: "Decide the scope honestly",
        body: "A surface refresh — paint, mirror, light fixture, faucet — is a weekend-scale project. A full remodel that moves the toilet, relocates the shower, or expands the footprint is a six-to-ten-week effort that touches plumbing, electrical, framing, and tile. The middle ground — keeping the layout but replacing every finish — is where most homeowners actually land. Naming the scope out loud at the start prevents the slow creep that turns a three-week refresh into a three-month build.",
      },
      {
        heading: "Plumbing and waterproofing",
        body: "Behind the tile, the work that matters most is invisible. Proper pan slope, curb detailing, membrane selection, and niche waterproofing are the difference between a shower that lasts twenty years and one that leaks into the subfloor in five. If walls are open, this is also the moment to upgrade supply lines, add shutoffs, and re-route any drain that has caused trouble in the past.",
      },
      {
        heading: "Ventilation and moisture control",
        body: "An undersized or poorly ducted exhaust fan is the most common reason bathrooms develop mildew, peeling paint, and warped trim. Size the fan for the room volume, vent it directly outside (never into the attic), and put it on a timer or humidity sensor. Good ventilation protects every other dollar spent on finishes.",
      },
      {
        heading: "Layout and storage",
        body: "Small bathrooms reward careful millwork — a recessed medicine cabinet, a shower niche, drawers instead of doors under the vanity. Walk through the morning routine on paper before finalizing the plan: where the towel hangs, where the toothbrush charges, where wet feet land coming out of the shower. The layout that handles those moments well will feel twice as large as one that doesn't.",
      },
      {
        heading: "Finishes that hold up",
        body: "Choose tile, stone, and metals rated for wet environments and the local water profile. Matte porcelain reads softer and hides water spots better than high-gloss. Quartz vanity tops outperform marble for daily use. PVD-finished hardware resists pitting in coastal air far better than standard chrome. Spend on the items touched daily and let the secondary surfaces support them quietly.",
      },
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
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
  materials: string[];
  timeline: string;
};

export const projects: Project[] = [
  {
    slug: "encinitas-kitchen-remodel",
    badge: "Kitchen Remodel",
    location: "Encinitas, CA",
    overlay: "Coastal kitchen remodel featuring custom cabinetry, quartz countertops, and improved natural light.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400",
    intro: "A full coastal kitchen remodel focused on light, flow, and refined material selection.",
    challenge:
      "The original kitchen felt closed off from the dining area, suffered from low natural light, and used aging finishes that no longer matched how the household actually cooked and entertained. Storage was inefficient and the island created a bottleneck during weekend gatherings.",
    approach:
      "We reworked the layout to widen the opening to the dining room, repositioned the island to improve traffic flow, and coordinated cabinet, counter, and lighting selections as a single palette. Long-lead items were ordered before demolition so the schedule never stalled waiting on materials.",
    outcome:
      "A brighter, calmer kitchen that handles weekday cooking and weekend hosting equally well. The household reports noticeably better flow, more usable storage, and a finish quality that has held up cleanly through the first year of daily use.",
    highlights: [
      "Reconfigured island for better circulation",
      "Custom rift-cut white oak cabinetry",
      "Layered ambient, task, and accent lighting",
      "Upgraded ventilation and electrical service",
    ],
    materials: [
      "Quartz countertops with a soft matte finish",
      "Hand-glazed ceramic backsplash tile",
      "PVD-finished hardware rated for coastal air",
      "Engineered white oak flooring throughout",
    ],
    timeline: "10 weeks from demolition to final walkthrough",
  },
  {
    slug: "carlsbad-outdoor-living",
    badge: "Outdoor Living",
    location: "Carlsbad, CA",
    overlay: "Backyard living upgrade with covered patio, built-in BBQ, and hardscape redesign.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400",
    intro: "Backyard transformation pairing a covered patio, outdoor kitchen, and updated hardscape.",
    challenge:
      "An underused backyard with a cracked concrete slab, no shade structure, and a disconnected grill area meant the family rarely spent evenings outside. Drainage issues during winter rains were also creating standing water near the foundation.",
    approach:
      "We replaced the slab with a porcelain paver patio, added a cedar pergola sized to the dining footprint, and built a clean-lined outdoor kitchen with prep counters and ventilation. Drainage and low-voltage lighting conduit were addressed during hardscape so nothing had to be reopened later.",
    outcome:
      "A backyard that now functions as a true second living room — used multiple nights per week through three seasons. Drainage performs cleanly through winter storms and the lighting plan extends usable hours well past sunset.",
    highlights: [
      "Cedar pergola sized to dining and lounge zones",
      "Built-in BBQ with prep counter and storage",
      "Layered low-voltage lighting plan",
      "Corrected drainage and grading throughout",
    ],
    materials: [
      "Porcelain pavers with a textured matte finish",
      "Western red cedar with a clear penetrating sealer",
      "Stainless built-in grill and side burner",
      "Marine-grade fixtures and conduit",
    ],
    timeline: "8 weeks from site prep to final lighting commissioning",
  },
  {
    slug: "oceanside-roof-replacement",
    badge: "Roofing",
    location: "Oceanside, CA",
    overlay: "Full roof replacement and exterior refresh including fascia, gutters, and trim painting.",
    img: "https://images.unsplash.com/photo-1564182999932-bc192d89ab22?w=1400&q=80",
    intro: "Complete roof replacement coordinated with fascia, gutter, and trim refresh.",
    challenge:
      "A twenty-five-year-old shingle roof was showing failures across multiple zones — granule loss, lifted shingles, and worn flashing — and prior patch repairs were no longer holding. Fascia and gutters were also at the end of their useful life.",
    approach:
      "We replaced the roof system in full, upgraded underlayment and flashing detail, and pulled fascia, gutters, and exterior trim painting into the same project window so nothing had to be reopened later. The schedule was set during dry season to avoid weather risk.",
    outcome:
      "A coordinated exterior refresh that resets the home's weather envelope for the next twenty-five-plus years. Ventilation was corrected during install, which has noticeably reduced summer attic temperatures.",
    highlights: [
      "Architectural composition shingle system",
      "Upgraded underlayment and metal flashing",
      "New seamless gutters and downspouts",
      "Attic ventilation correction",
    ],
    materials: [
      "Class A architectural shingles",
      "Self-adhering high-temp underlayment",
      "Painted aluminum fascia wrap",
      "Powder-coated seamless gutters",
    ],
    timeline: "3 weeks including exterior trim painting",
  },
  {
    slug: "north-county-adu",
    badge: "ADU",
    location: "North County, CA",
    overlay: "ADU planning and feasibility project for a 600 sq ft detached unit with separate entrance.",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400",
    intro: "Detached 600 sq ft ADU with independent entry, planned from feasibility through build.",
    challenge:
      "The homeowners wanted a long-term rental unit that would also work as a guest suite for visiting family, on a lot with tight setbacks and a sloped rear yard. Early feasibility was critical to avoid designing something that wouldn't permit cleanly.",
    approach:
      "We started with a feasibility review covering setbacks, utility access, and grading before any design work. The final layout placed the ADU to preserve main-house privacy, used a stepped foundation to handle the slope, and shared a utility trench with the main house to control cost.",
    outcome:
      "A permitted, fully detached 600 sq ft ADU with a private entry, full kitchen, and dedicated outdoor space. The unit performs well as both a long-term rental and a guest suite, which was the original brief.",
    highlights: [
      "Pre-design feasibility and zoning review",
      "Stepped foundation for sloped lot",
      "Independent entry with private outdoor area",
      "Shared utility trench to control cost",
    ],
    materials: [
      "Smooth-finish stucco exterior",
      "Standing seam metal roof",
      "Mid-tier quartz counters and shaker cabinetry",
      "Mini-split HVAC sized for the footprint",
    ],
    timeline: "11 months from feasibility through certificate of occupancy",
  },
];
