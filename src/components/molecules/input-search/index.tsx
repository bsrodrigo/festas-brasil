import React from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  BaseTextFieldProps,
  TextFieldProps,
  StandardTextFieldProps,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import { useStyles } from "./styles";

interface IInputSearch extends StandardTextFieldProps {}

export const InputSearch: React.FC<IInputSearch> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        {...props}
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
