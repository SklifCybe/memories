import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  card: {
    maxWidth: '345px',
    borderRadius: '20px !important',
  },
  picture: {
    height: '180px',
  },
  overTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnAction: {
    display: 'flex',
    alignItems: 'center',
  },
});
