import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITY_DEFAULT } from '../../const';

type TInitialState = {
  city: string;
}

const initialState: TInitialState = {
  city: CITY_DEFAULT,
};

export const filterCitySlice = createSlice({
  name: 'filterCity',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    }
  },
});
