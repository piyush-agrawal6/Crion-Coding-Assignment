import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Otp from "../Pages/Otp/Otp";
import Signup from "../Pages/Signup/Signup";
import AddMovie from "../Pages/AddMovie/AddMovie";
import Movie from "../Pages/Movie/Movie";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Movie />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
