import { ReviewItem, TComment } from "../ui/review-item"

type TReviews = TComment[]


export function ReviewList ({reviews}:{reviews :TReviews}):JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review:TComment)=>{
          return <ReviewItem comment={review.comment} date={review.date} rating={review.rating} user = {review.user} />
        })
      }
    </ul>
  )
}