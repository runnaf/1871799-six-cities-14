import { createReducer } from '@reduxjs/toolkit';
import { TInitialState } from '../types/state';
import { DEFAULT_CITY, Sorting, defaultLocation, defaultOffer } from '../const';
import { changeLocationMap, changeOfOffer, favoritesOfferList, filtrationCity, getAllData, getPopularOffers, gettingSortValue, offerList, removeFavoritesOffer } from './action';
import { sortedOffers } from '../utils/common';
import { DataCities } from '../components/blocks/data/data-cities-card';

const initialState: TInitialState = {
  allData: DataCities,
  city: DEFAULT_CITY,
  offers: defaultOffer,
  offersPopularSort: defaultOffer,
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
    .addCase(getPopularOffers, (state, action) => {
      state.offersPopularSort = action.payload;
    })
    .addCase(getAllData, (state, action)=> {
      state.allData = action.payload;
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
      state.offers = sortedOffers(state.offers, state.sorting, state.offersPopularSort);
    });
});
