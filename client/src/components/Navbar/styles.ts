import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '15px',
    marginBottom: '1rem',
    padding: '.5rem 3rem .5rem 1rem',
  },
  title: {
    marginRight: '1rem',
  },
  authBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  userBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '1rem'
  },
  userAvatar: {
    marginRight: '1rem',
    backgroundColor: '#005EA2'
  }
});

export { useStyles };
