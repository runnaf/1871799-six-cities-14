import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TAddDispatch, TState } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
export const useAppDispatch = useDispatch<TAddDispatch>;
