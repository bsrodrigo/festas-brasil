import React, { useState } from "react";

import clsx from "clsx";

import { ShareOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IconButton, Zoom, Typography } from "@mui/material";

import { useStyles } from "./styles";

interface IImageWrapper {
  srcImage: string;
}

export const ImageWrapper: React.FC<IImageWrapper> = ({ srcImage }) => {
  const [hasImageFocus, setHasImageFocus] = useState<boolean>(false);
  const classes = useStyles();

  const handleFocusImage = (): void => setHasImageFocus(!hasImageFocus);

  return (
    <div>
      <div
        className={classes.root}
        onMouseEnter={handleFocusImage}
        onMouseLeave={handleFocusImage}
      >
        <Zoom in={hasImageFocus}>
          <div className={classes.actionBox}>
            <div>
              <IconButton color="default" aria-label="link">
                <ShareOutlined fontSize="inherit" />
              </IconButton>
            </div>
            <div>
              <IconButton
                color="default"
                aria-label="link"
                onClick={() => console.log("clica no botão")}
              >
                <VisibilityOutlined fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </Zoom>

        <div
          onClick={() => console.log("abre a imagem")}
          className={clsx(
            classes.hoverEffectBox,
            hasImageFocus
              ? classes.activeHoverEffect
              : classes.deactivateHoverEffect
          )}
        />
        <img src={srcImage} alt="banner" className={classes.image} />
      </div>
      <div className={classes.titleBox}>
        <Typography variant="body1" color="grey">
          Festa de São João / Junina - uma festa muito famosa e amada por muita
          gente
        </Typography>
      </div>
    </div>
  );
};
