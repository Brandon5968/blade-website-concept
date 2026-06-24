// Single source of truth for company details (from the existing site + owner brief).
export const site = {
  name: "Michael O'Connor & Son Industries",
  shortName: "Michael O'Connor & Son",
  legalName: "Michael O'Connor & Son Industries Pty Ltd",
  tagline: "Industrial, Commercial & Domestic Chimney Sweeps",
  established: 1990,
  yearsExperience: "30+",
  abn: "62 069 253 872",
  phone: "1300 651 631",
  phoneHref: "tel:1300651631",
  fax: "(03) 5940 8326",
  email: "info@chimneysweeps.com.au",
  postal: "PO Box 258, Beaconsfield VIC 3807",
  hours: "Open 24 hours, 7 days",
  emergency: "24 hour emergency call-out",
  serviceAreas: {
    domesticCommercial: "Victoria-wide",
    industrial: "Australia-wide",
  },
  accreditations: [
    "Australian Home Heating Association member",
    "WorkSafe Victoria confined spaces certified",
    "Fully insured, safety-trained crews",
    "Contractors board erected on every site",
  ],
} as const;
