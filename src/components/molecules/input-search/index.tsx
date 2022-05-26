import React from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import { useStyles } from "./styles";

export const InputSearch: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        placeholder="Buscar festa..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="disabled" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
