import axios from 'axios';

import { Post } from '../store/posts/types';

class PostsApi {
  private ENDPOINT = 'http://localhost:5050/api/posts';

  public getPosts() {
    return axios.get(this.ENDPOINT);
  }

  public createPost(post: Post) {
    return axios.post(this.ENDPOINT, post);
  }
}

export const postsApi = new PostsApi();
