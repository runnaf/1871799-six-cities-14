import { Link } from 'react-router-dom';
import { Logo } from '../../ui/logo';
import { DataHeader } from './header-data';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks/use-store';

export function Header(): JSX.Element {
  const favoritesCount = useAppSelector((state)=> state.favoritesOffer.length);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo classNameLinks={DataHeader.classNameLinks} classNameImages={DataHeader.classNameImages} width={DataHeader.width} height={DataHeader.height}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{ favoritesCount }</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
