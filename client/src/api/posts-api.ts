import { API } from './';
import { PostType } from '../store/posts/types';

class PostsApi extends API {
  private ENDPOINT = '/posts';

  public getPosts() {
    return this.api.get(this.ENDPOINT);
  }

  public createPost(post: PostType) {
    return this.api.post(this.ENDPOINT, post);
  }

  public updatePost(id: string, post: PostType) {
    return this.api.patch(`${this.ENDPOINT}/${id}`, { post });
  }

  public deletePost(id: string) {
    return this.api.delete(`${this.ENDPOINT}/${id}`);
  }

  public likePost(id: string) {
    return this.api.patch(`${this.ENDPOINT}/likePost/${id}`);
  }
}

export const postsApi = new PostsApi();
