import './loader.module.css';

type TSizeLoader = 'small' | 'large';

export type TLoader = {
  size?: 'small' | 'large';
}

const sizeLoader: Record<TSizeLoader, { width: string; height: string}> = {
  small: { width: '40', height: '40' },
  large: { width: '60', height: '60' },
};

export default function Loader({size = 'large'}:TLoader): JSX.Element {
  return (
    <div className='loader-container'>
      <span className="loader" {...sizeLoader[size]}></span>;
    </div>
  );
}
