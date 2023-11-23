import { useState } from 'react';
import { TCard } from '../blocks/card';
import { useAppDispatch } from '../../hooks/use-store';
import { favoritesOfferList } from '../../store/action';

type TButtonProps = boolean;


export function ButtonFavorites({isFavorite, offer}: {isFavorite:TButtonProps; offer:TCard}): JSX.Element {
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);
  const dispatch = useAppDispatch();
  const onFavoriteButton = (): void => {
    setIsFavoriteCard(!isFavoriteCard);
    // const offersFavorites = useAppSelector((state) => state.favoritesOffer)
    dispatch(favoritesOfferList(offer));
    // if (!isFavoriteCard) {

    // }
  };

  return (
    <button onClick={onFavoriteButton} className={`place-card__bookmark-button ${isFavoriteCard ? 'place-card__bookmark-button--active' : ''} button`} type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
