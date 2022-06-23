import React, { useMemo, useState } from "react";

import { BannerItem, BannerModal } from "../../organisms";
import { musicType, partiesListMock, partyType } from "../../../utils";

import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

interface IBannerList {
  items: partyType[];
  onFixedMusic: (music: musicType) => void;
}

export const BannersList: React.FC<IBannerList> = ({ items, onFixedMusic }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [partySelected, setPartySelected] = useState<partyType>();

  const classes = useStyles();

  const handleOpen = (party: partyType) => {
    onFixedMusic(party?.music);
    setPartySelected(party);
    setOpen(true);
  };

  const handleClose = () => {
    onFixedMusic(null);
    setPartySelected(null);
    setOpen(false);
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

      <BannerModal open={open} party={partySelected} onClose={handleClose} />
    </div>
  );
};
