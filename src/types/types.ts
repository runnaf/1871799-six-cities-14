export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TIconToMap = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
};

export type TCities = string[];

export type TCardCities = {
  name: string;
  location: TLocation;
};

export type THost = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type TOffer = {
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
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}

export type TOfferForOffers = {
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

export type TOffers = TOfferForOffers[];

export type TToken = string;

export type TUser = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
};

export type TComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};

export type TReviews = TComment[];

export type TAuth = {
  id: number;
  email: string;
  token: string;
};

export type TLoginData = {
  email: string;
  password: string;
};
