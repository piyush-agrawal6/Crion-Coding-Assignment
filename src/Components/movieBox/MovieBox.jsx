import { MdDeleteSweep, MdOutlineEditCalendar } from "react-icons/md";
import "./MovieBox.css";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";

const MovieBox = ({ data }) => {
  let { Title, Year, Poster, imdbRating } = data;
  const initialData = {
    Title,
    Year,
    Poster,
    imdbRating,
  };
  const [movieData, setMovieData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  return (
    <div className="movieBox">
      <Link to="/home/1">
        <div>
          <img src={Poster} alt="movie_poster" />
        </div>
        <h4>{Title}</h4>
        <p>{Year}</p>
      </Link>
      <div className="movieIcons">
        <MdOutlineEditCalendar onClick={showModal} />
        <Modal
          title="Edit Movie"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <input
            className="formInput"
            type="text"
            placeholder="Title"
            name="Title"
            onChange={handleChange}
            value={movieData.Title}
          />
          <br />
          <input
            className="formInput"
            type="text"
            placeholder="Year"
            name="Year"
            onChange={handleChange}
            value={movieData.Year}
          />
          <br />
          <input
            className="formInput"
            type="text"
            placeholder="Poster url"
            name="Poster"
            onChange={handleChange}
            value={movieData.Poster}
          />
          <br />
          <input
            className="formInput"
            type="text"
            placeholder="IMDB Rating"
            name="imdbRating"
            onChange={handleChange}
            value={movieData.imdbRating}
          />
          <br />
        </Modal>
        <MdDeleteSweep />
      </div>
    </div>
  );
};

export default MovieBox;
