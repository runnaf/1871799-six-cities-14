import { createAction } from '@reduxjs/toolkit';
import { TCardProps } from '../components/blocks/data/data-cities-card';
import { TCity } from '../types/types';

export const filtrationCity = createAction('offer/filtrationCity', (value: string)=>({
  payload: value,
}));

export const offerList = createAction('offer/offerList', (value: TCardProps)=>({
  payload: value,
}));

export const changeLocationMap = createAction('map/changeLocationMap', (value: TCity[]) => ({
  payload: value,
}));
