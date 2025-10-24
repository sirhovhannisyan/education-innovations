// External URLs configuration
export const EXTERNAL_URLS = {
  HOMEWORKROOSTER:
    import.meta.env.VITE_HOMEWORKROOSTER_URL || "https://homeworkrooster.com/",
  TERMS_CONDITIONS:
    import.meta.env.VITE_TERMS_CONDITIONS_URL ||
    "https://homeworkrooster.com/terms-and-conditions",
} as const;

// API endpoints configuration
export const API_ENDPOINTS = {
  CONTACT_EMAIL:
    import.meta.env.VITE_CONTACT_EMAIL_API ||
    "https://api-prod-388599107889.europe-west4.run.app/education/email",
} as const;
