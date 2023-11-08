import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCardProps } from '../../components/blocks/data/data-cities-card';
import { StateFilterOffers } from '../../types/state';

const initialState : StateFilterOffers = {
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
