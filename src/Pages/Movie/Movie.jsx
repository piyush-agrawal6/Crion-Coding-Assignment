import React, { useEffect } from "react";
import "./Movie.css";
import Navbar from "../../Components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleMovie } from "../../Redux/movie/action";

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movie);
  console.log(movie.singleMovie);
  useEffect(() => {
    dispatch(singleMovie(id));
  }, [dispatch, id]);
  return (
    <div className="Container">
      <Navbar />
      <div className="section">
        <div className="sectionNav">
          <h3>{movie?.singleMovie.Title}</h3>
        </div>
        <div className="movieSection">
          <div>
            <img src={movie?.singleMovie.Poster} alt="poster" />
          </div>
          <div>
            <div>
              <h4>Year</h4> : <span>{movie?.singleMovie.Year}</span>
            </div>
            <div>
              <h4>Genre</h4> : <span>{movie?.singleMovie.Genre}</span>
            </div>
            <div>
              <h4>Runtime</h4> : <span>{movie?.singleMovie.Runtime}</span>
            </div>
            <div>
              <h4>Director</h4> : <span>{movie?.singleMovie.Director}</span>
            </div>
            <div>
              <h4>Synopsis</h4> : <span>{movie?.singleMovie.Synopsis}</span>
            </div>
            <div>
              <h4>Cast</h4> : <span>{movie?.singleMovie.Cast}</span>
            </div>
            <div>
              <h4>Language</h4> : <span>{movie?.singleMovie.Language}</span>
            </div>
            <div>
              <h4>imdbRating</h4> : <span>{movie?.singleMovie.imdbRating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
