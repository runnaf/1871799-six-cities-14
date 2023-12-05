import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeOfOffer, favoritesOfferList, getAllData, removeFavoritesOffer } from '../../store/action';
import { TOfferForOffers, TOffers } from '../../types/types';

export function ButtonFavorites({offer, block}: {offer:TOfferForOffers; block: string}): JSX.Element {
  const [isOffer, setIsOffer] = useState(offer);
  const dispatch = useAppDispatch();
  const allData = useAppSelector((state)=> state.allData);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus)
  const handleFavoriteButton = (): void => {
    const newAllData = () => {
      const offers: TOffers = [];
      allData.map((item)=> {
        if (item.id === offer.id) {
          const newItem = {...item, isFavorite: !item.isFavorite};
          offers.push(newItem);
        } else {
          offers.push(item);
        }
      });
      return offers;
    };

    dispatch(getAllData(newAllData()));
    setIsOffer({...isOffer, isFavorite: !isOffer.isFavorite});
    dispatch(changeOfOffer(isOffer));

    if (!isOffer.isFavorite) {
      dispatch(favoritesOfferList({...isOffer, isFavorite: !isOffer.isFavorite}));
    } else {
      dispatch(removeFavoritesOffer({...isOffer, isFavorite: !isOffer.isFavorite}));
    }
  };

  return (
    <button onClick={handleFavoriteButton} className={`${block}__bookmark-button ${isOffer.isFavorite ? `${block}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${block}__bookmark-icon`} width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden"> Bookmarks </span>
    </button>
  );
}
