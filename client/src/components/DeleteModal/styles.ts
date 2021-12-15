import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #555',
    borderRadius: '10px',
    padding: '10px',
  },
  modalBtns: {
    display: 'flex',
    justifyContent: 'center !important',
    marginTop: '1rem',
  },
  successBtn: {
    marginRight: '4rem',
  },
}));
