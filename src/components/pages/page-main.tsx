import { Helmet } from 'react-helmet-async';
import { Main } from '../blocks/main';
import { Header } from '../layout/header/header';
import { DataCities } from '../blocks/data/data-cities-card';

export function PageMain(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <Main offers={DataCities} />
    </div>
  );
}
