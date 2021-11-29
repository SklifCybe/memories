import { initialStateType, ActionTypes, AUTH, LOGOUT, AuthUser } from '../types';

const userKey = 'userData';

const getUser = (): AuthUser => {
  const user = localStorage.getItem(userKey);

  if (user) {
    return JSON.parse(user);
  }

  return null;
};

const initialState: initialStateType = {
  user: getUser(),
};

export const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case AUTH:
      if (action.payload.user) {
        localStorage.setItem(userKey, JSON.stringify(action.payload.user));
      }
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT:
      localStorage.removeItem(userKey);
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
