import { TMainClass } from '../blocks-main';

export const DataMainClassName: TMainClass = {
  placesClassListNames: ['places__options', 'places__options--custom', 'places__options--opened'],
  placesClassItemNames: {
    default: ['places__option'],
    isActive: 'places__option--active',
  },
  locationClassListNames: ['ocations__list tabs__list'],
  locationClassItemNames: ['locations__item'],
  locationClassLinkNames: {
    default: ['locations__item-link', 'tabs__item'],
    isActive: 'tabs__item--active',
  }
};
