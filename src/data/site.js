/* =====================================================================
   D'Flamz Nation — site data
   Single source of truth for copy, roster, profiles, form options, clients.

   SWAP POINTS (safe to edit anytime):
   - Photos: add new files to src/assets/ and map keys in src/assets/images.js.
     DJs with img:null render the branded placeholder card until a photo lands.
   - Client logos: CLIENTS[].logo is null for now → styled name card.
     Drop logo files in src/assets/logos/ and set the path to switch to a logo wall.
   - Booking budget currency: BUDGET_RANGES uses USD as an international default.
     Edit the strings if you want NGN or dual currency.
   ===================================================================== */

export const LINKS = {
  email: "dflamzentertainment@gmail.com",
  ig: "https://instagram.com/dflamzz",
  igUk: "https://instagram.com/dflamzuk",
  epkPdf: "#",       // link a downloadable EPK / press kit PDF
  soundcloud: "#",
  mixcloud: "#",
  spotify: "#",
  youtube: "#",
};

export const SOCIALS = [
  { h: "@dflamzz", url: LINKS.ig },
  { h: "@dflamzuk", url: LINKS.igUk },
];

export const MARQUEE = [
  "Spreading Music Like Wild Fire",
  "Book The Right DJ, Direct — No Middlemen",
  "Afrobeats · Amapiano · Afro House · EDM · Open Format",
  "Lagos · London · Berlin · Paris · Beyond",
  "Venues · Festivals · Brands · Private Events",
];

export const STATS = [
  { n: "12+", l: "DJs on the roster" },
  { n: "5K+", l: "Festival crowd" },
  { n: "9", l: "Radio stations" },
  { n: "3", l: "Continents played" },
];

/* ---------------------------------------------------------------------
   ROSTER — one flat, equal tier. No "head DJ", no featured billing.
   Photo-backed DJs are ordered first so the grid reads full at launch.
   --------------------------------------------------------------------- */
export const ROSTER = [
  { slug: "flammzy",    name: "DJ Flammzy",           img: "flammzy", mono: "DF", role: "Afro · House · Open Format",      tags: ["Afro", "House", "Rock", "Hip-Hop"],           profile: true },
  { slug: "tonik",      name: "Tonik",                img: "tonik",   mono: "TK", role: "Open Format · Afro · House",       tags: ["Open Format", "Afro", "House"],               profile: true },
  { slug: "shawn",      name: "DJ Shawn",             img: "shawn",   mono: "SH", role: "Afrobeats · Amapiano · House",     tags: ["Afrobeats", "Amapiano", "Deep House"],        profile: true },
  { slug: "famzy",      name: "DJ Famzy",             img: "famzy",   mono: "FZ", role: "Afrobeats",                        tags: ["Afrobeats"],                                  profile: true },
  { slug: "scandamile", name: "Scandamile Mercury",   img: "scan",    mono: "SM", role: "Amapiano · Afro",                  tags: ["Amapiano", "Afro"],                           profile: true },
  { slug: "six7even",   name: "DJ Six7even",          img: null,      mono: "S7", role: "Amapiano · Afro House · 3-Step",   tags: ["Amapiano", "Afro House", "3-Step"],           profile: true },
  { slug: "simss",      name: "Simss",                img: null,      mono: "SI", role: "Open Format · Afro House · EDM",   tags: ["Pop", "EDM", "Afro House", "Disco"],          profile: true },
  { slug: "dyslex",     name: "DysleX",               img: null,      mono: "DX", role: "Gqom · AfroTech · Slap House",     tags: ["Gqom", "3-Step", "AfroTech", "Slap House"],   profile: true },
  { slug: "maloney",    name: "DJ B. Maloney",        img: null,      mono: "BM", role: "Afrobeats · Dancehall · R&B",      tags: ["Afrobeats", "Dancehall", "Amapiano", "R&B"],  profile: true },
  { slug: "blaa",       name: "DJ Blaa",              img: null,      mono: "BL", role: "Afro House · Amapiano · EDM",      tags: ["Afrobeats", "Afro House", "Amapiano", "EDM"], profile: true },
  { slug: "maff",       name: "Deejay Maff",          img: null,      mono: "MF", role: "All Genres · Open Format",         tags: ["Open Format", "Afrobeats"],                   profile: true },
  { slug: "miky",       name: "Unstoppable DjMiky",   img: null,      mono: "MK", role: "Afrobeats · Pop · Dance",          tags: ["Afrobeats", "Pop", "Dance"],                  profile: true },
];

