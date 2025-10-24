import { Box, Typography } from "@mui/material";
import React from "react";

const SolutionSection: React.FC = () => {
  return (
    <Box
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* Solution Chip */}
      <Box
        sx={{
          padding: "6px",
          position: "relative",
          bgcolor: "surface.color3",
          borderRadius: "80px",
          display: "inline-flex",
          border: "1px solid",
          borderColor: "surface.color1",
        }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 1,
            position: "relative",
            bgcolor: "surface.color1",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid",
            borderColor: "primary.main",
          }}
        >
          <Typography
            variant="body_regular"
            sx={{
              color: "text.primary",
              textAlign: "center",
            }}
          >
            Solution
          </Typography>
        </Box>
      </Box>

      {/* Main Heading with Mixed Colors */}
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "1060px" },
          alignSelf: { xs: "stretch", sm: "stretch", md: "auto" },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
            fontFamily: "DM Sans",
            fontWeight: 700,
            lineHeight: { xs: 1.2, sm: 1.2, md: 1.2 },
            wordWrap: "break-word",
          }}
        >
          <Box
            component="span"
            sx={{
              color: "text.primary",
              display: { xs: "contents", sm: "block", md: "block" },
            }}
          >
            We built a tool that changes homework from a burden or{" "}
          </Box>
          <Box component="span" sx={{ color: "divider" }}>
            struggle into a purposeful,
          </Box>
          <Box component="span" sx={{ color: "text.primary" }}>
            {" "}
          </Box>
          <Box component="span" sx={{ color: "divider" }}>
            flexible, and engaging experience.
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionSection;
