import { AuthorizationStatus, RequestStatus, Sorting } from '../const';
import { store } from '../store';
import { TCardCities, TCity, TLocation, TOffer, TOffers, TReviews, TUser } from './types';

export type TState = ReturnType<typeof store.getState>;

export type TAddDispatch = typeof store.dispatch;

export type TInitialState = {
  allData: TOffers;
  city: string;
  offers: TOffers;
  offer: TOffer | null;
  offersFetchingStatus: RequestStatus;
  offerFetchingStatus: RequestStatus;
  offersPopularSort:TOffers;
  locationForMap: TCity[];
  favoritesOffer: TOffers;
  favoritesFetchingStatus: RequestStatus;
  sorting: Sorting;
  reviews: TReviews;
  reviewsFetchingStatus: RequestStatus;
  reviewsSendingStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
  user: TUser | null;
  loginSendingStatus: RequestStatus;
  nearPlaces: TOfferNearPlace[];
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

export type TOfferNearPlace = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TCardCities;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

