import {
  initialStateType,
  ActionTypes,
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  TOOGLE_DISABLED_BTN_LIKE,
} from '../types';

const initialState: initialStateType = {
  posts: [],
};

export const postReducer = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload.updatePost : post,
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId && post.likes) {
            post.likes = [...action.payload.likes];
          }
          return post;
        }),
      };
    case TOOGLE_DISABLED_BTN_LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (action.payload.postId === post.id) {
            post.isLikeDisabled = !post.isLikeDisabled;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
