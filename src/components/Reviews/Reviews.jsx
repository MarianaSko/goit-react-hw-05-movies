import { getReviews } from 'Api/movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledMessage, StyledReview } from './Reviews.styled';
import { StyledLoader } from '../../pages/Page.styled';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviewsFromApi = async () => {
      try {
        setIsLoading(true);
        const { results } = await getReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsFromApi();
  }, [id]);
  return (
    <div>
      {isLoading && <StyledLoader>Loading...</StyledLoader>}

      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <StyledReview key={review.id}>
              <h3>
                <span>Author:</span> {review.author}
              </h3>
              <p>{review.content}</p>
            </StyledReview>
          ))
        ) : (
          <StyledMessage>
            We don't have any reviews for this movie.
          </StyledMessage>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
