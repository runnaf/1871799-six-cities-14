import { Helmet } from 'react-helmet-async';
import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { FavoritesBlock } from '../../blocks/favorites-block/favorites-block';

export function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Your Favorites places</title>
      </Helmet>
      <Header />
      <FavoritesBlock />
      <Footer />
    </div>
  );
}
