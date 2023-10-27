import { Card } from './card';
import { DataNear } from './data/data-near';

export function NearPlaces(): JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {DataNear.map((nearItem)=>{
          const {previewImage, isPremium, price, rating, title, type, isFavorite, id} = nearItem;
          return (
            <Card previewImage={previewImage} isPremium={isPremium} price={price} rating={rating} title={title} type={type} isFavorite={isFavorite} card={'near-places__card'} wrapper={'near-places__image-wrapper'} classNamePremium='place-card__mark' key={id} id={id}/>
          );
        })}
      </div>
    </section>
  );
}
