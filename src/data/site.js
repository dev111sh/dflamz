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
  // Replace with your Formspree endpoints, e.g. "https://formspree.io/f/xxxxabcd"
  formBooking: "https://formspree.io/f/mlgqwvpb",
  formEnquiry: "https://formspree.io/f/mzdnawjv",
};

export const SOCIALS = [
  { h: "@dflamzz", url: LINKS.ig },
  { h: "@dflamzuk", url: LINKS.igUk },
];

export const MARQUEE = [
  "Spreading Music Like Wild Fire",
  "Book The Right DJ, Direct, No Middlemen",
  "Afrobeats · Amapiano · Afro House · EDM · Hip-Hop",
  "Lagos · London · Nairobi · Toronto · New York",
  "Venues · Festivals · Brands · Private Events",
];

export const STATS = [
  { n: "20+", l: "DJs on the roster" },
  { n: "5K+", l: "Festival crowd" },
  { n: "10+", l: "Radio stations" },
  { n: "4", l: "Continents played" },
];

/* ---------------------------------------------------------------------
   ROSTER — one flat, equal tier. No "head DJ", no featured billing.
   Photo-backed DJs are ordered first so the grid reads full at launch.
   --------------------------------------------------------------------- */
export const ROSTER = [
  { slug: "flammzy",    name: "Fire DJ Flammzy",      img: "flammzy", mono: "DF", role: "Global Sound · DJ/Producer",      tags: ["Global Sound"],           profile: true },
  { slug: "tonik",      name: "Tonik",                img: "tonik",   mono: "TK", role: "Afrobeats · House · Old School",       tags: ["Afrobeats", "House", "Old School"],               profile: true },
  { slug: "shawn",      name: "DJ Shawn",             img: "shawn",   mono: "SH", role: "Afrobeats · Amapiano · Pop",     tags: ["Afrobeats", "Amapiano", "Pop"],        profile: true },
  { slug: "famzy",      name: "DJ Famzy",             img: "famzy",   mono: "FZ", role: "Afrobeats · Hip-hop",                        tags: ["Afrobeats", "Hip-Hop"],                                  profile: true },
  { slug: "maloney",    name: "DJ B. Maloney",        img: "maloney",      mono: "BM", role: "Afrobeats · Dancehall · R&B",      tags: ["Afrobeats", "Dancehall", "Amapiano", "R&B"],  profile: true },
  { slug: "six7even",   name: "DJ Six7even",          img: "six7even",      mono: "S7", role: "Amapiano · Deep House · 3-Step",   tags: ["Amapiano", "Deep House", "3-Step"],           profile: true },
  { slug: "jd", name: "Vibemaster JD", img: "jd", mono: "JD", role: "Afrobeats · Dancehall · Soul", tags: ["Afrobeats", "Dancehall", "Reggae", "Soul"], profile: true },
  { slug: "simss",      name: "Simss",                img: "simss",      mono: "SI", role: "Pop · Disco · EDM",   tags: ["Pop", "EDM", "Disco", "Dance"],          profile: true },
  { slug: "scandamile", name: "Scandamile Mercury",   img: "scan",    mono: "SM", role: "Rock · Alternative · Electronic",    tags: ["Rock", "Alternative", "Electronic"],               profile: true },
  { slug: "yilmaz", name: "DJ Yilmaz Sumbul", img: "yilmaz", mono: "YS", role: "Turkish House · Arabic House", tags: ["Turkish House", "Arabic House", "Afro House"], profile: true },
  { slug: "versatile", name: "Versatile", img: "versatile", mono: "VR", role: "Amapiano · Gqom · Bashment", tags: ["Amapiano", "Gqom", "Afro House", "Bashment"], profile: true },
  { slug: "homdiggy", name: "DJ Homdiggy", img: "homdiggy", mono: "HB", role: "Hip-Hop · Fashion · Events", tags: ["Hip-Hop", "R&B", "Afrobeats"], profile: true },
  { slug: "geshgroove", name: "DJ Geshgroove", img: "geshgroove", mono: "GG", role: "Old School R&B · Amapiano · House", tags: ["R&B", "Hip-Hop", "Amapiano", "House"], profile: true },
  { slug: "lemmy", name: "DJ Lemmy", img: "lemmy", mono: "LM", role: "Afrobeats · Hip-hop · Afro House", tags: ["Afrobeats", "Hip-Hop", "Afro House"], profile: true },
  { slug: "dyslex",     name: "DysleX",               img: "dyslex",      mono: "DX", role: "Gqom · AfroTech · Slap House",     tags: ["Gqom", "3-Step", "AfroTech", "Slap House"],   profile: true },
  { slug: "maff",       name: "Deejay Maff",          img: "maff",      mono: "MF", role: "All Genres · Afrobeats",         tags: ["Afrobeats", "Amapiano"],                   profile: true },
  { slug: "femzey", name: "Luminos DJ Femzey", img: "femzey", mono: "FE", role: "Afrobeats · Radio · Events", tags: ["Afrobeats", "Radio", "Events"], profile: true },
  { slug: "miky",       name: "Unstoppable DjMiky",   img: "miky",      mono: "MK", role: "Afrobeats · Street Pop · Dance",          tags: ["Afrobeats", "Street Pop", "Dance"],                  profile: true },
  { slug: "blaa",       name: "DJ Blaa",              img: "blaa",      mono: "BL", role: "Afro House · Amapiano · EDM",      tags: ["Afrobeats", "Afro House", "Amapiano", "EDM"], profile: true },
  { slug: "shumzy", name: "DJ Shumzy", img: "shumzy", mono: "SZ", role: "Afrobeats · Hip-Hop", tags: ["Afrobeats", "Hip-Hop"], profile: true },
  { slug: "play", name: "DJ Play", img: "play", mono: "PL", role: "Afrobeats · House · Hip-Hop", tags: ["Afrobeats", "House", "Hip-Hop", "Old School"], profile: true },
];

