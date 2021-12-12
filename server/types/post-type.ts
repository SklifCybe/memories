export type PostType = {
  _id: string;
  title: string;
  message: string;
  name: string;
  creator: string;
  tags: Array<string>;
  selectedFile: string;
  likes: Array<string>;
  createdAt: Date;
};
