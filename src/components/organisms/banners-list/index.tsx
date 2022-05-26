import React from "react";

import { BannerItem } from "../../organisms";
import { partiesListMock } from "../../../utils";

import { useStyles } from "./styles";
import { Typography } from "@mui/material";

export const BannersList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <Typography variant="h5">Festas brasileiras</Typography>
        <hr />
      </div>

      <div className={classes.gridImages}>
        {partiesListMock?.map((party, index) => (
          <BannerItem
            key={`party-${index}`}
            imageUrl={party?.imageUrl}
            name={party?.name}
          />
        ))}
      </div>
    </div>
  );
};
