import { FC, ReactElement } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

import { useStyles } from './styles';
import memoriesPicture from '../../images/memories.png';

const Navbar: FC = (): ReactElement => {
  const classes = useStyles();
  const user = useTypedSelector(({ auth }) => auth.user);
  const { logoutAC } = useActions();

  const handleLogout = () => {
    logoutAC();
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h2"
            component="h1"
            align="center"
            color="primary">
            Memories
          </Typography>
          <img src={memoriesPicture} alt="memories" height="60" draggable="false" />
        </Toolbar>
      </Link>
      <div className={classes.authBlock}>
        {user ? (
          <>
            <div className={classes.userBlock}>
              <Avatar
                className={classes.userAvatar}
                src={user.avatar}
                alt={`${user.fullName} avatar`}
              />
              <Typography variant="body1">{user.fullName}</Typography>
            </div>
            <Button color="error" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to="/auth">
            <Button variant="contained">Sign In</Button>
          </Link>
        )}
      </div>
    </AppBar>
  );
};

export { Navbar };
