import { Main } from '../blocks/blocks-main';
import { Header } from '../layout/header/header';

export function PageMain(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main />
    </div>
  );
}
