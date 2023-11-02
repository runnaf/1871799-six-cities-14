import { Card, TCard } from './card';
import { TCardProps } from './data/data-cities-card';

type handleCardHover = (offerId: TCard['id'] | null) => void;

export function NearPlaces({nearPlaces, handleCardHover}: {nearPlaces:TCardProps; handleCardHover:handleCardHover}): JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((nearItem) => (
          <Card block={'near-places'} offer = {nearItem} key={nearItem.id} onCardHover={handleCardHover}/>
        ))}
      </div>
    </section>
  );
}
