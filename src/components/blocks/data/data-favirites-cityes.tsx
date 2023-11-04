export type TCardCities = {
  name: string;
  location: TLocation;
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type THost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

type TProps = {
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

export type TCardProps = TProps[];

export const DataFavoritesCities: TCardProps = [
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
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
    isFavorite: true,
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
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: 1
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'House in countryside',
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 144,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    id: 2
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: true,
    isPremium: false,
    rating: 2.9,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 257,
    goods: [
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 50.852557,
      longitude: 4.3376969999999995,
      zoom: 16
    },
    id: 3
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    isPremium: false,
    rating: 3.2,
    type: 'hotel',
    bedrooms: 4,
    maxAdults: 4,
    price: 330,
    goods: [
      'Breakfast',
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    id: 4
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    type: 'house',
    bedrooms: 3,
    maxAdults: 10,
    price: 360,
    goods: [
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Air conditioning',
      'Breakfast',
      'Towels',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 53.570341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    id: 5
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    type: 'house',
    bedrooms: 4,
    maxAdults: 5,
    price: 732,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 51.205402,
      longitude: 6.7613140000000005,
      zoom: 16
    },
    id: 6
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg'
    ],
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: true,
    isPremium: false,
    rating: 4.6,
    type: 'apartment',
    bedrooms: 3,
    maxAdults: 9,
    price: 397,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Towels',
      'Breakfast',
      'Fridge',
      'Washer',
      'Baby seat'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    id: 7
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: true,
    isPremium: false,
    rating: 2.5,
    type: 'room',
    bedrooms: 1,
    maxAdults: 3,
    price: 142,
    goods: [
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 51.241402,
      longitude: 6.782314,
      zoom: 16
    },
    id: 8
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/18.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    title: 'House in countryside',
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 178,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Breakfast',
      'Dishwasher',
      'Laptop friendly workspace',
      'Fridge',
      'Washer',
      'Coffee machine',
      'Washing machine',
      'Towels'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 53.555341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    id: 9
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    title: 'House in countryside',
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    type: 'house',
    bedrooms: 2,
    maxAdults: 4,
    price: 332,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 53.574341000000004,
      longitude: 10.022654000000001,
      zoom: 16
    },
    id: 10
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg'
    ],
    title: 'Amazing and Extremely Central Flat',
    isFavorite: true,
    isPremium: false,
    rating: 4.7,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 236,
    goods: [
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 51.204402,
      longitude: 6.7773140000000005,
      zoom: 16
    },
    id: 11
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    isPremium: true,
    rating: 3.1,
    type: 'hotel',
    bedrooms: 3,
    maxAdults: 8,
    price: 101,
    goods: [
      'Dishwasher',
      'Breakfast',
      'Towels',
      'Laptop friendly workspace',
      'Air conditioning',
      'Fridge',
      'Coffee machine',
      'Baby seat',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.364540000000005,
      longitude: 4.9019759999999994,
      zoom: 16
    },
    id: 12
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg'
    ],
    title: 'The Pondhouse - A Magical Place',
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    type: 'hotel',
    bedrooms: 4,
    maxAdults: 4,
    price: 169,
    goods: [
      'Dishwasher',
      'Baby seat',
      'Fridge',
      'Washer',
      'Breakfast',
      'Air conditioning',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
    },
    id: 13
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/16.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg'
    ],
    title: 'Canal View Prinsengracht',
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    type: 'house',
    bedrooms: 4,
    maxAdults: 8,
    price: 764,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 53.550341,
      longitude: 9.980654000000001,
      zoom: 16
    },
    id: 14
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    title: 'Wood and stone place',
    isFavorite: true,
    isPremium: false,
    rating: 5,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 222,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16
    },
    id: 15
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg'
    ],
    title: 'The Joshua Tree House',
    isFavorite: true,
    isPremium: false,
    rating: 3.8,
    type: 'house',
    bedrooms: 2,
    maxAdults: 4,
    price: 666,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
      'Baby seat',
      'Air conditioning'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.37154,
      longitude: 4.889976,
      zoom: 16
    },
    id: 16
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg'
    ],
    title: 'Wood and stone place',
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    bedrooms: 3,
    maxAdults: 9,
    price: 855,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 50.867557,
      longitude: 4.357697,
      zoom: 16
    },
    id: 17
  }
];
