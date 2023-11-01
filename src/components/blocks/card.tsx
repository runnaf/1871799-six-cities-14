import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { conversionToPercentage } from '../ui/conversationToPercentage';
import { Premium } from '../ui/premium';
import { capitalize } from '../../utils/common';
import { TCardCities } from './data/data-cities-card';

type TCardImageSize = 'small' | 'large';

type TCitiesProps = {
  offer:TCard;
  block: string;
  size?: TCardImageSize;
  cardInfo?: string;
  onCardHover?: (offerId:TCard['id'] | null) => void
}

const sizeMap: Record<TCardImageSize, { width: string; height: string}> = {
  small: { width: '150', height: '100' },
  large: { width: '260', height: '200' },
};

export type TCard = {
  city: TCardCities;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  price: number;
  rating: number;
  title: string;
  type: string ;
  id: number;
}

export function Card({ offer, block, size = 'large', cardInfo = '', onCardHover }: TCitiesProps): JSX.Element {
  const {previewImage, isPremium, price, rating, title, type, isFavorite, id } = offer;
  
  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null)
  }

  return (
    <article className={ `${block}__card place-card` } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <Premium />}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} alt={title} {...sizeMap[size]} />
        </Link>
      </div>
      <div className={`${cardInfo} place-card__info`}>
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
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
