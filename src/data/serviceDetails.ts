export type ServiceDetail = {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  heroImg: string;
  heroAlt: string;
  intro: string;
  body: string[]; // 3-4 paragraphs
  included: string[]; // 4-6 bullets
  mistakes: { title: string; body: string }[]; // 3
  guidance: string; // How Prime Projects guides you
  timeline: { phase: string; duration: string; detail: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodel",
    h1: "Kitchen Remodels Built Around How Your Household Actually Lives",
    metaDescription:
      "Plan a San Diego kitchen remodel with confidence. Layout, cabinetry, surfaces, lighting, and trade coordination handled with concierge-level oversight.",
    heroImg:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    heroAlt: "Modern kitchen remodel with island and warm lighting",
    intro:
      "A kitchen project touches more of daily life than any other room — and more of your budget. The best outcomes start with honest planning, not catalog shopping.",
    body: [
      "A kitchen remodel is rarely just about new cabinets and counters. It is a coordinated rework of layout, lighting, ventilation, electrical, and finish carpentry — all wrapped around how your family actually cooks, gathers, and moves through the space. Decisions made in the first two weeks usually define the next twelve.",
      "Most homeowners should expect the kitchen to be fully out of service for several weeks. There will be a temporary prep area, a stretch where appliances live in the garage, and a few moments where it feels like nothing is happening on site. None of that is a sign of a bad project — it is the rhythm of well-sequenced work.",
      "This is where a concierge approach earns its place. Instead of you negotiating cabinet lead times, fielding tile questions, and refereeing the electrician and the plumber, a single point of contact carries those conversations. You stay in the decision seat without having to live inside the project management.",
      "Before signing with anyone, ask: who exactly is on site each day, what happens if cabinetry arrives damaged, how are change orders priced, and what does the punch-list process look like? The quality of those answers tells you more than any rendering.",
    ],
    included: [
      "Layout review and island or peninsula planning",
      "Custom or semi-custom cabinetry coordination",
      "Quartz, stone, or engineered countertop selection",
      "Electrical, lighting, and ventilation upgrades",
      "Tile, backsplash, and finish carpentry",
      "Appliance specification and install coordination",
    ],
    mistakes: [
      {
        title: "Picking finishes before the layout is locked",
        body: "Tile and cabinet color choices made before the floor plan is final almost always get redone. Sequence matters.",
      },
      {
        title: "Underestimating the lighting plan",
        body: "Recessed cans alone leave shadows on every counter. A real plan layers task, ambient, and accent light.",
      },
      {
        title: "Treating appliances as an afterthought",
        body: "Appliance dimensions drive cabinetry. Specing them late causes rework, rebuilds, and avoidable costs.",
      },
    ],
    guidance:
      "We sit with you before any demo to walk through how your kitchen actually gets used — morning routines, weeknight dinners, holidays. Then we coordinate the design direction, trades, and lead times so you make selections in the right order, not under pressure.",
    timeline: [
      { phase: "Planning & design", duration: "3–5 weeks", detail: "Scope, layout direction, and finish selections." },
      { phase: "Procurement", duration: "4–10 weeks", detail: "Cabinetry, stone, and appliances ordered and staged." },
      { phase: "Construction", duration: "6–10 weeks", detail: "Demo, rough trades, install, tile, and finish work." },
      { phase: "Punch list & walkthrough", duration: "1 week", detail: "Final detailing, touch-ups, and handoff." },
    ],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    h1: "Bathroom Remodels That Hold Up Long After the Reveal Photos",
    metaDescription:
      "Bathroom remodels in San Diego County built around layout, waterproofing, and finish quality — with concierge oversight from design through walkthrough.",
    heroImg:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80",
    heroAlt: "Modern bathroom with walk-in shower and stone tile",
    intro:
      "A bathroom is one of the smallest rooms in the house and one of the most unforgiving to remodel. Every surface is wet, every joint matters, and every shortcut shows up later.",
    body: [
      "A good bathroom remodel is mostly hidden work. Waterproofing membranes, slope of the shower pan, blocking inside the walls for grab bars and benches, ventilation routed to the outside instead of into the attic — these are the details that decide whether the room still feels new in ten years.",
      "Homeowners should expect demo to expose surprises. Older subfloors, undersized drains, and previous repairs that were never quite right are common. A real remodel plan accounts for that with a clear allowance for unforeseen conditions, not a panicked phone call halfway through.",
      "A concierge matters here because bathrooms involve more trades per square foot than almost any other room. Plumber, tile setter, electrician, glass installer, painter, and finish carpenter all need to land on the same days in the right order. Coordinating that is a job — and it shouldn't be yours.",
      "When interviewing contractors, ask how they waterproof shower walls, who installs the glass, whether the vent fan exhausts to the exterior, and how they protect the rest of the home from dust during demo. Vague answers are a real signal.",
    ],
    included: [
      "Layout review for shower, tub, and vanity placement",
      "Waterproofing systems and shower pan construction",
      "Custom or pre-fabricated vanity coordination",
      "Tile, stone, and grout selection and install",
      "Plumbing, ventilation, and lighting upgrades",
      "Glass enclosure design and final detailing",
    ],
    mistakes: [
      {
        title: "Skipping proper waterproofing",
        body: "Cement board alone is not waterproof. A real membrane system is the difference between a 20-year shower and a 5-year leak.",
      },
      {
        title: "Buying fixtures before the layout is set",
        body: "Drain locations, valve depths, and supply lines all depend on the final fixture. Out-of-order purchases cause expensive returns.",
      },
      {
        title: "Forgetting ventilation",
        body: "An underspec'd or improperly vented fan turns a beautiful new bathroom into a mold problem within a few seasons.",
      },
    ],
    guidance:
      "We start with how the bathroom needs to function for your household, then design the layout around that. Selections happen in the right sequence, waterproofing is documented, and trades are scheduled so the work flows without standing time.",
    timeline: [
      { phase: "Design & selections", duration: "2–4 weeks", detail: "Layout, fixtures, tile, and finishes locked in." },
      { phase: "Procurement", duration: "3–6 weeks", detail: "Vanity, tile, fixtures, and glass ordered." },
      { phase: "Construction", duration: "4–7 weeks", detail: "Demo, rough plumbing and electrical, waterproofing, tile, and install." },
      { phase: "Walkthrough", duration: "1 week", detail: "Glass install, punch list, and final review." },
    ],
  },
  {
    slug: "home-audio",
    title: "Home Audio & Smart Home",
    h1: "Home Audio and Smart Home Systems That Quietly Disappear Into the Architecture",
    metaDescription:
      "Whole-home audio, media rooms, and smart home integration planned and installed with clean wiring, intuitive controls, and concierge coordination.",
    heroImg:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1600&q=80",
    heroAlt: "Modern home theater with integrated audio and smart controls",
    intro:
      "The best home audio and smart home systems are the ones you almost forget are there. No tangle of remotes, no ceiling speakers staring at you, no app that needs a tutorial.",
    body: [
      "A home audio system is fundamentally a design problem before it is a tech problem. Speaker placement, room acoustics, wire pathways, and how controls integrate with lighting and shades all need to be planned before drywall closes up. Done right, the result feels native to the home.",
      "Homeowners should expect a real discovery conversation up front. Where do you actually listen to music? Do you want one source playing everywhere, or zones? Will the TV room double as a real theater, or is it a casual lounge? These answers shape everything downstream.",
      "A concierge matters most in the seams between trades. Audio sits between the electrician, the framer, the drywaller, and the painter. Without someone owning the schedule, speakers get installed too early, paint flecks land in tweeters, and HDMI runs end up two inches short of the equipment rack.",
      "Ask any installer how they document the system, what happens when a piece of gear fails in three years, whether the control system is open or proprietary, and how they hand off the system so anyone in the family can actually use it.",
    ],
    included: [
      "Whole-home distributed audio design",
      "Media rooms and dedicated theater setups",
      "In-ceiling, in-wall, and architectural speakers",
      "Smart lighting, shade, and climate integration",
      "Centralized rack design with clean cable management",
      "User training and documented system handoff",
    ],
    mistakes: [
      {
        title: "Buying gear before designing the system",
        body: "A pile of premium components in the wrong rooms performs worse than modest gear placed correctly.",
      },
      {
        title: "Underestimating wire pathways",
        body: "Retro-fitting wires through finished walls costs many times what a 30-minute pre-wire conversation would have.",
      },
      {
        title: "Choosing closed ecosystems without thinking long-term",
        body: "Some platforms lock you in and end support. The cost shows up the next time you remodel a room.",
      },
    ],
    guidance:
      "We map the system to how you actually live — not to a feature list. Pre-wire happens at the right framing stage, racks live somewhere ventilated and accessible, and the family gets a five-minute walkthrough that actually sticks.",
    timeline: [
      { phase: "Discovery & design", duration: "2–3 weeks", detail: "Use cases, room-by-room plan, and gear spec." },
      { phase: "Pre-wire", duration: "1 week", detail: "Cable runs and back-boxes coordinated with framing." },
      { phase: "Install & integration", duration: "2–4 weeks", detail: "Speakers, racks, controls, and programming." },
      { phase: "Tuning & handoff", duration: "1 week", detail: "Calibration, automation polish, and family training." },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping & Outdoor",
    h1: "Landscaping and Outdoor Spaces Planned for the Way San Diego Actually Lives Outdoors",
    metaDescription:
      "Front and back yard landscaping in San Diego County — planting plans, hardscape, irrigation, lighting, and outdoor living, coordinated as one project.",
    heroImg:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80",
    heroAlt: "Modern San Diego landscaping with patio and drought-tolerant planting",
    intro:
      "A yard is one of the few projects where the result keeps changing for years. Plants grow, light shifts, and the design either matures into something better — or fights you the whole time.",
    body: [
      "Landscaping in Southern California has its own logic. Sun exposure, slope, drainage, water restrictions, and soil type all push or pull what will actually thrive. A plan that ignores those forces ends up replanted within two seasons.",
      "Homeowners should expect a real site walk before any plant is named. Where does water pool after a rain? Where is the afternoon sun brutal? Where do the kids and the dog actually move? Those patterns are more important than any inspiration photo.",
      "Concierge oversight matters because a yard is rarely one trade. Landscape design, hardscape masonry, irrigation, low-voltage lighting, and sometimes drainage or grading all have to land in sequence. Without that coordination, the patio gets poured before the irrigation lines, and someone is jackhammering a week later.",
      "Ask any landscaper how they handle drainage, who installs the irrigation controller, what their plant warranty actually covers, and how the maintenance plan reads in year one versus year three. Maturity matters.",
    ],
    included: [
      "Front and back yard concept design",
      "Drought-tolerant and climate-appropriate planting",
      "Irrigation systems and smart controllers",
      "Hardscape — pavers, walls, and stone work",
      "Low-voltage lighting and pathway design",
      "Drainage solutions and grading where needed",
    ],
    mistakes: [
      {
        title: "Planting without a watering plan",
        body: "Beautiful new plants on a hand-watering plan rarely survive their first August. Irrigation should be designed in, not added later.",
      },
      {
        title: "Ignoring the long view",
        body: "A plant that looks balanced today can swallow a window in three years. Mature size has to drive placement.",
      },
      {
        title: "Treating lighting as decoration",
        body: "Good landscape lighting is half the experience after sunset. Skipping it means using the yard half as much.",
      },
    ],
    guidance:
      "We plan the yard the same way we plan a kitchen — sequence first, selections second. Drainage and irrigation get solved before stone is set, and the planting plan accounts for what your yard will look like in five years, not just on install day.",
    timeline: [
      { phase: "Site review & design", duration: "2–4 weeks", detail: "Walkthrough, concept plan, and plant palette." },
      { phase: "Permits & prep", duration: "1–3 weeks", detail: "Permits if needed, demo, and grading." },
      { phase: "Hardscape & systems", duration: "2–5 weeks", detail: "Patios, walls, irrigation, and lighting." },
      { phase: "Planting & detailing", duration: "1–2 weeks", detail: "Plants installed, mulched, and walkthrough." },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing & Gutters",
    h1: "Roofing and Gutter Work That Honestly Tells You What the Home Needs",
    metaDescription:
      "Roof replacement and gutter coordination in San Diego County — honest assessments, system options, and clean execution with concierge oversight.",
    heroImg:
      "https://images.unsplash.com/photo-1564182999932-bc192d89ab22?w=1600&q=80",
    heroAlt: "Roofer actively working on a residential rooftop",
    intro:
      "Roofing is the one project where 'looks fine from the ground' costs the most over time. The right call usually comes down to honest condition information, not aggressive sales pressure.",
    body: [
      "A roof is a system, not a single material. Underlayment, flashing at penetrations, valleys, drip edge, and ventilation all matter at least as much as the visible surface. Two roofs with the same shingle can have wildly different lifespans because of what is happening underneath.",
      "Homeowners should expect a real assessment before a recommendation. That includes time in the attic, photos of flashings, and an honest opinion about whether targeted repair is enough or full replacement is the smarter long-term move.",
      "Concierge oversight matters because roofing touches many adjacent surfaces. Fascia, gutters, solar attachments, satellite mounts, skylights, and exterior paint are all in play during a tear-off. Coordinating those at the same time saves real money and avoids re-disturbing finished work.",
      "Ask any roofer to walk you through the underlayment and flashing system, what the manufacturer warranty actually covers, how they protect landscaping during tear-off, and what the cleanup process looks like.",
    ],
    included: [
      "Honest condition assessments and reports",
      "Full roof replacement — tile, shingle, or flat",
      "Underlayment, flashing, and ventilation upgrades",
      "Gutter, fascia, and trim coordination",
      "Skylight and penetration detailing",
      "Site protection and full cleanup",
    ],
    mistakes: [
      {
        title: "Replacing the surface and ignoring the system",
        body: "New shingles over old flashings and bad ventilation buy a few years, not a generation. The system has to be addressed together.",
      },
      {
        title: "Skipping the gutter coordination",
        body: "New roof, old gutters is the most common avoidable callback. Plan them together.",
      },
      {
        title: "Choosing on price alone",
        body: "Roofing is one of the easiest categories to underbid by skipping hidden work. Compare scope, not just numbers.",
      },
    ],
    guidance:
      "We start in the attic and on the roof, with photos, before recommending anything. If repair is honestly enough, that is the recommendation. If replacement is smarter, the scope includes the system — not just the surface.",
    timeline: [
      { phase: "Assessment & quote", duration: "1 week", detail: "Inspection, photos, and clear scope." },
      { phase: "Material order", duration: "1–3 weeks", detail: "Tile or shingle, underlayment, and flashings staged." },
      { phase: "Tear-off & install", duration: "3–7 days", detail: "Removal, dry-in, system install, and cleanup." },
      { phase: "Final inspection", duration: "1–2 days", detail: "Walkthrough, warranty paperwork, and handoff." },
    ],
  },
  {
    slug: "general-contractor",
    title: "General Contractor Projects",
    h1: "General Contracting With a Single Point of Accountability From Start to Finish",
    metaDescription:
      "General contractor services in San Diego County — multi-trade renovations, additions, and whole-home projects with concierge coordination.",
    heroImg:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    heroAlt: "Residential general contracting project in progress",
    intro:
      "A good general contractor is mostly invisible to the homeowner. Trades show up on time, decisions get teed up before they are urgent, and surprises are flagged early instead of explained late.",
    body: [
      "Larger residential projects are really exercises in sequencing. Framing depends on engineering, electrical depends on framing, drywall depends on inspections, and finishes depend on a clean substrate. The job of a general contractor is to make all of that flow without you having to track it.",
      "Homeowners should expect a real pre-construction phase before any tools come out. Drawings reviewed, scope walked line by line, allowances clarified, and a construction schedule that names actual weeks — not vague phases.",
      "A concierge approach matters here more than anywhere else. On bigger projects, the volume of small decisions multiplies. Without one person carrying the context, you start getting asked the same question by three trades on three different days.",
      "Before hiring, ask who will be on site daily, how change orders are priced, how the schedule is communicated, and what the punch-list process looks like. Vague process answers usually translate to vague projects.",
    ],
    included: [
      "Whole-home renovations and reconfigurations",
      "Room additions and second-story work",
      "Multi-trade scheduling and quality oversight",
      "Permit coordination and inspection management",
      "Pre-construction planning and clear scopes",
      "Punch-list and warranty follow-through",
    ],
    mistakes: [
      {
        title: "Skipping pre-construction",
        body: "Jumping into demo before the drawings, scope, and schedule are tight is the single biggest source of cost overruns.",
      },
      {
        title: "Treating the schedule as decoration",
        body: "A schedule that lives in a folder, not in daily decisions, is not a schedule. Active management matters.",
      },
      {
        title: "Letting allowances stay vague",
        body: "Soft allowances on tile, lighting, and plumbing are where contracts quietly grow into much bigger numbers.",
      },
    ],
    guidance:
      "We treat pre-construction as a real phase, not a formality. Scope is documented, allowances are realistic, the schedule is owned by a single person on our team, and you get a clear weekly update — not a wall of text.",
    timeline: [
      { phase: "Pre-construction", duration: "3–6 weeks", detail: "Scope, allowances, schedule, and permits prepped." },
      { phase: "Rough construction", duration: "4–12 weeks", detail: "Demo, framing, mechanical, electrical, plumbing." },
      { phase: "Finishes", duration: "4–10 weeks", detail: "Drywall, paint, tile, cabinetry, trim, fixtures." },
      { phase: "Punch & closeout", duration: "1–2 weeks", detail: "Final walkthrough, touch-ups, and handoff." },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    h1: "Flooring That's Specified Around Your Floor — Not the Showroom",
    metaDescription:
      "Hardwood, LVP, tile, and stone flooring in San Diego County — installed with proper subfloor prep, acclimation, and clean transitions.",
    heroImg:
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1600&q=80",
    heroAlt: "Wide plank wood flooring in a modern home",
    intro:
      "Flooring problems almost never start with the flooring. They start with what's underneath it, how it was acclimated, and how the transitions and edges were detailed.",
    body: [
      "Real wood, engineered wood, luxury vinyl plank, tile, and stone all behave differently. Each has a specific subfloor expectation, moisture tolerance, and movement profile. The right choice depends on the slab, the climate inside the home, and how the room actually gets used.",
      "Homeowners should expect time to be spent on prep. Leveling a slab, addressing moisture, removing old adhesive, and acclimating material in the home for several days are not optional steps — they are the difference between a floor that lasts and a floor that gaps, cups, or pops within a year.",
      "A concierge approach matters because flooring touches every other room decision. Cabinet height, door clearance, baseboard reveal, transitions to tile or stone — all of it has to be coordinated so the floor reads as one continuous, intentional choice instead of a patchwork.",
      "Ask any installer how they prep the substrate, how long the material acclimates on site, what the warranty covers, and how transitions to other materials are detailed. Those answers tell you who is doing real work.",
    ],
    included: [
      "Subfloor evaluation and moisture testing",
      "Hardwood and engineered wood install",
      "Luxury vinyl plank (LVP) install",
      "Tile and natural stone flooring",
      "Transitions, baseboards, and trim integration",
      "Old flooring removal and disposal",
    ],
    mistakes: [
      {
        title: "Installing over an unprepped slab",
        body: "Skipping leveling and moisture testing is the fastest way to ruin a floor that should have lasted decades.",
      },
      {
        title: "Skipping acclimation",
        body: "Wood and engineered planks need time on site before install. Without it, expansion and gapping are nearly guaranteed.",
      },
      {
        title: "Underplanning transitions",
        body: "Where wood meets tile, where rooms meet hallways — these reveals are where good floors look great or look amateur.",
      },
    ],
    guidance:
      "We start with the substrate and the way the rooms connect. Material gets specified around real conditions, not just a sample in a showroom, and transitions are designed up front instead of improvised on install day.",
    timeline: [
      { phase: "Selection & measure", duration: "1–2 weeks", detail: "Site visit, substrate review, and material spec." },
      { phase: "Order & acclimation", duration: "2–4 weeks", detail: "Material ordered, delivered, and acclimated on site." },
      { phase: "Prep & install", duration: "1–3 weeks", detail: "Demo, prep, install, and transitions." },
      { phase: "Trim & walkthrough", duration: "2–4 days", detail: "Baseboards, finish, and final review." },
    ],
  },
  {
    slug: "painting",
    title: "Painting (Interior & Exterior)",
    h1: "Interior and Exterior Painting Where Prep Is Treated as the Real Job",
    metaDescription:
      "Interior and exterior painting in San Diego County — proper prep, color planning, and clean execution with concierge-level coordination.",
    heroImg:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80",
    heroAlt: "Painter rolling fresh paint on an interior wall",
    intro:
      "A great paint job is 80% prep and 20% paint. The reverse is what creates the calls a year later about peeling, flashing, and cracking that wasn't supposed to happen.",
    body: [
      "Interior and exterior painting are different disciplines. Inside, surface prep, primer compatibility, and lighting all matter. Outside, sun exposure, stucco condition, caulking, and the time of day work happens become the dominant variables. A good crew treats them as separate problems.",
      "Homeowners should expect more time spent on patching, sanding, masking, and protecting than on actual rolling. That is not slow work — that is the work. When a crew is finished painting in a day on a job that needed two, the prep is what got cut.",
      "A concierge approach matters because color decisions are unforgiving. Light shifts the read of a color from morning to afternoon, surface texture changes the depth, and trim color choices affect how rooms feel for years. Walking samples on real walls, in real light, before final commitment is non-negotiable.",
      "Ask any painter what their prep process actually includes, what brand and product line they use, how they protect floors and furniture, and how they handle touch-ups after the project is done.",
    ],
    included: [
      "Interior wall, ceiling, and trim painting",
      "Exterior siding, stucco, and trim painting",
      "Drywall patching and surface repair",
      "Caulking, sealing, and weather prep",
      "Color consultation and sample walks",
      "Furniture protection and full cleanup",
    ],
    mistakes: [
      {
        title: "Rushing prep to start sooner",
        body: "Skipping sanding, patching, or proper masking is the most common reason a 'fresh' paint job looks tired in a year.",
      },
      {
        title: "Picking color from a chip",
        body: "Small chips lie. Real samples on real walls, viewed in morning and evening light, are the only reliable test.",
      },
      {
        title: "Ignoring exterior timing",
        body: "Painting stucco in the wrong temperature window or after recent rain causes adhesion failures that show up months later.",
      },
    ],
    guidance:
      "We scope prep honestly, walk samples on real walls before color is locked, and protect the home as carefully as we paint it. Touch-up paint and color records are left labeled with the homeowner — not stuffed in a garage.",
    timeline: [
      { phase: "Walkthrough & color", duration: "1–2 weeks", detail: "Scope, color consultation, and sample walks." },
      { phase: "Prep", duration: "1–4 days", detail: "Patching, sanding, caulking, and protection." },
      { phase: "Paint", duration: "2–7 days", detail: "Primer, coats, and trim." },
      { phase: "Final walkthrough", duration: "1 day", detail: "Touch-ups, color records, and handoff." },
    ],
  },
  {
    slug: "hvac",
    title: "HVAC & Mechanical",
    h1: "HVAC and Mechanical Work Sized for the House You Actually Have",
    metaDescription:
      "HVAC and mechanical work in San Diego County — proper sizing, duct sealing, and quiet, efficient systems coordinated with the rest of the home.",
    heroImg:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80",
    heroAlt: "HVAC system install in a residential mechanical room",
    intro:
      "Most HVAC problems are not equipment problems. They are sizing, ductwork, and installation problems wearing an equipment costume.",
    body: [
      "Heating, cooling, and ventilation are sized math problems before they are equipment choices. Square footage, insulation, window orientation, and ceiling height all feed a load calculation that decides what the home actually needs. Skipping that step is how you end up with a system that short-cycles, runs loud, or never quite cools the back bedrooms.",
      "Homeowners should expect a real conversation about ductwork. Even a perfect new unit will underperform on undersized, leaky, or poorly routed ducts. In a lot of San Diego homes, the duct system is a bigger lever than the equipment itself.",
      "A concierge approach matters because HVAC is rarely standalone. Insulation upgrades, electrical panel capacity, smart thermostats, indoor air quality, and even attic conditions all affect outcomes. Coordinating those decisions together prevents revisiting the attic three times in three years.",
      "Ask any HVAC contractor whether they perform a Manual J load calculation, how they evaluate the duct system, what the warranty actually covers, and how they handle commissioning and balancing after install.",
    ],
    included: [
      "Load calculations and proper system sizing",
      "Furnace, AC, and heat pump replacement",
      "Ductwork repair, sealing, and replacement",
      "Mini-split and zoning solutions",
      "Smart thermostats and indoor air quality",
      "Commissioning, balancing, and walkthrough",
    ],
    mistakes: [
      {
        title: "Replacing equipment without checking ducts",
        body: "A new five-ton system on undersized ducts performs worse than the unit it replaced. Always evaluate the duct system.",
      },
      {
        title: "Sizing by rule of thumb",
        body: "Rough guesses on tonnage either short-cycle or run nonstop. A real load calculation is the only honest answer.",
      },
      {
        title: "Ignoring filtration and ventilation",
        body: "Tighter homes need real ventilation strategy. Skipping it shows up as humidity, dust, and air quality problems.",
      },
    ],
    guidance:
      "We start with a load calculation, evaluate ductwork honestly, and coordinate the install with insulation and electrical so the system operates the way the equipment actually allows.",
    timeline: [
      { phase: "Assessment & sizing", duration: "1–2 weeks", detail: "Load calc, duct review, and system options." },
      { phase: "Equipment order", duration: "1–3 weeks", detail: "Equipment and ducts staged." },
      { phase: "Install", duration: "2–5 days", detail: "Removal, install, duct work, and electrical." },
      { phase: "Commissioning", duration: "1–2 days", detail: "Balancing, thermostat setup, and walkthrough." },
    ],
  },
  {
    slug: "additions-adus",
    title: "Additions & ADUs",
    h1: "Additions and ADUs Planned With Feasibility, Permits, and Reality in Mind",
    metaDescription:
      "Home additions and ADUs in San Diego County — feasibility, design coordination, permits, and full-build oversight with a concierge approach.",
    heroImg:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=80",
    heroAlt: "Detached ADU exterior in a residential neighborhood",
    intro:
      "Additions and ADUs are the projects with the most upside and the most ways to go sideways. Feasibility, permits, and design have to be sequenced before any framing happens.",
    body: [
      "An addition or ADU is a new building grafted onto an existing one. Setbacks, lot coverage, utility capacity, sewer access, soils, and HOA rules all influence what is actually buildable. The first conversation should be about feasibility, not floor plans.",
      "Homeowners should expect the timeline to lean heavier on the front end than a typical remodel. Permits in San Diego County have improved dramatically for ADUs but still need real coordination. A realistic schedule names that phase honestly instead of compressing it.",
      "A concierge approach matters because additions and ADUs touch architecture, structural engineering, civil work, utilities, the city, and sometimes the neighbors. Carrying those threads — and translating them back to you in plain language — is the actual job.",
      "Before hiring, ask how feasibility is scoped, who handles the permit process, how utility upgrades are estimated, and what the realistic schedule looks like from the day plans are submitted.",
    ],
    included: [
      "Site feasibility and zoning review",
      "Detached ADUs, attached additions, and conversions",
      "Architectural and structural coordination",
      "Permit processing and city coordination",
      "Utility capacity review and upgrades",
      "Full construction oversight through walkthrough",
    ],
    mistakes: [
      {
        title: "Designing before checking feasibility",
        body: "Beautiful plans on a lot that won't permit them is the most expensive mistake in this category. Feasibility comes first.",
      },
      {
        title: "Underestimating utilities",
        body: "Sewer capacity, electrical service, and water laterals often need upgrades that aren't obvious until late if no one looks early.",
      },
      {
        title: "Treating the permit phase as a black box",
        body: "Vague timelines on permits become real cost. A real plan names that phase and tracks it weekly.",
      },
    ],
    guidance:
      "We start with a feasibility review before drawing anything. Permits, utilities, and engineering are scoped honestly up front, and you get a single point of contact through design, permit, and construction.",
    timeline: [
      { phase: "Feasibility & design", duration: "4–10 weeks", detail: "Zoning, layout, and design direction." },
      { phase: "Permits", duration: "6–16 weeks", detail: "Submittal, plan check, and approvals." },
      { phase: "Construction", duration: "4–9 months", detail: "Site work, framing, trades, and finishes." },
      { phase: "Final & closeout", duration: "2–4 weeks", detail: "Final inspections, walkthrough, and handoff." },
    ],
  },
];

export const getServiceDetail = (slug?: string) =>
  serviceDetails.find((s) => s.slug === slug);
