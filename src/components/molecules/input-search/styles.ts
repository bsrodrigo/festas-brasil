import { ITheme, makeStyles } from "../../bosons";

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

    sliderBox: {
      width: 200,
      position: "relative",

      "& .MuiSlider-root": {
        padding: 0,
        color: "#193e56",
        height: 72,
      },
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
  }),
  { name: "SearchComponent" }
);
