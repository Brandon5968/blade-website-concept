// Single source of truth for company details (from the existing site).
export const site = {
  name: "Michael O'Connor & Son Industries",
  shortName: "Michael O'Connor & Son",
  tagline: "Industrial, Commercial & Domestic Chimney Sweeps",
  established: 1990,
  yearsExperience: "30+",
  phone: "1300 651 631",
  phoneHref: "tel:1300651631",
  fax: "(03) 5940 8326",
  email: "info@chimneysweeps.com.au",
  postal: "PO Box 258, Beaconsfield VIC 3807",
  region: "Melbourne and Victoria",
  hours: "Open 7 days, with 24 hour emergency call-out",
  accreditations: [
    "Australian Home Heating Association member",
    "WorkSafe Victoria confined spaces certified",
    "Fully insured, with safety-trained crews",
  ],
} as const;
