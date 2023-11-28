import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageLogin } from '../pages/page-login/page-login';
import { Favorites } from '../pages/page-favorites/page-favorites';
import { PageOffer } from '../pages/page-offer/page-offer';
import { Error } from '../pages/error/page-error';
import { PageMain } from '../pages/page-main/page-main';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../protected-rout/protected-rout';
import { TComment } from '../ui/review-item';
import { TOffers } from '../../types/types';

function App({reviews, nearPlaces}: {reviews:TComment[]; nearPlaces:TOffers}) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<PageMain />} />
            <Route path={AppRoute.Login} element={<PageLogin />} />
            <Route path={AppRoute.Favorites} element={
              <ProtectedRoute status={AuthorizationStatus.Auth} redirectPage={AppRoute.Favorites}>
                <Favorites />
              </ProtectedRoute>
            }
            />
            <Route path={`${AppRoute.Offer}/:offerId`} element={
              <PageOffer reviews={reviews} nearPlaces={nearPlaces} />
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
