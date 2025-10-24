import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EXTERNAL_URLS } from "../config/constants";

// Logo component
const Logo: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "7.51px",
      }}
    >
      <Box
        component="img"
        src="/logo.svg"
        alt="Logo"
        sx={{
          height: "32px",
          width: "auto",
        }}
      />
      {!isTablet && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "68.68px",
          }}
        >
          <Typography
            sx={{
              color: "text.primary",
              fontSize: "12.88px",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Education
          </Typography>
          <Typography
            sx={{
              color: "text.primary",
              fontSize: "12.88px",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Innovations
          </Typography>
        </Box>
      )}
    </Box>
  );
};

// Navigation Links component
const NavLinks: React.FC<{ isMobile?: boolean; onLinkClick?: () => void }> = ({
  isMobile = false,
  onLinkClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (link: string) => {
    if (onLinkClick) {
      onLinkClick();
    }

    switch (link) {
      case "Home":
        if (location.pathname === "/") {
          // If already on homepage, scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Navigate to homepage
          navigate("/");
        }
        break;
      case "Features":
        if (location.pathname === "/") {
          // If on homepage, scroll to FeaturesSection
          const featuresSection = document.getElementById("features-section");
          if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to homepage and scroll to features
          navigate("/");
          setTimeout(() => {
            const featuresSection = document.getElementById("features-section");
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
        break;
      case "How it works":
        if (location.pathname === "/") {
          // If on homepage, scroll to HowItWorksSection
          const howItWorksSection = document.getElementById(
            "how-it-works-section"
          );
          if (howItWorksSection) {
            howItWorksSection.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to homepage and scroll to how it works
          navigate("/");
          setTimeout(() => {
            const howItWorksSection = document.getElementById(
              "how-it-works-section"
            );
            if (howItWorksSection) {
              howItWorksSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
        break;
      case "Contact us":
        navigate("/contact-us");
        break;
      default:
        break;
    }
  };

  const links = ["Home", "Features", "How it works", "Contact us"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "32px" : "40px",
      }}
    >
      {links.map((link) => (
        <Typography
          key={link}
          onClick={() => handleNavigation(link)}
          variant={isMobile ? "body_semibold" : "paragraph_semibold"}
          sx={{
            textAlign: "center",
            color: "text.primary",
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
};

// Sign In Button component
const SignInButton: React.FC<{
  size?: "small" | "large";
  fullWidth?: boolean;
}> = ({ size = "large", fullWidth = false }) => {
  const handleSignIn = () => {
    window.open(EXTERNAL_URLS.HOMEWORKROOSTER, "_blank");
  };

  return (
    <Button
      variant="contained"
      onClick={handleSignIn}
      fullWidth={fullWidth}
      sx={{
        width: fullWidth ? "auto" : size === "large" ? "120px" : "auto",
        minWidth: size === "small" ? "124px" : "120px",
        height: size === "large" ? "50px" : "auto",
        py: size === "large" ? "12px" : "8px",
      }}
    >
      Sign in
    </Button>
  );
};

// Main Header Component
const Header: React.FC = () => {
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 834px

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "surface.color1",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            {/* Main Header Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 1,
                px: isMobile ? 2 : 3,
                pr: isMobile ? 2.5 : 1,
              }}
            >
              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              {isDesktop && (
                <>
                  <Box
                    sx={{ flex: 1, display: "flex", justifyContent: "center" }}
                  >
                    <NavLinks />
                  </Box>
                  <SignInButton size="large" />
                </>
              )}

              {/* Tablet Navigation */}
              {isTablet && !isMobile && (
                <>
                  <NavLinks />
                  <SignInButton size="small" />
                </>
              )}

              {/* Mobile Hamburger Menu */}
              {isMobile && (
                <IconButton
                  onClick={handleMenuToggle}
                  sx={{
                    p: 0,
                    width: "30px",
                    height: "30px",
                  }}
                >
                  {mobileMenuOpen ? (
                    <X
                      size={24}
                      style={{ color: "var(--mui-palette-text-primary)" }}
                    />
                  ) : (
                    <Menu
                      size={24}
                      style={{ color: "var(--mui-palette-text-primary)" }}
                    />
                  )}
                </IconButton>
              )}
            </Box>

            {/* Mobile Expanded Menu */}
            {isMobile && (
              <Collapse in={mobileMenuOpen}>
                <Box
                  sx={{
                    mt: 4,
                    pb: 3,
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                      mb: 4,
                    }}
                  >
                    <NavLinks isMobile onLinkClick={handleMenuToggle} />
                  </Box>
                  <SignInButton size="small" fullWidth />
                </Box>
              </Collapse>
            )}
          </Paper>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
