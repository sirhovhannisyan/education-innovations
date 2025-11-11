import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCTASection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pricing");
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(83, 117, 254, 0.08) 0%, rgba(27, 68, 254, 0.08) 100%)",
        py: { xs: 6, sm: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 4 },
            backgroundColor: "surface.color1",
            borderRadius: { xs: "20px", md: "28px" },
            border: "1px solid",
            borderColor: "surface.color2",
            boxShadow: "0px 18px 36px rgba(27, 68, 254, 0.08)",
            px: { xs: 3, sm: 5, md: 6 },
            py: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              maxWidth: { xs: "100%", md: "60%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              Pricing for Homeworkrooster app
            </Typography>
            <Typography
              variant="body_regular"
              sx={{
                color: "text.secondary",
              }}
            >
              Discover the plan that fits your school&apos;s needs and scale
              with confidence. See how Homeworkrooster supports every classroom.
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={handleNavigate}
            sx={{
              minWidth: { xs: "100%", md: "200px" },
              alignSelf: { xs: "stretch", md: "center" },
            }}
          >
            View pricing
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingCTASection;
