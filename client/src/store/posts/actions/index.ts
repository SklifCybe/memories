import { deletePostType, likePostType, LIKE_POST, PostType } from '../types';

import {
  getPostsType,
  createPostType,
  updatePostType,
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../types';

export const getPostsAC = (posts: Array<PostType>): getPostsType => ({
  type: GET_POSTS,
  payload: posts,
});

export const createPostAC = (post: PostType): createPostType => ({
  type: CREATE_POST,
  payload: post,
});

export const updatePostAC = (id: string, updatePost: PostType): updatePostType => ({
  type: UPDATE_POST,
  payload: {
    id,
    updatePost,
  },
});

export const deletePostAC = (id: string): deletePostType => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});

export const likePostAC = (postId: string, likes: Array<string>): likePostType => ({
  type: LIKE_POST,
  payload: {
    postId,
    likes
  },
});

