import React, { ReactNode } from "react";

import { Button, Dialog, DialogTitle, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

type Props = {
  cancelText: string;
  onCancel: () => void;
  onClose: () => void;
  open: boolean;
  onSubmit: () => void;
  submitText: string;
  title: string;
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({
  cancelText,
  children,
  onCancel,
  onClose,
  open,
  onSubmit,
  submitText,
  title,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.paper,
        paperWidthSm: classes.paperWidthSm,
        paperScrollPaper: classes.paperScrollPaper,
        root: classes.footerDialog,
      }}
      disableBackdropClick
      onClose={onClose}
      open={open}
    >
      <DialogTitle className={classes.header} disableTypography>
        {title && <Typography variant="h5">{title}</Typography>}
      </DialogTitle>
      <div className={classes.container}>{children}</div>
      <div className={classes.footer}>
        {onCancel && (
          <Button onClick={onCancel} variant="text">
            {cancelText}
          </Button>
        )}
        {onSubmit && (
          <Button onClick={onSubmit} variant="contained" color="primary">
            {submitText}
          </Button>
        )}
      </div>
    </Dialog>
  );
};
