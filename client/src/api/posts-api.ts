import axios from 'axios';

import { PostType } from '../store/posts/types';

class PostsApi {
  private ENDPOINT = 'http://localhost:5050/api/posts';

  public getPosts() {
    return axios.get(this.ENDPOINT);
  }

  public createPost(post: PostType) {
    return axios.post(this.ENDPOINT, post);
  }

  public updatePost(id: string, post: PostType) {
    return axios.patch(`${this.ENDPOINT}/${id}`, { post });
  }

  public deletePost(id: string) {
    return axios.delete(`${this.ENDPOINT}/${id}`);
  }

  public likePost(id: string) {
    return axios.patch(`${this.ENDPOINT}/likePost/${id}`);
  }
}

export const postsApi = new PostsApi();
