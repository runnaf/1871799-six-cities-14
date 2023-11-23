import pin from '..//markup/img/pin.svg';
import currentPin from '..//markup/img/pin-active.svg';
import { DataCities } from './components/blocks/data/data-cities-card';
import { TCity } from './types/types';

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  NotFoundPage = '/*',
  Offer = '/offer',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
export const URL_MARKER_DEFAULT = pin;

export const URL_MARKER_CURRENT = currentPin;

export const DEFAULT_ICONT = {
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
};

export const CURRENT_ICON = {
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
};

export const CityMap: TCity[] = [
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude:4.351697,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

export const TOTAL_PERCENTEGE = 100;
export const NUMBER_OF_STARS = 5;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const DEFAULT_CITY = 'Paris';
export const defaultOffer = DataCities.filter((item) => item.city.name === DEFAULT_CITY);
export const defaultLocation = CityMap.filter((item)=> item.name === DEFAULT_CITY);
