import { useState } from 'react';

type TButtonProps = boolean;


export function ButtonFavorites({isFavorite}: {isFavorite:TButtonProps}): JSX.Element {
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  const onFavoriteButton = (): void => {
    setIsFavoriteCard(!isFavoriteCard);
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
