import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReviewsById } from "services/moviesApi";

function Reviews() {

  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    getReviewsById(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);
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
                  <strong>Author: {review.author}</strong>
                </p>
                  <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p >We do not have any reviews for this movie...</p>
      )}
    </>
  );
}

export default Reviews;
