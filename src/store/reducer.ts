import { createReducer } from "@reduxjs/toolkit";
import { DataCities } from "../components/blocks/data/data-cities-card";
import { CITY_DEFAULT, DataOfferDefault } from "../const";
import { filtrationCity, offerList } from "./action";

const inicialState = {
  city: CITY_DEFAULT,
  offer: DataOfferDefault,
}

export const reducer = createReducer(inicialState, (builder) => {
  builder
    .addCase(offerList, (state) => {
      state.city = state.city
    })
    .addCase(filtrationCity, (state) => {
      state.offer = DataCities.filter((offerItem) => offerItem.city.name === state.city)
    })
})
