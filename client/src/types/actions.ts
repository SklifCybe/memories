import * as PostsActions from '../store/posts/actions';
import * as PostsThunks from '../store/posts/thunks';

export const ActionsCreators = { ...PostsActions, ...PostsThunks };
