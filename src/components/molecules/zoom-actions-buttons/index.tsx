import React from "react";

import { VisibilityOutlined, CloudDownloadOutlined } from "@material-ui/icons";
import { IconButton, Zoom } from "@material-ui/core";

import { useStyles } from "./styles";

interface IZoomActionsButton {
  show: boolean;
  onOpen: () => void;
  onDownload: () => void;
}

export const ZoomActionsButton: React.FC<IZoomActionsButton> = ({
  show = true,
  onOpen,
  onDownload,
}) => {
  const classes = useStyles();

  return (
    <Zoom in={show}>
      <div className={classes.actionBox}>
        <div>
          <IconButton color="default" aria-label="link">
            <VisibilityOutlined fontSize="inherit" onClick={onOpen} />
          </IconButton>
        </div>
        <div>
          <IconButton color="default" aria-label="link" onClick={onDownload}>
            <CloudDownloadOutlined fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </Zoom>
  );
};
