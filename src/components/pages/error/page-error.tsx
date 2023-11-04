import { Link } from 'react-router-dom';
import { DataHeader } from '../../layout/header/header-data';
import { Logo } from '../../ui/logo';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../../const';
import style from './page-error.module.css';

export function Error(): JSX.Element {
  return (
    <section className={`${style.wrapper} page page--gray container` }>
        <Helmet>
          <title>6 Cities: Page not found</title>
        </Helmet>
        <div className='header__wrapper'>
          <Logo classNameLinks={DataHeader.classNameLinks} classNameImages={DataHeader.classNameImages} width={DataHeader.width} height={DataHeader.height}/>
        </div>        
        <div className={style.container}>
          <h2 className={style.title}>Page Not Found :(</h2>
          <p className={style.description}>We're sorry. the page requested could not be found</p>
          <Link className={style.link} to={AppRoute.Root}>
            <span>Go to homepage</span>
          </Link>
        </div>
    </section>
  );
}
