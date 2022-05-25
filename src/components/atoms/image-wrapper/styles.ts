import { makeStyles } from "@mui/styles";
import { ITheme } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      position: "relative",
      cursor: "pointer",
    },

    visibilityIcon: {
      position: "absolute",
      top: "40%",
      left: "calc(50% - 16px)",
      zIndex: 2,
    },

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

    hoverEffectBox: {
      width: "100%",
      height: "100%",
      borderRadius: 24,
      position: "absolute",
      bottom: 2,
      backgroundImage: "linear-gradient(transparent, rgba(32, 32, 32, .95)) ",
    },

    activeHoverEffect: {
      opacity: 1,
      transition: ".4s ease-in",
    },

    deactivateHoverEffect: {
      opacity: 0,
      transition: "opacity .8s ease-in-out",
    },

    image: {
      width: "100%",
      borderRadius: 24,
      boxShadow: "0px 3px 6px 2px rgba(0, 20, 34, 0.2)",
    },

    titleBox: {
      padding: 8,

      "& p": {
        fontWeight: 700,
        color: theme.palette.grey[900],
      },
    },
  }),
  { name: "ImageWrapperComponent" }
);
