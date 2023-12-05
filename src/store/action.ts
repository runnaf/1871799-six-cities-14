import { createAction } from '@reduxjs/toolkit';
import { TCity, TOfferForOffers, TOffers, TReviews, TUser } from '../types/types';
import { AuthorizationStatus, NameSpace, Sorting } from '../const';

export const filtrationCity = createAction('offer/filtrationCity', (value: string)=>({
  payload: value,
}));

export const getOffers = createAction('offer/offerList', (value: TOffers)=>({
  payload: value,
}));

export const getPopularOffers = createAction('offer/offersPopularSort', (value: TOffers)=> ({
  payload: value,
}));

export const getAllData = createAction('offer/getallData', (value: TOffers) => ({
  payload: value,
}));

export const changeLocationMap = createAction('map/changeLocationMap', (value: TCity) => ({
  payload: value,
}));

export const favoritesOfferList = createAction('favorites/offerList', (value: TOfferForOffers) => ({
  payload: value,
}));

export const removeFavoritesOffer = createAction('favorites/removeFavoritesOffer', (value: TOfferForOffers) => ({
  payload: value,
}));

export const changeOfOffer = createAction('offers/changeofferList', (value: TOfferForOffers)=>({
  payload: value,
}));

export const gettingSortValue = createAction('offers/sortingValue', (value: Sorting)=>({
  payload: value,
}));

export const sortingOffers = createAction('offers/sortingOffers', (value: Sorting) => ({
  payload: value,
}));

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const requireAuthorization = createAction('user/requireAuthorization', (value: AuthorizationStatus) => ({
  payload: value,
}));

export const updateUserdata = createAction('user/updateUserData', (value: TUser) => ({
  payload: value,
}));

export const loadComments = createAction('data/loadComments', (value: TReviews) => ({
  payload: value,
}));

export const changePagePath = createAction('browser/changePagePath', (value: string) => ({
  payload: value,
}));
