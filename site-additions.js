/* =====================================================================
   NEW & UPDATED ENTRIES — paste these into site.js
   
   INSTRUCTIONS:
   1. Add the ROSTER entries below to the ROSTER array in site.js
   2. Add the PROFILES entries below to the PROFILES object in site.js
   3. Update the existing "play" and "femzey" ROSTER entries with these versions
   4. Update the existing "play" and "femzey" PROFILES entries with these versions
   5. Re-add the "jd" ROSTER entry and PROFILES entry (restored)
   6. Remove DJ Play and DJ Femzey from the GANG array (they're now full roster)
   ===================================================================== */


/* ----- NEW ROSTER ENTRIES (add to ROSTER array) ----- */

  { slug: "jd",         name: "Vibemaster JD",        img: "jd",  mono: "JD", role: "Afrobeats · Dancehall · Soul",     tags: ["Afrobeats", "Dancehall", "Reggae", "Soul"],      profile: true },
  { slug: "yilmaz",     name: "DJ Yilmaz Sumbul",     img: null,  mono: "YS", role: "Turkish House · Arabic House",     tags: ["Turkish House", "Arabic House", "Afro House"],   profile: true },
  { slug: "shardz",     name: "Just Shardz",          img: null,  mono: "JS", role: "UK House · Tribal · Afro House",   tags: ["UK House", "Tribal House", "Afro House"],        profile: true },
  { slug: "versatile",  name: "Versatile",             img: null,  mono: "VR", role: "Amapiano · Gqom · Bashment",      tags: ["Amapiano", "Gqom", "Afro House", "Bashment"],    profile: true },
  { slug: "homdiggy",   name: "DJ Homdiggy",           img: null,  mono: "HB", role: "Open Format · Fashion · Events",  tags: ["Open Format", "Hip-Hop", "Afrobeats"],           profile: true },
  { slug: "shumzy",     name: "DJ Shumzy",             img: null,  mono: "SZ", role: "Afrobeats · Hip-Hop",             tags: ["Afrobeats", "Hip-Hop"],                          profile: true },
  { slug: "geshgroove", name: "DJ Geshgroove",         img: null,  mono: "GG", role: "Old School R&B · Amapiano · House", tags: ["R&B", "Hip-Hop", "Amapiano", "House"],          profile: true },


/* ----- UPDATED ROSTER ENTRIES (replace existing "femzey" and "play") ----- */

  { slug: "femzey",     name: "Luminos DJ Femzey",     img: null,  mono: "FE", role: "Open Format · Radio · Events",    tags: ["Open Format", "Radio", "Events"],                profile: true },
  { slug: "play",       name: "DJ Play",               img: null,  mono: "PL", role: "Afrobeats · House · Hip-Hop",     tags: ["Afrobeats", "House", "Hip-Hop", "Old School"],   profile: true },


