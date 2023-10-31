import { Card } from './card';
import { DataNear } from './data/data-near';

export function NearPlaces(): JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {DataNear.map((nearItem) => (
          <Card block={'near-places'} offer = {nearItem} key={nearItem.id}/>
        ))}
      </div>
    </section>
  );
}
