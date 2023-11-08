import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataCities, TCardProps } from '../../components/blocks/data/data-cities-card';

type TInitialState = {
  offers: TCardProps;
}

const initialState: TInitialState = {
  offers: DataCities,
};

export const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    addOfferList (state, action: PayloadAction<TCardProps>) {
      state.offers = action.payload;
    },
  },
});
