import { Helmet } from 'react-helmet-async';
import { Footer } from '../layout/footer/footer';
import { Header } from '../layout/header/header';
import { FavoritesBlock } from '../blocks/favorites-block';
import { TCardProps } from '../blocks/data/data-favirites-cityes';

export function Favorites({favorites}:{favorites:TCardProps}): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Your Favorites places</title>
      </Helmet>
      <Header />
      <FavoritesBlock favorites={favorites} />
      <Footer />
    </div>
  );
}
