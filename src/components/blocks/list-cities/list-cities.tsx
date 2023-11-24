import { CityMap } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store';
import { changeLocationMap, filtrationCity, offerList } from '../../../store/action';
import { DataCities, TCardProps } from '../../blocks/data/data-cities-card';
import { v4 as uuidv4 } from 'uuid';
import style from './list-cities.module.css';

export function ListLocation(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state)=> state.city);
  function changeCity (city:string) {
    const offersFilter: TCardProps = DataCities.filter((item) => item.city.name === city);
    const checkedCity = CityMap.filter((location) => location.name === city);

    dispatch(filtrationCity(city));
    dispatch(offerList(offersFilter));
    dispatch(changeLocationMap(checkedCity));
  }
  return (
    <ul className={'locations__list tabs__list'}>
      {
        CityMap.map((item): JSX.Element => (
          <li className={ 'locations__item' } key={uuidv4()}>
            <button className={`locations__item-link tabs__item ${style.button} ${item.name === activeCity && 'tabs__item--active'}`} onClick={()=>changeCity(item.name)} type='button'>
              <span>{ item.name }</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}
