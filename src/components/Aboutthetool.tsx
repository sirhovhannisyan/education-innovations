import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  imageHeight?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  imageHeight = "353px",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        background: "white",
        boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
        overflow: "hidden",
        borderRadius: { xs: "24px", sm: "32px", md: "32px" },
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "246px", sm: "388px", md: imageHeight },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <ResponsiveImage
          imageName={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          alignSelf: "stretch",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5, md: 1.5 }, // 8px, 12px, 12px
        }}
      >
        <Typography
          variant={isTablet ? "paragraph_semibold" : "h4"}
          sx={{
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={isMobile || isTablet ? "body_regular" : "paragraph_regular"}
          sx={{
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const AboutTheTool: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px

  const features = [
    {
      image: "tool_image_1",
      title: "Class analytics",
      description:
        "Submission tracking and mistake distribution for quick intervention.",
    },
    {
      image: "tool_image_2",
      title: "Individual analytics",
      description:
        "Detailed view of each learner's progress and problem areas.",
    },
    {
      image: "tool_image_3",
      title: "Homework generator",
      description:
        "Set CEFR level, duration, and skills — the system drafts the practice.",
    },
    {
      image: "tool_image_4",
      title: "Fully editable practice",
      description: "Auto‑generated exercises you can tweak before assigning.",
    },
  ];

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
        justifyContent: { xs: "center", sm: "flex-start", md: "center" },
        alignItems: "center",
        gap: { xs: 2.5, sm: 4, md: 5 }, // 20px, 32px, 40px
      }}
    >
      {/* Title + Description */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* About tool Chip */}
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
              About tool
            </Typography>
          </Box>
        </Box>

        {/* Title + Description Container */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "838px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{
                color: "text.primary",
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
            >
              What teachers can do
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant={
              isMobile || isTablet ? "body_regular" : "paragraph_regular"
            }
            sx={{
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Teachers can create customized CEFR‑aligned assignments in minutes,
            <br />
            track who submitted and how they performed at a glance and many
            more.
          </Typography>
        </Box>
      </Box>

      {/* Content - Feature Cards */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 2.5, md: 2.5 }, // 16px, 20px, 20px
        }}
      >
        {/* Tablet & Mobile: All cards stacked */}
        {/* Desktop: First Row - Cards 1 & 2 */}
        <Box
          sx={{
            alignSelf: "stretch",
            height: { xs: "auto", sm: "500px", md: "500px" },
            display: { xs: "flex", sm: "flex", md: "flex" },
            gap: { xs: 2, sm: 0, md: 2.5 },
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          {/* Card 1 - Class analytics */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "496px" },
              height: { xs: "auto", sm: "500px", md: "500px" },
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <FeatureCard
              image={features[0].image}
              title={features[0].title}
              description={features[0].description}
            />
          </Box>

          {/* Card 2 - Individual analytics - Hidden on tablet/mobile, shown on desktop */}
          <Box
            sx={{
              flex: { xs: "0 0 auto", sm: "0 0 auto", md: "1 1 0" },
              height: { xs: "auto", sm: "500px", md: "500px" },
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <FeatureCard
              image={features[1].image}
              title={features[1].title}
              description={features[1].description}
              imageHeight="352px"
            />
          </Box>
        </Box>

        {/* Card 2 - Individual analytics - Visible on tablet/mobile as separate card */}
        <Box
          sx={{
            alignSelf: "stretch",
            height: { xs: "auto", sm: "500px", md: "auto" },
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <FeatureCard
            image={features[1].image}
            title={features[1].title}
            description={features[1].description}
            imageHeight="352px"
          />
        </Box>

        {/* Desktop: Second Row - Cards 3 & 4 */}
        {/* Tablet/Mobile: Separate cards */}
        <Box
          sx={{
            alignSelf: "stretch",
            height: { xs: "auto", sm: "500px", md: "500px" },
            display: { xs: "flex", sm: "flex", md: "flex" },
            gap: { xs: 2, sm: 0, md: 2.5 },
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          {/* Card 3 - Homework generator */}
          <Box
            sx={{
              flex: { xs: "0 0 auto", sm: "1 1 0", md: "1 1 0" },
              height: { xs: "auto", sm: "500px", md: "500px" },
            }}
          >
            <FeatureCard
              image={features[2].image}
              title={features[2].title}
              description={features[2].description}
            />
          </Box>

          {/* Card 4 - Fully editable practice - Hidden on tablet/mobile, shown on desktop */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "496px" },
              height: { xs: "auto", sm: "500px", md: "500px" },
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <FeatureCard
              image={features[3].image}
              title={features[3].title}
              description={features[3].description}
            />
          </Box>
        </Box>

        {/* Card 4 - Fully editable practice - Visible on tablet/mobile as separate card */}
        <Box
          sx={{
            alignSelf: "stretch",
            height: { xs: "auto", sm: "500px", md: "auto" },
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <FeatureCard
            image={features[3].image}
            title={features[3].title}
            description={features[3].description}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutTheTool;
