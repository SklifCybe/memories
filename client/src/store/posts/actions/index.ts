import { Post } from '../types';

import { getPostsType, createPostType, GET_POSTS, CREATE_POST } from '../types';

export const getPostsAC = (posts: Array<Post>): getPostsType => ({
  type: GET_POSTS,
  payload: posts
});

export const createPostAC = (post: Post): createPostType => ({
  type: CREATE_POST,
  payload: post,
});
