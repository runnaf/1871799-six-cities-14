import { createAction } from '@reduxjs/toolkit';
import { TCardProps } from '../components/blocks/data/data-cities-card';
import { TCity } from '../types/types';
import { TCard } from '../components/blocks/card';

export const filtrationCity = createAction('offer/filtrationCity', (value: string)=>({
  payload: value,
}));

export const offerList = createAction('offer/offerList', (value: TCardProps)=>({
  payload: value,
}));

export const changeLocationMap = createAction('map/changeLocationMap', (value: TCity[]) => ({
  payload: value,
}));

export const favoritesOfferList = createAction('favorites/offerList', (value: TCard) => ({
  payload: value,
}));
