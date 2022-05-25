import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "grid",
      padding: "72px 16px",
      gridGap: 24,
      gridTemplateColumns: "repeat(auto-fill, 360px)",
      gridAutoRows: "minmax(20px, auto)",
      justifyContent: "center",
    },
  }),
  { name: "BannersListComponent" }
);
