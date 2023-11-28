import { ReviewItem, TComment } from '../../ui/review-item';

export type TReviews = TComment[]


export function ReviewList ({reviews}:{reviews :TReviews}):JSX.Element {
  return (
    <ul className="reviews__list">
      { reviews.map((review:TComment) => (
        <ReviewItem comment={review.comment} date={review.date} rating={review.rating} user = {review.user} key={review.date} />
      ))}
    </ul>
  );
}
