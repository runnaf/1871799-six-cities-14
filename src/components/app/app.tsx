import { PageMain } from '../pages/page-main';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagesLogin } from '../pages/pages-login';
import { Favorites } from '../pages/pages-favorites';
import { PagesOffer } from '../pages/pages-offer';
import { Error } from '../pages/page-error';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ProtectedRoute } from '../protected-rout/protected-rout';
import { DataOffer } from '../blocks/data/data-offer';

function App() {
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
            <Route path={`${AppRoute.Offer}/:id`} element={
              <PagesOffer offersData={DataOffer}/>
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
