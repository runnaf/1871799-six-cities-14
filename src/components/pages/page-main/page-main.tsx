import { Helmet } from 'react-helmet-async';
import { MainBlock } from '../../blocks/main-block/main-block';
import { Header } from '../../layout/header/header';
import { useAppSelector } from '../../../hooks/hooks';
import { PageMainEmpty } from '../page-main-empty/page-main-empty';

export function PageMain(): JSX.Element {
  const offersCount = useAppSelector((state)=> state.offers.length);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      {offersCount === 0 ? <PageMainEmpty /> : <MainBlock /> }
    </div>
  );
}
