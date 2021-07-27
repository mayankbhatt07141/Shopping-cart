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
  }, [cart]);
  return (
    <div className="container">
      <div className="Cart">YOUR CART DETAILS</div>
      <div className="Coursecart">
        {cartitems.map((value: any, index: number) => {
          return (
            <div>
              {value.description}
              <span>{value.actual_price}</span>
            </div>
          );
        })}
      </div>

      <hr className="hr-line" />

      <div className="total">
        <div className="value">
          Total Cart Value <br />
          <div className="Price">
            {cartitems.reduce((sum: number, val: any) => {
              return sum + parseInt(val.actual_price);
            }, 0)}
          </div>
        </div>

        <div className="checkout">
          <button>
            <span>GO TO CHECKOUT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartdetails;
