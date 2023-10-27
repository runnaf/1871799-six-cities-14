import { Link } from 'react-router-dom';
import { DataHeader } from '../layout/header/header-data';
import { Logo } from '../ui/logo';
import { Helmet } from 'react-helmet-async';

export function Error(): JSX.Element {
  return (
    <section>
        <Helmet>
          <title>6 Cities: Page not found</title>
        </Helmet>
      <Logo classNameLinks={DataHeader.classNameLinks} classNameImages={DataHeader.classNameImages} href={DataHeader.href} width={DataHeader.width} height={DataHeader.height}/>
      <p className="error__text">Page Not Found :(</p>
      <Link className="error__link" to="/">
        <span>Back</span>
      </Link>
    </section>
  );
}