/* ---------------------------------------------------------------------
   PROFILES — keyed by slug. Same shape the Artist page already renders:
   { name, img, gallery, role, handle, ig, based, tags, bio, long, highlights, draft }
   draft:true marks a profile awaiting real supplied detail.
   --------------------------------------------------------------------- */
export const PROFILES = {
  flammzy: {
    name: "DJ Flammzy", img: "flammzy", gallery: ["flammzy", "flammzy2"],
    role: "DJ · Afro, House & Open Format", handle: "@deejayflammzy", ig: "https://instagram.com/deejayflammzy",
    based: "Lagos · London", tags: ["Afro", "House", "Rock", "Hip-Hop", "Open Format"],
    bio: "A London-based Nigerian selector with over a decade on the decks and a genre range most DJs never touch.",
    long: "Flammzy built his name blending Afro, House, Rock and Hip-Hop into sets that move seamlessly from a Lagos rooftop to a Soho basement. He has held a residency at VICI Lagos, headlined festival stages in front of thousands, and taken his sound across the UK on a Central London run through Soho, Greek Street and Mayfair. Booking him gets you a reader of rooms who can open intimate and close euphoric, whatever the crowd.",
    highlights: [["Residency", "VICI Lagos"], ["Festival", "BPM DJ Festival, 5,000+"], ["Tour", "Central London Sound Run"], ["Recognition", "Headies Rookie of the Year"]],
  },
  tonik: {
    name: "Tonik", img: "tonik", gallery: ["tonik"],
    role: "International DJ · Open Format", handle: null, ig: null,
    based: "Lagos · International", tags: ["Open Format", "Afro", "House", "Club"],
    bio: "An international selector who reads a floor in seconds and never lets the energy sit still.",
    long: "Tonik works across Afrobeats, house and the global club records that keep people moving, shifting between them without breaking the flow. The sets travel well, which is why the bookings do too, from private rooms to peak-time club slots. Give Tonik a crowd and a brief, and the read is quick and the delivery is clean.",
    highlights: [], draft: true,
  },
  shawn: {
    name: "DJ Shawn", img: "shawn", gallery: ["shawn"],
    role: "DJ · Afrobeats, Amapiano & House", handle: "@deejayshawn_", ig: "https://instagram.com/deejayshawn_",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Amapiano", "Deep House", "Dancehall", "Hip-Hop", "EDM"],
    bio: "A Lagos DJ who came up through radio and residencies and now runs floors from Ikoyi to Nairobi.",
    long: "DJ Shawn started on the decks in 2012 and turned pro through an internship at City FM 105, later landing residencies at Lagos spots like W Bar in Ikoyi and a slot on Rhythm 93.7 FM. He plays the city's premier nightlife rooms, from Obi's House to Lulu Beach, and has taken the brand on the road with African club tours through Nairobi and dates in the UK. Across Afrobeats, Amapiano, deep house, dancehall, Hip-Hop and EDM, he covers whatever a night demands.",
    highlights: [["Radio", "City FM 105 · Rhythm 93.7"], ["Residency", "W Bar, Ikoyi"], ["Nightlife", "Obi's House · Lulu Beach"], ["Tours", "Nairobi · UK"]],
  },
  famzy: {
    name: "DJ Famzy", img: "famzy", gallery: ["famzy"],
    role: "DJ · Afrobeats", handle: null, ig: null,
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Party", "Open Format"],
    bio: "A Lagos DJ with a clean Afrobeats sensibility and an ear for the record that turns a room.",
    long: "Famzy keeps sets tight and current, built around the Afrobeats and party records a Nigerian crowd wants to hear, with the timing to land them right. The approach is polished and dependable, the kind of DJ a venue books once and keeps on the calendar. Expect a set that respects the room and still finds its moments to peak.",
    highlights: [], draft: true,
  },
  scandamile: {
    name: "Scandamile Mercury", img: "scan", gallery: ["scan"],
    role: "DJ · Amapiano & Afro", handle: null, ig: null,
    based: "Lagos, Nigeria", tags: ["Amapiano", "Afro", "Festival"],
    bio: "Festival-tested and equally at home in a packed booth or an open field of thousands.",
    long: "Scandamile Mercury brings Amapiano and Afro heat with the presence of a DJ who has worked the big stages. The log-drum grooves and the patient build-and-release are the signature, paced for a crowd that came to dance. Main stage or late-night room, the delivery carries weight.",
    highlights: [], draft: true,
  },
  six7even: {
    name: "DJ Six7even", img: null, gallery: [],
    role: "DJ · Amapiano, Afro House & 3-Step", handle: "@djsix7even", ig: "https://instagram.com/djsix7even",
    based: "Lagos, Nigeria", tags: ["Amapiano", "Afro House", "3-Step", "Afrobeats"],
    bio: "The Lagos selector helping push Amapiano into Nigerian nightlife, calm on stage and lethal on the build.",
    long: "Six7even blends Amapiano, Afro House and 3-Step into a sound that treats the genre with real respect, studying its roots rather than chasing only the viral hits. Known for patient, intentional sets that snap a floor to attention on the drop, he has taken that sound to stages including Afro Nation, YSL South Africa, the Afrobeats Festival in Berlin and Pépèle Festival in Paris. He is one of the names carrying the Lagos Amapiano wave abroad.",
    highlights: [["Festival", "Afro Nation"], ["International", "YSL South Africa"], ["Europe", "Afrobeats Festival Berlin"], ["Europe", "Pépèle Festival Paris"]],
  },
  simss: {
    name: "Simss", img: null, gallery: [],
    role: "DJ · Open Format, Afro House & EDM", handle: "@simssbaby", ig: "https://instagram.com/simssbaby",
    based: "Lagos, Nigeria", tags: ["Pop", "EDM", "Afrotech", "Disco", "Hip-Hop"],
    bio: "One of Lagos' most exciting selectors, named a top 10 DJ in the city and the mind behind mashups with millions of views.",
    long: "Based in Lagos, Simss fuses hip-hop, pop and disco with Amapiano, Afro House, EDM and nostalgic 80s, 90s and 2000s records into sets that feel both familiar and fresh. Since 2018 she has played major parties, raves and brand events, including a Flytime Fest slot where she opened for Asake, and she has worked with African stars like Ayra Starr and Victony. WeTalkSound, TheFemmeMag and The Lagos Weekender have all covered her, the last naming her one of the top 10 DJs in Lagos. Beyond the decks she makes her own music, from a self-voiced Nu-Disco flip of Good Luck, Babe! to CTRL, her 2025 collaboration with Jamie Black and Activity Records that became a staple in the city's Afro House scene.",
    highlights: [["Festival", "Flytime Fest (opened for Asake)"], ["Worked with", "Ayra Starr · Victony"], ["Press", "Top 10 DJ in Lagos"], ["Release", "CTRL (Activity Records, 2025)"]],
  },
  dyslex: {
    name: "DysleX", img: null, gallery: [],
    role: "DJ & Producer · Electronic Dance Music", handle: "@dyslexmikhael", ig: "https://instagram.com/dyslexmikhael",
    based: "Lagos, Nigeria", tags: ["Gqom", "3-Step", "AfroTech", "Slap House"],
    bio: "A Lagos-born DJ, producer and dance-music artist making records built for the floor and sets built to detonate.",
    long: "DysleX works in Gqom, 3-Step, AfroTech and Slap House, and he produces as well as plays, with releases like London Downtown and L2D Call earning real dancefloor traction. He has performed at some of Lagos' biggest electronic events, from Activity Music Festival to House Arrest, Sunday Service and Kultur People, and his remix work includes the Afro-EDM flip of Vibemaster JD's This Year. When the brief calls for something faster and harder than standard Afrobeats, this is the booking.",
    highlights: [["Festival", "Activity Music Festival"], ["Events", "House Arrest · Sunday Service"], ["Releases", "London Downtown · L2D Call"], ["Remix", "This Year (Afro-EDM)"]],
  },
  maloney: {
    name: "DJ B. Maloney", img: null, gallery: [],
    role: "International DJ · Afrobeats & Global Blend", handle: "@djbmaloney", ig: "https://instagram.com/djbmaloney",
    based: "Lagos · London · International", tags: ["Afrobeats", "Dancehall", "Amapiano", "Hip-Hop", "R&B"],
    bio: "An international powerhouse who has warmed up stages for Wizkid, Rema, Davido and Asake, and headlined her own across four continents.",
    long: "DJ B. Maloney has spun from Lagos to London, Stockholm to Melbourne, Oslo to Accra, with sets rooted in Afrobeats culture and stretched across Dancehall, Amapiano, Hip-Hop and R&B. She has shared stages with a roll call of Afrobeats icons including Wizkid, Rema, Davido, Flavour, Asake, Ruger, Oxlade and Tiwa Savage, bringing the same high energy whether she is opening for a headliner or running her own show. Book her for a set that reads global and hits hard from the first record.",
    highlights: [["Stages", "Wizkid · Rema · Davido"], ["Also", "Asake · Tiwa Savage · Ruger"], ["Reach", "Nigeria · UK · Sweden · USA · Australia"], ["Style", "Afrobeats-rooted, global blend"]],
  },
  blaa: {
    name: "DJ Blaa", img: null, gallery: [],
    role: "DJ & Producer · Afro-Fusion", handle: "@deejayblaa", ig: "https://instagram.com/deejayblaa",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Afro House", "Amapiano", "EDM"],
    bio: "An Afro-fusion producer and DJ making rhythmic, culturally driven records for the club and beyond.",
    long: "DJ BLAA blends traditional African acoustic elements with modern club production, building tracks that celebrate the continent's resilient spirit. Across Afrobeats, Afro House, Amapiano and EDM, the sound leans on rhythm and texture rather than easy formula. As comfortable producing as playing, BLAA brings a producer's ear to every set, which shows in how the records are chosen and sequenced.",
    highlights: [["Craft", "Producer & DJ"], ["Sound", "Afro-fusion, culturally driven"]],
  },
  maff: {
    name: "World Famous Deejay Maff", img: null, gallery: [],
    role: "DJ · All Genres", handle: "@djmaf_classic", ig: "https://instagram.com/djmaf_classic",
    based: "Lagos, Nigeria", tags: ["Open Format", "Afrobeats", "All Genres"],
    bio: "An all-genre selector who reads the room and plays whatever the moment needs.",
    long: "Maff is a versatile selector who moves across genres rather than boxing himself into one lane, ready to swing a set wherever the crowd takes it. He appears on the GSS Riddim record alongside DJ Flammzy and Vibemaster JD, a link that places him in company with the wider D'Flamz circle. For a party that wants range over a single sound, Maff is built for exactly that.",
    highlights: [["Release", "GSS Riddim (with DJ Flammzy & Vibemaster JD)"]], draft: true,
  },
  miky: {
    name: "Unstoppable DjMiky", img: null, gallery: [],
    role: "DJ · Afrobeats, Pop & Dance", handle: "@unstoppabledjmiky_fanspage", ig: "https://instagram.com/unstoppabledjmiky_fanspage",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Pop", "Dance"],
    bio: "The life of the party and the reason the floor stays full.",
    long: "DjMiky plays for the room first, leaning on Afrobeats, pop and dance records with the read of a DJ who knows how to keep a crowd on its feet. The style is high-energy and unfussy, built to keep a party moving from the first record to the last. For an event that needs to feel alive start to finish, this is a safe pair of hands.",
    highlights: [], draft: true,
  },
};

