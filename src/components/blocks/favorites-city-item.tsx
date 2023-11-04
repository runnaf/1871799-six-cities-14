import { Link } from 'react-router-dom';
import { Card } from './card';
import { TCardProps } from './data/data-cities-card';
import { AppRoute } from '../../const';
import { transformArray } from '../../utils/common';

export function FavoritesCityItem({data}: {data: TCardProps}): JSX.Element {
  const objectData = transformArray(data);

  return (
    <>
      { Object.entries(objectData)
        .map(([city, array]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {array.map((item): JSX.Element => (
                <Card size='small' offer={item} cardInfo={'favorites__card-info'} block={'favorites'} key={item.id} />
              ))}
            </div>
          </li>
        ))}
    </>
  );
}
