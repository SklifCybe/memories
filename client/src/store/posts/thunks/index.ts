import { postsApi } from '../../../api/posts-api';
import { getPostsAC, createPostAC } from '../actions';
import { DispatchType, initialStateType, Post } from '../types';

export const getPosts = () => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: initialStateType } = await postsApi.getPosts();
    dispatch(getPostsAC(data.posts));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const createPost = (post: Post) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: Post } = await postsApi.createPost(post);
    dispatch(createPostAC(data));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
