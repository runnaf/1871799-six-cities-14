import { createReducer } from '@reduxjs/toolkit';
import { TInitialState } from '../types/state';
import { DEFAULT_CITY, defaultLocation, defaultOffer } from '../const';
import { changeLocationMap, favoritesOfferList, filtrationCity, offerList } from './action';

const initialState: TInitialState = {
  city: DEFAULT_CITY,
  offers: defaultOffer,
  locationForMap: defaultLocation,
  favoritesOffer: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filtrationCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeLocationMap, (state, action) => {
      state.locationForMap = action.payload;
    })
    .addCase(favoritesOfferList, (state, action) => {
      state.favoritesOffer.push(action.payload);
    });
});
