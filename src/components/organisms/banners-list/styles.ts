import { makeStyles } from "@mui/styles";

import { ITheme } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      width: "85vw",
      margin: "72px auto",

      [theme.breakpoints.down("sm")]: {
        width: "95vw",
      },
    },

    titleBox: {
      textAlign: "center",
      color: theme.palette.grey[900],
      textTransform: "uppercase",
      fontWeight: 600,

      "& hr": {
        width: 100,
        margin: "auto",
        borderRadius: 18,
        border: "2px solid",
        backgroundColor: theme.palette.grey[900],
        borderColor: theme.palette.grey[900],
      },
    },

    gridImages: {
      marginTop: 32,
      columns: 4,
      columnGap: 16,
      height: "calc(100% + 1000px)",

      [theme.breakpoints.down("lg")]: {
        columns: 3,
      },

      [theme.breakpoints.down("md")]: {
        columns: 2,
      },

      [theme.breakpoints.down("sm")]: {
        columnGap: 0,
      },
    },
  }),
  { name: "BannersListComponent" }
);
