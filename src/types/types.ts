export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TIconToMap = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}

export type TCities = string[]

export type TCardCities = {
  name: string;
  location: TLocation;
}

export type THost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type TOffer = {
  city: TCardCities;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: THost;
  description: string;
  location: TLocation;
  id: number;
}

export type TOffers = TOffer[];
