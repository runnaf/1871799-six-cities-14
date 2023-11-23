import { TCard } from '../components/blocks/card';
import { TCardProps } from '../components/blocks/data/data-cities-card';
import { store } from '../store';
import { TCity } from './types';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type TInitialState = {
  city: string;
  offers: TCardProps | [];
  locationForMap: TCity[];
  favoritesOffer: TCard[] | [];
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
