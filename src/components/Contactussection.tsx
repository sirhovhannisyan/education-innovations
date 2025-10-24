import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactUsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        p: { md: "186px 100px 96px 100px" },
        background:
          "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "1600px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          alignItems: { xs: "stretch", md: "flex-end" },
          gap: { xs: "48px", md: "64px" },
        }}
      >
        {/* Left Side - Contact Info */}
        <Box
          sx={{
            alignSelf: "stretch",
            flex: { xs: "1", md: "1 1 0" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          {/* Title + Description */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#1E1E1F",
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                fontFamily: "Hanken Grotesk",
                fontWeight: 700,
                lineHeight: { xs: "40px", sm: "48px", md: "48px" },
              }}
            >
              Get in touch <br />
              with us today!
            </Typography>
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#6D6D6D",
                fontSize: "18px",
                fontFamily: "DM Sans",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Whatever you need, whenever you need it, our team is here to help
              dedicated to supporting you every step of the way.
            </Typography>
          </Box>

          {/* Contact Info Cards */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "24px",
            }}
          >
            {/* Message Us Card */}
            <Box
              sx={{
                flex: "1 1 0",
                borderRadius: "31px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Title + Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Icon + Title */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                      boxShadow:
                        "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Mail size={24} color="#FFFFFF" />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      alignSelf: "stretch",
                      color: "#1E1E1F",
                      fontSize: "18px",
                      fontFamily: "DM Sans",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    Message us
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    alignSelf: "stretch",
                    color: "#6D6D6D",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Use our online chat system to message us and get support.
                </Typography>
              </Box>

              {/* Email */}
              <Typography
                sx={{
                  color: "#1E1E1F",
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                ethangiles@homeworkrooster.com
              </Typography>
            </Box>

            {/* Call Us Card */}
            <Box
              sx={{
                flex: "1 1 0",
                borderRadius: "31px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Title + Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Icon + Title */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                      boxShadow:
                        "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Phone size={24} color="#FFFFFF" />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      alignSelf: "stretch",
                      color: "#1E1E1F",
                      fontSize: "18px",
                      fontFamily: "DM Sans",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    Call us
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    alignSelf: "stretch",
                    color: "#6D6D6D",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Let's chat - nothing better than talking to another human
                  being.
                </Typography>
              </Box>

              {/* Phone */}
              <Typography
                sx={{
                  color: "#1E1E1F",
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                +420 608 093 971
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            flex: { xs: "1", md: "1 1 0" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
