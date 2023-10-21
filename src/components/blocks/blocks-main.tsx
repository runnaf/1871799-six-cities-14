import { ListLocation, ListPlacesOptions } from '../ui/list-main';
import { DataMain } from './data/data-main';
import { DataMainClassName } from './data/data-class-names';
import { DataCities } from './data/data-cities-card';
import { Card } from './blocks-card';

export type TMainBlocks= {
    placesOptions: TMainItem[];
    locationItems: TMainItem[];
}

export type TMainClass = {
    placesClassItemNames: TClassName;
    locationClassLinkNames: TClassName;
    placesClassListNames: string[];
    locationClassListNames: string[];
    locationClassItemNames: string[];
}

export type TMainItem = {
    title: string;
    isActive: boolean;
}

export type TClassName = {
    default: string[];
    isActive: string;
}

const CITY = 'Amsterdam';
const count = DataCities.filter(item => item.city.name === CITY).length;

export function Main(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListLocation classNames={DataMainClassName.locationClassListNames} itemsList={DataMain.locationItems} classNameItems={DataMainClassName.locationClassItemNames} classNameLinks={DataMainClassName.locationClassLinkNames}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{count} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ListPlacesOptions classNames={DataMainClassName.placesClassListNames} itemsList={DataMain.placesOptions} classNameItems={DataMainClassName.placesClassItemNames} />
            </form>
            <div className="cities__places-list places__list tabs__content">
              {DataCities.map((item) => {
                const {previewImage, isPremium, price, rating, title, type, isFavorite, city, id} = item;
                return city.name === CITY && <Card previewImage = {previewImage} isPremium = {isPremium} price = {price} rating={rating} title={title} type={type} isFavorite={isFavorite} card="cities__card" wrapper='cities__image-wrapper' id={id} classNamePremium = {'place-card__mark'}/>;
              })}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}
