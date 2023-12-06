import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AppRoute, CityMap, DEFAULT_CITY } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeLocation, filtrationCity, getPopularOffers, gettingSortValue } from '../../store/action';
import { TOffers } from '../../types/types';
import { memo } from 'react';

export type TLogoProps = {
    classNameLinks: string[];
    classNameImages: string[];
    width: string;
    height: string;
  };

export function Logo({classNameLinks, classNameImages, width, height}:TLogoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const allData: TOffers = useAppSelector((state) => state.allData);
  const sortingValue = useAppSelector((state) => state.sorting);

  const returnToHomePage = () => {
    const checkedCity = CityMap.Paris;
    const offersFilter: TOffers = allData.filter((item) => item.city.name === DEFAULT_CITY);
    dispatch(filtrationCity(DEFAULT_CITY));
    dispatch(getPopularOffers(offersFilter));
    dispatch(gettingSortValue(sortingValue));
    dispatch(changeLocation(checkedCity));
  };
  return (
    <Link className={classNameLinks.join(' ')} to={AppRoute.Root} onClick = {returnToHomePage}>
      <img className={classNameImages.join(' ')} src={logo} alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

const MemorizedLogo = memo(Logo);
export default MemorizedLogo;
