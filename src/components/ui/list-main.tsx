import { v4 as uuidv4 } from 'uuid';
import { TClassName, TMainItem } from '../blocks/main';

export type TListLocationProps = {
  classNames: string[];
  itemsList: TMainItem[];
  classNameItems: string[];
  classNameLinks: TClassName;
};

export type TListPlacesProps = {
  itemsList: TMainItem[];
}

export function ListPlacesOptions(props:TListPlacesProps): JSX.Element {
  const {itemsList} = props;
  return (
    <ul className='places__options places__options--custom places__options--opened'>
      {
        itemsList.map((item): JSX.Element => (
          <li className = {`places__option ${item.isActive ? 'places__option--active' : ''}`} key={uuidv4()}>
            {item.title}
          </li>
        ))
      }
    </ul>
  );
}
