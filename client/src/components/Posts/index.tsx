import React, { FC, ReactElement } from 'react';
import { CircularProgress, Grid } from '@mui/material';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostType } from '../../store/posts/types';
import { Post } from './Post';

type PostsProps = {
  setSelectedPost: (post: PostType) => void;
};

const Posts: FC<PostsProps> = ({ setSelectedPost }): ReactElement => {
  const posts = useTypedSelector(({ posts }) => posts.posts);

  return !posts?.length ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6}>
          <Post post={post} setSelectedPost={setSelectedPost} />
        </Grid>
      ))}
    </Grid>
  );
};

export { Posts };
