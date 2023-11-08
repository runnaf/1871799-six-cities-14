import { PageMain } from '../pages/page-main';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagesLogin } from '../pages/pages-login';
import { Favorites } from '../pages/pages-favorites';
import { PagesOffer } from '../pages/pages-offer';
import { Error } from '../pages/error/page-error';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../protected-rout/protected-rout';
import { TCardProps } from '../blocks/data/data-cities-card';
import { TComment } from '../ui/review-item';

function App({offers, reviews, favoritesCity, nearPlaces}: {offers:TCardProps; reviews:TComment[]; favoritesCity:TCardProps; nearPlaces:TCardProps}) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<PageMain offers={offers} />} />
            <Route path={AppRoute.Login} element={<PagesLogin />} />
            <Route path={AppRoute.Favorites} element={
              <ProtectedRoute status={AuthorizationStatus.Auth} redirectPage={AppRoute.Login}>
                <Favorites favorites={favoritesCity} />
              </ProtectedRoute>
            }
            />
            <Route path={`${AppRoute.Offer}/:offerId`} element={
              <PagesOffer offersData={offers} reviews={reviews} nearPlaces={nearPlaces} />
            }
            />
            <Route path={AppRoute.NotFoundPage} element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
