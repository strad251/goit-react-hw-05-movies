import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "services/moviesApi";
export const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getReviewsById(id).then(review => {
      setReviews(review);
    });
  }, [id]);
  if (!reviews) {
    return;
  }
const isReviews = !!reviews.length;
  return (
    <>
      <h3>Reviews</h3>
      {isReviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>
                  Author:
                  <span >{review.author}</span>
                </p>

                <div >
                  <p >Content:</p>
                  <span>{review.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p >Oops!There are no such reviews!</p>
      )}
    </>
  );
}
