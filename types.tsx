export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  Home: undefined;
  Post: undefined;
  CreatePost: undefined;
};

export type Author = {
  username: string;
};

export type Comment = {
  content: string;
};

export type Like = {
  liked: Comment | Post;
};

export type Post = {
  author: Author;
  content: string;
  comments: Comment[];
  title: string;
  likes: Like[];
  createdAt: string;
};
