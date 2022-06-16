import React from "react";

import { Container as MuiContainer, ContainerProps } from "@material-ui/core";

type Props = ContainerProps;

export const Container: React.FC<Props> = ({ ...props }) => (
  <MuiContainer {...props} />
);
