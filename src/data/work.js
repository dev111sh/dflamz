/* ---------------------------------------------------------------------
   PROJECTS — past work and events. Replaces the Press Kit page.
   img:null renders the branded placeholder until a photo is added.

   - img / gallery: IMAGE SLOT KEYS from src/assets/images.js (not raw
     filenames) — that is what <Media slot={...}> and <Gallery slots={...}>
     resolve. To add a photo: drop the file in src/assets/projects/, import
     it in images.js under a pj* key, then reference that key here.
   - partners: display names of collaborators. A name that matches an entry
     in ALLIES or CLIENTS renders with that partner's logo on the detail page.
   - stats: headline numbers for the detail page. Only figures actually
     stated in this project's own summary/body/highlights — never invented.
     [] omits the stats strip entirely.
   - layout: "gallery" for photo-rich projects (hero + gallery grid) or
     "editorial" for photo-poor projects (typographic treatment, no images
     anywhere on the page — not even a placeholder).
   --------------------------------------------------------------------- */
export const PROJECTS = [
  {
    slug: 'global-sound',
    title: 'Global Sound',
    year: '2025 to present',
    location: 'Mayfair, Central London',
    img: 'pjUkTour',
    gallery: ['pjEasterLondon', 'pjUkTour'],
    layout: 'gallery',
    tags: ['Flagship Brand', 'Nightlife', 'Multi-Genre'],
    summary:
      "Our flagship event brand, born in Mayfair and built around a single DJ taking a room through the world's music in one continuous set.",
    body: 'Global Sound started in the heart of Mayfair as an exclusive nightlife concept and has grown into a recognised music experience. Where most DJ events split the night between several selectors, Global Sound runs on one carefully curated journey: Afrobeats, Amapiano, House, Hip-Hop, R&B, Dancehall, UK Garage, Bashment, Soca, Reggae, Latin, old school classics and global anthems, sequenced to pull a mixed crowd onto the same dancefloor. The draw is the programming. Seamless transitions, musical storytelling and constant crowd reading keep the room engaged from the first record to the last, and the brand continues to grow around audiences who care about exceptional DJing and genuine musical range.',
    highlights: [
      'Originated in Mayfair, Central London',
      "D'Flamz flagship entertainment brand",
      'A single curated multi-genre journey per event',
      'Premium nightlife experience built on music selection and crowd engagement',
    ],
    /* No figures stated in the copy — stats strip is omitted on the detail page. */
    partners: [],
    stats: [],
  },
  {
    slug: 'bpm-festival',
    title: 'BPM Music Festival',
    year: '2021',
    location: 'Wave Beach, Lagos',
    img: 'pjBpm',
    gallery: ['pjBpm', 'pjBpmShawn'],
    layout: 'gallery',
    tags: ['Festival', 'Beach', '10+ DJs'],
    summary:
      "One of Lagos' largest beach music experiences, run in partnership with Wave Beach and Wakanow. Seventeen hours, more than ten DJs, thousands in attendance.",
    body: "D'Flamz partnered with Wave Beach and Wakanow to build BPM, a beachfront festival that ran from noon straight through to five the following morning. More than ten DJs took turns across Afrobeats, Amapiano, House, Hip-Hop, old school and global sounds, giving the crowd a genuinely multi-genre day and night rather than a single lane. It pulled thousands of music lovers to the beach and stands as one of our largest production undertakings to date.",
    highlights: [
      'Partnership with Wave Beach and Wakanow',
      'More than 10 professional DJs',
      '17 hours of continuous music',
      'Large-scale event production and audience engagement',
    ],
    partners: ['Wave Beach', 'Wakanow'],
    stats: [
      { n: '10+', l: 'DJs' },
      { n: '17', l: 'Hours' },
      { n: '1000s', l: 'Attendees' },
    ],
  },
  {
    slug: 'kiss-dj-academy',
    title: 'Kiss DJ Academy',
    year: '2019',
    location: 'Lagos, Nigeria',
    img: 'pjKissAcademyFlammzy',
    gallery: ['pjKissAcademyFlammzy', 'pjKissAcademyStudio'],
    layout: 'gallery',
    tags: ['Talent Development', 'Radio', 'Training'],
    summary:
      'A talent development programme built with Kiss FM 98.9 Lagos to find, train and mentor DJs looking to turn the craft into a career.',
    body: "Working with Kiss FM 98.9 Lagos, we built an academy that went beyond technical training. Participants got practical DJ instruction, live performance opportunities and mentorship from working professionals, which is the combination that actually moves someone from hobbyist to bookable. The standout graduate was awarded a management deal with D'Flamz, giving them a direct route into the professional circuit rather than leaving them to figure it out alone.",
    highlights: [
      'Partnership with Kiss FM 98.9 Lagos',
      'Professional DJ training and mentorship',
      'Live performance experience',
      'Management contract awarded to the top graduate',
    ],
    partners: ['Kiss FM Lagos 98.9'],
    stats: [{ n: '1', l: 'Management deal' }],
  },
  {
    slug: 'mavin-campaign',
    title: 'Mavin Records Campaign',
    year: '2014',
    location: 'Nationwide, Nigeria',
    img: 'pjMavin',
    gallery: ['pjMavin', 'pjDJMavin'],
    layout: 'gallery',
    tags: ['Music Promotion', 'Distribution', 'Radio'],
    summary:
      "A nationwide promotion and distribution campaign supporting Mavin Records' emerging artists, including Reekado Banks, Korede Bello and Di'Ja.",
    body: "D'Flamz partnered with Mavin Records to introduce the label's new generation to audiences across Nigeria. The work ran through club promotion, DJ activations, radio support and grassroots marketing, the channels that actually break a record in Nigeria rather than just announce it. The campaign fed into a strong run for the artists involved, with Reekado Banks going on to take both Headies Rookie of the Year and Next Rated.",
    highlights: [
      'Strategic music promotion and distribution',
      'Club and DJ activation campaigns',
      'Radio and industry engagement',
      'Campaign period culminating in multiple Headies honours',
    ],
    partners: ['Mavin'],
    stats: [
      { n: '3', l: 'Artists supported' },
      { n: '2', l: 'Headies honours' },
    ],
  },
  {
    slug: 'international-promotions',
    title: 'International Artist & DJ Promotions',
    year: 'Ongoing',
    location: 'Lagos and international',
    img: 'pjVuligateFlyer',
    gallery: ['pjVuligateRadio', 'pjVuligateStage', 'pjVuligateClub', 'pjVuligateStreet', 'pjIntlJobeLeicester', 'pjIntlJobeCity105', 'pjIntlWondaArtwork'],
    layout: 'gallery',
    tags: ['International', 'Touring', 'Media'],
    summary:
      'Promotional tours, media runs and club engagements connecting international artists and DJs with Nigerian audiences.',
    body: 'We have built a track record of bringing international talent into the Lagos scene and giving them a real route to an audience rather than a single booking. Working with promoters, media houses, venues and nightlife partners, we have coordinated campaigns and performances for artists including Ntosh Gazi and Jobe London from South Africa, DJ Toyor from Ghana, T Brixton from the UK and Dean Kelly from the US, among others. It is the side of the business that makes us a useful bridge in both directions.',
    highlights: [
      'International artist and DJ promotions',
      'Media and press coordination',
      'Club and venue partnerships',
      'Cross-border entertainment collaborations',
    ],
    partners: [],
    stats: [
      { n: '5+', l: 'International artists' },
      { n: '4', l: 'Countries' },
    ],
  },
  // {
  //   slug: 'john-vuligate-tour',
  //   title: 'John Vuligate Media Tour',
  //   year: '2023',
  //   location: 'Lagos, Nigeria',
  //   img: 'pjVuligateFlyer',
  //   gallery: ['pjVuligateFlyer', ],
  //   layout: 'gallery',
  //   tags: ['Media Tour', 'Radio', 'Artist Promotion'],
  //   partners: [],
  //   stats: [
  //     { n: '7', l: 'Radio stations' },
  //     { n: '9', l: 'Days' },
  //     { n: '1', l: 'Artist' },
  //   ],
  //   summary:
  //     "A nine-day media run putting John Vuligate in front of Lagos radio, powered end to end by D'Flamz.",
  //   body: "D'Flamz built and ran the media tour for John Vuligate across nine days in April, moving him through seven Lagos stations including City 105.1, Rhythm 93.7, Vybz 94.5, Eko 89.7, Max 102.3 and 98.5, alongside Aforevo. The run paired station interviews with club appearances and on-the-ground activation, which is what turns airtime into an actual audience rather than a schedule of visits. Coordinating that many stations inside one window takes relationships, and this is the part of the business those relationships were built for.",
  //   highlights: [
  //     'Seven Lagos radio stations across nine days',
  //     'Station interviews paired with club appearances',
  //     'Full media coordination and scheduling',
  //     "Powered end to end by D'Flamz",
  //   ],
  // },
];

