import {
  initialStateType,
  ActionTypes,
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
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
          if (post.id === action.payload.id && post.likeCount) {
            post.likeCount += 1;
          }

          return post;
        }),
      };
    default:
      return state;
  }
};
