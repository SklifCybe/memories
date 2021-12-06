import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: 'flex',
    padding: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  submitButton: {
    margin: '1rem 0 1rem 0',
  },
  linkToggle: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    textDecorationColor: '#A3C8ED',
    cursor: 'pointer',
    '&:hover': {
      textDecorationColor: theme.palette.primary.dark,
    },
  },
  googleBtn: {
    marginBottom: '1rem',
  },
}));

export { useStyles };
