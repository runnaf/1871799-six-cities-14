import { TMainBlocks } from '../blocks-main';

export const DataMain: TMainBlocks = {
  placesOptions: [{
    title: 'Popular',
    isActive: true,
  },
  {
    title: 'Price: low to high',
    isActive: false,
  },
  {
    title: 'Price: high to low',
    isActive: false,
  }],
  locationItems: [{
    title: 'Paris',
    isActive: false,
  },
  {
    title: 'Cologne',
    isActive: false,
  },
  {
    title: 'Brussels',
    isActive: false,
  },
  {
    title: 'Amsterdam',
    isActive: true,
  },
  {
    title: 'Hamburg',
    isActive: false,
  },
  {
    title: 'Dusseldorf',
    isActive: false,
  }]
};
