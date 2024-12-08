import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif",
    h1: {
      fontSize: "22px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#737A91",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
      // color: "#737A91",
    },
    h4: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#333",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#737A91",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 500,
      color: "#737A91",
    },
    body3: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#737A91",
    },
    button: {
      fontSize: "16px",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#0154AA",
    },
    secondary: {
      main: "#737A91",
    },
    light: {
      main: "#585D6E",
    },
    background: {
      default: "#F4F4F4",
      white: "#fff",
      black: "#333",
      searchInput: "#F6F9FF",
    },
    text: {
      primary: "#333333",
      secondary: "#737A91",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", // Your custom box shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "none", // Removed button box-shadow
          "&:hover": {
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", // Ensure hover doesn't add a shadow
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none", // Removed button box-shadow
          "&:hover": {
            boxShadow: "none", // Ensure hover doesn't add a shadow
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Added border-radius for cards
          boxShadow: "none", // Removed card box-shadow
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Added border-radius for accordions
          boxShadow: "none", // Removed accordion box-shadow
          "&:before": {
            display: "none", // Removes the default shadow line in some MUI accordions
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 500,
          color: "#737A91",
          "&:hover, &.active": {
            color: "#0154AA",
            fontWeight: 600,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "22px",
          fontWeight: 600,
        },
        h2: {
          fontSize: "18px",
          fontWeight: 500,
        },
        h3: {
          fontSize: "14px",
          fontWeight: 500,
        },
        body1: {
          fontSize: "14px",
          fontWeight: 500,
        },
        body2: {
          fontSize: "12px",
          fontWeight: 500,
        },
        body3: {
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
