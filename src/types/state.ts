import { TCard } from '../components/blocks/card';
import { TCardProps } from '../components/blocks/data/data-cities-card';
import { store } from '../store';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type StateOffers = {
  offers: {
    offers: TCard;
  };
}
  
export type StateFilterCity = {
  filterCity: {
    city: string;
  };
}
  
export type StateSortOffers = {
  sortOffers: TCardProps | null;
}
  
export type StateFilterOffers = {
  filterOffers: TCardProps | null;
}
  
export  type StateOffersFilter = {
  filterOffers: {
    filterOffers: TCard;
  };
}
  
export type StateOffersSort = {
  sortOffers: {
    sortOffers: TCard;
  };
}
