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
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const limit = 10;
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    setSort(e.target.value);
    dispatch(getMovie(page, limit, e.target.value, keyword));
  };
  const handlePageChange = (value) => {
    setPage(page + value);
    console.log(value);
    dispatch(getMovie(page + value, limit, sort, keyword));
  };
  const handleSearch = (e) => {
    setKeyword(e.target.value);
    dispatch(getMovie(page, limit, sort, e.target.value));
  };

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
            <input
              placeholder="Search movies by title, director, year.."
              value={keyword}
              onChange={handleSearch}
            />
            <select onChange={handleSortChange}>
              <option value="">Sort By</option>
              <option value="Title">Title</option>
              <option value="Director">Director</option>
              <option value="Year">Year</option>
              <option value="Genre">Genre</option>
            </select>
          </div>
          <div className="homeItems">
            {movies?.map((movie, i) => {
              return <MovieBox data={movie} key={i} />;
            })}
          </div>
          <div className="pagination">
            <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
              Prev
            </button>
            <button>{page}</button>
            <button
              disabled={movies?.length < 10}
              onClick={() => handlePageChange(1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
