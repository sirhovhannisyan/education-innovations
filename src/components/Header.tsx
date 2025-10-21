import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { useState } from "react";

function LogoIcon() {
  return (
    <Box
      sx={{
        width: 34,
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <img
        src="/logo.svg"
        alt="Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
    >
      <LogoIcon />
      {showText && (
        <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <Typography
            sx={{
              fontFamily: "Hanken Grotesk, sans-serif",
              fontWeight: 900,
              fontSize: "12.9px",
              color: "text.primary",
            }}
          >
            Education
          </Typography>
          <Typography
            sx={{
              fontFamily: "Hanken Grotesk, sans-serif",
              fontWeight: 900,
              fontSize: "12.9px",
              color: "text.primary",
            }}
          >
            Innovations
          </Typography>
        </Box>
      )}
    </Box>
  );
}

interface HeaderProps {
  onMenuItemClick?: (item: string) => void;
}

export default function Header({ onMenuItemClick }: HeaderProps) {
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Features", "How it works", "Contact us"];

  const handleMenuItemClick = (item: string) => {
    onMenuItemClick?.(item);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile version
  if (isMobile) {
    return (
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "white",
            borderRadius: mobileMenuOpen ? "24px 24px 0 0" : "999px",
            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
            transition: "border-radius 0.3s ease",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
          >
            <Logo />
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{
                width: 30,
                height: 30,
                color: "text.primary",
              }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Mobile Dropdown Menu */}
          <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
            <Box sx={{ pb: 2 }}>
              <Divider sx={{ mb: 1 }} />
              <List sx={{ px: 1 }}>
                {menuItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      onClick={() => handleMenuItemClick(item)}
                      sx={{
                        borderRadius: "12px",
                        "&:hover": {
                          bgcolor: "rgba(27, 68, 254, 0.04)",
                        },
                      }}
                    >
                      <Typography
                        variant="body_semibold"
                        sx={{ color: "text.primary" }}
                      >
                        {item}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box sx={{ px: 2, pt: 1 }}>
                <Button variant="contained" fullWidth>
                  Sign in
                </Button>
              </Box>
            </Box>
          </Collapse>
        </AppBar>
      </Box>
    );
  }

  // Tablet version
  if (isTablet) {
    return (
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderRadius: "999px",
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 3,
            pr: 1,
            py: 1,
          }}
        >
          <Logo showText={false} />

          <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="body_semibold"
                sx={{
                  cursor: "pointer",
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Button variant="contained">Sign in</Button>
        </Box>
      </AppBar>
    );
  }

  // Desktop version
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "white",
        borderRadius: "999px",
        boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pl: 3,
          pr: 1,
          py: 1,
        }}
      >
        <Logo />

        <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
          {menuItems.map((item) => (
            <Typography
              key={item}
              variant="paragraph_semibold"
              sx={{
                cursor: "pointer",
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Button variant="contained">Sign in</Button>
      </Box>
    </AppBar>
  );
}
