import { ITheme, makeStyles } from "../../bosons";

export const useStyles = makeStyles(
  (theme: ITheme) => ({
    player: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",

      "& *": {
        boxSizing: "border-box",
      },
    },

    controls: {
      backgroundColor: "#fff",
      borderRadius: 15,
      width: 425,
      display: "flex",
      justifyContent: "flex-end",
      padding: 10,
      boxShadow: "0px 33px 90px 11px rgba(147,84,103,.6)",
    },

    songPanel: {
      backgroundColor: "#FCF8FA",
      borderRadius: "15px 15px 0 0",
      display: "flex",
      height: 75,
      justifyContent: "flex-end",
      padding: "0 12px 12px 12px",
      transform: "translate3d(0, 100%, 0)",
      transition: "all 1s ease",
      width: 395,
      zIndex: 0,
      boxShadow: "0px 33px 90px 11px rgba(147,84,103,.6)",
    },

    songInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: 230,
    },

    //     .song-info__title {
    //       color: #444b59,
    //       font-size: 0.8rem,
    //       font-weight: bold,
    //       margin-bottom: 5px,
    //     }

    //     .song-info__artist {
    //       color: #a5a7af,
    //       font-size: 0.7rem,
    //       margin-bottom: 10,
    //     }

    //     .progress {
    //       background: '#fff',
    //       borderRadius: 3px,
    //       cursor: ew-resize,
    //       display: 'flex',
    //       flex: 10,
    //       flex-basis: 100%,
    //       max-height: 5px,
    //       position: relative,
    //       transition: height 0.3s,
    //       width: 100%,

    //       .progress__filled {
    //         background: #fc8da8,
    //         flex: 0,
    //         flex-basis: 0%,
    //         width: 50%,
    //       }
    //     }
    //   }

    //   &.playing {
    //     transform: translate3d(0, 0, 0),
    //     transition: all 1s ease,
    //   }
    // }

    // button {
    //   height: 80px,
    //   width: 80px,
    //   cursor: pointer,
    //   border: none,
    //   backgroundColor: transparent,
    //   color: #DFDBE0,
    //   margin: 0 5px,
    //   borderRadius: 15,
    //   position: relative,
    // }

    // button:hover, button.playing {
    //   backgroundColor: #E0DEE1,
    //   color: '#fff',
    // }
    // button.play span.pause {
    //   backgroundColor: white,
    //   position: absolute,
    //   top: 23px,
    //   height: 34px,
    //   width: 10,
    //   display: block,
    //   borderRadius: 3px,
    //   opacity: 0,
    //   transition: all .5s ease,
    // }

    // button.play span.pause.left {
    //   left: 0,
    // }

    // button.play.playing span.pause.left {
    //   left: 25px,
    //   opacity: 1,
    //   transition: left .5s ease, opacity .8s ease,
    // }

    // button.play span.pause.right {
    //   right: 0,
    // }

    // button.play.playing span.pause.right {
    //   right: 25px,
    //   opacity: 1,
    //   transition: right .5s ease, opacity .8s ease,
    // }
    // button.play i {
    //   opacity: 1,
    //   transition: opacity .5s ease,
    // }
    // button.play.playing i {
    //   opacity: 0,
    //   transition: all .5s ease,
    // }

    // .player-controls {
    //   position: relative,

    //   .spinner {
    //     height: 130px,
    //     width: 130px,
    //     position: absolute,
    //     top: -40px,
    //     left: 15,
    //     display: 'flex',
    //     align-items: center,
    //     justifyContent: center,

    //     &.spin {
    //       animation: spin 5s linear infinite,
    //     }

    //     .spinner__disc {
    //       height: 110,
    //       width: 110,
    //       borderRadius: 50%,
    //       transition: all 1s ease,
    //       background-image: url(http://www.placecage.com/c/127/127),
    //       background-size: cover,
    //       background-position: center,
    //       display: 'flex',
    //       align-items: center,
    //       justifyContent: center,

    //       &.scale {
    //         transform: scale(1.17),
    //         transition: all 1s ease,

    //         .center__disc {
    //           color: #e4d6e9,
    //           transition: all 1s ease,
    //         }
    //       }

    //       .center__disc {
    //         backgroundColor: white,
    //         height: 25px,
    //         width: 25px,
    //         borderRadius: 50%,
    //       }
    //     }
    //   }
    // }

    // @keyframes spin {
    //   100% {
    //     transform: rotate(360deg),
    //   }
    // }
  }),
  { name: "SearchComponent" }
);
