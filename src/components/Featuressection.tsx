import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  const renderChartBars = () => {
    const bars = [
      { left: 51, top: 53.72, height: 61.92 },
      { left: 69.29, top: 36.83, height: 61.92 },
      { left: 88.99, top: 18.54, height: 95.69 },
      { left: 107.29, top: 36.83, height: 91.47 },
      { left: 125.58, top: 66.38, height: 77.4 },
      { left: 143.87, top: 81.86, height: 77.4 },
      { left: 163.58, top: 66.38, height: 71.77 },
      { left: 181.87, top: 43.87, height: 84.43 },
      { left: 200.16, top: 29.79, height: 88.65 },
      { left: 218.46, top: 12.91, height: 116.8 },
      { left: 238.16, top: 72.01, height: 70.36 },
      { left: 256.45, top: 93.12, height: 60.51 },
      { left: 274.74, top: 77.64, height: 74.58 },
    ];

    return bars.map((bar, index) => (
      <Box
        key={index}
        sx={{
          width: "11.26px",
          height: `${bar.height}px`,
          left: `${bar.left}px`,
          top: `${bar.top}px`,
          position: "absolute",
          background: "#1B44FE",
          borderRadius: "1405.78px",
        }}
      />
    ));
  };

  return (
    <Box
      id="features-section"
      sx={{
        width: "100%",
        px: { xs: 2.5, sm: 5, md: 12.5 },
        py: { xs: 3, sm: 7, md: 12 },
        backgroundColor: "surface.color2",
        overflow: "hidden",
      }}
    >
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
        {/* Card 1 - Purposeful homework (Image + Content Card Below) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 2, md: 2.5 },
          }}
        >
          <Box
            component="img"
            src="/feature_1.png"
            alt="Purposeful homework"
            sx={{
              width: "100%",
              height: { xs: "238px", sm: "242px", md: "304px" },
              objectFit: "cover",
              borderRadius: { xs: "16px", sm: "24px", md: "24px" },
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            }}
          />
          <Card
            elevation={0}
            sx={{
              px: { xs: 4.5, sm: 3, md: 4 },
              py: 3,
              backgroundColor: "surface.color1",
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              borderRadius: "24px",
            }}
          >
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 32, sm: 32, md: 40 },
                    height: { xs: 32, sm: 32, md: 40 },
                    minWidth: { xs: 32, sm: 32, md: 40 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                    borderRadius: { xs: "6.4px", sm: "6.4px", md: "8px" },
                    overflow: "hidden",
                    color: "white",
                    border: "2px solid",
                  }}
                >
                  <img
                    src="/icons/book.svg"
                    alt="Book icon"
                    style={{
                      width: 20,
                      height: 20,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "18px", md: "24px" },
                    fontWeight: { xs: 600, sm: 600, md: 700 },
                    lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                    color: "text.primary",
                    flex: 1,
                  }}
                >
                  Purposeful homework
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                  color: "text.secondary",
                }}
              >
                Exercises designed for engagement, not busywork.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Card 2 - Classroom adaptability (Image Center + Content Below) */}
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pt: { xs: 2, sm: 2, md: 3 },
            backgroundColor: "surface.color1",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            height: { xs: "394px", sm: "auto", md: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box
              component="img"
              src="/feature_2.png"
              alt="Classroom adaptability"
              sx={{
                width: { xs: "234px", sm: "242px", md: "280px" },
                height: { xs: "234px", sm: "242px", md: "280px" },
                objectFit: "contain",
              }}
            />
          </Box>
          <CardContent
            sx={{
              px: { xs: 3, sm: 3, md: 4 },
              pb: { xs: 3, sm: 3, md: 4 },
              pt: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: { xs: 32, sm: 32, md: 40 },
                  height: { xs: 32, sm: 32, md: 40 },
                  minWidth: { xs: 32, sm: 32, md: 40 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                  boxShadow:
                    "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                  borderRadius: { xs: "6.4px", sm: "6.4px", md: "8px" },
                  overflow: "hidden",
                  color: "white",
                }}
              >
                <img
                  src="/icons/profile-2user.svg"
                  alt="Users icon"
                  style={{
                    width: 20,
                    height: 20,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "18px", md: "24px" },
                  fontWeight: { xs: 600, sm: 600, md: 700 },
                  lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                  color: "text.primary",
                  flex: 1,
                }}
              >
                Classroom adaptability
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
                fontWeight: 400,
                lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                color: "text.secondary",
              }}
            >
              Adjusts to different class levels and student needs.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 - Teacher growth (Image + Content Below, different style) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 2, md: 2.5 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "238px", sm: "242px", md: "232px" },
              position: "relative",
              borderRadius: "24px",
            }}
          >
            <Box
              component="img"
              src="feature_3.png"
              alt="Teacher growth"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: { xs: "16px", sm: "24px", md: "24px" },
                boxShadow:
                  "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              }}
            />
          </Box>
          <Card
            elevation={0}
            sx={{
              px: { xs: 4.5, sm: 3, md: 4 },
              py: 3,
              backgroundColor: "surface.color1",
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              borderRadius: "24px",
              flex: 1,
            }}
          >
            <CardContent
              sx={{
                p: 0,
                "&:last-child": { pb: 0 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 32, sm: 32, md: 40 },
                    height: { xs: 32, sm: 32, md: 40 },
                    minWidth: { xs: 32, sm: 32, md: 40 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                    borderRadius: { xs: "6.4px", sm: "6.4px", md: "8px" },
                    overflow: "hidden",
                    color: "white",
                    border: "2px solid",
                  }}
                >
                  <img
                    src="/icons/status-up.svg"
                    alt="Trending up icon"
                    style={{
                      width: 20,
                      height: 20,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "18px", md: "24px" },
                    fontWeight: { xs: 600, sm: 600, md: 700 },
                    lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                    color: "text.primary",
                    flex: 1,
                  }}
                >
                  Teacher growth
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                  color: "text.secondary",
                }}
              >
                Gain insights into learning gaps, making homework a training
                tool for teachers to better address student needs.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Card 4 - Student engagement (Content + Image Below) */}
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: { xs: 3, sm: 3, md: 4 },
            backgroundColor: "surface.color1",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
          }}
        >
          <Box
            sx={{
              height: { xs: "auto", sm: "auto", md: "320px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 32, sm: 32, md: 40 },
                    height: { xs: 32, sm: 32, md: 40 },
                    minWidth: { xs: 32, sm: 32, md: 40 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow:
                      "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                    borderRadius: { xs: "6.4px", sm: "6.4px", md: "8px" },
                    overflow: "hidden",
                    color: "white",
                    border: "2px solid",
                  }}
                >
                  <img
                    src="/icons/flash.svg"
                    alt="Clipboard check icon"
                    style={{
                      width: 20,
                      height: 20,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "18px", md: "24px" },
                    fontWeight: { xs: 600, sm: 600, md: 700 },
                    lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                    color: "text.primary",
                    flex: 1,
                  }}
                >
                  Student engagement
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                  color: "text.secondary",
                  mb: { xs: 2, sm: 2, md: 0 },
                }}
              >
                Immediate feedback keeps students motivated.
              </Typography>
            </Box>
            <Box
              component="img"
              src="/feature_4.png"
              alt="Student engagement"
              sx={{
                width: "100%",
                height: { xs: "auto", sm: "auto", md: "166px" },
                mt: { xs: 2, sm: 2, md: 0 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Card>

        {/* Card 5 - Decrease burnout (Content + Chart Below) */}
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: { xs: 3, sm: 3, md: 4 },
            backgroundColor: "surface.color1",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", sm: "100%", md: "328px" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: { xs: 32, sm: 32, md: 40 },
                  height: { xs: 32, sm: 32, md: 40 },
                  minWidth: { xs: 32, sm: 32, md: 40 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(ellipse 88.00% 75.00% at 50.00% 50.00%, #1B44FE 37%, #5375FE 100%)",
                  boxShadow:
                    "0px 6.8627448081970215px 20.588233947753906px -1.2254902124404907px rgba(28, 70, 255, 0.24)",
                  borderRadius: { xs: "6.4px", sm: "6.4px", md: "8px" },
                  overflow: "hidden",
                  color: "white",
                }}
              >
                <img
                  src="/icons/import.svg"
                  alt="Smile icon"
                  style={{
                    width: 20,
                    height: 20,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "18px", md: "24px" },
                  fontWeight: { xs: 600, sm: 600, md: 700 },
                  lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                  color: "text.primary",
                  flex: 1,
                }}
              >
                Decrease burnout
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
                fontWeight: 400,
                lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                color: "text.secondary",
              }}
            >
              Automate routine work so teachers can focus on teaching.
            </Typography>
          </Box>

          {/* Chart visualization */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "166px",
              mt: { xs: 2, sm: 2, md: 2.5 },
              overflow: "hidden",
            }}
          >
            {renderChartBars()}
          </Box>
        </Card>

        {/* Card 6 - CTA (Gradient Background) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "flex-start",
              sm: "space-between",
              md: "space-between",
            },
            p: { xs: 3, sm: 3, md: 4 },
            position: "relative",
            background:
              "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: { xs: "auto", sm: "334px", md: "368px" },
            gap: { xs: 2.5, sm: 0, md: 0 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "48px" },
                fontWeight: 700,
                lineHeight: { xs: "24px", sm: "32px", md: "48px" },
                color: "text.primary",
                mb: 0.5,
                maxWidth: { xs: "278px", sm: "278px", md: "none" },
              }}
            >
              Still have questions?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
                fontWeight: 600,
                lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                color: "text.secondary",
              }}
            >
              Contact us and we'll help you out.
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleContactUs}
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start", md: "flex-start" },
              height: { xs: "auto", sm: "auto", md: "50px" },
              px: 3,
              py: { xs: 1, sm: 1, md: 1.5 },
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "28px",
            }}
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
