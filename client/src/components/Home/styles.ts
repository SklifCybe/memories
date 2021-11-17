import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  [theme.breakpoints?.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse !important',
    },
  },
}));
