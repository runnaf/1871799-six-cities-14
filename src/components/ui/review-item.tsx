import { getDate, getDateTime } from "../../utils/common";
import { conversionToPercentage } from "./conversationToPercentage";

export type TComment = {
  comment: string;
  date: string;
  rating: number;
  user: TUser;
}

type TUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export function ReviewItem(props:TComment): JSX.Element {
  const {comment, date, rating, user} = props;
  const ratingUser = conversionToPercentage(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingUser }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDateTime(date)}>{getDate(date)}</time>
      </div>
    </li>
  )
}