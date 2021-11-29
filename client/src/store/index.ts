import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { postReducer } from './posts/reducers';
import { authReducer } from './auth/reducers';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
