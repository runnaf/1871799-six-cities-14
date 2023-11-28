import { createAction } from '@reduxjs/toolkit';
import { TCity, TOffer, TOffers } from '../types/types';
import { Sorting } from '../const';

export const filtrationCity = createAction('offer/filtrationCity', (value: string)=>({
  payload: value,
}));

export const offerList = createAction('offer/offerList', (value: TOffers)=>({
  payload: value,
}));

export const getPopularOffers = createAction('offer/offersPopularSort', (value: TOffers)=> ({
  payload: value,
}));

export const getAllData = createAction('offer/getallData', (value: TOffers) => ({
  payload: value,
}));

export const changeLocationMap = createAction('map/changeLocationMap', (value: TCity[]) => ({
  payload: value,
}));

export const favoritesOfferList = createAction('favorites/offerList', (value: TOffer) => ({
  payload: value,
}));

export const removeFavoritesOffer = createAction('favorites/removeFavoritesOffer', (value: TOffer) => ({
  payload: value,
}));

export const changeOfOffer = createAction('offers/changeofferList', (value: TOffer)=>({
  payload: value,
}));

export const gettingSortValue = createAction('offers/sortingValue', (value: Sorting)=>({
  payload: value,
}));

export const sortingOffers = createAction('offers/sortingOffers', (value: Sorting) => ({
  payload: value,
}));
