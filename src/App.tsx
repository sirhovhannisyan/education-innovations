import { CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/Hero";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
}
