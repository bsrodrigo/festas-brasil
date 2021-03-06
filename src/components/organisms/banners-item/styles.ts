import { ITheme, makeStyles } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    root: {
      margin: "0 0 16px",
      breakInside: "avoid",
      padding: 8,
      [theme.breakpoints?.down("sm")]: {
        padding: 4,
      },

      "& .MuiSkeleton-root": {
        // position: "absolute",
        transform: "none",
        marginBottom: -20,
      },
    },

    invisible: {
      display: "none",
    },

    imageBox: {
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      borderRadius: 24,
      boxShadow: "0px 3px 6px 2px rgba(0, 20, 34, 0.4)",
    },

    image: {
      width: "calc(100% + 4px)",
      borderRadius: 24,
      margin: "-2px 0 -4px -2px",
    },

    imageWithEffect: {
      transform: "scale(1.2)",
      transition: "ease-in-out .5s",
    },

    imageWithoutEffect: {
      transform: "none",
      transition: "ease-in-out .5s",
    },

    visibilityIcon: {
      position: "absolute",
      top: "40%",
      left: "calc(50% - 16px)",
      zIndex: 2,
    },

    hoverEffectBox: {
      width: "100%",
      height: "100%",
      borderRadius: 24,
      position: "absolute",
      bottom: 0,
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

    titleBox: {
      padding: 8,
      overflow: "hidden",
      overflowX: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      lineHeight: 16,
      maxHeight: 32,
      whiteSpace: "nowrap",

      "& p": {
        fontWeight: 700,
        color: theme.palette?.grey[900],
        textOverflow: "ellipsis",
        overflow: "hidden",
        overflowX: "hidden",
        maxWidth: "100%",
        whiteSpace: "pre-wrap",
      },
    },
  }),
  { name: "BannerItemComponent" }
);
