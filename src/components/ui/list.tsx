import { v4 as uuidv4 } from 'uuid';

export type TListProps = {
  classNames: string[];
  itemsList: string[];
  classNameItems: string[];
  classNameLinks: string[];
};

export function List({classNames, itemsList, classNameItems, classNameLinks}:TListProps): JSX.Element {
  return (
    <ul className={classNames.join(' ')}>
      {
        itemsList.map((item): JSX.Element =>{
          return (
            <li className={classNameItems.join(' ')} key={uuidv4()}>
              <a className={classNameLinks.join(' ')} href="#">
                <span>{item}</span>
              </a>
            </li>
          );
        })
      }
    </ul>    
  );
}
