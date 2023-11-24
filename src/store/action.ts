import { createAction } from '@reduxjs/toolkit';
import { TCardProps, TProps } from '../components/blocks/data/data-cities-card';
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

export const favoritesOfferList = createAction('favorites/offerList', (value: TProps) => ({
  payload: value,
}));

export const removeFavoritesOffer = createAction('favorites/removeFavoritesOffer', (value: TProps) => ({
  payload: value,
}));

export const changeOfOffer = createAction('offers/changeofferList', (value: TProps)=>({
  payload: value,
}));
