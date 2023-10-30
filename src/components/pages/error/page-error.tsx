import { Link } from 'react-router-dom';
import { DataHeader } from '../../layout/header/header-data';
import { Logo } from '../../ui/logo';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../../const';
import style from './page-error.module.css';

export function Error(): JSX.Element {
  return (
    <section className={style.wrapper}>
      <Helmet>
        <title>6 Cities: Page not found</title>
      </Helmet>
      <Logo classNameLinks={DataHeader.classNameLinks} classNameImages={DataHeader.classNameImages} width={DataHeader.width} height={DataHeader.height}/>
      <div className={style.container}>
        <p className={style.title}>Page Not Found :(</p>
        <Link className={style.link} to={AppRoute.Root}>
          <span>Back</span>
        </Link>
      </div>
    </section>
  );
}
