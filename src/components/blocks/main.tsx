import { useState } from 'react';
import { ListLocation, ListPlacesOptions } from '../ui/list-main';
import { DataMain } from './data/data-main';
import { DataMainClassName } from './data/data-class-names';
import { TCardProps } from './data/data-cities-card';
import { Card, TCard } from './card';
import { addPluralEnging } from '../../utils/common';
import { CityMap } from '../../const';
import { Map } from './map/map';

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

export function Main({offers} : {offers: TCardProps}): JSX.Element {
  const activeCity = CityMap.Amsterdam;
  const count = offers.filter((item) => item.city.name === CityMap.Amsterdam.name).length;
  const [hoveredOfferId, setHoveredOfferId] = useState<
    TCard['id'] | null > (null);

  function handleCardHover(offerId: TCard['id'] | null) {
    setHoveredOfferId(offerId);
  }
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
            <b className="places__found">{count} place{addPluralEnging(count)} to stay in {activeCity.name}</b>
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
              {offers.map((item) => (
                item.city.name === activeCity.name && <Card block="cities" offer={item} key={item.id} onCardHover={handleCardHover}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map block="cities" offer={offers} location={activeCity.location} specialOfferId={hoveredOfferId} />
          </div>
        </div>
      </div>
    </main>
  );
}
