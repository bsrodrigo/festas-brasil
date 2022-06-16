import { createTheme } from "@material-ui/core";
import { IThemeOptions } from "./components/bosons";

export const Theme = createTheme({
  overrides: {
    MuiButton: {
      contained: {
        padding: "10px 25px",
        "&.Mui-disabled": {
          color: "#fff",
        },
      },
      outlined: {
        padding: "10px 25px",
        border: "2px solid",
      },
      text: {
        padding: "10px 25px",
      },
    },
    MuiLinearProgress: {
      root: {
        height: 5,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: "#cccbd2",
      },
      bar: {
        borderRadius: 5,
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: 15,
        boxShadow:
          "0px 0px 0px -3px rgba(0,0,0,0.2), 0px 5px 5px 1px rgba(0,0,0,0.14), 0px 0px 5px 0px rgba(0,0,0,0.12)",
      },
    },
    MuiInputBase: {
      root: {
        paddingLeft: 10,
        paddingRight: 10,

        "& .MuiSelect-root:focus": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover": {
          borderColor: "#31AEFF !important",
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(24px, 20px) scale(1)",
      },
    },
    MuiAlert: {
      root: {
        borderRadius: 0,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 15,
        boxShadow: "0 5px 10px 0 rgb(45 45 119 / 0.10)",
      },
    },
    MuiCardContent: {
      root: {
        padding: "36px 24px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 15,
      },
    },
    MuiAutocomplete: {
      input: {
        paddingLeft: "15px !important",
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: "bold",
      },
    },
    MuiLink: {
      root: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#f7f7fa",
    },
    primary: {
      xxsoft: "#F2FAFF",
      xsoft: "#C2E7FF",
      soft: "#99D6FF",
      light: "#85CEFF",
      highlight: "#5CBEFF",
      main: "#31AEFF",
      medium: "#0093F5",
      dark: "#007ACC",
      xdark: "#00568F",
      xxdark: "#003D66",
      contrastText: "#fff",
    },
    success: {
      xxsoft: "#E1EDE3",
      xsoft: "#C2EDC8",
      soft: "#A5E3AC",
      light: "#8BDC92",
      highlight: "#74D379",
      main: "#60CD5F",
      medium: "#4FA050",
      dark: "#387239",
      xdark: "#2D5C2D",
      xxdark: "#204421",
    },
    warning: {
      xxsoft: "#F8F6EB",
      xsoft: "#F8EB79",
      soft: "#F9DF4C",
      light: "#F8D247",
      highlight: "#F6C543",
      main: "#F4BA40",
      medium: "#F3AE3D",
      dark: "#F19A37",
      xdark: "#EF8E34",
      xxdark: "#EE8232",
    },
    error: {
      xxsoft: "#FCEFF0",
      xsoft: "#FCD9DB",
      soft: "#FBA6AC",
      light: "#F57A82",
      highlight: "#E75A5D",
      main: "#E53F3E",
      medium: "#D12E26",
      dark: "#BE0E1A",
      xdark: "#921E19",
      xxdark: "#6D1412",
    },
    secondary: {
      xxsoft: "##FEF2FF",
      xsoft: "#FEEBFF",
      soft: "#FDD6FF",
      light: "#FBB1FF",
      highlight: "#F985FF",
      main: "#F647FF",
      medium: "#E900F5",
      dark: "#AE00B8",
      xdark: "#74007A",
      xxdark: "#3A003D",
    },
    grey: {
      "50": "rgba(255, 255, 255, 0.001)",
      "100": "#FFFFFF",
      "200": "#F8F9FA",
      "300": "#F2F5F8",
      "400": "#E6E9F0",
      "500": "#CBD2E0",
      "600": "#B2BCD2",
      "700": "#8C99BC",
      "800": "#55648D",
      "900": "#202D4B",
    },
  },
  typography: {
    fontFamily: ["Nunito", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h1: { fontSize: "4.313rem", fontWeight: 700, lineHeight: "5.875rem" },
    h2: { fontSize: "3.313rem", fontWeight: 300, lineHeight: "4.500rem" },
    h3: { fontSize: "2.500rem", fontWeight: 300, lineHeight: "3.438rem" },
    h4: { fontSize: "1.938rem", fontWeight: 400, lineHeight: "2.625rem" },
    h5: { fontSize: "1.500rem", fontWeight: 400, lineHeight: "2.063rem" },
    h6: { fontSize: "1.250rem", fontWeight: 400, lineHeight: "1.688rem" },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.375rem",
      letterSpacing: "0.065rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: "1.188rem",
      letterSpacing: "0.065rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.500rem",
      textTransform: "inherit",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.313rem",
      textTransform: "inherit",
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "150.69%",
      letterSpacing: "0.05rem",
      textTransform: "initial",
    },
    overline: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.04rem",
      textTransform: "uppercase",
    },
    caption: { fontSize: "0.750rem", fontWeight: 400, lineHeight: "1.188rem" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      laptop: 1100,
      lg: 1280,
      xl: 1920,
    },
  },
} as IThemeOptions);
