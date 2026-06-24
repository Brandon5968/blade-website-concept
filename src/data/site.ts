// Single source of truth for company details (pulled from the live site).
export const site = {
  name: "Michael O'Connor & Son Industries",
  shortName: "O'Connor Chimney Sweeps",
  tagline: "Industrial, Commercial & Domestic Chimney Sweeps",
  established: 1990,
  yearsExperience: "30+",
  phone: "1300 651 631",
  phoneHref: "tel:1300651631",
  fax: "(03) 5940 8326",
  email: "info@chimneysweeps.com.au",
  postal: "PO Box 258, Beaconsfield VIC 3807",
  region: "Melbourne & Victoria-wide",
  hours: "7 days a week · 24-hour emergency call-out",
  accreditations: [
    "Australian Home Heating Association (AHHA) member",
    "WorkSafe Victoria — Confined Spaces Code of Practice certified",
    "Fully insured & safety-trained crews",
  ],
} as const;
