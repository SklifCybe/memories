import { Dispatch } from 'react';

export const GET_POSTS = 'POST/GET_POST';
export const CREATE_POST = 'POST/CREATE_POST';
export const UPDATE_POST = 'POST/UPDATE_POST';
export const DELETE_POST = 'POST/DELETE_POST';
export const LIKE_POST = 'POST/LIKE_POST';
export const TOOGLE_DISABLED_BTN_LIKE = 'POST/TOOGLE_DISABLED_BTN_LIKE';

export type PostType = {
  id?: string;
  title: string;
  creator?: string;
  message: string;
  name: string;
  tags: Array<string>;
  selectedFile?: string;
  likes?: Array<string>;
  createdAt?: Date;
  isLikeDisabled: boolean;
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
    postId: string;
    likes: Array<string>;
  };
};

export type toogleDisabledBtnLikeType = {
  type: ReturnType<() => typeof TOOGLE_DISABLED_BTN_LIKE>;
  payload: {
    postId: string;
  };
};

export type ActionTypes =
  | getPostsType
  | createPostType
  | updatePostType
  | deletePostType
  | likePostType
  | toogleDisabledBtnLikeType;

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
