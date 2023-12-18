import { getMovieCast } from 'Api/movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledLi, StyledUl } from './Cast.styled';
import { StyledLoader } from '../../pages/Page.styled';
import { StyledMessage } from 'components/Reviews/Reviews.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCastFromApi = async () => {
      try {
        setIsLoading(true);
        const res = await getMovieCast(id);
        setCast(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastFromApi();
  }, [id]);
  return (
    <div>
      {isLoading && <StyledLoader>Loading...</StyledLoader>}
      <StyledUl>
        {cast.length !== 0 ? (
          cast.map(actor => (
            <StyledLi key={actor.cast_id}>
              <div>
                <h2>{actor.name}</h2>
                {actor.character && (
                  <p>
                    <span>Character:</span> {actor.character}
                  </p>
                )}
              </div>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width="200"
                />
              )}
            </StyledLi>
          ))
        ) : (
          <StyledMessage>We don't have any cast for this movie.</StyledMessage>
        )}
      </StyledUl>
    </div>
  );
};

export default Cast;
