import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./Home.css";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Redux/movie/action";
import MovieBox from "../../Components/movieBox/MovieBox";

const Home = () => {
  const auth = useSelector((store) => store.auth);
  const { movies } = useSelector((store) => store.movie);
  const [data, setData] = useState(movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  if (!auth.data.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Container">
      <Navbar />
      <div className="section">
        <div className="sectionNav">
          <h3>Movie Library</h3>
        </div>
        <div className="homeSection">
          <div className="homeOptions">
            <input placeholder="Search movies by title, director, year.." />
            <select>
              <option>Sort By</option>
              <option>Title</option>
              <option>Director</option>
              <option>Year</option>
              <option>Genre</option>
            </select>
          </div>
          <div className="homeItems">
            {data?.map((movie, i) => {
              return <MovieBox data={movie} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
