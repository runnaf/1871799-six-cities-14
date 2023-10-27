import { NearPlaces } from '../blocks/near-places';
import { TOfferDataArray } from '../blocks/data/data-offer';
import { Header } from '../layout/header/header';
import { conversionToPercentage } from '../ui/conversationToPercentage';
import { Premium } from '../ui/premium';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';

const RATINGS: string[] = ['5', '4', '3', '2', '1'];

export function PagesOffer(offersData:TOfferDataArray): JSX.Element {
  const paramID = useParams().id;
  const offerData = offersData.find(({ id }) => String(id) === paramID);

  if (offerData) {
    const {previewImage, images, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description} = offerData;

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
                <div className="offer__image-wrapper">
                  <img className="offer__image" src={previewImage} alt="Photo studio" />
                </div>
                {images.map((image)=>(
                  <div className="offer__image-wrapper" key={uuidv4()}>
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium && <Premium classNamePremium = 'offer__mark' />}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${conversionToPercentage(rating)}`}} ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {maxAdults} adults
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
                    <span className="offer__user-status">
                      { host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text"> {description} </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                         Max
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{ width: '80%' }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                      </div>
                    </li>
                  </ul>
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      {RATINGS.map((ratingItem) => (
                        <>
                          <input className="form__rating-input visually-hidden" name="rating" value={ratingItem} id={`${ratingItem}-stars`} type="radio" />
                          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                            <svg className="form__star-image" width="37" height="33">
                              <use xlinkHref="#icon-star"></use>
                            </svg>
                          </label>
                        </>
                      ))}
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="offer__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearPlaces />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  } return (
    <Navigate to={AppRoute.Root} />
  );
}
