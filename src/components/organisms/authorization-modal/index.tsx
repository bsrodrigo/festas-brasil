import { Typography } from "@material-ui/core";
import React, { ReactNode, useState } from "react";

import { Modal } from "../../molecules";

import { useStyles } from "./styles";

type Props = {
  onPlayMusic: () => void;
};

export const AuthorizationModal: React.FC<Props> = ({ onPlayMusic }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Modal
      cancelText="Não autorizo"
      onCancel={() => {
        console.log("não");
        setOpen(false);
      }}
      onClose={() => {
        console.log("não");
        setOpen(false);
      }}
      onSubmit={() => {
        console.log("sim");
        onPlayMusic();
        setOpen(false);
      }}
      open={open}
      submitText="Autorizo a reprodução de sons"
      title="Imersão completa"
    >
      <Typography>
        Para que nós possamos lhe proporcionar uma <b>experiência completa</b>,
        precisamos que você autorize a reprodução de sons.
      </Typography>
      <br />
      <Typography>
        Cada festa pode ter alguma música que te faça dela e queremos
        que você tenha uma imersão completa nessas diferentes festas
        <b> culturais e regionais </b>
      </Typography>
    </Modal>
  );
};
