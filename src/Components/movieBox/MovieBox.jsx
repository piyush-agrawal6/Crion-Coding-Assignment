import { MdDeleteSweep, MdOutlineEditCalendar } from "react-icons/md";
import "./MovieBox.css";
import { Link } from "react-router-dom";
import { Button, Modal, Popconfirm, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie, editMovie } from "../../Redux/movie/action";

const MovieBox = ({ data }) => {
  let { Title, Year, Poster, imdbRating, _id } = data;
  const initialData = {
    Title,
    Year,
    Poster,
    imdbRating,
  };
  const [movieData, setMovieData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

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

  const handleSubmit = () => {
    dispatch(editMovie(_id, movieData)).then(() => handleOk());
  };

  const confirm = () => {
    message.info("Movie deleted successfully.");
  };

  const handleDelete = () => {
    dispatch(deleteMovie(_id)).then(() => confirm());
  };

  const text = <span>Delete Movie?</span>;

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
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          <input
            required
            className="formInput"
            type="text"
            placeholder="Title"
            name="Title"
            onChange={handleChange}
            value={movieData.Title}
          />
          <br />
          <input
            required
            className="formInput"
            type="text"
            placeholder="Year"
            name="Year"
            onChange={handleChange}
            value={movieData.Year}
          />
          <br />
          <input
            required
            className="formInput"
            type="text"
            placeholder="Poster url"
            name="Poster"
            onChange={handleChange}
            value={movieData.Poster}
          />
          <br />
          <input
            required
            className="formInput"
            type="text"
            placeholder="IMDB Rating"
            name="imdbRating"
            onChange={handleChange}
            value={movieData.imdbRating}
          />
          <br />
        </Modal>

        <Popconfirm
          placement="topLeft"
          title={text}
          onConfirm={handleDelete}
          okText={"Yes"}
          cancelText="No"
        >
          <MdDeleteSweep />
        </Popconfirm>
      </div>
    </div>
  );
};

export default MovieBox;
