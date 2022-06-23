import { makeStyles } from "@material-ui/styles";
import { ITheme } from "../../bosons";

export const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "start",

    "@media (max-width: 950px)": {
      justifyContent: "center",
      maxWidth: "100%",
      width: "100%",
      flexWrap: "wrap",
    },
  },

  imageBox: {
    margin: 12,

    "& img": {
      height: "85vh",
      borderRadius: 16,

      "@media (max-width: 950px)": {
        height: "auto",
        width: "100%",
      },
    },
  },
  contentBox: {
    margin: 12,
    width: "100%",

    "& button": {
      marginTop: 16,
    },
  },

  contentItem: {
    marginBottom: 8,
    maxWidth: 600,

    "& .MuiTypography-overline": {
      color: theme.palette.grey[800],
      fontWeight: 600,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.grey[900],
    },
  },

  container: {
    margin: "24px 0",
  },

  header: {
    padding: "16px 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& h5": {
      color: theme.palette.grey[900],
      marginLeft: 16,
    },
  },

  footer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column-reverse",
    gap: 0,
    marginTop: 24,

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      gap: 24,
      justifyContent: "flex-end",
      marginTop: 0,
    },

    "& button:first-child": {
      marginTop: 16,

      [theme.breakpoints.up("sm")]: {
        marginTop: 0,
      },
    },
  },

  footerDialog: {
    borderRadius: 25,
    width: "100%",
  },

  paper: {
    padding: 25,

    [theme.breakpoints.up("md")]: {
      borderRadius: "24px !important",
      margin: "32px 20px 12px 20px",
    },
  },

  paperWidthSm: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      bottom: 6,
      right: 10,
    },
  },

  paperScrollPaper: {
    maxWidth: "100vw",
    maxHeight: "100vh",
    height: "100vh",
    margin: "-27px -11px -25px 0px",

    [theme.breakpoints.up("md")]: {
      // width: "min-content",
    },
  },
}));
