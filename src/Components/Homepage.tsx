import './Homepage.css';
import Course from './Course';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import addCourse from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

    
function Homepage() { 
    const dispatch = useDispatch();
    const fetchcourses = () => {
      fetch("https://www.amock.io/api/skesarwani/api/courses")
        .then((response) => response.json())
        .then((data) => dispatch(addCourse(data)));
    };
    useEffect(() => {
      fetchcourses();
    }, []);
  
    const courses = useSelector((state: any) => state.allproducts);
    return (
        
        <div className="Homepage-container">
            <div className="sub-header">
                <h3 className="subheader-title">Discover new courses on redux and react</h3>
            </div>
             <div className="course-list-cart">
                <div>
                    {courses.map((val:any,index:number)=>{
                        return < Course  key={index} obj ={val} />
                    })}
                </div>
            </div>   
            
           
        </div>
    )
}
export default Homepage;
