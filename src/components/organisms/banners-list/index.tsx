import React from "react";

import { ImageWrapper } from "../../atoms";
import { useStyles } from "./styles";

export const BannersList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageWrapper srcImage="/images/banner1.jpg" />

      <ImageWrapper srcImage="/images/banner2.jpg" />

      <ImageWrapper srcImage="/images/banner3.jpg" />

      <ImageWrapper srcImage="/images/banner4.jpg" />

      <ImageWrapper srcImage="/images/banner2.jpg" />

      <ImageWrapper srcImage="/images/banner1.jpg" />

      <ImageWrapper srcImage="/images/banner3.jpg" />
    </div>
  );
};
