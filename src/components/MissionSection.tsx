import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MissionSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <Box
      id="mission-section"
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 },
        py: { xs: 3, sm: 7, md: 12 },
        bgcolor: "surface.color2",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 4, sm: 5, md: 6 },
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
        {/* Mission Chip */}
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
              Our Mission
            </Typography>
          </Box>
        </Box>

        {/* Title + Description Container */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "1060px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* Heading */}
          <Typography
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
            sx={{
              color: "text.primary",
              textAlign: "center",
            }}
          >
            Supporting the foundation of life through education
          </Typography>

          {/* Description */}
          <Typography
            variant={
              isMobile || isTablet ? "body_regular" : "paragraph_regular"
            }
            sx={{
              color: "text.secondary",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Education Innovations is born from the belief that foundational
            learning improves all higher learning. We support teachers and
            students by using AI as a mirror, not a master.
          </Typography>
        </Box>
      </Box>

      {/* Core Beliefs Card with Gradient Background */}
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1060px" },
          background:
            "linear-gradient(179deg, rgba(217, 231, 254, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
          borderRadius: "24px",
          p: { xs: 3, sm: 4, md: 5 },
          border: "1px solid",
          borderColor: "primary.main",
          borderWidth: "1px",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 12px 32px -2px rgba(27, 68, 254, 0.25)",
          },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(27, 68, 254, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(30%, -30%)",
          },
        }}
      >
        <CardContent
          sx={{
            p: 0,
            "&:last-child": { pb: 0 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2.5, sm: 3, md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 0.5, sm: 1, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, sm: 48, md: 56 },
                  height: { xs: 40, sm: 48, md: 56 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                  boxShadow:
                    "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                  borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                  border: "2px solid white",
                }}
              >
                <img
                  src="/icons/book_pen.svg"
                  alt="Core beliefs icon"
                  style={{
                    width: isMobile ? 24 : isTablet ? 28 : 32,
                    height: isMobile ? 24 : isTablet ? 28 : 32,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                }}
              >
                Our Core Beliefs
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: { xs: 2, sm: 2, md: 2.5 },
              }}
            >
              {[
                "People are naturally hungry for knowledge and experience.",
                "Mistakes are essential data for growth.",
                "Teachers are irreplaceable guides.",
                "AI must assist, not direct.",
                "When foundational learning improves, all higher learning improves.",
              ].map((belief, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    p: 2.5,
                    borderRadius: "16px",
                    bgcolor: "surface.color1",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 4px 12px rgba(27, 68, 254, 0.1)",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      minWidth: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 700,
                      boxShadow: "0px 2px 8px rgba(27, 68, 254, 0.3)",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    variant={isMobile ? "body_regular" : "paragraph_regular"}
                    sx={{ color: "text.secondary", lineHeight: 1.6 }}
                  >
                    {belief}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                mt: { xs: 1, sm: 1.5, md: 2 },
                p: 2.5,
                borderRadius: "16px",
                bgcolor: "surface.color1",
                borderLeft: "4px solid",
                borderColor: "primary.main",
              }}
            >
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                We send children to school because we know it is a human right
                and the best way to support their existence. Many are lost along
                the way. What if we can use failure better, not lose to it? It
                starts with supporting teachers. Though this tool focuses on
                English education, the concept of providing data about weakest
                abilities is applicable to all disciplines in any language.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Challenge & Solution Grid */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1060px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },
          gap: { xs: 3, sm: 3, md: 4 },
        }}
      >
        {/* The Challenge Card */}
        <Card
          elevation={0}
          sx={{
            backgroundColor: "surface.color1",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            p: { xs: 3, sm: 4, md: 4 },
            border: "2px solid",
            borderColor: "error.main",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 12px 32px -2px rgba(244, 68, 56, 0.25)",
            },
            height: "100%",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background:
                "linear-gradient(90deg, #F04438 0%, rgba(244, 68, 56, 0.5) 100%)",
            },
          }}
        >
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 2.5 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: { xs: 32, sm: 36, md: 40 },
                    height: { xs: 32, sm: 36, md: 40 },
                    borderRadius: "50%",
                    bgcolor: "error.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.1,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 20, sm: 24, md: 28 },
                      height: { xs: 20, sm: 24, md: 28 },
                      borderRadius: "50%",
                      bgcolor: "error.main",
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  The Challenge
                </Typography>
              </Box>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary" }}
              >
                Across the world, teachers are overwhelmed:
              </Typography>
              <List sx={{ pl: 0, listStyleType: "none" }}>
                {[
                  "Time swallowed by the system",
                  "Hours outside work to help students",
                  "Constant self-reflection that can break a teacher",
                  "Limited time to personalize learning",
                  "Burnout spreading from educators to students",
                  "Schools lacking staffing and resources",
                  "Difficulty motivating students",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 0.5,
                      px: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        minWidth: "6px",
                        mt: 1,
                        borderRadius: "50%",
                        bgcolor: "error.main",
                      }}
                    />
                    <Typography
                      variant={isMobile ? "body_regular" : "paragraph_regular"}
                      sx={{ color: "text.secondary" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", mt: 1 }}
              >
                When teachers burn out, students lose direction. We need to
                support teachers better at doing what they already want to do:
                teach and change lives.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Our Solution Card */}
        <Card
          elevation={0}
          sx={{
            background:
              "linear-gradient(135deg, rgba(27, 68, 254, 0.05) 0%, rgba(83, 117, 254, 0.02) 100%)",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            p: { xs: 3, sm: 4, md: 4 },
            border: "2px solid",
            borderColor: "primary.main",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 12px 32px -2px rgba(27, 68, 254, 0.3)",
            },
            height: "100%",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "120px",
              height: "120px",
              background:
                "radial-gradient(circle, rgba(27, 68, 254, 0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              transform: "translate(30%, 30%)",
            },
          }}
        >
          <CardContent
            sx={{
              p: 0,
              "&:last-child": { pb: 0 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 2.5 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: { xs: 40, sm: 48, md: 56 },
                    height: { xs: 40, sm: 48, md: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                    borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                    border: "2px solid white",
                  }}
                >
                  <img
                    src="/icons/flash.svg"
                    alt="Solution icon"
                    style={{
                      width: isMobile ? 24 : isTablet ? 28 : 32,
                      height: isMobile ? 24 : isTablet ? 28 : 32,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  Our Solution
                </Typography>
              </Box>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary" }}
              >
                We use AI as a reflection of humanity—good and bad. Our
                self-analyzing homework tool helps teachers reclaim their
                precious time.
              </Typography>
              <Typography
                variant={isMobile ? "body_semibold" : "paragraph_semibold"}
                sx={{ color: "text.primary", mt: 1 }}
              >
                The English Homework Assistant
              </Typography>
              <List sx={{ pl: 0, listStyleType: "none" }}>
                {[
                  "Teachers create personalized exercises in minutes",
                  "Students complete 20–45 minute tasks",
                  "AI grades responses instantly",
                  "Students see mistakes immediately",
                  "Teachers see patterns across the classroom",
                  "Courses adapt to learner needs",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 0.5,
                      px: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        minWidth: "6px",
                        mt: 1,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                      }}
                    />
                    <Typography
                      variant={isMobile ? "body_regular" : "paragraph_regular"}
                      sx={{ color: "text.secondary" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", mt: 1 }}
              >
                This is not automation replacing teachers. This is AI enhancing
                the daily work of education.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Philosophy & Foundation Cards */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1060px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },
          gap: { xs: 3, sm: 3, md: 4 },
        }}
      >
        {/* Philosophy Card */}
        <Card
          elevation={0}
          sx={{
            backgroundColor: "surface.color1",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            p: { xs: 3, sm: 4, md: 4 },
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 12px 32px -2px rgba(82, 233, 179, 0.2)",
            },
            height: "100%",
            border: "1px solid",
            borderColor: "divider",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              background:
                "linear-gradient(180deg, #52E9B3 0%, rgba(82, 233, 179, 0.3) 100%)",
              borderRadius: "24px 0 0 24px",
            },
          }}
        >
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 2.5 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: { xs: 40, sm: 48, md: 56 },
                    height: { xs: 40, sm: 48, md: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #52E9B3 37%, #7FFFD4 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(82, 233, 179, 0.24)",
                    borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                    border: "2px solid white",
                  }}
                >
                  <img
                    src="/icons/light.svg"
                    alt="Philosophy icon"
                    style={{
                      width: isMobile ? 24 : isTablet ? 28 : 32,
                      height: isMobile ? 24 : isTablet ? 28 : 32,
                      filter: "brightness(0) saturate(100%)",
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  AI as a Mirror, Not a Master
                </Typography>
              </Box>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary" }}
              >
                AI cannot replace the truth found in human experience. We stop
                thinking of replacement and think of enhancement. AI should:
              </Typography>
              <List sx={{ pl: 0, listStyleType: "none" }}>
                {[
                  "Reflect the learner's mistakes",
                  "Highlight patterns",
                  "Provide direction",
                  "Remove unnecessary burdens",
                  "Allow focus on meaningful learning",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 0.5,
                      px: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        minWidth: "6px",
                        mt: 1,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                      }}
                    />
                    <Typography
                      variant={isMobile ? "body_regular" : "paragraph_regular"}
                      sx={{ color: "text.secondary" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", mt: 1 }}
              >
                People must remain the decision-makers. AI should open doors,
                not choose paths.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Foundation Card */}
        <Card
          elevation={0}
          sx={{
            background:
              "linear-gradient(135deg, rgba(217, 231, 254, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            p: { xs: 3, sm: 4, md: 4 },
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 12px 32px -2px rgba(27, 68, 254, 0.2)",
            },
            height: "100%",
            border: "1px solid",
            borderColor: "primary.main",
            borderWidth: "1px",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              top: -50,
              right: -50,
              width: "150px",
              height: "150px",
              background:
                "radial-gradient(circle, rgba(27, 68, 254, 0.08) 0%, transparent 70%)",
              borderRadius: "50%",
            },
          }}
        >
          <CardContent
            sx={{
              p: 0,
              "&:last-child": { pb: 0 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 2.5 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: { xs: 40, sm: 48, md: 56 },
                    height: { xs: 40, sm: 48, md: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                    borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                    border: "2px solid white",
                  }}
                >
                  <img
                    src="/icons/book.svg"
                    alt="Foundation icon"
                    style={{
                      width: isMobile ? 24 : isTablet ? 28 : 32,
                      height: isMobile ? 24 : isTablet ? 28 : 32,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  Why Foundational Subjects?
                </Typography>
              </Box>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary" }}
              >
                All advanced knowledge—engineering, medicine, research,
                technology—depends on early mastery of basic skills. If AI can
                reliably support:
              </Typography>
              <List sx={{ pl: 0, listStyleType: "none" }}>
                {[
                  "Language learning",
                  "Mathematics",
                  "The sciences",
                  "Understanding the natural world",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 0.5,
                      px: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        minWidth: "6px",
                        mt: 1,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                      }}
                    />
                    <Typography
                      variant={isMobile ? "body_regular" : "paragraph_regular"}
                      sx={{ color: "text.secondary" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", mt: 1 }}
              >
                The bottom layers of education hold up the entire structure.
                Supporting them is the only responsible place to begin.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Results & Closing Card */}
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1060px" },
          backgroundColor: "surface.color1",
          boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
          borderRadius: "24px",
          p: { xs: 3, sm: 4, md: 5 },
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 24px -1px rgba(219, 225, 255, 0.6)",
          },
        }}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 3.5, md: 4 },
            }}
          >
            <Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Proven Early Implementation
              </Typography>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary", mb: 2 }}
              >
                Our homework assistant is being piloted at the Czech University
                of Life Sciences in Prague, providing clear direction for
                teachers to adapt at both class and individual levels.
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: { xs: 2, sm: 2, md: 2.5 },
                }}
              >
                {[
                  "Reduced teacher workload",
                  "Higher student engagement",
                  "Clearer instructional planning",
                  "Faster grading cycles",
                ].map((result, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 2.5,
                      borderRadius: "16px",
                      bgcolor: "surface.color2",
                      textAlign: "center",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.2s ease-in-out",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0px 4px 12px rgba(27, 68, 254, 0.15)",
                        borderColor: "primary.main",
                        bgcolor: "surface.color1",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #1B44FE 0%, #5375FE 100%)",
                        transform: "scaleX(0)",
                        transition: "transform 0.3s ease-in-out",
                      },
                      "&:hover::before": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    <Typography
                      variant={
                        isMobile ? "body_semibold" : "paragraph_semibold"
                      }
                      sx={{
                        color: "text.primary",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {result}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                pt: { xs: 2.5, sm: 3, md: 3 },
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 2, md: 2 },
                }}
              >
                Partnership Invitation
              </Typography>
              <Typography
                variant={isMobile ? "body_regular" : "paragraph_regular"}
                sx={{ color: "text.secondary" }}
              >
                We are not seeking just a transactional relationship. We are
                seeking collaborators who believe in improving global education
                from its foundations upward.
              </Typography>
            </Box>

            <Box
              sx={{
                pt: { xs: 2.5, sm: 3, md: 3 },
                borderTop: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 2.5, sm: 3, md: 3.5 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1.5, sm: 2, md: 2 },
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Closing Statement
                </Typography>
                <Typography
                  variant={isMobile ? "body_regular" : "paragraph_regular"}
                  sx={{ color: "text.secondary", textAlign: "center" }}
                >
                  Education belongs to everyone. No single person, institution,
                  or company owns learning.
                </Typography>
                <Typography
                  variant={isMobile ? "body_regular" : "paragraph_regular"}
                  sx={{ color: "text.secondary", textAlign: "center" }}
                >
                  My name is Ethan Giles, and I have dedicated my life to
                  education and to the people who pursue it. This project is not
                  mine alone—it is built on the belief that knowledge should
                  reach every learner who seeks it.
                </Typography>
                <Typography
                  variant={isMobile ? "body_regular" : "paragraph_regular"}
                  sx={{ color: "text.secondary", textAlign: "center" }}
                >
                  We hope to speak with you, learn from you, and build with you.
                  A member of our outreach team will coordinate any questions or
                  meeting times.
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={handleContactUs}
                sx={{
                  height: { xs: "50px", sm: "56px", md: "56px" },
                  px: { xs: 4, sm: 5, md: 6 },
                  py: { xs: 1.5, sm: 1.75, md: 1.75 },
                  background:
                    "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                  borderRadius: "999px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  color: "surface.color1",
                  fontSize: { xs: "16px", sm: "18px", md: "18px" },
                  fontWeight: 600,
                  lineHeight: { xs: "24px", sm: "28px", md: "28px" },
                  minWidth: { xs: "280px", sm: "320px", md: "360px" },
                  width: { xs: "100%", sm: "auto", md: "auto" },
                  "&:hover": {
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow: "0px 8px 24px 0px rgba(27, 68, 254, 0.3)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Let us begin this conversation together
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MissionSection;
