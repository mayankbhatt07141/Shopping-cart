import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeallCart } from "../redux/actions/cartActions";
import Deleteicon from "../images/delete.png";
import "./Cart.css";

function Cart() {
  let dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const allproducts = useSelector((state: any) => state.allproducts);
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    let items = allproducts.filter((item: any) => {
      if (cart.indexOf(parseInt(item.id)) !== -1) return true;
      return false;
    });
    setCartitems(items);
  }, [cart, allproducts]);

  return (
    <div className="cart-container">
      <div className="sub-header">
        <h3 className="subheader-title">
          Discover new courses on redux and react
        </h3>
      </div>

      <div className="cart-list">
        <p className="TotalCart">
          <strong> {cartitems.length} Courses in Cart</strong>
        </p>
        <div className="cartitems">
          {cartitems.map((value: any, index: number) => {
            return (
              <div className="cartdata">
                <p className="cartitem-title">{value.title}</p>
                <p className="Move">Move to Wishlist</p>
                <p className="price">
                  <strong>Rs.{value.actual_price}-/</strong>
                </p>
                <button className="Delete">
                  <img src={Deleteicon} alt="delete" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="totalprice">
          <div className="value">
            Total Cart Value <br />
            <div className="Price">
              {cartitems.reduce((sum: number, val: any) => {
                if (val.discounted_price)
                  return sum + (val.actual_price - val.discounted_price);
                else return sum;
              }, 0)}
            </div>
          </div>
          <div className="checkout">
            <button
              onClick={() => {
                dispatch(removeallCart());
              }}
            >
              <span>GO TO CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
