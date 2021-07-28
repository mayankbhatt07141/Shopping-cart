import { useState } from "react";
import "./Course.css";
import Blankheart from "../images/heart1.png";
import Redheart from "../images/redheart.png";
import { addItemCart, removeItemCart } from "../redux/actions/cartActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Course(props: any) {
    const CartCourses = useSelector((state: any) => state.cart);
  function courseExistCart(){
    for(let i of CartCourses){
        if(i==props.obj.id){
            return false;
        }
    }
    return true;
  }
  const [icon, seticon] = useState(true);
  const [toggleaddtocartbutton, setToggleaddtocartbutton] = useState(courseExistCart());
  const dispatch = useDispatch();
  function toggle() {
    if (icon == true) {
    }
    seticon(!icon);
  }
  
  function addcartbutton() {
    alert("item added to cart");
    if (toggleaddtocartbutton == true) {
      dispatch(addItemCart(parseInt(props.obj.id)));
    }
    setToggleaddtocartbutton(!toggleaddtocartbutton);
  }
  
  function removecartbutton() {
    alert("item removed from cart");
    dispatch(removeItemCart(parseInt(props.obj.id)));
    setToggleaddtocartbutton(!toggleaddtocartbutton);
  }
  return (
    <div className=" course-list">
      <div className="title-tags">
        <p>
          <b>{props.obj.title}</b>
        </p>
        <p>
          {props.obj.tags[0]} {props.obj.tags[1]} {props.obj.tags[2]}
        </p>
      </div>
      <p>{props.obj.author}</p>
      <button className="heart-button" onClick={toggle}>
        <img className="heart-icon" src={icon ? Blankheart : Redheart} />
      </button>
      <p>
        <b>
          {props.obj.discounted_price
            ? props.obj.discounted_price
            : props.obj.actual_price}
        </b>
      </p>
      <p>
        <s>{props.obj.discounted_price ? props.obj.actual_price : "-"}</s>
      </p>
      <div>
        {toggleaddtocartbutton ? (
          <button className="addtocart-button" onClick={addcartbutton}>
            Add to cart
          </button>
        ) : (
          <button className="addtocart-button" onClick={removecartbutton}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default Course;
