import React from "react";

import { Container as MuiContainer, ContainerProps } from "@mui/material";

type Props = ContainerProps;

export const Container: React.FC<Props> = ({ ...props }) => (
  <MuiContainer {...props} />
);
