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
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { useStyles } from "./styles";

interface IInputSearch extends StandardTextFieldProps {}

export const InputSearch: React.FC<IInputSearch> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        variant="outlined"
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
