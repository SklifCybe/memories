import * as PostsActions from '../store/posts/actions';
import * as AuthActions from '../store/auth/acitons';

import * as PostsThunks from '../store/posts/thunks';

export const ActionsCreators = { ...PostsActions, ...AuthActions ,...PostsThunks };
