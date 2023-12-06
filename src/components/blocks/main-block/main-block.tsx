import { useCallback, useEffect, useState } from 'react';
import MemorizedCard from '../card-of-offer/card-of-offer';
import { addPluralEnging } from '../../../utils/common';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Map } from '../map/map';
import { SortItem } from '../sort-item/sort-item';
import MemorizedListLocation from '../list-cities/list-location';
import { TOffer, TOfferForOffers } from '../../../types/types';
import { fetchOffers } from '../../../store/api-action';
import { RequestStatus } from '../../../const';
import { PageError } from '../../pages/page-error/page-error';
import Loader from '../loader/loader';
import { PageMainEmpty } from '../../pages/page-main-empty/page-main-empty';

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
  isActive: string | undefined;
}

export function MainBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  const fetchingStatus = useAppSelector((state) => state.offersFetchingStatus);

  useEffect(()=>{
    dispatch(fetchOffers());
  }, [dispatch]);

  const activeCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const location = activeCity.location;

  const count = offersList.length;

  const [hoveredOfferId, setHoveredOfferId] = useState<
    TOfferForOffers['id'] | undefined > (undefined);

  const handleCardHover = useCallback((offerId: TOffer['id'] | undefined) => {
    setHoveredOfferId(offerId);
  },[]);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MemorizedListLocation />
        </section>
      </div>
      {fetchingStatus === RequestStatus.Error && (
        <PageError />
      )}
      {fetchingStatus === RequestStatus.Pending && <Loader />}
      {fetchingStatus === RequestStatus.Success && (
        <div className="cities">
          {offersList.length === 0 ?
            <PageMainEmpty />
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{count} place{addPluralEnging(count)} to stay in {activeCity.name}</b>
                <SortItem />
                <div className="cities__places-list places__list tabs__content">
                  {offersList.map((item) => (
                    <MemorizedCard block="cities" offer={item} key={item.id} onCardHover={handleCardHover}/>
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <Map block={'cities'} offers={offersList} specialOfferId={hoveredOfferId} location = {location} />
              </div>
            </div>}
        </div>
      )}
    </main>
  );
}
