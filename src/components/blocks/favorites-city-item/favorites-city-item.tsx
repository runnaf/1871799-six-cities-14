import { Link } from 'react-router-dom';
import MemorizedCard from '../card-of-offer/card-of-offer';
import { AppRoute, CityMap } from '../../../const';
import { transformArray } from '../../../utils/common';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changeLocation, filtrationCity, getPopularOffers, gettingSortValue } from '../../../store/action';
import { TOffers } from '../../../types/types';
import { memo, useCallback, useEffect } from 'react';
import { fetchFavorites } from '../../../store/api-action';

export function FavoritesCityItem(): JSX.Element {
  const userId = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(fetchFavorites());
    }

  },[userId, dispatch]);

  const favoriteOffers = useAppSelector((state)=>state.favoritesPage);
  const objectData = transformArray(favoriteOffers);
  const sortingValue = useAppSelector((state) => state.sorting);
  const allData: TOffers = useAppSelector((state) => state.allData);

  const redirectToCity = useCallback((city: string) => {
    const checkedCity = CityMap.Paris;
    const offersFilter: TOffers = allData.filter((item) => item.city.name === city);
    dispatch(filtrationCity(city));
    dispatch(getPopularOffers(offersFilter));
    dispatch(gettingSortValue(sortingValue));
    dispatch(changeLocation(checkedCity));
  },[dispatch]);

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
                <MemorizedCard size='small' offer={item} cardInfo={'favorites__card-info'} block={'favorites'} key={item.id} />
              ))}
            </div>
          </li>
        ))}
    </>
  );
}

const MemorizedFavoritesCityItem = memo(FavoritesCityItem);
export default MemorizedFavoritesCityItem;
