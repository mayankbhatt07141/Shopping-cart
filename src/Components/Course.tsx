import { useState } from "react";
import "./Course.css";
import Blankheart from "../images/heart1.png";
import Redheart from "../images/redheart.png";
import Profileicon from "../images/man-user.png";
import { addItemCart, removeItemCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemWishlist,
  removeItemWishlist,
} from "../redux/actions/wishlistActions";

function Course(props: any) {
  const CartCourses = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: any) => state.wishlist);
  function courseExistCart() {
    for (let i of CartCourses) {
      if (i == props.obj.id) {
        return false;
      }
    }
    return true;
  }
  function courseExistWihlist() {
    for (let i of wishlist) {
      if (i == props.obj.id) {
        return false;
      }
    }
    return true;
  }
  const [icon, seticon] = useState(courseExistWihlist());
  const [toggleaddtocartbutton, setToggleaddtocartbutton] = useState(
    courseExistCart()
  );
  const dispatch = useDispatch();
  function toggle() {
    if (icon == true) {
      // alert("wishlisted");
      dispatch(addItemWishlist(props.obj.id));
    } else {
      dispatch(removeItemWishlist(props.obj.id));
      // alert("REMOVED wishlisted");
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
        <p className="tagbuttons">
          <button className="tags">{props.obj.tags[0]}</button>
          <button className="tags">{props.obj.tags[1]}</button>
          <button className="tags">{props.obj.tags[2]}</button>
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
