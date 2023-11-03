import { Link } from 'react-router-dom';
import { Card, TCard } from './card';
import { TCardProps } from './data/data-cities-card';
import { AppRoute } from '../../const';

type TAcc = {
  [key: string]: TCard[];
}

export function FavoritesCityItem({data}: {data: TCardProps}): JSX.Element {
  const objectData = data.reduce(
    (acc:TAcc, object) => {
      const city: string = object.city.name;

      acc[city] ??= [];
      acc[city].push(object);
      return acc;
    },
    {},
  );

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
