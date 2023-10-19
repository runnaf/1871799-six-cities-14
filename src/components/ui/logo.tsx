import logo from '../../../assets/logo.svg';

export function Logo(): JSX.Element {
  return (
    <a className="header__logo-link header__logo-link--active">
      <img className="header__logo" src={logo} alt="6 cities logo" width={81} height={41} />
    </a>
  );
}
