import { createReducer } from '@reduxjs/toolkit';
import { TInitialState } from '../types/state';
import { DEFAULT_CITY, Sorting, defaultLocation, defaultOffer } from '../const';
import { changeLocationMap, changeOfOffer, favoritesOfferList, filtrationCity, gettingSortValue, offerList, removeFavoritesOffer } from './action';
import { sortedOffers } from '../utils/common';

const initialState: TInitialState = {
  city: DEFAULT_CITY,
  offers: defaultOffer,
  locationForMap: defaultLocation,
  favoritesOffer: [],
  sorting: Sorting.Popular
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
      state.favoritesOffer = state.favoritesOffer.concat(action.payload);
    })
    .addCase(removeFavoritesOffer, (state, action) => {
      state.favoritesOffer = state.favoritesOffer.filter((offer) => offer.id !== action.payload.id);
    })
    .addCase(changeOfOffer, (state, action) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    })
    .addCase(gettingSortValue, (state, action) => {
      state.sorting = action.payload;
      sortedOffers(state.offers, state.sorting);
    });
});
