import React from "react";
import Deleteicon from "../images/delete.png";
import Cartdetails from "./Cartdetails";
import "./Homepage";

import "./Cart.css";
import "./Cartdetails.css";

function Cart() {
  let intobj = [
    {
      actual_price: "840.00",
      author: "Arthur Hansen",
      description: "Tempore sed unde laboriosam qui consequatur rem.",
      details:
        "Incidunt enim veniam.     Id fugit odit ipsam et iusto esse est dignissimos eum.      Totam ut est nobis consequatur aut consequuntur.      Et nesciunt tempore.     Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n       \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas.        Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt volu",
    },
    {
      actual_price: "840.00",
      author: "Arthur Hansen",
      description: "Tempore sed unde laboriosam qui consequatur rem.",
      details:
        "Incidunt enim veniam.     Id fugit odit ipsam et iusto esse est dignissimos eum.      Totam ut est nobis consequatur aut consequuntur.      Et nesciunt tempore.     Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n       \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas.        Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt volu",
    },
    {
      actual_price: "840.00",
      author: "Arthur Hansen",
      description: "Tempore sed unde laboriosam qui consequatur rem.",
      details:
        "Incidunt enim veniam.     Id fugit odit ipsam et iusto esse est dignissimos eum.      Totam ut est nobis consequatur aut consequuntur.      Et nesciunt tempore.     Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n       \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas.        Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt volu",
    },
  ];
  return (
    <div className="Box">
      <div className="sub-header">
        <h3 className="subheader-title">
          Discover new courses on redux and react
        </h3>
      </div>

      <div className="Cart-container">
        <p className="TotalCart">
          <strong> {intobj.length} Courses in Cart</strong>
        </p>
        <div className="carts">
          {intobj.map((value: any, index: number) => {
            return (
              <div className="crtdeta">
                {value.description}
                <div className="Move">
                  <a>Move to Wishlist</a>
                </div>

                <div className="price">
                  <strong>RS-{value.actual_price}-/</strong>
                </div>
                <button className="Delete">
                  <img src={Deleteicon}></img>
                </button>
                <div>
                  <hr className="hr-line" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="totalprice">
          <div className="value">
            Total Cart Value <br />
            <div className="Price">
              {intobj.reduce((sum: number, val: any) => {
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
    </div>
  );
}

export default Cart;
