import { memo } from "react";

export function Premium (): JSX.Element {
  return (
    <div className='place-card__mark'>
      <span>Premium</span>
    </div>
  );
}

const MemorizedPremium = memo(Premium);
export default MemorizedPremium;
