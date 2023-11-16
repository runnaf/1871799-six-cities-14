import { createReducer } from '@reduxjs/toolkit';
import { TInicialState } from '../types/state';
import { Cities } from '../const';
import { filtrationCity, offerList } from './action';

const inichialState: TInicialState = {
  city: Cities.Paris,
  offers: [],
};

export const reducer = createReducer(inichialState, (builder) => {
  builder
    .addCase(filtrationCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerList, (state, action) => {
      state.offers = action.payload;
    });
});
