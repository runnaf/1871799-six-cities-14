import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Premium } from '../../ui/premium';
import { capitalize, conversionToPercentage } from '../../../utils/common';
import { ButtonFavorites } from '../../ui/button-favorites';
import { TOffer } from '../../../types/types';

type TCardImageSize = 'small' | 'large';

export type TCitiesProps = {
  offer:TOffer;
  block: string;
  size?: TCardImageSize;
  cardInfo?: string;
  onCardHover?: (offerId: TOffer['id'] | null) => void;
}

const sizeMap: Record<TCardImageSize, { width: string; height: string}> = {
  small: { width: '150', height: '100' },
  large: { width: '260', height: '200' },
};

export function CardOfOffer({ offer, block, size = 'large', cardInfo = '', onCardHover }: TCitiesProps): JSX.Element {
  const {previewImage, isPremium, price, rating, title, type, id } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  const ratingWidth = conversionToPercentage(rating);

  return (
    <article className={`${block}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <Premium />}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <div>
          <img className="place-card__image" src={previewImage} alt={title} {...sizeMap[size]} />
        </div>
      </div>
      <div className={`${cardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <ButtonFavorites offer={offer} block = 'place-card'/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }} />
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
