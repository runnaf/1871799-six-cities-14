import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';

export type TLogoProps = {
    classNameLinks: string[];
    classNameImages: string[];
    width: string;
    height: string;
  };

export function Logo({classNameLinks, classNameImages, width, height}:TLogoProps): JSX.Element {
  return (
    <Link className={classNameLinks.join(' ')} to= '/'>
      <img className={classNameImages.join(' ')} src={logo} alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}
