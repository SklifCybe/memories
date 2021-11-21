import React, { FC, ReactElement } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

import memoriesPicture from '../../images/memories.png';

const Navbar: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
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
      <Link to="/auth">
        <Button variant="contained">Sign In</Button>
      </Link>
    </AppBar>
  );
};

export { Navbar };
