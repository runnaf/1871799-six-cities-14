import pin from '..//markup/img/pin.svg';
import currentPin from '..//markup/img/pin-active.svg';
import { DataCities } from './components/blocks/data/data-cities-card';

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

export const CityMap = {
  Amsterdam : {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Paris : {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne : {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels : {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude:4.351697,
      zoom: 13
    }
  },
  Humburg : {
    name: 'Humburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf : {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
};

export const TOTAL_PERCENTEGE = 100;
export const NUMBER_OF_STARS = 5;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const CITY_DEFAULT = 'Paris';
export const DataOfferDefault = DataCities.filter((item) => item.city.name === CITY_DEFAULT);
export const CitiesForFilter = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}
