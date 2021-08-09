import "./Homepage.css";
import Course from "../Components/Course";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import addCourse from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import Cartdetails from "../Components/Cartdetails";

function Homepage() {
  const dispatch = useDispatch();
  const fetchcourses = () => {
    fetch("https://www.amock.io/api/skesarwani/api/courses")
      .then((response) => response.json())
      .then((data) => dispatch(addCourse(data)));
  };
  useEffect(() => {
    fetchcourses();
  });

  const courses = useSelector((state: any) => state.allproducts);
  return (
    <div className="homepage-container">
      <div className="sub-header">
        <h3 className="subheader-title">
          Discover new courses on redux and react
        </h3>
      </div>
      <div className="courselist-cart">
        <div className="courselist">
          {courses.map((val: any, index: number) => {
            return <Course key={index} obj={val} />;
          })}
        </div>
        <div className="home-cartdetails">
          <Cartdetails />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
