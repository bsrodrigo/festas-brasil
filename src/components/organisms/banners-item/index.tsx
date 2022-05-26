import React, { useState } from "react";

import clsx from "clsx";

import { Typography, Skeleton } from "@mui/material";

import { ZoomActionsButton } from "../../molecules";

import { useStyles } from "./styles";
import { ITheme, useMediaQuery } from "../../bosons";

interface IBannerItem {
  imageUrl: string;
  name: string;
}

export const BannerItem: React.FC<IBannerItem> = ({ imageUrl, name }) => {
  const isMobile = useMediaQuery((theme: ITheme) =>
    theme.breakpoints.down("sm")
  );

  const [hasImageFocus, setHasImageFocus] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const classes = useStyles();

  const handleFocusImage = (): void => setHasImageFocus(!hasImageFocus);
  const handleLoadingImage = (): void => setLoadingImage(!loadingImage);

  return (
    <div className={classes.root}>
      <div
        className={classes.imageBox}
        onMouseEnter={handleFocusImage}
        onMouseLeave={handleFocusImage}
      >
        {loadingImage && <Skeleton height={300} />}

        <img
          onLoad={handleLoadingImage}
          src={imageUrl}
          alt="banner"
          className={clsx(
            classes.image,
            hasImageFocus && !isMobile
              ? classes.imageWithEffect
              : classes.imageWithoutEffect
          )}
        />

        <div
          onClick={() => console.log("abre a imagem")}
          className={clsx(
            classes.hoverEffectBox,
            hasImageFocus
              ? classes.activeHoverEffect
              : classes.deactivateHoverEffect
          )}
        />
        <ZoomActionsButton show={hasImageFocus} />
      </div>

      <div className={classes.titleBox}>
        <Typography variant="body2" color="grey">
          {name}
        </Typography>
      </div>
    </div>
  );
};
