import { Logo } from '../../ui/logo';
import { DataFooter } from './footer-data';

export function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo classNameLinks={DataFooter.classNameLinks} classNameImages={DataFooter.classNameImages} href={DataFooter.href} width={DataFooter.width} height={DataFooter.height}/>
    </footer>
  );
}
