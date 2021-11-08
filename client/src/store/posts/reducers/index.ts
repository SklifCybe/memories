import { ActionsType, GET_POSTS, CREATE_POST, UPDATE_POST, initialStateType } from '../types';

const initialState: initialStateType = {
  posts: [],
};

export const postReducer = (state = initialState, action: ActionsType): initialStateType => {
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
          post._id === action.payload.id ? action.payload.updatePost : post,
        ),
      };
    default:
      return state;
  }
};
