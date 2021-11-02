export type Post = {
  title: string,
  message: string,
  creator: string,
  tags: Array<string>,
  selectedFile: string,
  likeCount: number,
  createdAt: Date
}