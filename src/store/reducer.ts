import { combineReducers } from '@reduxjs/toolkit';
import { offerSlice } from './slice/offer-slice';
import { filterCitySlice } from './slice/filter-city-slice';
import { sortOffersSlice } from './slice/sort-offers-slice';
import { filterOffersSlice } from './slice/filter-offer-slice';

export const reducer = combineReducers({
  [offerSlice.name]: offerSlice.reducer,
  [filterCitySlice.name]: filterCitySlice.reducer,
  [sortOffersSlice.name]: sortOffersSlice.reducer,
  [filterOffersSlice.name]: filterOffersSlice.reducer
});
