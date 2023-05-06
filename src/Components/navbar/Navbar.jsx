import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdMovieFilter } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { BiCommentAdd } from "react-icons/bi";
import { authLogout } from "../../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const User = useSelector((store) => store.auth.data.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navAvatar">
        <img src={User?.avatar} alt="avatar" />
        <p>{User?.name.split(" ")[0]}</p>
      </div>
      <Link to="/home">
        <div className="navIcons nav">
          <MdMovieFilter />
          <p>Library</p>
        </div>
      </Link>
      <Link to="/add">
        <div className="navIcons">
          <BiCommentAdd />
          <p>Add New</p>
        </div>
      </Link>
      <div
        className="navIcons"
        onClick={() => {
          dispatch(authLogout());
        }}
      >
        <IoMdLogOut />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
