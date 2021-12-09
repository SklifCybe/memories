import { Post } from '../types/post-type';

export class PostDTO {
  private title;
  private message;
  private name;
  private creator;
  private tags;
  private selectedFile;
  private likes;
  private createdAt;

  constructor(model: Post) {
    this.title = model.title;
    this.message = model.message;
    this.name = model.name;
    this.creator = model.creator;
    this.tags = model.tags;
    this.selectedFile = model.selectedFile;
    this.likes = model.likes;
    this.createdAt = model.createdAt;
  }
}
