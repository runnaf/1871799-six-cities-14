import { Helmet } from 'react-helmet-async';
import { MainBlock } from '../../blocks/main-block/main-block';
import { Header } from '../../layout/header/header';

export function PageMain(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <MainBlock />
    </div>
  );
}