/* ---------------------------------------------------------------------
   PROFILES — keyed by slug. Same shape the Artist page already renders:
   { name, img, gallery, role, handle, ig, based, tags, bio, long, highlights, draft }
   draft:true marks a profile awaiting real supplied detail.
   --------------------------------------------------------------------- */
export const PROFILES = {
  flammzy: {
    name: "Fire DJ Flammzy", img: "flammzy", gallery: ["flammzy", "flammzy2"],
    role: "DJ/Producer · Global Sound", handle: "@deejayflammzy", ig: "https://instagram.com/deejayflammzy",
    based: "Lagos, London", tags: ["Global Sound"],
    bio: "A London-based Nigerian DJ and producer with over a decade behind the decks and a genre range that few DJs can match. Also known as The King Maker.",
    long: "Fire DJ Flammzy is the founder of D'Flamz and brings over 15 years of experience as a radio DJ across Lagos, Nigeria and London, UK. Throughout his career he has worked alongside artists including Don Jazzy, Reekado Banks and many others. Passionate about developing new talent, he has trained and mentored more than 50 DJs, helping aspiring entertainers build their careers and make their mark in the industry. He is currently headlining the Global Sound Central London Tour, bringing his signature sound to audiences across Clapham Common, Mayfair and Shoreditch. As the creator and only DJ performing the exclusive Global Sound Set, he continues to redefine the club experience with a musical journey that blends sounds from around the world. Whether on radio, in the club or on the festival stage, Fire DJ Flammzy delivers performances that earn his reputation as The King Maker.",
    highlights: [["Festival", "RocktoberFest 2016, 2017 and 2019"], ["Festival", "The BPM DJ Festival 2022"], ["Festival", "The Beach House 2023"], ["Tour", "Night with Mavins East African Tour"], ["Tour", "Global Sound Central London Tour (current)"], ["Genre", "Global Sound"]],
  },
  tonik: {
    name: "Tonik", img: "tonik", gallery: ["tonik"],
    role: "International DJ · Afrobeats, House & Hip-Hop", handle: "@glassoftonik", ig: "https://instagram.com/glassoftonik",
    based: "Lagos · NY USA  ", tags: ["AfroBeats", "House", "R&B", "Hip-Hop", "Dancehall", "Classic Hits", "International Sounds"],
    bio: "As co-owner of D'Flamz, TONIK has established herself as one of the most dynamic DJs on the scene since 2019. She delivers expertly curated sets that fuse Afrobeats, Hip-Hop, R&B, House, Dancehall, classic hits, and international sounds into unforgettable musical experiences.",
    long: "Having performed at festivals, clubs, weddings, radio shows, lounges, and corporate events across Nigeria, the United Kingdom, and the United States, TONIK has built a reputation for connecting with diverse audiences whether performing for an intimate gathering or a packed venue, she brings passion, precision, and a unique ability to turn every event into an unforgettable celebration.",
    highlights: [["Residency", "Lagos Marriott Hotel ·  Danfo Bistro Ikoyi · Wakame Asian Kitchen"], ["Festival", "The BPM DJ Festival 2022"], ["Festival", "The Beach House Festival"], ["Radio", "98.9 Kiss FM · Boston 87.7fm · Afrosurge Radio"], ["Events", "First bank of Nigeria Ltd · Alat by Wema Bank "], ["Tours", "UK · USA"]], draft: true,
  },
  shawn: {
    name: "DJ Shawn", img: "shawn", gallery: ["shawn"],
    role: "DJ · Afrobeats, Amapiano & House", handle: "@deejayshawn_", ig: "https://instagram.com/deejayshawn_",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Amapiano", "Deep House", "Dancehall", "Hip-Hop", "EDM"],
    bio: "An international DJ from Lagos who came up through radio and residencies and now runs floors from Ikoyi to Nairobi.",
    long: "DJ Shawn started on the decks in 2012, joining D'Flamz and landing residencies at Lagos spots like W Bar in Ikoyi and a slot on Rhythm 93.7 FM. He plays the city's premier nightlife rooms, from Obi's House to Lulu Beach, and has taken the brand on the road with African club tours through Nairobi and dates in the UK. Across Afrobeats, Amapiano, deep house, dancehall, Hip-Hop and Pop, he covers whatever a night demands.",
    highlights: [["Radio", "City FM 105 · Rhythm 93.7"], ["Residency", "W Bar, Ikoyi · Vaniti Lagos"], ["Nightlife", "Obi's House", "Pitstop Village"], ["Worked with", "Falz · Pheelz · L.A.X · Magnito"], ["Tours", "Nairobi · UK"]],
  },
  famzy: {
    name: "DJ Famzy", img: "famzy", gallery: ["famzy"],
    role: "DJ · Afrobeats", handle: null, ig: null,
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Party"],
    bio: "A Lagos DJ with a clean Afrobeats sensibility and an ear for the record that turns a room.",
    long: "Winner of the first Pepsi DJ competition in Lagos, Famzy keeps sets tight and current, built around the Afrobeats and party records a Nigerian crowd wants to hear, with the timing to land them right. His approach is polished and dependable, the kind of DJ a venue books once and keeps on the calendar.",
    highlights: [], draft: true,
  },
  scandamile: {
    name: "Scandamile Mercury", img: "scan", gallery: ["scan"],
    role: "DJ · Alternative, Rock & Electronic", handle: null, ig: null,
    based: "Lagos, Nigeria", tags: ["Alternative", "Rock", "Festival"],
    bio: "King of Rock, and Alternative genres with one of the most versatile and unique sounds in the world.",
    long: "Scandamile Mercury breathes new air into Rock and Alternative genres with the intensity and the presence of a DJ who has worked the big stages. His unique love for Alternative, Punk Rock, Metal, Dance and his signature Electronic Body Music, along with his mysterious persona and his ability to fuse all his influences together makes him one of the most unique and versatile new generation DJs.",
    highlights: [["Festival", "Rock Night"], ["Radio", "The Isle 95.9"], ["Residency", "Bheerhugz Cafe · Wakame"], ["Worked with", "Clayrocksu"]], draft: true,
  },
  six7even: {
    name: "DJ Six7even", img: "six7even", gallery: ["six7even"],
    role: "International DJ · Amapiano, Afro House & 3-Step", handle: "@djsix7even", ig: "https://instagram.com/djsix7even",
    based: "Lagos, Nigeria", tags: ["Amapiano", "Afro House", "3-Step", "Afrobeats"],
    bio: "The Lagos selector helping push Amapiano into Nigerian nightlife, calm on stage and lethal on the build.",
    long: "Six7even blends Amapiano, Afro House and 3-Step into a sound that treats the genre with real respect, studying its roots rather than chasing only the viral hits. Known for patient, intentional sets that snap a floor to attention on the drop, he has taken that sound to stages including Afro Nation, YSL South Africa, the Afrobeats Festival in Berlin and Pépèle Festival in Paris. He is one of the names carrying the Lagos Amapiano wave abroad.",
    highlights: [["Festival", "Afro Nation"], ["International", "YSL South Africa"], ["Europe", "Afrobeats Festival Berlin"], ["Europe", "Pépèle Festival Paris"]],
  },
  simss: {
    name: "Simss", img: "simss", gallery: ["simss"],
    role: "DJ & Singer · Pop, Disco & EDM", handle: "@simssbaby", ig: "https://instagram.com/simssbaby",
    based: "Lagos, Nigeria", tags: ["Pop", "EDM", "Disco"],
    bio: "One of Lagos' most exciting DJs, who sings, writes, spins and is behind mashups with millions of views.",
    long: "Based in Lagos, Simss fuses pop and disco with Electronic, Dance, and alternative genres curating sets that feel both familiar and fresh. Since 2018 she has played major parties, raves and brand events, including a Flytime Fest slot where she opened for Asake, and she has worked with African stars like Ayra Starr and Victony. WeTalkSound, TheFemmeMag and The Lagos Weekender have all covered her, the last naming her one of the top 10 DJs in Lagos. Beyond the decks she makes her own music, from a self-voiced Nu-Disco flip of Good Luck, Babe! to CTRL, her 2025 collaboration with Jamie Black and Activity Records that became a staple in the city's Afro House scene.",
    highlights: [["Festival", "Flytime Fest (opened for Asake)"], ["Worked with", "Ayra Starr · Victony"], ["Press", "Top 10 DJ in Lagos"], ["Release", "CTRL (Activity Records, 2025)"]],
  },
  dyslex: {
    name: "DysleX", img: "dyslex", gallery: ["dyslex"],
    role: "DJ & Producer · Electronic Dance Music", handle: "@dyslexmikhael", ig: "https://instagram.com/dyslexmikhael",
    based: "Lagos, Nigeria", tags: ["Gqom", "3-Step", "AfroTech", "Slap House"],
    bio: "A Lagos-born DJ, producer and dance-music artist making records built for the floor and sets built to detonate.",
    long: "DysleX works in Gqom, 3-Step, AfroTech and Slap House, and he produces as well as plays, with releases like London Downtown and L2D Call earning real dancefloor traction. He has performed at some of Lagos' biggest electronic events, from Activity Music Festival to House Arrest, Sunday Service and Kultur People, and his remix work includes the Afro-EDM flip of Vibemaster JD's This Year. When the brief calls for something faster and harder than standard Afrobeats, this is the booking.",
    highlights: [["Festival", "Activity Music Festival"], ["Events", "House Arrest · Sunday Service"], ["Releases", "London Downtown · L2D Call"], ["Remix", "This Year (Afro-EDM)"]],
  },
  maloney: {
    name: "DJ B. Maloney", img: "maloney", gallery: ["maloney"],
    role: "International DJ · Afrobeats & Global Blend", handle: "@djbmaloney", ig: "https://instagram.com/djbmaloney",
    based: "Lagos · London · International", tags: ["Afrobeats", "Dancehall", "Amapiano", "Hip-Hop", "R&B"],
    bio: "An international powerhouse who has warmed up stages for Wizkid, Rema, Davido and Asake, and headlined her own across four continents.",
    long: "DJ B. Maloney has spun from Lagos to London, Stockholm to Melbourne, Oslo to Accra, with sets rooted in Afrobeats culture and stretched across Dancehall, Amapiano, Hip-Hop and R&B. She has shared stages with a roll call of Afrobeats icons including Wizkid, Rema, Davido, Flavour, Asake, Ruger, Oxlade and Tiwa Savage, bringing the same high energy whether she is opening for a headliner or running her own show. Book her for a set that reads global and hits hard from the first record.",
    highlights: [["Stages", "Wizkid · Rema · Davido"], ["Also", "Asake · Tiwa Savage · Ruger"], ["Reach", "Nigeria · UK · Sweden · USA · Australia"], ["Style", "Afrobeats-rooted, global blend"]],
  },
  blaa: {
    name: "DJ Blaa", img: "blaa", gallery: ["blaa"],
    role: "DJ & Producer · Afro-Fusion", handle: "@deejayblaa", ig: "https://instagram.com/deejayblaa",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Afro House", "Amapiano", "EDM"],
    bio: "An Afro-fusion producer and DJ making rhythmic, culturally driven records for the club and beyond.",
    long: "DJ BLAA blends traditional African acoustic elements with modern club production, building tracks that celebrate the continent's resilient spirit. Across Afrobeats, Afro House, Amapiano and EDM, the sound leans on rhythm and texture rather than easy formula. As comfortable producing as playing, BLAA brings a producer's ear to every set, which shows in how the records are chosen and sequenced.",
    highlights: [["Craft", "Producer & DJ"], ["Sound", "Afro-fusion, culturally driven"]],
  },
  maff: {
    name: "World Famous Deejay Maff", img: "maff", gallery: ["maff"],
    role: "DJ · Amapiano & Afro House", handle: "@djmaf_classic", ig: "https://instagram.com/djmaf_classic",
    based: "Lagos, Nigeria", tags: ["Amapiano", "Afro House"],
    bio: "An SA-based Nigerian DJ who fuses genres across dancefloors and plays whatever the moment needs.",
    long: "Maff is a versatile selector who moves across genres rather than boxing himself into one lane, ready to swing a set wherever the crowd takes it.",
    highlights: [["Collab", "GSS Riddim (with DJ Flammzy & Vibemaster JD)"]], draft: true,
  },
  miky: {
    name: "Unstoppable DjMiky", img: "miky", gallery: ["miky"],
    role: "DJ · Afrobeats, Pop & Dance", handle: "@unstoppabledjmiky6", ig: "https://instagram.com/unstoppabledjmiky6",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Pop", "Dance"],
    bio: "The life of the party and the reason the floor stays full.",
    long: "DjMiky plays for the room first, leaning on Afrobeats, pop and dance records with the read of a DJ who knows how to keep a crowd on its feet. The style is high-energy and unfussy, built to keep a party moving from the first record to the last. For an event that needs to feel alive start to finish, this is a safe pair of hands.",
    highlights: [], draft: true,
  },
  jd: { name: "Vibemaster JD", img: "jd", gallery: ["jd"], role: "DJ & Radio Host · Afrobeats Culture Amplifier", handle: "@VibemasterJD", ig: "https://instagram.com/vibemasterjd", ext: "https://vibemasterjd.com", apple: "https://music.apple.com/us/artist/vibemaster-jd/1679045180", based: "Boston, USA", tags: ["Afrobeats", "Dancehall", "Reggae", "Soul", "Hip-Hop"], bio: "Boston-based world-music DJ and radio host who treats every set like a passport stamp, pulling from Afrobeats, Dancehall, Reggae, Soul and Hip-Hop without hesitation.", long: "Vibemaster JD runs Afrobeat In The Morning on 87.7 FM Boston and has built a following that crosses genre lines and borders. His recorded output links him to the wider D'Flamz circle: GSS Riddim features him alongside DJ Flammzy and DJ M.A.F., and the Afro-EDM remix of This Year brought in DysleX for a cross-continental collaboration. Through Vibemaster Entertainment and Bolon Music Group, JD carries the sound to audiences across the United States and continues to push Afrobeats culture into new rooms.", highlights: [["Radio", "87.7 FM Boston"], ["Show", "Afrobeat In The Morning"], ["Release", "GSS Riddim (w/ DJ Flammzy & DJ M.A.F.)"], ["Remix", "This Year (Afro-EDM) feat. DysleX"]] },

  yilmaz: { name: "DJ Yilmaz Sumbul", img: "yilmaz", gallery: ["yilmaz"], role: "DJ · Turkish House, Arabic House & Global Dance", handle: "@djyilmazsumbul", ig: "https://instagram.com/djyilmazsumbul", based: "London, UK", tags: ["Turkish House", "Arabic House", "Afro House", "Indie House", "Pop"], bio: "A London-based DJ whose sets pull from Turkish, Arabic and Afro House traditions, delivering a global sound most selectors never attempt.", long: "DJ Yilmaz Sumbul brings international experience across club nights, private events and large-scale concert productions. His sets thread Turkish House, Arabic House, Afro House, Indie House, Pop and global dance music into a premium listening experience that works for diverse, international audiences. For events that need a selector who can read a cosmopolitan room and deliver something outside the usual rotation, Yilmaz is that booking.", highlights: [["Based", "London, UK"], ["Scope", "Club nights · Private events · Concert productions"], ["Sound", "Turkish, Arabic & Afro House fusion"]] },

  lemmy: { name: "DJ Lemmy", img: "lemmy", gallery: ["lemmy"], role: "DJ · Afrobeats, Hip Hop, Dance & Afro House", handle: "@dj_lemmy", ig: "https://instagram.com/dj_lemmy", based: "Lagos, Nigeria", tags: ["Afrobeats", "Hip Hop", "Dance", "Afro House"], bio: "DJ Lemmy makes every genre sound mainstream and the way his performances make people lose composure in every venue he plays.", long: "Having shared a stage with the best of the best, DJ Lemmy's sound always stands out and his sets make audiences dance to all flavours of music, playing across Afrobeats, tribal, street and Afro house with hints of Hip hop, Pop and old-school sounds. His mission is simple: reinvent African music, bring back its commerciality, and add some seasoning. He has done some collaborations and his single Zekethe featuring Amapiano superstar Jobe London made waves.", highlights: [["Residency", "Wakame Asian Kitchen" ], ["Style", "Dance, Streets and House founded in African sounds"], ["Collab", "Zekethe featuring Jobe London"]] },

  versatile: { name: "Versatile", img: "versatile", gallery: ["versatile"], role: "DJ · Amapiano, Gqom & Afro House", handle: "@versatile_les", ig: "https://instagram.com/versatile_les", based: "London, UK", tags: ["Amapiano", "Gqom", "Afro House", "Tribal House", "Bashment", "Soca"], bio: "London-based and true to the name, blending African and Caribbean undertones across every genre she touches.", long: "Versatile plays a wide spread of sounds and brings heat to every deck: Amapiano, Gqom, Afro House, Tribal House, Bashment and Soca, all blended with African and Caribbean influences that give the sets a distinct flavour. With four-plus years in the game, she has played Notting Hill Carnival, Heaven, Tape London, BoxPark, Pop Brixton and international venues in Nairobi. She co-hosts a Saturday bi-weekly show on Reprezent Radio alongside JustShardz, and has done guest mixes on Sound Source Radio, BBC 1Xtra and Brixton Radio. You never know exactly what to expect, but the energy is always accounted for.", highlights: [["Festival", "Notting Hill Carnival"], ["Venues", "Tape London · Heaven · Pop Brixton"], ["International", "Nairobi, Kenya"], ["Radio", "BBC 1Xtra · Reprezent Radio"]] },

  homdiggy: { name: "DJ Homdiggy", img: "homdiggy", gallery: ["homdiggy"], role: "DJ & Music Director · Hip-Hop", handle: "@homdiggymuzik", ig: "https://instagram.com/homdiggymuzik", based: "London · Oslo", tags: ["Hip-Hop", "R&B", "Afrobeats"], bio: "A DJ and music director whose career spans Oslo club circuits, Norwegian TV, fashion week runways and London's event scene.", long: "DJ Homdiggy (Homeboy) cut his teeth spinning for the G Spot/911 parties at Oslo's Fabrikken, The Park and Snore Company on behalf of DA WORKS Records, then landed a resident slot at Big Kids, Soul Train and MTV Norway. He toured as DJ for Norwegian artist Winta, performing at Quart Festival in Kristiansand and the VG Top Ten tour. His production skills crossed into fashion when he was appointed Music Director for African Fashion Week London, a role he holds to this day, and his runway credits include Fashions Finest, The Gate Notting Hill, Fashion Renaissance, Britain's Next Designer and Face of Fashion 4 Africa. He now works with In-Eight Entertainment as one of their main circuit DJs across London venues.", highlights: [["Fashion", "African Fashion Week London (official DJ)"], ["TV", "MTV Norway · Resident DJ"], ["Festival", "Quart Festival, Kristiansand"], ["Runways", "Fashions Finest · The Gate · Britain's Next Designer"]] },

  shumzy: { name: "DJ Shumzy", img: "shumzy", gallery: ["shumzy"], role: "DJ · Afrobeats & Hip-Hop", handle: "@djshumzy", ig: "https://instagram.com/djshumzy", based: "Lagos, Nigeria", tags: ["Afrobeats", "Hip-Hop"], bio: "A professional DJ who carries quiet confidence behind the decks and delivers consistently across weddings, corporate events and private parties.", long: "DJ Shumzy works across the event circuit with a focus on Afrobeats and Hip-Hop, bringing a professional touch to weddings, corporate functions and social events. The approach is reliable and polished: read the room, match the energy, keep the floor moving. For organisers who need a safe pair of hands on the decks and a DJ who shows up prepared, Shumzy fits the brief.", highlights: [["Speciality", "Weddings · Corporate · Private events"], ["Sound", "Afrobeats & Hip-Hop"]], draft: true },

  geshgroove: { name: "DJ Geshgroove", img: "geshgroove", gallery: ["geshgroove"], role: "DJ, Broadcaster & Entrepreneur", handle: "@djgeshgroove", ig: "https://instagram.com/djgeshgroove", based: "London · Zambia · Global", tags: ["Old School R&B", "Hip-Hop", "Amapiano", "House"], bio: "Broadcaster, radio station owner, fashion music director and globe-trotting DJ who built a creative empire where music, mentorship and media collide.", long: "Chishala Chitoshi Jr., known on stage as GeshGroove, went from defining Zambian pop culture on radio to shutting down dancefloors across four continents. One weekend he is mixing Afro House at the Zambia Independence Dinner in Atlanta, the next he is at News Cafe Randburg in Johannesburg, Katjushas Lounge in Bryanston, or running his Grown and Sexy series at spots in North London and Dallas. A broadcaster, producer, TV personality, qualified lawyer, entrepreneur and owner of Flava FM Zambia, Gesh is also the founder of The DJ Academy Zambia, a talent factory shaping the next generation of African DJs. When he is not spinning decks, he is spinning dreams into reality.", highlights: [["Radio", "Flava FM Zambia (owner)"], ["Academy", "The DJ Academy Zambia (founder)"], ["International", "Atlanta · Johannesburg · Dallas · London"], ["Background", "Broadcaster · Lawyer · Entrepreneur"]] },

  femzey: { name: "Luminos DJ Femzey", img: "femzey", gallery: ["femzey"], role: "DJ · Radio & Events", handle: "@djfemzey", ig: "https://instagram.com/djfemzey", based: "Lagos, Nigeria", tags: ["Afrobeats", "Radio", "Events"], bio: "The Light Goddess: a dynamic Nigerian female DJ with years of experience across radio, live events and crowd engagement.", long: "Luminos DJ Femzey, known as The Light Goddess, brings energetic vibes, smooth mixes and memorable entertainment to every event she touches. With years of experience in music, entertainment and crowd engagement, she has built a reputation for reading rooms and delivering sets that keep audiences locked in, whether the brief is a radio broadcast, a club night or a private party. The name carries light and the sets carry heat.", highlights: [["Alias", "The Light Goddess"], ["Scope", "Radio · Club nights · Private events"], ["Sound", "Crowd-first energy, tuned to the room"]], draft: true },

  play: { name: "DJ Play", img: "play", gallery: ["play"], role: "DJ · Afrobeats, House & Hip-Hop", handle: "@djplay021", ig: "https://instagram.com/djplay021", based: "Lagos, Nigeria", tags: ["Afrobeats", "House", "Hip-Hop", "Old School"], bio: "A professional DJ covering the full spread of social and corporate events with a sound rooted in Afrobeats, House, Hip-Hop and old-school records.", long: "DJ Play provides a wide range of DJ services for both social and corporate events, drawing from Afrobeats, House, Hip-Hop and old-school records. The approach is professional and event-ready: understand the brief, match the crowd, and deliver a set that runs clean from open to close. For organisers looking for reliable, experienced hands on the decks, Play is a solid fit.", highlights: [["Speciality", "Social & corporate events"], ["Sound", "Afrobeats · House · Hip-Hop · Old School"]], draft: true },
};

