import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    marginBottom: '1rem',
  },
  [theme.breakpoints?.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse !important',
    },
  },
}));
