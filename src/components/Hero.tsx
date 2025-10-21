import { Box, Button, Container, Typography } from "@mui/material";
import Header from "./Header";

const Hero = () => {
  const handleMenuItemClick = (item: string) => {
    console.log("Clicked:", item);
  };
  return (
    <Box
      sx={{
        background:
          "linear-gradient(174.87deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
        minHeight: { xs: "calc(100vh - 80px)", md: "calc(100vh - 100px)" },
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Header onMenuItemClick={handleMenuItemClick} />
        <Box sx={{ mt: { xs: 3, md: 6.75, lg: 12 } }}>
          <Box>
            <Typography variant="h1">Innovating homework</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h2">Empowering</Typography>
              <Button variant="contained">students</Button>
            </Box>
            <Box>
              <Typography variant="h2">Supporting</Typography>
              <Box></Box>
              <Typography variant="h2">teachers</Typography>
            </Box>
            <Box>
              <Typography variant="body_regular">
                Our AI-powered platform reduces teacher burnout, engages
                students, and increases classroom adaptability.
              </Typography>
            </Box>
            <Box>
              <Button variant="contained">Watch video</Button>
              <Button variant="contained">Request a demo</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
