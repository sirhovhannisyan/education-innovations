import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Play } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";

const Hero: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 834px

  const handleWatchVideo = () => {
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRequestDemo = () => {
    navigate("/contact-us");
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        height: { xs: "auto", sm: "auto", md: "100vh" },
        pb: isMobile ? 3 : isTablet ? 7 : 12,
        px: isMobile ? 2.5 : isTablet ? 5 : 12.5,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: isMobile ? 3 : isTablet ? "54px" : 12,
        background:
          "linear-gradient(175deg, #D9E7FE 37%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    >
      {/* Hero Content */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 3 : 0,
          flexWrap: "wrap",
          mt: isMobile ? 12.25 : isTablet ? 16.75 : 23.25,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: isMobile ? "none" : isDesktop ? "1 1 auto" : "1 1 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: isMobile ? 2.5 : isTablet ? 4 : 6,
            maxWidth: isTablet ? "calc(100% - 279px)" : undefined,
          }}
        >
          {/* Headline Section */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: isMobile ? 2 : isTablet ? 2 : 4,
            }}
          >
            {/* Line 1: Innovating homework */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Typography
                variant={isMobile ? "h3" : isTablet ? "h2" : "h1"}
                sx={{
                  color: "text.primary",
                }}
              >
                Innovating homework
              </Typography>
            </Box>

            {/* Line 2: Empowering students */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant={isMobile || isTablet ? "h3" : "h2"}
                sx={{
                  color: "text.primary",
                }}
              >
                Empowering
              </Typography>
              <Box
                sx={{
                  px: isMobile ? 3 : isTablet ? 3 : 4,
                  py: isMobile ? 1 : isTablet ? "6px" : 1,
                  bgcolor: "surface.color1",
                  borderRadius: "999px",
                  border: "1px solid",
                  borderColor: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1.25,
                }}
              >
                <Typography
                  variant={isMobile || isTablet ? "paragraph_semibold" : "h4"}
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  students
                </Typography>
              </Box>
            </Box>

            {/* Line 3: Supporting teachers */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: isMobile ? 1 : 2,
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}
            >
              <Typography
                variant={isMobile || isTablet ? "h3" : "h2"}
                sx={{
                  color: "text.primary",
                }}
              >
                Supporting
              </Typography>
              {/* Teacher avatars container with overlap */}
              <Box
                sx={{
                  width: isMobile ? "104px" : isTablet ? "128px" : "152px",
                  height: isMobile ? "32px" : isTablet ? "48px" : "56px",
                  position: "relative",
                  borderRadius: "999px",
                }}
              >
                <Box
                  component="img"
                  src="/teacher_1.png"
                  alt="Teacher 1"
                  sx={{
                    width: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    height: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    left: "0px",
                    top: "0px",
                    position: "absolute",
                    borderRadius: "999px",
                    border: isMobile
                      ? "0.2rem solid"
                      : isTablet
                      ? "0.21rem solid"
                      : "0.25rem solid",
                    borderColor: "surface.color1",
                  }}
                />
                <Box
                  component="img"
                  src="/teacher_2.png"
                  alt="Teacher 2"
                  sx={{
                    width: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    height: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    left: isMobile ? "36px" : isTablet ? "40px" : "48px",
                    top: "0px",
                    position: "absolute",
                    borderRadius: "999px",
                    border: isMobile
                      ? "0.2rem solid"
                      : isTablet
                      ? "0.21rem solid"
                      : "0.25rem solid",
                    borderColor: "surface.color1",
                  }}
                />
                <Box
                  component="img"
                  src="/teacher_3.png"
                  alt="Teacher 3"
                  sx={{
                    width: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    height: isMobile ? "32px" : isTablet ? "48px" : "56px",
                    left: isMobile ? "72px" : isTablet ? "80px" : "96px",
                    top: "0px",
                    position: "absolute",
                    borderRadius: "999px",
                    border: isMobile
                      ? "0.2rem solid"
                      : isTablet
                      ? "0.21rem solid"
                      : "0.25rem solid",
                    borderColor: "surface.color1",
                  }}
                />
              </Box>
              <Typography
                variant={isMobile || isTablet ? "h3" : "h2"}
                sx={{
                  color: "text.primary",
                }}
              >
                teachers
              </Typography>
            </Box>
          </Box>

          {/* Description and CTA Section */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: { xs: "block", sm: "flex", md: "flex" },
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: isMobile ? 3 : isTablet ? 2 : 3,
            }}
          >
            {/* Description */}
            <Typography
              variant={
                isMobile || isTablet ? "body_regular" : "paragraph_regular"
              }
              sx={{
                alignSelf: "stretch",
                color: "text.secondary",
                width: isMobile ? "362px" : isTablet ? "auto" : "610px",
              }}
            >
              Our AI-powered platform reduces teacher burnout, engages students,
              and increases classroom adaptability.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                alignSelf: isMobile ? "stretch" : "flex-start",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 2,
                flexDirection: isMobile ? "column" : "row",
                mt: isMobile ? 3 : 0,
              }}
            >
              <Button
                variant="contained"
                onClick={handleWatchVideo}
                startIcon={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                      bgcolor: "white",
                      borderRadius: "50%",
                      p: 0.5,
                    }}
                  >
                    <Play
                      size={16}
                      style={{ color: "#1B44FE", fill: "#1B44FE" }}
                    />
                  </Box>
                }
                fullWidth={isMobile}
                sx={{
                  height: isMobile ? "auto" : "50px",
                  py: isMobile ? 1 : 1.5,
                }}
              >
                Watch video
              </Button>
              <Button
                variant="text"
                onClick={handleRequestDemo}
                fullWidth={isMobile}
                sx={{
                  height: isMobile ? "auto" : "50px",
                  py: isMobile ? 1 : 1.5,
                }}
              >
                Request a demo
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <ResponsiveImage
          imageName="hero_image"
          alt="Hero illustration"
          sx={{
            width: isMobile
              ? "100%"
              : isTablet
              ? "263px"
              : { md: "45%", lg: "580px" },
            height: isMobile ? "296px" : isTablet ? "216px" : "auto",
            maxWidth: isDesktop ? "580px" : undefined,
            position: "relative",
            order: isMobile ? -1 : 0, // Move image to top on mobile
            flexShrink: 0,
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
