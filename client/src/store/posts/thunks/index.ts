import { postsApi } from '../../../api/posts-api';
import { getPostsAC, createPostAC } from '../actions';
import { DispatchType } from '../types';

export const getPosts = () => async (dispatch: DispatchType) => {
  try {
    const { data } = await postsApi.getPosts();
    console.log(data);
    dispatch(getPostsAC(data.posts));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
