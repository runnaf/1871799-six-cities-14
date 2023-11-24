import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AppRoute, CityMap, DEFAULT_CITY } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { changeLocationMap, filtrationCity, getPopularOffers, gettingSortValue } from '../../store/action';
import { TCardProps, TProps } from '../blocks/data/data-cities-card';

export type TLogoProps = {
    classNameLinks: string[];
    classNameImages: string[];
    width: string;
    height: string;
  };

export function Logo({classNameLinks, classNameImages, width, height}:TLogoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const allData: TProps[] = useAppSelector((state) => state.allData);
  const sortingValue = useAppSelector((state) => state.sorting);
  const returnToHomePage = () => {
    const checkedCity = CityMap.filter((location) => location.name === DEFAULT_CITY);
    const offersFilter: TCardProps = allData.filter((item) => item.city.name === DEFAULT_CITY);
    dispatch(filtrationCity(DEFAULT_CITY));
    dispatch(getPopularOffers(offersFilter));
    dispatch(gettingSortValue(sortingValue));
    dispatch(changeLocationMap(checkedCity));
  };
  return (
    <Link className={classNameLinks.join(' ')} to={AppRoute.Root} onClick = {returnToHomePage}>
      <img className={classNameImages.join(' ')} src={logo} alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}
