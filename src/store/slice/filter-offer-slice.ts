import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCardProps } from '../../components/blocks/data/data-cities-card';
import { TStateFilterOffers } from '../../types/state';

const initialState : TStateFilterOffers = {
  filterOffers: []
};

export const filterOffersSlice = createSlice({
  name: 'filterOffers',
  initialState,
  reducers: {
    addFilterOffers(state, action: PayloadAction<TCardProps>) {
      state.filterOffers = action.payload;
    }
  }
});
