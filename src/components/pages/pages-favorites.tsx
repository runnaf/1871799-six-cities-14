import { FavoritesBlock } from '../blocks/blocks-favorites';
import { Footer } from '../layout/footer/footer';
import { Header } from '../layout/header/header';

export function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <FavoritesBlock />
      <Footer />
    </div>
  );
}
