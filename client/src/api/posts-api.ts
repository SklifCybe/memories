import { api } from './';
import { PostType } from '../store/posts/types';

const ENDPOINT = '/posts';

export const getPosts = () => {
  return api.get(ENDPOINT);
};

export const createPost = (post: PostType) => {
  return api.post(ENDPOINT, post);
};

export const updatePost = (id: string, post: PostType) => {
  return api.patch(`${ENDPOINT}/${id}`, { post });
};

export const deletePost = (id: string) => {
  return api.delete(`${ENDPOINT}/${id}`);
};

export const likePost = (id: string) => {
  return api.patch(`${ENDPOINT}/likePost/${id}`);
};
