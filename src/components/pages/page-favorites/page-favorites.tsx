import { Helmet } from 'react-helmet-async';
import { Footer } from '../../layout/footer/footer';
import MemorizedHeader from '../../layout/header/header';
import MemorizedFavoritesBlock from '../../blocks/favorites-block/favorites-block';
import { useAppSelector } from '../../../hooks/hooks';
import { PageFavoritesEmpty } from '../page-favorites-empty/page-favorites-empty';

export function PageFavorites(): JSX.Element {
  const favoriteOfferCount = useAppSelector((state)=> state.favoritesPage.length);
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Your Favorites places</title>
      </Helmet>
      <MemorizedHeader />
      {favoriteOfferCount === 0 ? <PageFavoritesEmpty /> : <MemorizedFavoritesBlock /> }
      <Footer />
    </div>
  );
}
