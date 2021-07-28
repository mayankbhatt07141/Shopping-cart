import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../redux/actions/cartActions";
import { removeItemWishlist } from "../redux/actions/wishlistActions";

function Wishlistitem(props: any) {
  const wishlist = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div>
      {props.value.description}
      <button
        onClick={() => {
          dispatch(removeItemWishlist(props.value.id));
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          dispatch(addItemCart(props.value.id));
          dispatch(removeItemWishlist(props.value.id));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Wishlistitem;
