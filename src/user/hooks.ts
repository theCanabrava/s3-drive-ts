import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, UserDispatch } from './store';

export const useUserDispatch: () => UserDispatch = useDispatch;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;