import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus, NameSpace } from '../const';
import { TAuth, TComment, TOffer, TOffers, TReviews, TUser } from '../types/types';
import { dropToken, saveToken } from '../services/token';
import { TOfferNearPlace } from '../types/state';
import { requireAuthorization } from './action';

type ExtraType = {
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<TOffers, undefined, ExtraType>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(APIRoute.Offers);

    return data;
  }
);

export const fetchOffer = createAsyncThunk<TOffer, TOffer['id'], ExtraType>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<TOfferNearPlace[], TOffer['id'], ExtraType>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOfferNearPlace[]>(
      `${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`
    );

    return data;
  }
);

export const fetchReviews = createAsyncThunk<TReviews, TOffer['id'], ExtraType>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${APIRoute.Reviews}/${offerId}`);

    return data;
  }
);

export const postReviews = createAsyncThunk<
  TComment,
  { reviewData: TComment; offerId: TOffer['id'] },
  ExtraType
>(
  `${NameSpace.Reviews}/postReview`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<TComment>(`${APIRoute.Reviews}/${offerId}`,
      reviewData
    );

    return data;
  }
);

export const fetchFavorites = createAsyncThunk<TReviews, undefined, ExtraType>(
  `${NameSpace.Favorites}/fetchFavorites`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviews>(
      `${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`
    );

    return data;
  }
);

export const login = createAsyncThunk<TAuth, TUser, ExtraType>(
  `${NameSpace.User}/login`,
  async (loginData, {dispatch, extra: api}) => {
    const {data} = await api.post<TAuth>(APIRoute.Login, loginData);
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, ExtraType>(
  `${NameSpace.User}/logout`,
  (_arg, {dispatch, extra: api}) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ExtraType>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);
