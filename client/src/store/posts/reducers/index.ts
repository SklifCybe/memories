import { ActionsType, GET_POSTS, CREATE_POST, initialStateType } from '../types';

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
    default:
      return state;
  }
};
