import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import React from 'react';
import { DataReviews } from './components/blocks/data/data-review';
import { DataNear } from './components/blocks/data/data-near';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={DataReviews} nearPlaces={DataNear} />
    </Provider>
  </React.StrictMode>
);
