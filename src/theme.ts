import { createTheme, type ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      color1: string;
      color2: string;
      color3: string;
    };
    border: {
      main: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      color1: string;
      color2: string;
      color3: string;
    };
    border?: {
      main: string;
    };
  }

  interface TypographyVariants {
    paragraph_semibold: React.CSSProperties;
    paragraph_regular: React.CSSProperties;
    body_semibold: React.CSSProperties;
    body_regular: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    paragraph_semibold?: React.CSSProperties;
    paragraph_regular?: React.CSSProperties;
    body_semibold?: React.CSSProperties;
    body_regular?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraph_semibold: true;
    paragraph_regular: true;
    body_semibold: true;
    body_regular: true;
  }
}

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 644,
      md: 834,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#1B44FE",
    },
    secondary: {
      main: "#52E9B3",
    },
    error: {
      main: "#F04438",
    },
    text: {
      primary: "#1E1E1F",
      secondary: "#6D6D6D",
      disabled: "#A4A4A4",
    },
    surface: {
      color1: "#FFFFFF",
      color2: "#FAFAFA",
      color3: "#DCE5FF",
    },
    border: {
      main: "#E3E3E3",
    },
    divider: "#E9E9E9",
    background: {
      default: "#FFFFFF",
      paper: "#FAFAFA",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    h1: {
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: "64px",
      fontFamily: "DM Sans, sans-serif",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "48px",
      fontFamily: "DM Sans, sans-serif",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "32px",
      fontFamily: "DM Sans, sans-serif",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "20px",
      fontFamily: "DM Sans, sans-serif",
    },
    paragraph_semibold: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
      fontFamily: "DM Sans, sans-serif",
    },
    paragraph_regular: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      fontFamily: "DM Sans, sans-serif",
    },
    body_semibold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      fontFamily: "DM Sans, sans-serif",
    },
    body_regular: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "DM Sans, sans-serif",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "DM Sans, sans-serif",
    },
    body2: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      fontFamily: "DM Sans, sans-serif",
    },
  },
  shadows: [
    "none",
    "0px 4px 20px 0px rgba(27, 68, 254, 0.15)", // Blue shadow
    "0px 2px 8px 0px rgba(0, 0, 0, 0.08)", // Main shadow
    "0px 4px 12px 0px rgba(27, 68, 254, 0.25)",
    "0px 8px 24px 0px rgba(27, 68, 254, 0.2)",
    "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
    "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "0px 12px 24px 0px rgba(0, 0, 0, 0.12)",
    "0px 16px 32px 0px rgba(0, 0, 0, 0.14)",
    "0px 20px 40px 0px rgba(0, 0, 0, 0.16)",
    "0px 24px 48px 0px rgba(0, 0, 0, 0.18)",
    "0px 28px 56px 0px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px 0px rgba(0, 0, 0, 0.22)",
    "0px 36px 72px 0px rgba(0, 0, 0, 0.24)",
    "0px 40px 80px 0px rgba(0, 0, 0, 0.26)",
    "0px 44px 88px 0px rgba(0, 0, 0, 0.28)",
    "0px 48px 96px 0px rgba(0, 0, 0, 0.3)",
    "0px 52px 104px 0px rgba(0, 0, 0, 0.32)",
    "0px 56px 112px 0px rgba(0, 0, 0, 0.34)",
    "0px 60px 120px 0px rgba(0, 0, 0, 0.36)",
    "0px 64px 128px 0px rgba(0, 0, 0, 0.38)",
    "0px 68px 136px 0px rgba(0, 0, 0, 0.4)",
    "0px 72px 144px 0px rgba(0, 0, 0, 0.42)",
    "0px 76px 152px 0px rgba(0, 0, 0, 0.44)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "999px",
          fontFamily: "DM Sans, sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 32px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 8px 24px 0px rgba(27, 68, 254, 0.2)",
          },
        },
        contained: {
          background:
            "radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background:
              "radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)",
            boxShadow: "0px 8px 24px 0px rgba(27, 68, 254, 0.3)",
          },
          "&:disabled": {
            background: "#9AB3FE",
            color: "#FFFFFF",
          },
        },
        outlined: {
          borderColor: "#1B44FE",
          color: "#1B44FE",
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
            borderColor: "#1B44FE",
            backgroundColor: "rgba(27, 68, 254, 0.04)",
          },
        },
        text: {
          color: "#1E1E1F",
          "&:hover": {
            backgroundColor: "rgba(27, 68, 254, 0.04)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          fontFamily: "DM Sans, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          padding: "8px 16px",
          height: "auto",
        },
        outlined: {
          borderColor: "#1B44FE",
          backgroundColor: "rgba(220, 229, 255, 0.3)",
          color: "#1E1E1F",
          borderWidth: "2px",
          "&:hover": {
            backgroundColor: "rgba(220, 229, 255, 0.5)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "24px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            backgroundColor: "#FFFFFF",
            "& fieldset": {
              borderColor: "#E3E3E3",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#1B44FE",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1B44FE",
              borderWidth: "2px",
            },
            "&.Mui-error fieldset": {
              borderColor: "#F04438",
              borderWidth: "2px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#FAFAFA",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#1E1E1F",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            "&.Mui-focused": {
              color: "#1B44FE",
            },
            "&.Mui-error": {
              color: "#F04438",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#A4A4A4",
            opacity: 1,
          },
          "& .MuiFormHelperText-root": {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            marginLeft: "16px",
            "&.Mui-error": {
              color: "#F04438",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
        },
        elevation1: {
          boxShadow: "0px 4px 20px 0px rgba(27, 68, 254, 0.15)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

// Utility gradients
export const blueRadialGradient =
  "radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)";
export const backgroundBlue =
  "linear-gradient(174.87deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)";
export const backgroundWhite =
  "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.3) 100%)";

// Shadow utilities
export const blueShadow = "0px 4px 20px 0px rgba(27, 68, 254, 0.15)";
export const mainShadow = "0px 2px 8px 0px rgba(0, 0, 0, 0.08)";
