import React from "react";

import { Container as MuiContainer, ContainerProps } from "@mui/material";

interface IContainer extends ContainerProps {}

export const Container: React.FC<IContainer> = ({ children, ...props }) => (
  <MuiContainer {...props}>{children}</MuiContainer>
);
