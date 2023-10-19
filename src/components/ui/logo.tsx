import logo from '../../assets/logo.svg';

export type TLogoProps = {
    classNameLinks: string[];
    classNameImages: string[];
    width: string;
    height: string;
    href: string;
  };

export function Logo({classNameLinks, classNameImages, width, height, href}:TLogoProps): JSX.Element {
  return (
    <a className={classNameLinks.join(' ')} href= {href}>
      <img className={classNameImages.join(' ')} src={logo} alt="6 cities logo" width={width} height={height} />
    </a>
  );
}

// <a className="header__logo-link header__logo-link--active">
{/* <img className="header__logo" src={logo} alt="6 cities logo" width={81} height={41} />
</a> */}