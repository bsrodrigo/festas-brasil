import React from "react";

import { Card as MuiCard, CardProps } from "@material-ui/core";

interface ICard extends CardProps {}

export const Card: React.FC<ICard> = ({ children, ...props }) => (
  <MuiCard {...props}>{children}</MuiCard>
);
