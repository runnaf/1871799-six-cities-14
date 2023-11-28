import { useState } from 'react';
import { CardOfOffer } from '../card-of-offer/card-of-offer';
import { addPluralEnging } from '../../../utils/common';
import { useAppSelector } from '../../../hooks/hooks';
import { Map } from '../map/map';
import { SortItem } from '../sort-item/sort-item';
import { ListLocation } from '../list-cities/list-cities';
import { TOffer } from '../../../types/types';

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

export function MainBlock(): JSX.Element {

  const offersList = useAppSelector((state) => state.offers);

  const activeCity = useAppSelector((state) => state.city);

  const count = offersList.length;

  const [hoveredOfferId, setHoveredOfferId] = useState<
    TOffer['id'] | null > (null);

  function handleCardHover(offerId: TOffer['id'] | null) {
    setHoveredOfferId(offerId);
  }
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListLocation />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{count} place{addPluralEnging(count)} to stay in {activeCity}</b>
            <SortItem />
            <div className="cities__places-list places__list tabs__content">
              {offersList.map((item) => (
                <CardOfOffer block="cities" offer={item} key={item.id} onCardHover={handleCardHover}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map block={'cities'} offers={offersList} specialOfferId={hoveredOfferId} />
          </div>
        </div>
      </div>
    </main>
  );
}
