import { v4 as uuidv4 } from 'uuid';
import { TClassName, TMainItem } from '../blocks/main';
import { useDispatch, useSelector } from 'react-redux';
import { TStateFilterCity } from '../../types/state';
import { filterCitySlice } from '../../store/slice/filter-city-slice';

export type TListLocationProps = {
  classNames: string[];
  itemsList: TMainItem[];
  classNameItems: string[];
  classNameLinks: TClassName;
};

export type TListPlacesProps = {
  classNames: string[];
  itemsList: TMainItem[];
  classNameItems: TClassName;
}

export function ListLocation(props: TListLocationProps): JSX.Element {
  const {classNames, itemsList, classNameItems} = props;
  const dispatch = useDispatch();
  const stateFilter = useSelector((state: TStateFilterCity)=> state.filterCity.city)
  
  return (
    <ul className={classNames.join(' ')}>
      {
        itemsList.map((item): JSX.Element => (
          <li className={ classNameItems.join(' ') } key={uuidv4()}>
            <a className={`locations__item-link tabs__item ${item.title === stateFilter ? 'tabs__item--active' : ''}`} onClick={() => {
                  dispatch(filterCitySlice.actions.changeCity(item.title));
                }}>
              <span>{ item.title }</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export function ListPlacesOptions(props:TListPlacesProps): JSX.Element {
  const {classNames, itemsList, classNameItems} = props;
  return (
    <ul className={classNames.join(' ')}>
      {
        itemsList.map((item): JSX.Element => (
          <li className = {item.isActive ? `${classNameItems.default.join(' ')} classNameItems.isActive` : classNameItems.default.join(' ')} key={uuidv4()}>
            {item.title}
          </li>
        ))
      }
    </ul>
  );
}