/* ----- NEW PROFILES (add to PROFILES object) ----- */

  jd: {
    name: "Vibemaster JD", img: "jd", gallery: ["jd"],
    role: "DJ & Radio Host · Afrobeats Culture Amplifier", handle: "@VibemasterJD", ig: "https://instagram.com/vibemasterjd",
    ext: "https://vibemasterjd.com", apple: "https://music.apple.com/us/artist/vibemaster-jd/1679045180",
    based: "Boston, USA", tags: ["Afrobeats", "Dancehall", "Reggae", "Soul", "Hip-Hop"],
    bio: "Boston-based world-music DJ and radio host who treats every set like a passport stamp, pulling from Afrobeats, Dancehall, Reggae, Soul and Hip-Hop without hesitation.",
    long: "Vibemaster JD runs Afrobeat In The Morning on 87.7 FM Boston and has built a following that crosses genre lines and borders. His recorded output links him to the wider D'Flamz circle: GSS Riddim features him alongside DJ Flammzy and DJ M.A.F., and the Afro-EDM remix of This Year brought in DysleX for a cross-continental collaboration. Through Vibemaster Entertainment and Bolon Music Group, JD carries the sound to audiences across the United States and continues to push Afrobeats culture into new rooms.",
    highlights: [["Radio", "87.7 FM Boston"], ["Show", "Afrobeat In The Morning"], ["Release", "GSS Riddim (w/ DJ Flammzy & DJ M.A.F.)"], ["Remix", "This Year (Afro-EDM) feat. DysleX"]],
  },

  yilmaz: {
    name: "DJ Yilmaz Sumbul", img: null, gallery: [],
    role: "DJ · Turkish House, Arabic House & Global Dance", handle: "@djyilmazsumbul", ig: "https://instagram.com/djyilmazsumbul",
    based: "London, UK", tags: ["Turkish House", "Arabic House", "Afro House", "Indie House", "Pop"],
    bio: "A London-based DJ whose sets pull from Turkish, Arabic and Afro House traditions, delivering a global sound most selectors never attempt.",
    long: "DJ Yilmaz Sumbul brings international experience across club nights, private events and large-scale concert productions. His sets thread Turkish House, Arabic House, Afro House, Indie House, Pop and global dance music into a premium listening experience that works for diverse, international audiences. For events that need a selector who can read a cosmopolitan room and deliver something outside the usual rotation, Yilmaz is that booking.",
    highlights: [["Based", "London, UK"], ["Scope", "Club nights · Private events · Concert productions"], ["Sound", "Turkish, Arabic & Afro House fusion"]],
  },

  shardz: {
    name: "Just Shardz", img: null, gallery: [],
    role: "DJ · UK House, Tribal & Afro House", handle: "@justshardz", ig: "https://instagram.com/justshardz",
    based: "London, UK", tags: ["UK House", "Tribal House", "Soulful House", "Afro House"],
    bio: "A London selector on a mission to bring house music back to the mainstream, with Caribbean, African and old-school flavours woven through every set.",
    long: "JustShardz leaves her heart on the decks and her soul in the music, playing across UK house, tribal, soulful and Afro house with hints of Caribbean, African and old-school sounds. She has played Pop Brixton, One Hundred Shoreditch, BRIX LDN, Market House, Queen of South, BoxPark and Heaven, and has made radio appearances on Reprezent Radio, Brixton Radio and BBC 1Xtra. She co-hosts a Saturday bi-weekly show on Reprezent Radio alongside Versatile, and runs Diaspora Nights, her own events brand with a growing catalogue of sold-out parties. The mission is simple: rebirth house music, bring back its commerciality, and add some musical seasoning.",
    highlights: [["Venues", "Pop Brixton · One Hundred Shoreditch · Heaven"], ["Radio", "BBC 1Xtra · Reprezent Radio · Brixton Radio"], ["Events", "Diaspora Nights (founder)"], ["Style", "UK House with Caribbean & African roots"]],
  },

  versatile: {
    name: "Versatile", img: null, gallery: [],
    role: "DJ · Amapiano, Gqom & Afro House", handle: "@versatile_les", ig: "https://instagram.com/versatile_les",
    based: "London, UK", tags: ["Amapiano", "Gqom", "Afro House", "Tribal House", "Bashment", "Soca"],
    bio: "London-based and true to the name, blending African and Caribbean undertones across every genre she touches.",
    long: "Versatile plays a wide spread of sounds and brings heat to every deck: Amapiano, Gqom, Afro House, Tribal House, Bashment, Soca and open format, all blended with African and Caribbean influences that give the sets a distinct flavour. With four-plus years in the game, she has played Notting Hill Carnival, Heaven, Tape London, BoxPark, Pop Brixton and international venues in Nairobi. She co-hosts a Saturday bi-weekly show on Reprezent Radio alongside JustShardz, and has done guest mixes on Sound Source Radio, BBC 1Xtra and Brixton Radio. You never know exactly what to expect, but the energy is always accounted for.",
    highlights: [["Festival", "Notting Hill Carnival"], ["Venues", "Tape London · Heaven · Pop Brixton"], ["International", "Nairobi, Kenya"], ["Radio", "BBC 1Xtra · Reprezent Radio"]],
  },

  homdiggy: {
    name: "DJ Homdiggy", img: null, gallery: [],
    role: "DJ & Music Director · Open Format", handle: "@homdiggymuzik", ig: "https://instagram.com/homdiggymuzik",
    based: "London · Oslo", tags: ["Open Format", "Hip-Hop", "R&B", "Afrobeats"],
    bio: "A DJ and music director whose career spans Oslo club circuits, Norwegian TV, fashion week runways and London's event scene.",
    long: "DJ Homdiggy (Homeboy) cut his teeth spinning for the G Spot/911 parties at Oslo's Fabrikken, The Park and Snore Company on behalf of DA WORKS Records, then landed a resident slot at Big Kids, Soul Train and MTV Norway. He toured as DJ for Norwegian artist Winta, performing at Quart Festival in Kristiansand and the VG Top Ten tour. His production skills crossed into fashion when he was appointed Music Director for African Fashion Week London, a role he holds to this day, and his runway credits include Fashions Finest, The Gate Notting Hill, Fashion Renaissance, Britain's Next Designer and Face of Fashion 4 Africa. He now works with In-Eight Entertainment as one of their main circuit DJs across London venues.",
    highlights: [["Fashion", "African Fashion Week London (official DJ)"], ["TV", "MTV Norway · Resident DJ"], ["Festival", "Quart Festival, Kristiansand"], ["Runways", "Fashions Finest · The Gate · Britain's Next Designer"]],
  },

  shumzy: {
    name: "DJ Shumzy", img: null, gallery: [],
    role: "DJ · Afrobeats & Hip-Hop", handle: "@djshumzy", ig: "https://instagram.com/djshumzy",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "Hip-Hop"],
    bio: "A professional DJ who carries quiet confidence behind the decks and delivers consistently across weddings, corporate events and private parties.",
    long: "DJ Shumzy works across the event circuit with a focus on Afrobeats and Hip-Hop, bringing a professional touch to weddings, corporate functions and social events. The approach is reliable and polished: read the room, match the energy, keep the floor moving. For organisers who need a safe pair of hands on the decks and a DJ who shows up prepared, Shumzy fits the brief.",
    highlights: [["Speciality", "Weddings · Corporate · Private events"], ["Sound", "Afrobeats & Hip-Hop"]], draft: true,
  },

  geshgroove: {
    name: "DJ Geshgroove", img: null, gallery: [],
    role: "DJ, Broadcaster & Entrepreneur", handle: "@djgeshgroove", ig: "https://instagram.com/djgeshgroove",
    based: "London · Zambia · Global", tags: ["Old School R&B", "Hip-Hop", "Amapiano", "House"],
    bio: "Broadcaster, radio station owner, fashion music director and globe-trotting DJ who built a creative empire where music, mentorship and media collide.",
    long: "Chishala Chitoshi Jr., known on stage as GeshGroove, went from defining Zambian pop culture on radio to shutting down dancefloors across four continents. One weekend he is mixing Afro House at the Zambia Independence Dinner in Atlanta, the next he is at News Café Randburg in Johannesburg, Katjushas Lounge in Bryanston, or running his Grown and Sexy series at spots in North London and Dallas. A broadcaster, producer, TV personality, qualified lawyer, entrepreneur and owner of Flava FM Zambia, Gesh is also the founder of The DJ Academy Zambia, a talent factory shaping the next generation of African DJs. When he is not spinning decks, he is spinning dreams into reality.",
    highlights: [["Radio", "Flava FM Zambia (owner)"], ["Academy", "The DJ Academy Zambia (founder)"], ["International", "Atlanta · Johannesburg · Dallas · London"], ["Background", "Broadcaster · Lawyer · Entrepreneur"]],
  },


