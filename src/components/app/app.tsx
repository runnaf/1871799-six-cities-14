import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageLogin } from '../pages/page-login/page-login';
import { Favorites } from '../pages/page-favorites/page-favorites';
import { PageOffer } from '../pages/page-offer/page-offer';
import { PageError } from '../pages/page-error/page-error';
import { PageMain } from '../pages/page-main/page-main';
import { AppRoute } from '../../const';
import { ProtectedRoute } from '../protected-rout/protected-rout';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<PageMain />} />
            <Route path={AppRoute.Login} element={<PageLogin />} />
            <Route path={AppRoute.Favorites} element={
              <ProtectedRoute redirectPage={AppRoute.Login}>
                <Favorites />
              </ProtectedRoute>
            }
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<PageOffer />} />
            <Route path={AppRoute.NotFoundPage} element={<PageError />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