/* Extended network chips — DysleX and Simss removed (now full profiles) */
export const GANG = ["DJ Shizzy", "DJ Choice", "DJ Play", "DJ Voltron", "DJ Femzey", "DJ Dayo", "DJ Nazee", "DJ Mekury"];

export const SERVICES = [
  { n: "01", t: "DJ Booking, Direct", d: "Browse the roster and book the right DJ for your event, venue or residency without the middlemen. We handle logistics, contracts and standards end-to-end." },
  { n: "02", t: "DJ Academy & Training", d: "Our academy develops the next generation, from technical mixing fundamentals to stage presence, branding and long-term career development." },
  { n: "03", t: "Event Production & Festivals", d: "We build events from concept to execution. Our BPM DJ Festival drew 5,000+ in its debut, and we know how to build a moment that lasts." },
  { n: "04", t: "Venue Residencies", d: "Ongoing partnerships with bars, lounges, restaurants and hotels, matched with the right resident to keep guests coming back." },
  { n: "05", t: "Music Promotion", d: "Amplify your sound. We plug into our radio and media network, from City 105.1 to Kiss FM Lagos and Beat FM London, to push music where it needs to be heard." },
  { n: "06", t: "Brand & Sponsorship", d: "Partner with D'Flamz Nation to reach Lagos and London entertainment audiences through festival sponsorships, branded residencies and media integration." },
];

