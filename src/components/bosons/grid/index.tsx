/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import { Grid as MuiGrid, GridProps } from "@mui/material";

type PropsInput = GridProps;

export const Grid = forwardRef<any, PropsInput>(({ ...props }, ref) => (
  <MuiGrid ref={ref} {...props} />
));
