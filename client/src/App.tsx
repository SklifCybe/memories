import { FC, ReactElement } from 'react';
import { AppBar, Toolbar, Container, Grow, Typography, Grid } from '@mui/material';

import { Form } from './components/Form';
import { Posts } from './components/Posts';

import { useStyles } from './styles';

import memoriesPicture from './images/memories.png';

export const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar>
          <Typography variant="h2" component="h1" align="center" color="primary">
            Memories
          </Typography>
          <img src={memoriesPicture} alt="memories" height="60" />
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
