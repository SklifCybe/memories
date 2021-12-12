import * as postsApi from '../../../api/posts-api';
import { getPostsAC, createPostAC, updatePostAC, deletePostAC, likePostAC } from '../actions';
import { DispatchType, PostType, PostsResponse, PostResponse } from '../types';

export const getPosts = () => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: PostsResponse } = await postsApi.getPosts();

    dispatch(getPostsAC(data.result));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const createPost = (post: PostType) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: PostResponse } = await postsApi.createPost(post);

    dispatch(createPostAC(data.result));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const updatePost = (id: string, updatePost: PostType) => async (dispatch: DispatchType) => {
  try {
    await postsApi.updatePost(id, updatePost);
    dispatch(updatePostAC(id, updatePost));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const deletePost = (id: string) => async (dispatch: DispatchType) => {
  try {
    await postsApi.deletePost(id);
    dispatch(deletePostAC(id));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const likePost = (id: string) => async (dispatch: DispatchType) => {
  try {
    await postsApi.likePost(id);
    dispatch(likePostAC(id));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
