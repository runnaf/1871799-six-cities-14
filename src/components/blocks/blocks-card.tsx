import { Premium } from '../ui/premium';

export type TCard = {
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  price: number;
  rating: number;
  title: string;
  type: string ;
  id: number;
}

type TCardClasses = {
  card: string;
  wrapper: string;
  cardInfo?: string;
}

function conversionToPercentage(rating: number) {
  return (rating * 100 / 5);
}

export function Card(props: TCard & TCardClasses): JSX.Element {
  const {previewImage, isPremium, price, rating, title, type, isFavorite, card, wrapper, cardInfo, id} = props;
  return (
    <article className={card + ' ' + 'place-card'} key={id}>
      {isPremium && <Premium />}
      <div className={wrapper + 'place-card__image-wrapper'}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className={cardInfo !== undefined ? cardInfo + ' ' + 'place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${conversionToPercentage(rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
