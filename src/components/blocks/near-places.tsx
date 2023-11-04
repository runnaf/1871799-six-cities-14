import { Card } from './card';
import { TCardProps } from './data/data-cities-card';

export function NearPlaces({nearPlaces}: {nearPlaces:TCardProps}): JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((nearItem) => (
          <Card block={'near-places'} offer = {nearItem} key={nearItem.id} />
        ))}
      </div>
    </section>
  );
}
