import React from 'react'
import './Course.css';
function Course(props:any) {
          
    return (
        <div className=" course-list">
            <div className="title-tags">
                <p><b>{props.obj.title}</b></p>
                <p>{props.obj.tags[0]} {" "}
                    {props.obj.tags[1]} {" "}
                    {props.obj.tags[2]} 
                </p>
            </div>
            <p>{props.obj.author}</p>
            <p><b>{props.obj.actual_price}</b></p>

            <button className="addtocart-button">Add to cart</button>
        </div>
    )
}

export default Course
