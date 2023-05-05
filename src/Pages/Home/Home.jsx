import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./Home.css";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector((store) => store.auth);

  if (!auth.data.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Container">
      <Navbar />
      <div className="section">
        <div className="sectionNav">
          <h3>All Tasks</h3>
        </div>
        <div className="homeSection"></div>
      </div>
    </div>
  );
};

export default Home;
