import React from "react";

import { Grid as MuiGrid, GridProps } from "@material-ui/core";

interface IGrid extends GridProps {}

export const Grid: React.FC<IGrid> = ({ children, ...props }) => (
  <MuiGrid {...props}>{children}</MuiGrid>
);
