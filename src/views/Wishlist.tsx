import React from "react";
import Cartdetails from "../Components/Cartdetails";
import "./Wishlist.css";
import Wishlistdetails from "../Components/Wishlistdetails";
function Wishlist() {
  return (
    <div>
      <Wishlistdetails />
      <Cartdetails />
    </div>
  );
}

export default Wishlist;
