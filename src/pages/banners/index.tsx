import React from "react";
import { TextField, Typography } from "@mui/material";
import { InputSearch } from "../../components/molecules";
import { BannersList } from "../../components/organisms";

export const Banners: React.FC = () => (
  <div
    style={{
      backgroundColor: "#e4ebf5",
      paddingTop: 24,
      margin: "auto",
    }}
  >
    <InputSearch />
    <BannersList />
  </div>
);
