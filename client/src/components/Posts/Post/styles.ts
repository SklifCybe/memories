import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: '345px',
    borderRadius: '20px !important',
  },
  picture: {
    height: '180px',
    width: '100%',
  },
  overPicture: {
    position: 'relative',
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
  creatorField: {
    position: 'absolute',
    top: '10px',
    left: '20px',
  },
  createdAtField: {
    position: 'absolute',
    top: '50px',
    left: '20px',
  },
  horizBlockIcon: {
    position: 'absolute',
    top: '10px',
    right: '20px',
  },
  horizIcon: {
    color: '#fff !important',
  },
});

export { useStyles };
