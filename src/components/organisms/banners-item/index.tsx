import React, { useState } from "react";

import clsx from "clsx";

import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { ZoomActionsButton } from "../../molecules";

import { useStyles } from "./styles";
import { ITheme, useMediaQuery } from "../../bosons";

interface IBannerItem {
  imageUrl: string;
  name: string;
  onOpen: () => void;
}

export const BannerItem: React.FC<IBannerItem> = ({
  imageUrl,
  name,
  onOpen,
}) => {
  const isMobile = useMediaQuery((theme: ITheme) =>
    theme.breakpoints?.down("sm")
  );

  const [hasImageFocus, setHasImageFocus] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const classes = useStyles();

  const handleFocusImage = (): void => setHasImageFocus(!hasImageFocus);
  const handleLoadingImage = (): void => setLoadingImage(false);

  return (
    <div
      className={classes.root}
      onClick={onOpen}
      onMouseEnter={handleFocusImage}
      onMouseLeave={handleFocusImage}
    >
      <div className={classes.imageBox}>
        {loadingImage && <Skeleton height={600} />}

        <img
          onLoad={handleLoadingImage}
          src={imageUrl}
          alt="banner"
          className={clsx(
            classes.image,
            loadingImage && classes.invisible,
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
        <Typography variant="body2">{name}</Typography>
      </div>
    </div>
  );
};
