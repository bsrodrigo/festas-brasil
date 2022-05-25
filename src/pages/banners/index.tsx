import React from "react";
import { TextField, Typography } from "@mui/material";
import { BannersList } from "../../components/organisms";

export const Banners: React.FC = () => (
  <div style={{ backgroundColor: "#FFF" }}>
    {/* TODO Adicionar um search para consultar os cartazes */}
    Search aqui
    <BannersList />
  </div>
);