/* ---------------------------------------------------------------------
   EVENTS — upcoming and past shows.
   - date: ISO format (YYYY-MM-DD) so it sorts and filters reliably
   - dj: slug from ROSTER, or null for a D'Flamz brand event
   - img: filename in src/assets/events/, or null for branded placeholder
   - ticketUrl: null hides the ticket button
   - sponsored: true marks a paid listing slot (external DJ or promoter)
   - dj: the HEADLINE act; lineup: supporting DJs, so a single-DJ event
     needs only `dj`
   - gallery: IMAGE SLOT KEYS from src/assets/images.js (see PROJECTS note),
     mainly for past events where the photos are the proof of the night
   - description: longer copy for the detail page; null falls back to blurb
   - price: display string e.g. "From £15", or null to hide
   - endDate: ISO date of the final night for multi-date runs. Omit for
     single-night events. Upcoming/Past filtering uses endDate when present
     so a run stays Upcoming until the last night has passed.
   --------------------------------------------------------------------- */
export const EVENTS = [
  {
    slug: 'london-to-lagos',
    title: 'From London to Lagos with DJ TAI',
    date: '2026-08-21',
    endDate: '2026-08-23',
    time: '10:00 PM',
    venue: 'Marriott and Bheerhugz Café Chevron',
    city: 'Lagos, Nigeria',
    dj: 'tai',
    img: 'evLondonToLagos',
    gallery: [],
    lineup: [],
    tags: ['Open Format', 'Nightlife', 'Two Nights'],
    blurb:
      "DJ TAI brings his London open format sound to Lagos across two nights, Friday at the Marriott and Sunday at Bheerhugz Café Chevron.",
    description:
      "DJ TAI is a London based open format DJ whose sets move between future beats, Afrobeats, Afro house, Amapiano, Hip-Hop, R&B and dancehall. He plays two Lagos dates: Friday 21 August at the Marriott from 10pm, and Sunday 23 August at Bheerhugz Café Chevron from 4pm. Same range across both, pitched late for the Friday and for a daytime crowd on the Sunday. Powered by D'Flamz, supported by Marriott and Bheerhugz Café.",
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  {
    slug: 'kiss-timaya-afterparty',
    title: 'Timaya Official Afterparty',
    date: '2026-08-22',
    time: '11:00 PM',
    venue: 'Tunnel Vision London',
    city: 'London, UK',
    dj: 'kiss',
    img: 'evKissTimaya',
    gallery: [],
    lineup: [],
    tags: ['Afterparty', 'Afrobeats'],
    blurb:
      "DJ Kiss performed at the official Timaya afterparty at Tunnel Vision London, running from 11pm through to 4am.",
    description:
      "The official afterparty for Timaya's London show, held at Tunnel Vision on Jewry Street with DJ Kiss performing, running 11pm to 4am. Presented by SMADE Group and DM Records.",
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  {
    slug: 'nigerian-corner-carnival',
    title: 'Nigerian Corner at Notting Hill Carnival',
    date: '2026-08-30',
    endDate: '2026-08-31',
    time: null,
    venue: 'Nigerian Corner, Notting Hill',
    city: 'London, UK',
    dj: 'flammzy',
    img: 'evNigerianCorner',
    gallery: [],
    lineup: [],
    tags: ['Carnival', 'Afrobeats', 'London'],
    blurb:
      "DJ Flammzy plays Nigerian Corner at Notting Hill Carnival, back for its 40th year.",
    description:
      "DJ Flammzy performs at Nigerian Corner, the Nigerian presence at Notting Hill Carnival, marking its 40th year. Carnival runs across the August bank holiday weekend, with the street celebration on Sunday 30 and Monday 31 August 2026 and the main adult parade on the Monday. Supported by AfriChange and Air Peace.",
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  // date/endDate are a September placeholder; individual city dates unannounced.
  // Replace with the real start date (and endDate) once Shawn announces.
  {
    slug: 'shawn-uk-tour',
    title: 'DJ Shawn UK Tour 2026',
    date: '2026-10-01',
    endDate: '2026-11-30',
    time: '10:00 PM',
    venue: 'UK',
    city: 'London, UK',
    dj: 'shawn',
    img: 'evDJShawn',
    gallery: [],
    lineup: [],
    tags: ['UK Tour', 'Nightlife'],
    blurb:
      "Superstar DJ Shawn takes on the UK, touring venues and creating unforgettable experiences through his blend of sounds from around the world.",
    description: null,
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  {
    slug: 'nova-turkish-night',
    title: 'Turkish Night at Nova Restaurant',
    date: '2026-09-04',
    time: null,
    venue: 'Nova Restaurant, 2 Kendal Ave',
    city: 'London, UK',
    dj: 'yilmaz',
    img: 'evNovaTurkishNight',
    gallery: [],
    lineup: [],
    tags: ['Turkish Night', 'Restaurant', 'London'],
    blurb:
      "Yilmaz Sumbul plays Turkish Night at Nova Restaurant in West London, marking the venue's relaunch.",
    description:
      "Nova Restaurant relaunches with a Turkish Night on Friday 4 September 2026, with Yilmaz Sumbul on the decks. Nova is at 2 Kendal Avenue, London W3 0PA.",
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  {
    slug: 'global-sound-mayfair',
    title: 'Global Sound',
    date: '2026-09-12',
    time: '10:00 PM',
    venue: 'Mayfair',
    city: 'London, UK',
    dj: 'flammzy',
    img: 'evGlobalSoundLondon',
    gallery: [],
    lineup: [],
    tags: ['Global Sound', 'Nightlife'],
    blurb:
      "The flagship Global Sound night returns to Mayfair. One DJ, one continuous journey through global music.",
    description: null,
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
  // date is a September placeholder; individual city dates unannounced.
  // Replace with the real start date (and endDate) once Kiss announces.
  {
    slug: 'kiss-europe-tour',
    title: 'Ajayi in Europe Tour',
    date: '2026-09-30',
    time: null,
    venue: 'Paris, Rome, London, Berlin, Madrid and Athens',
    city: 'Europe',
    dj: 'kiss',
    img: 'evKissEurope',
    gallery: [],
    lineup: [],
    tags: ['Tour', 'Europe', 'Nightlife'],
    blurb:
      "DJ Kiss takes the Ajayi in Europe tour through six cities in September. Individual dates to be announced.",
    description:
      "DJ Kiss brings her sound to Europe across six cities: Paris, Rome, London, Berlin, Madrid and Athens. The tour runs in September 2026 and individual dates are still to be announced. Check back here or follow her for city announcements as they land.",
    price: null,
    ticketUrl: null,
    sponsored: false,
  },
];

/* Filter labels for the Events page */
export const EVENT_FILTERS = ['All', 'Upcoming', 'Past'];
