import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cartdetails.css";

function Cartdetails() {
  let cart = useSelector((state: any) => state.cart);
  let allproducts = useSelector((state: any) => state.allproducts);
  let [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    let cartproducts = allproducts.filter(
      (item: any) => cart.indexOf(parseInt(item.id)) !== -1
    );
    setCartitems(cartproducts);
  }, [cart, allproducts]);
  return (
    <div className="cartdetails-container">
      <div className="cart-heading">YOUR CART DETAILS</div>
      <hr className="hr-line" />

      <div className="cart-list">
        {cartitems.map((value: any, index: number) => {
          return (
            <div>
              <div className="cart-item">
                {value.description}
                <span>
                  <strong>Rs {value.actual_price}/-</strong>
                </span>
              </div>
              <hr className="hr-line" />
            </div>
          );
        })}
      </div>

      <div className="items-sum-container">
        <div className="sum-value">
          Cart Value <br />
          <div className="price">
            <b>
              Rs.
              {cartitems.reduce((sum: number, val: any) => {
                return sum + parseInt(val.actual_price);
              }, 0)}
              /-
            </b>
          </div>
        </div>

        <button>
          <span>GO TO CHECKOUT</span>
        </button>
      </div>
    </div>
  );
}

export default Cartdetails;
