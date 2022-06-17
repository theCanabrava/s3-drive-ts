import { baseActions } from './slice';
import * as authActions from './authActions';
import * as storageActions from './storageActions';

const composedActions = { ...baseActions, ...authActions, ...storageActions };

export { default as store } from './store';
export { useUserDispatch, useUserSelector } from './hooks';
export { composedActions as actions };