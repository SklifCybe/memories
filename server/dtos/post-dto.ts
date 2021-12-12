import { PostType } from '../types/post-type';

export class PostDTO {
  title: string;
  id: string;
  message: string;
  name: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likes: string[];
  createdAt: Date;

  constructor(model: PostType) {
    this.id = model._id;
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
