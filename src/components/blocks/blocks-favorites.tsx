import { Card } from './blocks-card';
import { DataCities, TCardProps } from './data/data-cities-card';

type TCityArray = string[];

const CITYARRAY: TCityArray = ['Amsterdam', 'Paris', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];

function getCardFavoritesCity(arrayCity: TCityArray, data: TCardProps): JSX.Element {
  arrayCity.forEach((element)=>{
    const filterArray = data.filter((itemFilter)=> itemFilter.city.name === element && itemFilter.isFavorite);
    if (filterArray.length > 0) {
      return (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{element}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {filterArray.map((item): JSX.Element => {
              const {previewImage, isPremium, price, rating, title, type, isFavorite, id} = item;
              return (
                <Card previewImage={previewImage} isPremium={isPremium} price={price} rating={rating} title={title} type={type} isFavorite={isFavorite} card={'favorites__card'} wrapper={'favorites__image-wrapper'} cardInfo={'favorites__card-info'} id={id} classNamePremium = {'place-card__mark'}/>
              );
            })}
          </div>
        </li>
      );
    }
  });
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
