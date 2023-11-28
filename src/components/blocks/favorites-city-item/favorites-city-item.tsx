import { Link } from 'react-router-dom';
import {  CardOfOffer } from '../card-of-offer/card-of-offer';
import { AppRoute, CityMap } from '../../../const';
import { transformArray } from '../../../utils/common';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changeLocationMap, filtrationCity, getPopularOffers, gettingSortValue } from '../../../store/action';
import { TOffer, TOffers } from '../../../types/types';

export function FavoritesCityItem(): JSX.Element {
  const favoriteOffers = useAppSelector((state)=>state.favoritesOffer);
  const objectData = transformArray(favoriteOffers);
  const sortingValue = useAppSelector((state) => state.sorting);
  const allData: TOffer[] = useAppSelector((state) => state.allData);
  const dispatch = useAppDispatch();
  const redirectToCity = (city: string) => {
    const checkedCity = CityMap.filter((location) => location.name === city);
    const offersFilter: TOffers = allData.filter((item) => item.city.name === city);
    dispatch(filtrationCity(city));
    dispatch(getPopularOffers(offersFilter));
    dispatch(gettingSortValue(sortingValue));
    dispatch(changeLocationMap(checkedCity));
  };

  return (
    <>
      { Object.entries(objectData)
        .map(([city, array]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root} onClick={()=>redirectToCity(city)}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {array.map((item): JSX.Element => (
                <CardOfOffer size='small' offer={item} cardInfo={'favorites__card-info'} block={'favorites'} key={item.id} />
              ))}
            </div>
          </li>
        ))}
    </>
  );
}
