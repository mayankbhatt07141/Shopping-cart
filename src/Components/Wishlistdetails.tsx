import "./Wishlistdetails.css";
import { useState, useEffect } from "react";
import Wishlistitem from "./Wishlistitem";
import { useSelector } from "react-redux";
import { removeItemWishlist } from "../redux/actions/wishlistActions";
import { useDispatch } from "react-redux";
import { addItemCart } from "../redux/actions/cartActions";
function Wishlistdetails() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: any) => state.wishlist);
  let allproducts = useSelector((state: any) => state.allproducts);
  const [wishlistitem, setwishlistitem] = useState([]);
  useEffect(() => {
    let wishlistproducts = allproducts.filter((item: any) => {
      for (let i of wishlist) {
        if (i == item.id) {
          return true;
        }
      }
      return false;
    });
    setwishlistitem(wishlistproducts);
  }, [wishlist]);
  return (
    <div>
      <div>
        {wishlistitem.map((value: any, index: number, arr: any[]) => {
          return <Wishlistitem key={index} value={value} />;
        })}
      </div>
    </div>
  );
}
export default Wishlistdetails;
