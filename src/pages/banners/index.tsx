import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
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
      <InputSearch
        onChange={(event) => setFilter(event?.currentTarget?.value)}
      />
      <BannersList filter={filter} />
      {/* <MusicPlayer /> */}
    </div>
  );
};
