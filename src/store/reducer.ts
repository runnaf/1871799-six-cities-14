import { createReducer } from '@reduxjs/toolkit';
import { TInitialState } from '../types/state';
import { AuthorizationStatus, CityMap, RequestStatus, Sorting } from '../const';
import { changeLocationMap, changeOfOffer, dropOffer, favoritesOfferList, filtrationCity, getAllData, getOffers, getPopularOffers, gettingSortValue, loadComments, removeFavoritesOffer, requireAuthorization, updateUserdata } from './action';
import { sortedOffers } from '../utils/common';
import { fetchNearPlaces, fetchOffer, fetchOffers, fetchReviews, login, logout, postReviews } from './api-action';

const initialState: TInitialState = {
  allData: [],
  city: CityMap.Paris,
  offers: [],
  offer: null,
  offersFetchingStatus: RequestStatus.Idle,
  offerFetchingStatus: RequestStatus.Idle,
  offersPopularSort: [],
  favoritesOffer: [],
  favoritesFetchingStatus: RequestStatus.Idle,
  sorting: Sorting.Popular,
  reviews: [],
  reviewsFetchingStatus: RequestStatus.Idle,
  reviewsSendingStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginSendingStatus: RequestStatus.Idle,
  nearPlaces: [],
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(updateUserdata, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.offersFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Success;
      state.allData = action.payload;
      state.offersPopularSort = action.payload.filter((offer)=> offer.city.name === state.city.name);
      state.offers = sortedOffers(state.sorting, state.offersPopularSort, action.payload.filter((offer)=> offer.city.name === state.city.name));
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewsFetchingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Error;
    })
    .addCase(postReviews.pending, (state) => {
      state.reviewsSendingStatus = RequestStatus.Pending;
    })
    .addCase(postReviews.fulfilled, (state, action) => {
      state.reviewsSendingStatus = RequestStatus.Success;
      state.reviews = [...state.reviews, action.payload].sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date)));
    })
    .addCase(postReviews.rejected, (state) => {
      state.reviewsSendingStatus = RequestStatus.Error;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(filtrationCity, (state, action) => {
      state.city.name = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getPopularOffers, (state, action) => {
      state.offersPopularSort = action.payload;
    })
    .addCase(getAllData, (state, action)=> {
      state.allData = action.payload;
    })
    .addCase(changeLocationMap, (state, action) => {
      state.city = action.payload;
    })
    .addCase(favoritesOfferList, (state, action) => {
      state.favoritesOffer = state.favoritesOffer.concat(action.payload);
    })
    .addCase(removeFavoritesOffer, (state, action) => {
      state.favoritesOffer = state.favoritesOffer.filter((offer) => offer.id !== action.payload.id);
    })
    .addCase(changeOfOffer, (state, action) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    })
    .addCase(gettingSortValue, (state, action) => {
      state.sorting = action.payload;
      state.offers = sortedOffers(state.sorting, state.offersPopularSort, state.offers);
    });
});
