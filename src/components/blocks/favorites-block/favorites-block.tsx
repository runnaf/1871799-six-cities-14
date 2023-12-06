import { memo } from 'react';
import MemorizedFavoritesCityItem from '../favorites-city-item/favorites-city-item';

export function FavoritesBlock(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <MemorizedFavoritesCityItem />
          </ul>
        </section>
      </div>
    </main>
  );
}

const MemorizedFavoritesBlock = memo(FavoritesBlock);
export default MemorizedFavoritesBlock;
