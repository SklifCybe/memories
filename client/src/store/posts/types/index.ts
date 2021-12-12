import { Dispatch } from 'react';

export const GET_POSTS = 'POST/GET_POST';
export const CREATE_POST = 'POST/CREATE_POST';
export const UPDATE_POST = 'POST/UPDATE_POST';
export const DELETE_POST = 'POST/DELETE_POST';
export const LIKE_POST = 'POST/LIKE_POST';

export type PostType = {
  id?: string;
  title: string;
  message: string;
  name: string;
  tags: Array<string>;
  selectedFile?: string;
  likeCount?: number;
  createdAt?: Date;
};

export type getPostsType = {
  type: ReturnType<() => typeof GET_POSTS>;
  payload: Array<PostType>;
};

export type createPostType = {
  type: ReturnType<() => typeof CREATE_POST>;
  payload: PostType;
};

export type updatePostType = {
  type: ReturnType<() => typeof UPDATE_POST>;
  payload: {
    id: string;
    updatePost: PostType;
  };
};

export type deletePostType = {
  type: ReturnType<() => typeof DELETE_POST>;
  payload: {
    id: string;
  };
};

export type likePostType = {
  type: ReturnType<() => typeof LIKE_POST>;
  payload: {
    id: string;
  };
};

export type ActionTypes =
  | getPostsType
  | createPostType
  | updatePostType
  | deletePostType
  | likePostType;

export type initialStateType = {
  posts: Array<PostType>;
};

export type DispatchType = (action: ActionTypes) => Dispatch<ActionTypes>;

export type PostsResponse = {
  message: string;
  result: Array<PostType>;
};

export type PostResponse = {
  message: string;
  result: PostType;
};
