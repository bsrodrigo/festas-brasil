import { ITheme, makeStyles } from "../../components/bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      backgroundColor: "#e4ebf5",
      paddingTop: 24,
      margin: "auto",
    },
  }),
  { name: "BannersComponent" }
);
