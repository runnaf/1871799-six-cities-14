import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NearPlaces } from '../../blocks/near-places/near-places';
import { Header } from '../../layout/header/header';
import { Premium } from '../../ui/premium';
import { AppRoute } from '../../../const';
import { addPluralEnging, capitalize, conversionToPercentage } from '../../../utils/common';
import { ReviewForm } from '../../blocks/review-form/review-form';
import { ReviewList, TReviews } from '../../blocks/review-list/review-list';
import { UserStatus } from '../../ui/user-status';
import { Map } from '../../blocks/map/map';
import { useAppSelector } from '../../../hooks/hooks';
import { ButtonFavorites } from '../../ui/button-favorites';
import { TOffers } from '../../../types/types';


export function PageOffer({reviews, nearPlaces } : { reviews: TReviews; nearPlaces: TOffers }): JSX.Element {
  const { offerId } = useParams();
  const offersData = useAppSelector((state)=> state.offers);
  const offerData = offersData.find(({ id }) => id.toString() === offerId);

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[offerId]);

  if (!offerData) {
    return <Navigate to={AppRoute.NotFoundPage}/>;
  }

  const {images, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description} = offerData;

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Offer Page</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0,6).map((image) => (
                <div className="offer__image-wrapper" key={uuidv4()}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <Premium />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <ButtonFavorites offer = {offerData} block = 'offer' />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: conversionToPercentage(rating)}} ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedroom{addPluralEnging(bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adult{addPluralEnging(maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good): JSX.Element => (
                    <li className="offer__inside-item" key={uuidv4()}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <UserStatus pro = {host.isPro} />
                </div>
                <div className="offer__description">
                  <p className="offer__text"> {description} </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Review{addPluralEnging(reviews.length)} &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map block="offer" offers={nearPlaces} specialOfferId={Number(offerId)} specialOffer={offerData}/>
        </section>
        <div className="container">
          <NearPlaces nearPlaces = {nearPlaces} />
        </div>
      </main>
    </div>
  );
}