export const GANG = ["DJ Shizzy", "DJ Choice", "DJ Voltron", "DJ Dayo", "DJ Nazee", "DJ Mekury"];

export const SERVICES = [
  { n: "01", t: "DJ Booking, Direct", d: "Browse the roster and book the right DJ for your event, venue or residency without the middlemen. We handle logistics, contracts and standards end-to-end." },
  { n: "02", t: "DJ Academy & Training", d: "Our academy develops the next generation, from technical mixing fundamentals to stage presence, branding and long-term career development." },
  { n: "03", t: "Event Production & Festivals", d: "We build events from concept to execution. Our BPM DJ Festival drew 5,000+ in its debut, and we know how to build a moment that lasts." },
  { n: "04", t: "Venue Residencies", d: "Ongoing partnerships with bars, lounges, restaurants and hotels, matched with the right resident to keep guests coming back." },
  { n: "05", t: "Music Promotion", d: "Amplify your sound. We plug into our network where we have access to over 500 DJ playlists all over the world, to push music where it needs to be heard." },
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
  { y: "2013", t: "Bheerhugz Cafe Residency", d: "12 years DJ residency at their iconic Lagos locations." },
  { y: "2016", t: "Rocktoberfest", d: "Oragnized and sponsored the Rocktoberfest 2016 edition" },
  { y: "2020", t: "Pepsi DJ Competition", d: "D'Flamz DJs were winners and runner up at the Pepsi DJ competition first and second edition" },
  { y: "2021", t: "BPM DJ Festival, Lagos", d: "A debut festival at Wave Beach. 10 DJs, 5,000+ in the crowd, noon to 3am." },
  { y: "2022", t: "The Beach House", d: "Played one of the biggest beach parties in the world." },
  { y: "2023", t: "Best DJ Crew, Rave Award", d: "The collective takes home Best DJ Crew." },
  { y: "2025", t: "Central London Sound Run", d: "The D'Flamz sound lands in Soho, from Greek Street to Mayfair." },
];

