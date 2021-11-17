import React, { FC, ReactElement } from 'react';
import { Container, Grow, Grid } from '@mui/material';

import { Posts } from '../Posts';
import { Form } from '../Form';
import { useActions } from '../../hooks/useAction';
import { PostType } from '../../store/posts/types';

import { useStyles } from './styles';

const Home: FC = (): ReactElement => {
  const classes = useStyles();
  const [selectedPost, setSelectedPost] = React.useState<PostType | null>(null);
  const { getPosts } = useActions();

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setSelectedPost={setSelectedPost} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export { Home };
