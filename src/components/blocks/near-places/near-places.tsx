import { TOffers } from '../../../types/types';
import { CardOfOffer } from '../card-of-offer/card-of-offer';

export function NearPlaces({nearPlaces}: {nearPlaces:TOffers}): JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((nearItem) => (
          <CardOfOffer block={'near-places'} offer = {nearItem} key={nearItem.id} />
        ))}
      </div>
    </section>
  );
}
