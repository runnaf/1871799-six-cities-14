export type TOfferData = {
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
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  description: string;
  id: number;
}

export type TOfferDataArray = TOfferData[]

export const DataOffer: TOfferDataArray = [
  {
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    goods: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    id: 3,
  }
];
