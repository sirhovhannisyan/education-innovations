import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const PricingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(225, 235, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)",
        pt: { xs: 15, sm: 18 },
        pb: { xs: 10, sm: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: "999px",
              border: "1px solid",
              borderColor: "primary.main",
              backgroundColor: "surface.color1",
            }}
          >
            <Typography variant="body_semibold" color="primary.main">
              Pricing for Homeworkrooster app
            </Typography>
          </Box>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              maxWidth: "800px",
              color: "text.primary",
              fontWeight: 700,
            }}
          >
            Official Pricing Policy Statement
          </Typography>

          <Typography
            variant="body_regular"
            sx={{
              maxWidth: "820px",
              color: "text.secondary",
            }}
          >
            At Homeworkrooster, we believe in fair and transparent pricing for
            every institution, regardless of country or region. Our goal is to
            make high-quality AI-powered English learning accessible to students
            everywhere — without hidden fees, complicated negotiations, or
            unequal treatment between markets.
          </Typography>
        </Box>

        <Typography
          variant="body_regular"
          sx={{
            mt: { xs: 4, md: 5 },
            maxWidth: "820px",
            color: "text.secondary",
          }}
        >
          All institutional licenses are billed in Czech crowns (CZK) and follow
          one global pricing structure, with simple volume-based discounts that
          make Homeworkrooster affordable for both small language schools and
          large universities.
        </Typography>

        <TableContainer
          sx={{
            mt: { xs: 6, md: 8 },
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0px 24px 64px rgba(27, 68, 254, 0.08)",
            backgroundColor: "surface.color1",
            border: "1px solid",
            borderColor: "surface.color2",
          }}
        >
          <Table>
            <TableHead
              sx={{
                background:
                  "linear-gradient(90deg, rgba(27, 68, 254, 0.08) 0%, rgba(83, 117, 254, 0.08) 100%)",
              }}
            >
              <TableRow>
                {[
                  "Student Volume",
                  "Monthly Price / Student",
                  "Annual Price / Student",
                  "Discount vs Standard",
                ].map((heading) => (
                  <TableCell
                    key={heading}
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      fontSize: "16px",
                    }}
                  >
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  volume: "50–99 students (minimum package)",
                  monthly: "100 CZK",
                  annual: "1,200 CZK / year",
                  discount: "—",
                },
                {
                  volume: "100–249 students",
                  monthly: "90 CZK",
                  annual: "1,080 CZK / year",
                  discount: "–10 %",
                },
                {
                  volume: "250–499 students",
                  monthly: "80 CZK",
                  annual: "960 CZK / year",
                  discount: "–20 %",
                },
                {
                  volume: "500–999 students",
                  monthly: "70 CZK",
                  annual: "840 CZK / year",
                  discount: "–30 %",
                },
                {
                  volume: "1,000+ students",
                  monthly: "60 CZK",
                  annual: "720 CZK / year",
                  discount: "–40 %",
                },
              ].map((row) => (
                <TableRow key={row.volume}>
                  <TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
                    {row.volume}
                  </TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {row.monthly}
                  </TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {row.annual}
                  </TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {row.discount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <List
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
              p: 0,
            }}
          >
            {[
              "Minimum order: 50 student accounts (5,000 CZK per month or 60,000 CZK per year).",
              "Billing: Annual payments preferred; semester options available upon request.",
              "Pilot offer: 2-month introductory access for up to 50 students at 60 CZK per student per month.",
              "Volume-based discounts automatically apply as your enrollment grows.",
            ].map((item) => (
              <ListItem
                key={item}
                sx={{
                  alignItems: "flex-start",
                  gap: 1.5,
                  px: 0,
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "32px", color: "primary.main", mt: 0.5 }}
                >
                  <CheckCircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    variant: "body_regular",
                    sx: { color: "text.secondary" },
                  }}
                >
                  {item}
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <Divider />

          <Typography
            variant="body_regular"
            sx={{
              color: "text.secondary",
              maxWidth: "820px",
            }}
          >
            We aim to keep our pricing honest, sustainable, and globally fair —
            allowing every institution to bring meaningful AI-driven learning
            experiences to their students at a price that respects both quality
            and accessibility.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
