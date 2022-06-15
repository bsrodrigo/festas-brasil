import React, { useMemo } from "react";

import { BannerItem } from "../../organisms";
import { partiesListMock } from "../../../utils";

import { useStyles } from "./styles";
import { Typography } from "@mui/material";

interface IBannerList {
  filter: string;
}

export const BannersList: React.FC<IBannerList> = ({ filter }) => {
  const classes = useStyles();

  const partiesListFiltered = useMemo(
    () =>
      partiesListMock?.filter((party) =>
        party?.name?.toLocaleLowerCase()?.includes(filter?.toLocaleLowerCase())
      ),
    [filter]
  );

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <Typography variant="h5">Festas brasileiras</Typography>
        <hr />
      </div>

      <div className={classes.gridImages}>
        {partiesListFiltered?.map((party, index) => (
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
