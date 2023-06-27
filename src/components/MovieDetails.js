import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const MovieDetails = ({ selectedId, onCloseMovie, KEY }) => {
  const [movie, setMovie] = useState({});
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      console.log(data);
    };
    fetchMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      <header>
        <button onClick={onCloseMovie} className="btn-back">
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${title} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDB rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={24} />
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>
          Starring <em className="em">{actors}</em>
        </p>
        <p>
          Director <em className="em">{director}</em>
        </p>
      </section>
    </div>
  );
};
export default MovieDetails;
