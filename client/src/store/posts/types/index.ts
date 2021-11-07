import { Dispatch } from "react";

export const GET_POSTS = 'POST/GET_POST';
export const CREATE_POST = 'POST/CREATE_POST';

export type Post = {
  title: string;
  message: string;
  creator: string;
  tags: Array<string>;
  selectedFile: ArrayBuffer | string;
  likeCount?: number;
  createdAt?: Date;
};

export type getPostsType = {
  type: ReturnType<() => typeof GET_POSTS>;
  payload: Array<Post>;
};

export type createPostType = {
  type: ReturnType<() => typeof CREATE_POST>;
  payload: Post;
};

export type ActionsType = getPostsType | createPostType;

export type initialStateType = {
  posts: Array<Post>
}

export type DispatchType = (action: ActionsType) => Dispatch<ActionsType>
