import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateSortOffers } from "../../types/state";
import { TCardProps } from "../../components/blocks/data/data-cities-card";

const initialState: StateSortOffers = {
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
})