/* ----- UPDATED PROFILES (replace existing "femzey" and "play") ----- */

  femzey: {
    name: "Luminos DJ Femzey", img: null, gallery: [],
    role: "DJ · Radio & Events", handle: "@djfemzey", ig: "https://instagram.com/djfemzey",
    based: "Lagos, Nigeria", tags: ["Open Format", "Radio", "Events"],
    bio: "The Light Goddess: a dynamic Nigerian female DJ with years of experience across radio, live events and crowd engagement.",
    long: "Luminos DJ Femzey, known as The Light Goddess, brings energetic vibes, smooth mixes and memorable entertainment to every event she touches. With years of experience in music, entertainment and crowd engagement, she has built a reputation for reading rooms and delivering sets that keep audiences locked in, whether the brief is a radio broadcast, a club night or a private party. The name carries light and the sets carry heat.",
    highlights: [["Alias", "The Light Goddess"], ["Scope", "Radio · Club nights · Private events"], ["Sound", "Open format, crowd-first energy"]], draft: true,
  },

  play: {
    name: "DJ Play", img: null, gallery: [],
    role: "DJ · Afrobeats, House & Hip-Hop", handle: "@djplay021", ig: "https://instagram.com/djplay021",
    based: "Lagos, Nigeria", tags: ["Afrobeats", "House", "Hip-Hop", "Old School"],
    bio: "A professional DJ covering the full spread of social and corporate events with a sound rooted in Afrobeats, House, Hip-Hop and old-school records.",
    long: "DJ Play provides a wide range of DJ services for both social and corporate events, drawing from Afrobeats, House, Hip-Hop and old-school records. The approach is professional and event-ready: understand the brief, match the crowd, and deliver a set that runs clean from open to close. For organisers looking for reliable, experienced hands on the decks, Play is a solid fit.",
    highlights: [["Speciality", "Social & corporate events"], ["Sound", "Afrobeats · House · Hip-Hop · Old School"]], draft: true,
  },


/* ----- UPDATED GANG ARRAY (remove Femzey, Play, and anyone else now in roster) ----- */

export const GANG = ["DJ Shizzy", "DJ Choice", "DJ Voltron", "DJ Dayo", "DJ Nazee", "DJ Mekury"];


/* ----- UPDATED STATS (reflect new roster size) ----- */

export const STATS = [
  { n: "21", l: "DJs on the roster" },
  { n: "5K+", l: "Festival crowd" },
  { n: "9", l: "Radio stations" },
  { n: "4", l: "Continents played" },
];
