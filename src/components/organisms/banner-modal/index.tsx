import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import { CloseOutlined, ArrowBackOutlined } from "@material-ui/icons";
import React, { ReactNode, useState } from "react";
import { partyType } from "../../../utils";

import { Modal } from "../../molecules";

import { useStyles } from "./styles";

type IBannerModal = {
  open: boolean;
  party: partyType;
  onClose: () => void;
  onOpen: () => void;
};

export const BannerModal: React.FC<IBannerModal> = ({
  open,
  party,
  onClose,
  onOpen,
}) => {
  const classes = useStyles();

  const handleClick = (): void => {
    window.open(party?.linkMore, "_blank");
  };

  return (
    <Dialog
      classes={{
        paper: classes.paper,
        paperWidthSm: classes.paperWidthSm,
        paperScrollPaper: classes.paperScrollPaper,
        root: classes.footerDialog,
      }}
      onClose={onClose}
      open={open}
    >
      <DialogTitle className={classes.header} disableTypography>
        <IconButton onClick={onClose}>
          <ArrowBackOutlined />
        </IconButton>
        <Typography variant="h5">{party?.name}</Typography>
        {/* <IconButton onClick={onClose}>
          <CloseOutlined />
        </IconButton> */}
      </DialogTitle>

      <DialogContent>
        <div className={classes.root}>
          <div className={classes.imageBox}>
            <img src={party?.imageSrc} alt={party?.name} />
          </div>

          <div className={classes.contentBox}>
            {party?.data?.map((item, index) => (
              <div
                key={`${index}-${item?.title}`}
                className={classes.contentItem}
              >
                <Typography variant="overline">{item?.title}</Typography>
                <Typography variant="body1">{item?.description}</Typography>
              </div>
            ))}

            <Button variant="contained" color="primary" onClick={handleClick}>
              Ver mais
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
