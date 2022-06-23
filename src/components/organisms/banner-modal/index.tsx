import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { partyType } from "../../../utils";

import { useStyles } from "./styles";

type IBannerModal = {
  open: boolean;
  party: partyType;
  onClose: () => void;
};

export const BannerModal: React.FC<IBannerModal> = ({
  open,
  party,
  onClose,
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
            <Button variant="text" color="primary" onClick={onClose}>
              Fechar
            </Button>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Ver mais
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
