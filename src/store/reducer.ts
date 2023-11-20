import { createReducer } from '@reduxjs/toolkit';
import { TInicialState } from '../types/state';
import { DEFAULT_CITY, defaultLocation, defaultOffer } from '../const';
import { changeLocationMap, filtrationCity, offerList } from './action';

const inichialState: TInicialState = {
  city: DEFAULT_CITY,
  offers: defaultOffer,
  locationForMap: defaultLocation
};

export const reducer = createReducer(inichialState, (builder) => {
  builder
    .addCase(filtrationCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeLocationMap, (state, action) => {
      state.locationForMap = action.payload;
    });
});
