import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface ProblemItemProps {
  text: string;
}

const ProblemItem: React.FC<ProblemItemProps> = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        alignSelf: { xs: "stretch", sm: "stretch", md: "auto" },
        display: "flex",
        alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
        gap: 1,
      }}
    >
      {/* Error Icon */}
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "999px",
          border: { xs: "1px solid", sm: "0.86px solid", md: "1px solid" },
          borderColor: "error.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            padding: { xs: "4px", sm: "3.43px", md: "4px" },
            bgcolor: "surface.color1",
            overflow: "hidden",
            borderRadius: { xs: "8px", sm: "6.86px", md: "8px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              width: { xs: "20px", sm: "17.14px", md: "20px" },
              height: { xs: "20px", sm: "17.14px", md: "20px" },
              position: "relative",
            }}
          >
            <CloseIcon
              sx={{
                width: { xs: "20px", sm: "17.14px", md: "20px" },
                height: { xs: "20px", sm: "17.14px", md: "20px" },
                color: "error.main",
                position: "absolute",
                left: 0,
                top: 0,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Problem Text */}
      <Box
        sx={{
          flex: { xs: "1 1 0", sm: "1 1 0", md: "0 0 auto" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant={
            isMobile || isTablet ? "body_semibold" : "paragraph_semibold"
          }
          sx={{
            color: "text.primary",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

const ProblemSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px

  const problems = [
    "Teacher burnout from repetitive planning and grading",
    "Students disengaged by busywork",
    "Lack of adaptability to different class levels or individuals",
  ];

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        bgcolor: "surface.color2",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      {/* Container */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start",
            md: "flex-start",
          },
          alignItems: { xs: "center", sm: "flex-start", md: "center" },
          gap: { xs: 3, sm: 7.5, md: 7.5 }, // 24px, 60px, 60px
          flexDirection: { xs: "column", sm: "row", md: "row" },
        }}
      >
        {/* Image */}
        <ResponsiveImage
          imageName="problem_section"
          alt="Problem illustration"
          sx={{
            flex: { xs: "0 0 auto", sm: "0 0 auto", md: "1 1 0" },
            width: { xs: "362px", sm: "300px", md: "auto" },
            height: { xs: "274px", sm: "266.28px", md: "507px" },
            borderRadius: { xs: "0px", sm: "17.29px", md: "20px" },
            objectFit: "contain",
            order: { xs: 2, sm: 1, md: 1 },
          }}
        />

        {/* Content */}
        <Box
          sx={{
            flex: { xs: "0 0 auto", sm: "1 1 0", md: "1 1 0" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, sm: 3, md: 5 },
            width: { xs: "100%", sm: "auto", md: "auto" },
            order: { xs: 1, sm: 2, md: 2 },
          }}
        >
          {/* Title + Description */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Problem Chip */}
            <Box
              sx={{
                padding: "6px",
                position: "relative",
                bgcolor: "surface.color3",
                borderRadius: "80px",
                display: "inline-flex",
                alignSelf: "flex-start",
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
                  Problem
                </Typography>
              </Box>
            </Box>

            {/* Title + Description Container */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {/* Heading */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  sx={{
                    color: "text.primary",
                  }}
                >
                  Homework shouldn't drain teachers or bore students.
                </Typography>
              </Box>

              {/* Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  pb: 0.1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={
                    isMobile || isTablet ? "body_regular" : "paragraph_regular"
                  }
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dolor odio, tempus id aliquet quis.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Problems List */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2.5, md: 2.5 }, // 16px, 20px, 20px
            }}
          >
            {problems.map((problem, index) => (
              <ProblemItem key={index} text={problem} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProblemSection;
