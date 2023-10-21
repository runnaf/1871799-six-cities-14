import { TCard } from '../blocks-card';

type TCardCities = {
  city: {
    name: string;
  };
}

type TProps = TCard & TCardCities

export type TCardProps = TProps[];

export const DataCities: TCardProps = [
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    type: 'room',
    price: 142,
    id: 1
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    title: 'House in countryside',
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: 'room',
    price: 144,
    id: 2
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'room',
    price: 257,
    id: 3
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    type: 'hotel',
    price: 330,
    id: 4
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'house',
    price: 360,
    id: 5
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'house',
    price: 732,
    id: 6
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    type: 'apartment',
    price: 397,
    id: 7
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 2.5,
    type: 'room',
    price: 142,
    id: 8
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'room',
    price: 178,
    id: 9
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    type: 'house',
    price: 332,
    id: 10
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    type: 'room',
    price: 236,
    id: 11
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    type: 'hotel',
    price: 101,
    id: 12
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    title: 'The Pondhouse - A Magical Place',
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    type: 'hotel',
    price: 169,
    id: 13
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    type: 'house',
    price: 764,
    id: 14
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 5,
    type: 'room',
    price: 222,
    id: 15
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    type: 'house',
    price: 450,
    id: 16
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    price: 855,
    id: 17
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    type: 'room',
    price: 150,
    id: 18
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'house',
    price: 733,
    id: 19
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: 'hotel',
    price: 364,
    id: 20
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    type: 'room',
    price: 278,
    id: 21
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
    type: 'room',
    price: 127,
    id: 22
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 3,
    type: 'house',
    price: 108,
    id: 23
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    type: 'apartment',
    price: 238,
    id: 24
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    type: 'room',
    price: 113,
    id: 25
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    type: 'house',
    price: 657,
    id: 26
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'room',
    price: 235,
    id: 27
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: true,
    rating: 2.1,
    type: 'apartment',
    price: 352,
    id: 28
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: true,
    rating: 5,
    type: 'room',
    price: 230,
    id: 29
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: 'room',
    price: 191,
    id: 30
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'apartment',
    price: 304,
    id: 31
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'apartment',
    price: 361,
    id: 32
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    type: 'hotel',
    price: 142,
    id: 33
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    type: 'room',
    price: 178,
    id: 34
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: true,
    rating: 2.2,
    type: 'room',
    price: 138,
    id: 35
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4,
    type: 'apartment',
    price: 226,
    id: 36
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/7.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'house',
    price: 422,
    id: 37
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: false,
    rating: 3,
    type: 'room',
    price: 268,
    id: 38
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    type: 'room',
    price: 284,
    id: 39
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: 'house',
    price: 909,
    id: 40
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    type: 'house',
    price: 199,
    id: 41
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    type: 'room',
    price: 142,
    id: 42
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
    type: 'room',
    price: 118,
    id: 43
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: true,
    rating: 3.7,
    type: 'room',
    price: 276,
    id: 44
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/12.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    type: 'hotel',
    price: 408,
    id: 45
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
    type: 'hotel',
    price: 130,
    id: 46
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/7.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
    type: 'room',
    price: 229,
    id: 47
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/7.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
    type: 'room',
    price: 140,
    id: 48
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    type: 'apartment',
    price: 483,
    id: 49
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: true,
    rating: 3,
    type: 'house',
    price: 128,
    id: 50
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'house',
    price: 317,
    id: 51
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 2.5,
    type: 'house',
    price: 353,
    id: 52
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    type: 'house',
    price: 547,
    id: 53
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    type: 'room',
    price: 123,
    id: 54
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/19.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    type: 'house',
    price: 993,
    id: 55
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'house',
    price: 149,
    id: 56
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
    type: 'house',
    price: 634,
    id: 57
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
    type: 'room',
    price: 224,
    id: 58
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'Wood and stone place',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'apartment',
    price: 447,
    id: 59
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    price: 561,
    id: 60
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/19.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'hotel',
    price: 229,
    id: 61
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    type: 'house',
    price: 165,
    id: 62
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'The Pondhouse - A Magical Place',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'house',
    price: 501,
    id: 63
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'The Joshua Tree House',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'apartment',
    price: 219,
    id: 64
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/12.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'room',
    price: 159,
    id: 65
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    type: 'house',
    price: 451,
    id: 66
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    type: 'hotel',
    price: 297,
    id: 67
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
    type: 'room',
    price: 148,
    id: 68
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 2.7,
    type: 'room',
    price: 230,
    id: 69
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'room',
    price: 104,
    id: 70
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 2.1,
    type: 'hotel',
    price: 427,
    id: 71
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: true,
    rating: 4,
    type: 'house',
    price: 621,
    id: 72
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/19.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    type: 'room',
    price: 281,
    id: 73
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    type: 'apartment',
    price: 172,
    id: 74
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'apartment',
    price: 206,
    id: 75
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'hotel',
    price: 241,
    id: 76
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: 'hotel',
    price: 192,
    id: 77
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Tile House',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'room',
    price: 297,
    id: 78
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
    type: 'house',
    price: 656,
    id: 79
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/7.jpg',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    type: 'room',
    price: 298,
    id: 80
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'room',
    price: 278,
    id: 81
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/19.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    type: 'room',
    price: 216,
    id: 82
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    type: 'room',
    price: 116,
    id: 83
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    type: 'house',
    price: 449,
    id: 84
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    type: 'room',
    price: 229,
    id: 85
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
    type: 'apartment',
    price: 170,
    id: 86
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'room',
    price: 200,
    id: 87
  },
  {
    city: {
      name: 'Amsterdam',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    price: 565,
    id: 88
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'house',
    price: 210,
    id: 89
  },
  {
    city: {
      name: 'Brussels',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'room',
    price: 171,
    id: 90
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
    type: 'room',
    price: 288,
    id: 91
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
    title: 'The Pondhouse - A Magical Place',
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    type: 'apartment',
    price: 260,
    id: 92
  },
  {
    city: {
      name: 'Dusseldorf',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/1.jpg',
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    type: 'hotel',
    price: 220,
    id: 93
  },
  {
    city: {
      name: 'Cologne',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    title: 'Canal View Prinsengracht',
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    type: 'room',
    price: 123,
    id: 94
  },
  {
    city: {
      name: 'Hamburg',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 3,
    type: 'house',
    price: 878,
    id: 95
  },
  {
    city: {
      name: 'Paris',
    },
    previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'room',
    price: 253,
    id: 96
  }
];
