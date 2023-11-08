import { TCard } from '../components/blocks/card';
import { TCardProps } from '../components/blocks/data/data-cities-card';
import { store } from '../store';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type TStateOffers = {
  offers: {
    offers: TCard;
  };
}

export type TStateFilterCity = {
  filterCity: {
    city: string;
  };
}

export type TStateSortOffers = {
  sortOffers: TCardProps | null;
}

export type TStateFilterOffers = {
  filterOffers: TCardProps | null;
}

export type TStateOffersFilter = {
  filterOffers: {
    filterOffers: TCard;
  };
}

export type StateOffersSort = {
  sortOffers: {
    sortOffers: TCard;
  };
}
