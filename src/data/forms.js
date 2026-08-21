/* ---------------------------------------------------------------------
   FORM OPTIONS — two forms: Book a DJ (structured) and Enquiry (simple).
   Both submit via mailto to LINKS.email (no backend for now).
   --------------------------------------------------------------------- */
export const BOOKING_EVENT_TYPES = [
  'Wedding',
  'Birthday / Private Party',
  'Club Night',
  'Corporate / Brand Event',
  'Festival',
  'Concert / Show',
  'Brunch / Day Party',
  'Bar / Lounge Residency',
  'Other',
];

export const BOOKING_CROWD_SIZES = [
  'Under 100',
  '100 to 300',
  '300 to 800',
  '800 to 2,000',
  '2,000+',
];

/* USD as an international default — edit for NGN or dual currency if preferred */
export const BOOKING_BUDGETS = [
  'Prefer to discuss',
  'Under $500',
  '$500 to $1,500',
  '$1,500 to $5,000',
  '$5,000 to $15,000',
  '$15,000+',
];

export const BOOKING_EQUIPMENT = [
  'Yes, I need full sound & mixing gear',
  'Partial, some equipment needed',
  'No, the venue is fully equipped',
  'Not sure yet',
];

export const ENQUIRY_SUBJECTS = [
  'General enquiry',
  'Booking question',
  'Press / Media',
  'Partnership / Sponsorship',
  "I'm a DJ who wants to join",
  'Other',
];

/* Options for the "How did you hear about us?" field on the booking form */
export const REFERRAL_SOURCES = [
  'Instagram',
  'Google search',
  'Referred by a DJ',
  'Referred by a friend',
  'Saw us at an event',
  'Partner or affiliate',
  'Other',
];
