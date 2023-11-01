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

export enum CityMap {
  Amsterdam = 'AMSTERDAM',
  Paris = 'PARIS',
  Cologne = 'COLOGNE',
  Brussels = 'BRUSSELS',
  Humburg = 'HUMBURG',
  Dusseldorf = 'Dusseldorf',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
