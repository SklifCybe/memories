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
}

export const postsApi = new PostsApi();
