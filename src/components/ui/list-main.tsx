import { v4 as uuidv4 } from 'uuid';
import { TClassName, TMainItem } from '../blocks/blocks-main';

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
  const {classNames, itemsList, classNameItems, classNameLinks} = props;
  return (
    <ul className={classNames.join(' ')}>
      {
        itemsList.map((item): JSX.Element => {
          return (
            <li className={ classNameItems.join(' ') } key={uuidv4()}>
              <a className={item.isActive ? classNameLinks.default.join(' ') + classNameLinks.isActive : classNameLinks.default.join(' ')} href="#">
                <span>{ item.title }</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export function ListPlacesOptions(props:TListPlacesProps): JSX.Element {
  const {classNames, itemsList, classNameItems} = props;
  return (
    <ul className={classNames.join(' ')}>
      {
        itemsList.map((item): JSX.Element => {
          return (
            <li className = {item.isActive ? classNameItems.default.join(' ') + ' ' + classNameItems.isActive : classNameItems.default.join(' ')} key={uuidv4()}>
              {item.title}
            </li>
          );
        })
      }
    </ul>
  );
}
