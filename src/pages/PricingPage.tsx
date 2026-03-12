import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const PricingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(225, 235, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)",
        pt: { xs: 15, sm: 18 },
        pb: { xs: 10, sm: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: "999px",
              border: "1px solid",
              borderColor: "primary.main",
              backgroundColor: "surface.color1",
            }}
          >
            <Typography variant="body_semibold" color="primary.main">
              Pricing for Homeworkrooster app
            </Typography>
          </Box>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              maxWidth: "800px",
              color: "text.primary",
              fontWeight: 700,
            }}
          >
            Simple, Fair Pricing
          </Typography>

          <Typography
            variant="body_regular"
            sx={{
              maxWidth: "820px",
              color: "text.secondary",
            }}
          >
            At Homeworkrooster, we believe in fair and transparent pricing for
            every institution. Our goal is to make high-quality AI-powered
            English learning accessible to students everywhere.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            mx: "auto",
            maxWidth: "640px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0px 24px 64px rgba(27, 68, 254, 0.08)",
            backgroundColor: "surface.color1",
            border: "1px solid",
            borderColor: "surface.color2",
            px: { xs: 4, sm: 6 },
            py: { xs: 5, sm: 6 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="body_semibold"
            sx={{
              color: "primary.main",
              backgroundColor: "rgba(27, 68, 254, 0.08)",
              px: 2,
              py: 0.5,
              borderRadius: "999px",
            }}
          >
            Start with a free 2-month trial
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            then 10–20 CZK
          </Typography>
          <Typography
            variant="body_regular"
            sx={{ color: "text.secondary", maxWidth: "460px" }}
          >
            per student per month, depending on student volume. The exact price
            is finalized at the end of the trial period.
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 }, maxWidth: "820px", mx: "auto" }}>
          <Typography
            variant="body_regular"
            sx={{
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            We aim to keep our pricing honest, sustainable, and globally fair
            allowing every institution to bring meaningful AI-driven learning
            experiences to their students at a price that respects both quality
            and accessibility.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
