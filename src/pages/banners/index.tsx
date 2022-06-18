import React, { useMemo, useState } from "react";
import { InputSearch, MusicPlayer } from "../../components/molecules";
import { AuthorizationModal, BannersList } from "../../components/organisms";
import { musicType, partiesListMock } from "../../utils";

import { useStyles } from "./styles";

export const Banners: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [musicFixed, setMusicFixed] = useState<musicType>();
  const [playMusic, setPlayMusic] = useState<boolean>();

  const classes = useStyles();

  const handleFixedMusic = (music?: musicType): void => {
    setMusicFixed(music);
  };

  const partiesListFiltered = useMemo(
    () =>
      partiesListMock?.filter((party) =>
        party?.name?.toLocaleLowerCase()?.includes(filter?.toLocaleLowerCase())
      ),
    [filter]
  );

  return (
    <div className={classes.root}>
      <MusicPlayer musicFixed={musicFixed} playMusic={playMusic} />
      <InputSearch
        onChange={(event) => setFilter(event?.currentTarget?.value)}
      />
      <BannersList
        items={partiesListFiltered}
        onFixedMusic={handleFixedMusic}
      />
      <AuthorizationModal
        onPlayMusic={() => {
          setPlayMusic(true);
        }}
      />
    </div>
  );
};
