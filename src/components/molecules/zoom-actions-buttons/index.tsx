import React from "react";

import { ShareOutlined, CloudDownloadOutlined } from "@material-ui/icons";
import { IconButton, Zoom } from "@material-ui/core";

import { useStyles } from "./styles";

interface IZoomActionsButton {
  show: boolean;
}

export const ZoomActionsButton: React.FC<IZoomActionsButton> = ({
  show = true,
}) => {
  const classes = useStyles();

  return (
    <Zoom in={show}>
      <div className={classes.actionBox}>
        <div>
          <IconButton color="default" aria-label="link">
            <ShareOutlined
              fontSize="inherit"
              // TODO criar função de compartilhar link
              onClick={() => console.log("botão download")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            color="default"
            aria-label="link"
            // TODO criar função de download da imagem
            onClick={() => console.log("botão download")}
          >
            <CloudDownloadOutlined fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </Zoom>
  );
};