export const PROCESS = [
  { s: "Step 01", t: "Tell Us The Brief", d: "Use the Book a DJ form to share your event, date, crowd and vibe." },
  { s: "Step 02", t: "We Match You", d: "We recommend the right DJ and package for your audience, or you pick from the roster." },
  { s: "Step 03", t: "Confirm & Lock In", d: "Approve the details, sign off, and everything from there is handled for you." },
  { s: "Step 04", t: "We Deliver", d: "Your DJ shows up, sets up, and shuts the dancefloor down. That is the standard." },
];

export const VALUES = [
  { t: "Direct Access", d: "The right DJ, booked directly, without the layers of middlemen that slow everything down and inflate the cost." },
  { t: "Building Careers", d: "We train, platform and elevate DJs, giving talent the skills, exposure and connections to last." },
  { t: "Global Sound", d: "Our roster crosses borders and genres, from Lagos to London, Afrobeats to Afro House, whatever the floor speaks." },
];

/* Brand-level journey (collective, not centred on any one DJ) */
export const MILESTONES = [
  { y: "2016", t: "RocktoberFest Official DJ", d: "D'Flamz becomes a fixture at one of Nigeria's biggest rock festivals, a run held through 2019." },
  { y: "2021", t: "BPM DJ Festival, Lagos", d: "A debut festival at Wave Beach. 10 DJs, 5,000+ in the crowd, noon to 3am." },
  { y: "2023", t: "Best DJ Crew, Rave Award", d: "The collective takes home Best DJ Crew." },
  { y: "2024", t: "VICI Lagos Residency", d: "A premier Lagos residency secured for the roster." },
  { y: "2025", t: "Central London Sound Run", d: "The D'Flamz sound lands in Soho, from Greek Street to Mayfair." },
];

