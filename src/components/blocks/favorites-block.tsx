import { Link } from 'react-router-dom';
import { Card } from './card';
import { DataCities, TCardProps } from './data/data-cities-card';
import { AppRoute } from '../../const';

type TCityArray = string[];

const CITYARRAY: TCityArray = ['Amsterdam', 'Paris', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];

function getCardFavoritesCity(arrayCity: TCityArray, data: TCardProps): JSX.Element {
  return (
    <>
      {
        arrayCity.forEach((element)=>{
          const filterArray = data.filter((itemFilter)=> itemFilter.city.name === element && itemFilter.isFavorite);
          if (filterArray.length > 0) {
            return (
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Root}>
                      <span>{element}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {filterArray.map((item): JSX.Element => (
                    <Card offer={item} cardInfo={'favorites__card-info'} block= {'favorites'} key={item.id}/>
                  ))}
                </div>
              </li>
            );
          }
        })
      }
    </>
  );
}

export function FavoritesBlock(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {getCardFavoritesCity(CITYARRAY, DataCities)}
          </ul>
        </section>
      </div>
    </main>
  );
}
