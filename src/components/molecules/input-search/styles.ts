import { makeStyles } from "@mui/styles";

import { ITheme } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      placeContent: "center",

      "& .MuiOutlinedInput-root": {
        width: 400,
        borderRadius: 24,
        backgroundColor: "#e4ebf5",
        boxShadow: "0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #fff",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
    },
  }),
  { name: "SearchComponent" }
);