/* Clients as objects so a real logo can swap in later (logo:null → styled name card) */
export const CLIENTS = [
  { name: "Kiss FM Lagos 98.9", logo: null },
  { name: "City 105.1 FM", logo: null },
  { name: "Vybz FM 94.5", logo: null },
  { name: "Rhythm 93.7 FM", logo: null },
  { name: "VICI Lagos", logo: null },
  { name: "Wave Beach", logo: null },
  { name: "The Artisan Lounge", logo: null },
  { name: "Zun-Paradise Lounge", logo: null },
  { name: "First Bank Nigeria", logo: null },
  { name: "MTV Base", logo: null },
  { name: "Bheerhugz Café", logo: null },
  { name: "Trybez", logo: null },
];

export const PK_FACTS = [
  ["Based in", "Lagos, Nigeria · London, UK"],
  ["Roster", "12+ DJs, one flat booking hub"],
  ["Genres", "Afrobeats · Amapiano · Afro House · House · EDM · Hip-Hop · Open Format"],
  ["Event types", "Festivals · Club nights · Residencies · Corporate · Private"],
  ["Reach", "Nigeria · UK · Europe · USA"],
  ["Languages", "English · Yoruba · Pidgin"],
];

/* ---------------------------------------------------------------------
   FORM OPTIONS — two forms: Book a DJ (structured) and Enquiry (simple).
   Both submit via mailto to LINKS.email (no backend for now).
   --------------------------------------------------------------------- */
export const BOOKING_EVENT_TYPES = [
  "Wedding", "Birthday / Private Party", "Club Night", "Corporate / Brand Event",
  "Festival", "Concert / Show", "Brunch / Day Party", "Bar / Lounge Residency", "Other",
];

export const BOOKING_CROWD_SIZES = [
  "Under 100", "100 to 300", "300 to 800", "800 to 2,000", "2,000+",
];

/* USD as an international default — edit for NGN or dual currency if preferred */
export const BOOKING_BUDGETS = [
  "Prefer to discuss", "Under $500", "$500 to $1,500", "$1,500 to $5,000", "$5,000 to $15,000", "$15,000+",
];

export const BOOKING_EQUIPMENT = [
  "Yes, I need full sound & mixing gear", "Partial, some equipment needed",
  "No, the venue is fully equipped", "Not sure yet",
];

export const ENQUIRY_SUBJECTS = [
  "General enquiry", "Booking question", "Press / Media",
  "Partnership / Sponsorship", "I'm a DJ who wants to join", "Other",
];
