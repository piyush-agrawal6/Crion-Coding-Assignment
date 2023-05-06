import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import "./AddMovie.css";
import { useState } from "react";
import { postMovie } from "../../Redux/movie/action";
const initialData = {
  Title: "",
  Year: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Cast: "",
  Synopsis: "",
  Language: "",
  Poster: "",
  imdbRating: "",
};
const AddMovie = () => {
  const auth = useSelector((store) => store.auth);
  const [movieData, setMovieData] = useState(initialData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    for (let keys in movieData) {
      if (movieData[keys] === "") {
        return alert("Empty");
      }
    }
    dispatch(postMovie(movieData)).then(() => {
      setMovieData(initialData);
    });
  };

  if (!auth.data.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Container">
      <Navbar />
      <div className="section">
        <div className="sectionNav">
          <h3>Add A New Movie</h3>
        </div>
        <div className="addMovie">
          <div>
            <input
              type="text"
              placeholder="Title"
              name="Title"
              onChange={handleChange}
              value={movieData.Title}
            />
            <input
              type="text"
              placeholder="Year"
              name="Year"
              onChange={handleChange}
              value={movieData.Year}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Runtime"
              name="Runtime"
              onChange={handleChange}
              value={movieData.Runtime}
            />
            <input
              type="text"
              placeholder="Genre"
              name="Genre"
              onChange={handleChange}
              value={movieData.Genre}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Directors"
              name="Director"
              onChange={handleChange}
              value={movieData.Director}
            />
            <input
              type="text"
              placeholder="Cast"
              name="Cast"
              onChange={handleChange}
              value={movieData.Cast}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Synopsis"
              name="Synopsis"
              onChange={handleChange}
              value={movieData.Synopsis}
            />
            <input
              type="text"
              placeholder="Languages"
              name="Language"
              onChange={handleChange}
              value={movieData.Language}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Poster url"
              name="Poster"
              onChange={handleChange}
              value={movieData.Poster}
            />
            <input
              type="text"
              placeholder="IMDB Rating"
              name="imdbRating"
              onChange={handleChange}
              value={movieData.imdbRating}
            />
          </div>
          <div>
            <button onClick={() => setMovieData(initialData)}>
              Reset Form
            </button>
            <button onClick={handleSubmit}>Add Movie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
