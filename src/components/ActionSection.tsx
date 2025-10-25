import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ActionSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        bgcolor: "surface.color1",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.25, // 10px
      }}
    >
      {/* Container */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: { xs: 3, sm: 2, md: 2 }, // 24px, 16px, 16px
        }}
      >
        {/* Text with Icon Container */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2, // 16px
          }}
        >
          {/* Text with Icon */}
          <Box
            sx={{
              height: { xs: "36px", sm: "45px", md: "64px" },
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2, // 16px
              flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap" },
            }}
          >
            {/* "Ready to" text */}
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{
                color: "text.primary",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              Ready to
            </Typography>

            {/* Icon */}
            <Box
              sx={{
                width: { xs: "32px", sm: "40px", md: "56px" },
                height: { xs: "32px", sm: "40px", md: "56px" },
                transform: "rotate(8deg)",
                transformOrigin: "top left",
                background:
                  "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                boxShadow: "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
                overflow: "hidden",
                borderRadius: { xs: "6.86px", sm: "8px", md: "12px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid white",
              }}
            >
              <img
                src="/icons/light.svg"
                alt="Light icon"
                style={{
                  width: isMobile
                    ? "21.69px"
                    : isTablet
                    ? "27.11px"
                    : "37.95px",
                  height: isMobile
                    ? "21.69px"
                    : isTablet
                    ? "27.11px"
                    : "37.95px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>

            {/* "unlock" text */}
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{
                color: "secondary.main",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              unlock
            </Typography>
          </Box>

          {/* "deeper insights into your classroom?" text */}
          <Typography
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
            sx={{
              alignSelf: "stretch",
              color: "text.primary",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            deeper insights into your classroom?
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start", md: "flex-start" },
            gap: 1.5, // 12px
            width: { xs: "100%", sm: "auto", md: "auto" },
          }}
        >
          {/* Primary Button - Join Pilot Program */}
          <Button
            variant="contained"
            onClick={handleContactUs}
            sx={{
              height: { xs: "50px", sm: "auto", md: "50px" },
              px: 3, // 24px
              py: { xs: 1.5, sm: 1, md: 1.5 }, // 12px, 8px, 12px
              background:
                "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
              borderRadius: "999px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1, // 8px
              color: "surface.color1",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "28px",
              width: { xs: "225px", sm: "auto", md: "auto" },
              "&:hover": {
                background:
                  "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                boxShadow: "0px 8px 24px 0px rgba(27, 68, 254, 0.3)",
              },
            }}
          >
            Join Pilot Program
          </Button>

          {/* Secondary Button - Request a demo */}
          <Button
            variant="text"
            onClick={handleContactUs}
            sx={{
              height: { xs: "50px", sm: "auto", md: "50px" },
              px: 3, // 24px
              py: { xs: 1.5, sm: 1, md: 1.5 }, // 12px, 8px, 12px
              borderRadius: "999px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1, // 8px
              color: "text.primary",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "28px",
              border: "none",
              width: { xs: "225px", sm: "auto", md: "auto" },
            }}
          >
            Request a demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionSection;
