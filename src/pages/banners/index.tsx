import React, { useState } from "react";
import { InputSearch, MusicPlayer } from "../../components/molecules";
import { BannersList } from "../../components/organisms";

export const Banners: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <div
      style={{
        backgroundColor: "#e4ebf5",
        paddingTop: 24,
        margin: "auto",
      }}
    >
      {/* <MusicPlayer /> */}
      <InputSearch
        onChange={(event) => setFilter(event?.currentTarget?.value)}
      />
      <BannersList filter={filter} />
    </div>
  );
};
