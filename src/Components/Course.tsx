import { useState } from "react";
import "./Course.css";
import Blankheart from "../images/heart1.png";
import Redheart from "../images/redheart.png";
// import Profileicon from "../images/man-user.png";
import { addItemCart, removeItemCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemWishlist,
  removeItemWishlist,
} from "../redux/actions/wishlistActions";

function Course(props: any) {
  const cart = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: any) => state.wishlist);
  function courseExistCart() {
    for (let i of cart) {
      if (i === parseInt(props.obj.id)) {
        return false;
      }
    }
    return true;
  }
  function courseExistinWishlist() {
    for (let i of wishlist) {
      if (i === parseInt(props.obj.id)) {
        return false;
      }
    }
    return true;
  }
  const [isWishlisted, setIsWishlisted] = useState(courseExistinWishlist());
  const [isCarted, setIsCarted] = useState(courseExistCart());
  const dispatch = useDispatch();
  function toggle() {
    if (isWishlisted === true) {
      // alert("wishlisted");
      dispatch(addItemWishlist(props.obj.id));
    } else {
      dispatch(removeItemWishlist(props.obj.id));
      // alert("REMOVED wishlisted");
    }
    setIsWishlisted(!isWishlisted);
  }
  function addcartbutton() {
    alert("item added to cart");
    if (isCarted === true) {
      dispatch(addItemCart(parseInt(props.obj.id)));
    }
    setIsCarted(!isCarted);
  }

  function removecartbutton() {
    alert("item removed from cart");
    dispatch(removeItemCart(parseInt(props.obj.id)));
    setIsCarted(!isCarted);
  }
  return (
    <div className=" course-container">
      <div className="course-title">
        <p>
          <b>{props.obj.title}</b>
        </p>
        <div className="tagbuttons">
          {props.obj.tags.map((val: string, index: number) => {
            return <p className="tags">{val}</p>;
          })}
        </div>
      </div>
      <p className="course-author">{props.obj.author}</p>
      <img
        onClick={toggle}
        className="heart-icon"
        src={isWishlisted ? Blankheart : Redheart}
        alt="wishlist"
      />
      <p className="course-price">
        <b>
          {props.obj.discounted_price
            ? props.obj.discounted_price
            : props.obj.actual_price}
        </b>
      </p>
      <p className="course-price">
        <s>{props.obj.discounted_price ? props.obj.actual_price : "-"}</s>
      </p>
      <div className="cartbutton-group">
        {isCarted ? (
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
