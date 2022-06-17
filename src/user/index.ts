import { baseActions } from './slice';
const composedActions = { ...baseActions };

export { default as store } from './store';
export { useUserDispatch, useUserSelector } from './hooks';
export { composedActions as actions };