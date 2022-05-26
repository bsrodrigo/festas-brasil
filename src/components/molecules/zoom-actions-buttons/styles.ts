import { makeStyles } from "@mui/styles";
import { ITheme } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    actionBox: {
      display: "flex",
      alignContent: "center",
      justifyContent: "end",
      position: "absolute",
      width: "calc(100% - 16px)",
      padding: "0 8px",
      height: 72,
      bottom: 0,
      zIndex: 2,

      "& > div": {
        width: 40,
        padding: 8,
      },

      "& .MuiIconButton-root": {
        backgroundColor: "#fff",
        fontSize: 24,

        "&:hover": {
          backgroundColor: "#fff",
          padding: 10,
          marginTop: -1,
          marginLeft: -1,
          transition: ".2s",
        },
      },
    },
  }),
  { name: "ImageWrapperComponent" }
);
