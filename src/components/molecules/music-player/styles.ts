import { ITheme, makeStyles } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      width: "100vw",
      maxWidth: 800,
      display: "flex",
      alignItems: "center",
      zIndex: 3,
      background: "#fff",
      padding: "16px 24px",
      position: "fixed",
      bottom: "8px",
      right: "-747px",
      boxShadow: "1px 1px 5px 10px #4b4b4b45",
      borderRadius: "24px 0 0 24px",
      transition: "ease-in-out .8s",

      "@media (max-width: 799px)": {
        right: "calc(-100% + 53px) ",
      },
    },

    rootOpen: {
      right: 0,
      width: "calc(100% - 72px)",
      transition: "ease-in-out .8s",
    },

    musicGif: {
      position: "absolute",
      bottom: 30,
      right: 0,
      width: 180,
    },

    disc: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 24,
      height: 64,
      width: 64,
      borderRadius: "50%",
      overflow: "hidden",

      "& img": {
        maxWidth: "100%",
        borderRadius: "50%",
        backgroundColor: theme.palette.grey[100],
      },

      "& div": {
        position: "absolute",
        height: 8,
        width: 8,
        borderRadius: "50%",
        backgroundColor: theme.palette.grey[100],
      },
    },

    playerBox: {
      width: "100%",
      margin: "auto",
    },

    sliderBox: {
      display: "flex",
      marginBottom: 8,

      "& .MuiSlider-root": {
        width: "100%",

        height: 12,
        padding: 0,
        color: theme.palette.primary.xxdark,
      },

      "& .MuiSlider-rail, .MuiSlider-track": {
        height: 12,
        borderRadius: 8,
      },

      "& .MuiSlider-thumb ": {
        backgroundColor: theme.palette.primary.xdark,
        height: 22,
        width: 22,
      },
    },

    timeBox: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },

    controlsBox: {
      "& .MuiButtonBase-root": {
        padding: 0,
      },
    },

    calculateTimeBox: {
      display: "flex",
      justifyContent: "flex-end",
      marginRight: 4,
      whiteSpace: "nowrap",
    },

    testeBox: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      top: 0,
      width: "100%",
    },

    teste: {
      height: 72,
      width: "calc((100% / 10) - 4px)",
      margin: "0 4px",
      background: "blue",
    },

    spinAnimation: {
      animation: `$spin 4s linear infinite`,
    },

    "@keyframes spin": {
      "100%": {
        "-webkit-transform": "rotate(360deg)",
        transform: "rotate(360deg)",
      },
    },
  }),
  { name: "MusicPlayerComponent" }
);
