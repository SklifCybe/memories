import React, { FC, ReactElement } from 'react';
import { CircularProgress, Grid } from '@mui/material';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import { Post } from './Post';


export const Posts: FC = (): ReactElement => {
  const posts = useTypedSelector(({ posts }) => posts.posts);
  const { getPosts } = useActions();

  React.useEffect(() => {
    getPosts();
  }, []);

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
