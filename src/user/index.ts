import { baseActions } from './slice';
import * as authActions from './authActions';

const composedActions = { ...baseActions, ...authActions };

export { default as store } from './store';
export { useUserDispatch, useUserSelector } from './hooks';
export { composedActions as actions };