/* Clients as objects so a real logo can swap in later (logo:null → styled name card) */
export const CLIENTS = [
  { name: "Mavin", logo: "mavin-records.jpg" },
  { name: "Marriott", logo: "marriott.png" },
  { name: "Bheerhugz Café", logo: "bheerhugz.png" },
  { name: "Enish", logo: "enish-nigerian-restaurant.jpg" },
  { name: "MTV Base", logo: "mtv_base.jpeg" },
  { name: "Kiss FM Lagos 98.9", logo: "kiss_fm.png" },
  { name: "City 105.1 FM", logo: "city_fm.png" },
  { name: "Vybz FM 94.5", logo: "vybz_fm.png" },
  { name: "Rhythm 93.7 FM", logo: "rhythm_fm.png" },
  { name: "VICI Lagos", logo: "vici.png" },
  { name: "Wave Beach", logo: "wave_beach.png" },
  { name: "The Artisan Lounge", logo: "artisan.jpg" },
  { name: "First Bank Nigeria", logo: "first_bank.png" },
  { name: "Africa Magic", logo: "africa-magic.jpg" },
  { name: "Apple", logo: "apple-logo.jpg" },
  { name: "BBNaija", logo: "bbnaija.jpg" },
  { name: "Beat FM London", logo: "beat-fm-london.png" },
  { name: "Bolivar Lagos", logo: "bolivar-lagos.png" },
  { name: "CR1 Croydon", logo: "cr1-croydon.png" },
  { name: "Danfo Bistro", logo: "danfo-bistro.png" },
  { name: "Eastcheap Records", logo: "eastcheap-records.png" },
  { name: "Fish Farm Gbagada", logo: "fish-farm-gbagada.png" },
  { name: "Hennessy", logo: "hennessy.png" },
  { name: "Jaks Mayfair", logo: "jaks-mayfair.png" },
  { name: "Mainland Block Party", logo: "mainland-block-party.png" },
  { name: "Northcote Records", logo: "northcote-records-logo.jpg" },
  { name: "Old Street Records", logo: "old-street-records.png" },
  { name: "Rave TV", logo: "rave-tv.png" },
  { name: "Redbox", logo: "redbox.jpg" },
  { name: "Rita Lori", logo: "rita-lori.png" },
  { name: "Roc Nation", logo: "rocnation.png" },
  { name: "Simmons Bar", logo: "simmons-bar.png" },
  { name: "Top FM 99.9", logo: "top-fm-99-9.jpg" },
  { name: "Tune Afrique", logo: "tune-afrique.png" },
  { name: "Tunnel Vision Aldgate", logo: "tunnel-vision-aldgate.png" },
  { name: "Venn Street Records", logo: "venn-street-records.jpg" },
  { name: "Wakanow", logo: "wakanow.png" },
];

export const PK_FACTS = [
  ["Based in", "Lagos, Nigeria · London, UK"],
  ["Roster", "Over 500 DJs all over the world, one flat booking hub"],
  ["Genres", "Afrobeats · Amapiano · Afro House · House · EDM · Hip-Hop, Global Sound · Old School · Pop · Dancehall · Reggae · R&B · Soul · Electronic · Dub"],
  ["Event types", "Festivals · Club nights · Club residencies · Corporate · Private · Weddings · Brunches · Day parties · Concerts · Brand activations · Launches · Fashion shows · Radio · Tours · International DJ bookings"],
  ["Reach", "Nigeria, UK, Europe, USA, South Africa, Zambia"],
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
