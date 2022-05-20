import React from "react";

import { Container, Grid } from "../../../design-system";
import { ImageWrapper } from "../../atoms";

export const BannersList: React.FC = () => (
  <div
    style={{
      display: "grid",
      margin: '0 auto',
      gridGap: 20,
      gridTemplateColumns: "repeat(auto-fill, 180px)",
      gridAutoRows: "minmax(20px, auto)",
      justifyContent: "center",
    }}
  >
    <ImageWrapper />

    <ImageWrapper />

    <ImageWrapper />

    <ImageWrapper />

    <ImageWrapper />

    <ImageWrapper />

    <ImageWrapper />
  </div>
);
