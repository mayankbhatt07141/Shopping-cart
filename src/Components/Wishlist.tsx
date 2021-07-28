import React from "react";
import Cartdetails from "./Cartdetails";
import "./Wishlist.css";
import Wishlistdetails from "./Wishlistdetails";
function Wishlist() {
  return (
    <div>
      <Wishlistdetails />
      <Cartdetails />
    </div>
  );
}

export default Wishlist;
