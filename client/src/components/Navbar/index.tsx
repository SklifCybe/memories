import React, { FC, ReactElement } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { useStyles } from './styles';

import memoriesPicture from '../../images/memories.png';

const Navbar: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar>
        <Typography variant="h2" component="h1" align="center" color="primary">
          Memories
        </Typography>
        <img src={memoriesPicture} alt="memories" height="60" />
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
