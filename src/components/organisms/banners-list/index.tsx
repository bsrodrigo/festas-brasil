import React, { useMemo } from "react";

import { BannerItem } from "../../organisms";
import { musicType, partiesListMock, partyType } from "../../../utils";

import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

interface IBannerList {
  items: partyType[];
  onFixedMusic: (music: musicType) => void;
}

export const BannersList: React.FC<IBannerList> = ({ items, onFixedMusic }) => {
  const classes = useStyles();

  const handleOpen = (party: partyType) => {
    onFixedMusic(party?.music);
  };

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <Typography variant="h5">Festas brasileiras</Typography>
        <hr />
      </div>

      <div className={classes.gridImages}>
        {items?.map((party, index) => (
          <BannerItem
            key={`party-${index}`}
            imageUrl={party?.imageSrc}
            name={party?.name}
            onOpen={() => handleOpen(items[index])}
          />
        ))}
      </div>
    </div>
  );
};
