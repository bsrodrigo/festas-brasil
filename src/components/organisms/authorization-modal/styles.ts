import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: any) => ({
  container: {
    margin: "24px 0",
  },

  header: {
    padding: "16px 0",

    "& h5": {
      color: theme.palette.grey[900],
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
  },

  footerDialog: {
    borderRadius: 25,
    width: "100%",
  },

  paper: {
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
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
    margin: 0,
    maxWidth: "initial",

    [theme.breakpoints.up("md")]: {
      maxWidth: 550,
    },
  },
}));
