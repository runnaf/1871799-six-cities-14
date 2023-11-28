import { Sorting } from '../const';
import { store } from '../store';
import { TCity, TOffer, TOffers } from './types';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type TInitialState = {
  allData: TOffers;
  city: string;
  offers: TOffers;
  offersPopularSort:TOffers;
  locationForMap: TCity[];
  favoritesOffer: TOffer[];
  sorting: Sorting;
}

export type TStateOffers = {
  offers: {
    offers: TOffers;
  };
}

export type TStateFilterCity = {
  filterCity: {
    city: string;
  };
}

export type TStateSortOffers = {
  sortOffers: TOffers;
}

export type TStateFilterOffers = {
  filterOffers: TOffers;
}

export type TStateOffersFilter = {
  filterOffers: {
    filterOffers: TOffers;
  };
}

export type TStateOffersSort = {
  sortOffers: {
    sortOffers: TOffers;
  };
}
