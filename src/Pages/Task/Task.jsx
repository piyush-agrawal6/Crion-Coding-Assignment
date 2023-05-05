import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import "./Task.css";

const Task = () => {
  const auth = useSelector((store) => store.auth);

  if (!auth.data.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="Container">
      <Navbar />
      <div className="section">
        <div className="sectionNav">
          <h3>Add Task/Sprint</h3>
        </div>
        <div className="taskForm"></div>
      </div>
    </div>
  );
};

export default Task;
