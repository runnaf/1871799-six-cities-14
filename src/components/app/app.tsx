import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagesLogin } from '../pages/pages-login';
import { Favorites } from '../pages/pages-favorites';
import { PagesOffer } from '../pages/pages-offer';
import { Error } from '../pages/error/page-error';
import { PageMain } from '../pages/page-main';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../protected-rout/protected-rout';
import { TCardProps } from '../blocks/data/data-cities-card';
import { TComment } from '../ui/review-item';

function App({reviews, nearPlaces}: {reviews:TComment[]; nearPlaces:TCardProps}) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<PageMain />} />
            <Route path={AppRoute.Login} element={<PagesLogin />} />
            <Route path={AppRoute.Favorites} element={
              <ProtectedRoute status={AuthorizationStatus.Auth} redirectPage={AppRoute.Login}>
                <Favorites />
              </ProtectedRoute>
            }
            />
            <Route path={`${AppRoute.Offer}/:offerId`} element={
              <PagesOffer reviews={reviews} nearPlaces={nearPlaces} />
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
