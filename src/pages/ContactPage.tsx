import { CssBaseline } from "@mui/material";
import React from "react";
import ActionSection from "../components/ActionSection";
import ContactUsSection from "../components/Contactussection";

const ContactPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ContactUsSection />
      <ActionSection />
    </>
  );
};

export default ContactPage;
