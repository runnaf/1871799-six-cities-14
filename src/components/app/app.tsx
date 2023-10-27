import { PageMain } from '../pages/page-main';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagesLogin } from '../pages/pages-login';
import { Favorites } from '../pages/pages-favorites';
import { PagesOffer } from '../pages/pages-offer';
import { Error } from '../pages/page-error';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<PageMain />} />
            <Route path="/login" element={<PagesLogin />} />
            <Route path="favorites/" element={<Favorites/>} />
            <Route path="/offer/:id" element={<PagesOffer  />} />
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>    
  );
}

export default App;
