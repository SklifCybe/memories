import { PostType } from '../types';

import { getPostsType, createPostType, GET_POSTS, CREATE_POST } from '../types';

export const getPostsAC = (posts: Array<PostType>): getPostsType => ({
  type: GET_POSTS,
  payload: posts
});

export const createPostAC = (post: PostType): createPostType => ({
  type: CREATE_POST,
  payload: post,
});
