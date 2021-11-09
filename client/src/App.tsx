import React, { FC, ReactElement } from 'react';
import { AppBar, Toolbar, Container, Grow, Typography, Grid } from '@mui/material';

import { Form } from './components/Form';
import { Posts } from './components/Posts';
import { PostType } from './store/posts/types';
import { useActions } from './hooks/useAction';

import { useStyles } from './styles';

import memoriesPicture from './images/memories.png';

export const App: FC = (): ReactElement => {
  const [selectedPost, setSelectedPost] = React.useState<PostType | null>(null);
  const classes = useStyles();
  const { getPosts } = useActions();

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

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
              <Posts setSelectedPost={setSelectedPost}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
