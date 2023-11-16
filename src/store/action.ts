import { createAction } from '@reduxjs/toolkit';
import { TProps } from '../components/blocks/data/data-cities-card';
import { Cities } from '../const';

export const filtrationCity = createAction('offer/filtrationCity', (value: Cities)=>({
  payload: value,
}));

export const offerList = createAction('offer/offerList', (value: TProps)=>({
  payload: value,
}));
