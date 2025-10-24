import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Header positioned absolutely on top */}
      <Box
        sx={{
          position: "absolute",
          top: 24, // 24px margin from top
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Header />
      </Box>

      {/* Main content takes full space */}
      <Box
        component="main"
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
