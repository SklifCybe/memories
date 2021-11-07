import { postsApi } from '../../../api/posts-api';
import { getPostsAC, createPostAC } from '../actions';
import { DispatchType, PostType } from '../types';

export const getPosts = () => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: Array<PostType> } = await postsApi.getPosts();

    dispatch(getPostsAC(data));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const createPost = (post: PostType) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: PostType } = await postsApi.createPost(post);
    dispatch(createPostAC(data));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
