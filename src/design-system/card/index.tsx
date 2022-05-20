import React from "react";

import { Card as MuiCard, CardProps } from "@mui/material";

interface ICard extends CardProps {}

export const Card: React.FC<ICard> = ({ children, ...props }) => (
  <MuiCard {...props}>{children}</MuiCard>
);
