import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/constants";

interface FreeTrialFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface FreeTrialFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const FreeTrialSection: React.FC = () => {
  const [freeTrialData, setFreeTrialData] = useState<FreeTrialFormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [freeTrialErrors, setFreeTrialErrors] = useState<FreeTrialFormErrors>(
    {}
  );
  const [isSubmittingTrial, setIsSubmittingTrial] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const validateFreeTrialForm = (): boolean => {
    const newErrors: FreeTrialFormErrors = {};

    if (!freeTrialData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!freeTrialData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!freeTrialData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(freeTrialData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setFreeTrialErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFreeTrialInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFreeTrialData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (freeTrialErrors[name as keyof FreeTrialFormErrors]) {
      setFreeTrialErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleFreeTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFreeTrialForm()) {
      return;
    }

    setIsSubmittingTrial(true);

    try {
      const response = await fetch(API_ENDPOINTS.REQUEST_FREE_TRIAL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: freeTrialData.firstName.trim(),
          lastName: freeTrialData.lastName.trim(),
          email: freeTrialData.email.trim(),
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message:
            "Thank you! Your free trial request has been submitted successfully.",
          severity: "success",
        });

        setFreeTrialData({
          firstName: "",
          lastName: "",
          email: "",
        });
      } else {
        throw new Error("Failed to submit free trial request");
      }
    } catch {
      setSnackbar({
        open: true,
        message:
          "Something went wrong. Please try again later or contact us directly.",
        severity: "error",
      });
    } finally {
      setIsSubmittingTrial(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        pt: { xs: "48px", md: "96px" },
        pb: { xs: "48px", md: "96px" },
        background:
          "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            mb: "32px",
          }}
        >
          <Typography
            sx={{
              color: "#1E1E1F",
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontFamily: "Hanken Grotesk",
              fontWeight: 700,
              lineHeight: { xs: "40px", sm: "48px", md: "48px" },
              textAlign: "center",
            }}
          >
            Start Your Free Trial
          </Typography>
          <Typography
            sx={{
              color: "#6D6D6D",
              fontSize: "18px",
              fontFamily: "DM Sans",
              fontWeight: 400,
              lineHeight: "28px",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            Fill out the form below to get started with your free trial
          </Typography>
        </Box>

        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            component="form"
            onSubmit={handleFreeTrialSubmit}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "580px" },
              margin: "0 auto",
              px: "24px",
              py: "32px",
              position: "relative",
              background:
                "linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0.30) 100%)",
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              borderRadius: "24px",
              outline: "3px solid #FFFFFF",
              outlineOffset: "-3px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Name Row */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "16px",
              }}
            >
              {/* First Name Input */}
              <TextField
                name="firstName"
                placeholder="First name"
                value={freeTrialData.firstName}
                onChange={handleFreeTrialInputChange}
                error={!!freeTrialErrors.firstName}
                helperText={freeTrialErrors.firstName}
                fullWidth
                sx={{
                  flex: "1 1 0",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "999px",
                    backgroundColor: "#FFFFFF",
                    "& fieldset": {
                      borderColor: freeTrialErrors.firstName
                        ? "#d32f2f"
                        : "#E3E3E3",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": {
                      borderColor: freeTrialErrors.firstName
                        ? "#d32f2f"
                        : "#1B44FE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: freeTrialErrors.firstName
                        ? "#d32f2f"
                        : "#1B44FE",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "14px 20px",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                    "&::placeholder": {
                      color: "#A4A4A4",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginLeft: "20px",
                    fontSize: "12px",
                    color: "#d32f2f",
                  },
                }}
              />

              {/* Last Name Input */}
              <TextField
                name="lastName"
                placeholder="Last name"
                value={freeTrialData.lastName}
                onChange={handleFreeTrialInputChange}
                error={!!freeTrialErrors.lastName}
                helperText={freeTrialErrors.lastName}
                fullWidth
                sx={{
                  flex: "1 1 0",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "999px",
                    backgroundColor: "#FFFFFF",
                    "& fieldset": {
                      borderColor: freeTrialErrors.lastName
                        ? "#d32f2f"
                        : "#E3E3E3",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": {
                      borderColor: freeTrialErrors.lastName
                        ? "#d32f2f"
                        : "#1B44FE",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: freeTrialErrors.lastName
                        ? "#d32f2f"
                        : "#1B44FE",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "14px 20px",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                    "&::placeholder": {
                      color: "#A4A4A4",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginLeft: "20px",
                    fontSize: "12px",
                    color: "#d32f2f",
                  },
                }}
              />
            </Box>

            {/* Email Input */}
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              value={freeTrialData.email}
              onChange={handleFreeTrialInputChange}
              error={!!freeTrialErrors.email}
              helperText={freeTrialErrors.email}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                  backgroundColor: "#FFFFFF",
                  "& fieldset": {
                    borderColor: freeTrialErrors.email ? "#d32f2f" : "#E3E3E3",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: freeTrialErrors.email ? "#d32f2f" : "#1B44FE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: freeTrialErrors.email ? "#d32f2f" : "#1B44FE",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "14px 20px",
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: 400,
                  lineHeight: "24px",
                  "&::placeholder": {
                    color: "#A4A4A4",
                    opacity: 1,
                  },
                },
                "& .MuiFormHelperText-root": {
                  marginLeft: "20px",
                  fontSize: "12px",
                  color: "#d32f2f",
                },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmittingTrial}
              fullWidth
              sx={{
                height: "50px",
                px: "24px",
                py: "12px",
                background: isSubmittingTrial
                  ? "#cccccc"
                  : "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                borderRadius: "68px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                fontFamily: "DM Sans",
                fontWeight: 600,
                lineHeight: "28px",
                textTransform: "none",
                color: "#FFFFFF",
                "&:hover": {
                  color: "#FFFFFF",
                  background: isSubmittingTrial
                    ? "#cccccc"
                    : "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                  boxShadow: isSubmittingTrial
                    ? "none"
                    : "0px 8px 24px 0px rgba(27, 68, 254, 0.3)",
                },
              }}
            >
              {isSubmittingTrial ? "Submitting..." : "Start Free Trial"}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FreeTrialSection;
