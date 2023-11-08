import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TStateSortOffers } from '../../types/state';
import { TCardProps } from '../../components/blocks/data/data-cities-card';

const initialState: TStateSortOffers = {
  sortOffers: null,
};

export const sortOffersSlice = createSlice({
  name: 'sortOffers',
  initialState,
  reducers: {
    addSortOffers(state, action: PayloadAction<TCardProps>) {
      state.sortOffers = action.payload;
    }
  }
});
