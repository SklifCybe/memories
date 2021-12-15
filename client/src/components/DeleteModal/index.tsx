import { FC, ReactElement, useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useStyles } from './styles';

type DeleteModalProps = {
  handleDelete: () => void;
  postTitle: string;
};

const DeleteModal: FC<DeleteModalProps> = ({ handleDelete, postTitle }): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        <DeleteIcon />
        &nbsp;Delete&nbsp;
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="subtitle1" align="center">
            Are you sure to delete <strong>"{postTitle}"</strong>?
          </Typography>
          <Typography className={classes.modalBtns} id="modal-modal-description">
            <Button
              variant="contained"
              color="primary"
              onClick={handleDelete}
              className={classes.successBtn}>
              Yes
            </Button>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              No
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export { DeleteModal };
