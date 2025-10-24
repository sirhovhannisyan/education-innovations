// External URLs configuration
export const EXTERNAL_URLS = {
  HOMEWORKROOSTER:
    import.meta.env.VITE_HOMEWORKROOSTER_URL || "https://homeworkrooster.com/",
  TERMS_CONDITIONS:
    import.meta.env.VITE_TERMS_CONDITIONS_URL ||
    "https://homeworkrooster.com/terms-and-conditions",
} as const;
