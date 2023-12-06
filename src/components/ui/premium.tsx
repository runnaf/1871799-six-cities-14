import { memo } from 'react';

export function Premium ({block} : {block: string}): JSX.Element {
  return (
    <div className={block}>
      <span>Premium</span>
    </div>
  );
}

const MemorizedPremium = memo(Premium);
export default MemorizedPremium;
