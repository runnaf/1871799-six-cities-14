import { TCardProps, TProps } from '../components/blocks/data/data-cities-card';
import { Cities } from '../const';
import { store } from '../store';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type TInicialState = {
  city: Cities;
  offers: TProps | [];
}

export type TStateOffers = {
  offers: {
    offers: TCardProps;
  };
}

export type TStateFilterCity = {
  filterCity: {
    city: string;
  };
}

export type TStateSortOffers = {
  sortOffers: TCardProps;
}

export type TStateFilterOffers = {
  filterOffers: TCardProps;
}

export type TStateOffersFilter = {
  filterOffers: {
    filterOffers: TCardProps;
  };
}

export type TStateOffersSort = {
  sortOffers: {
    sortOffers: TCardProps;
  };
}
