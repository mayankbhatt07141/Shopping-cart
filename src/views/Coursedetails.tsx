import "./Coursedetails.css";
import { Link, useLocation } from "react-router-dom";
import { addItemCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addItemWishlist } from "../redux/actions/wishlistActions";
function Coursedetails(props: any) {
  const location = useLocation();

  const [objectIndex, setObjectIndex] = useState(
    parseInt(location.pathname[location.pathname.length - 1])
  );
  // useEffect(() => {
  //   setObjectIndex(parseInt(location.pathname[location.pathname.length - 1]));
  //   console.log(objectIndex);
  // }, [location]);

  const [cartstatus, setCartstatus] = useState(false);
  const [wishliststatus, setwishliststatus] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  function addtocart() {
    // dispatch(addItemCart(parseInt(props.id)));
    setCartstatus(true);
    console.log(cart);
  }
  function addtowishlist() {
    // dispatch(addItemWishlist(parseInt(props.id)));
    setwishliststatus(true);
  }

  let arr = ["1sdgfsfdg", "2adkflkadjl", "3kladsjflkjasdlf"];
  return (
    <div className="viewpage">
      <div className="sub-header">
        <h3 className="subheader-title">
          Discover new courses on redux and react
        </h3>
      </div>
      <div className="details-container">
        <div className="redirecttohome">
          <Link to="/">
            <p>All Courses </p>
          </Link>
          <p> {">"} title</p>
          {/* All Courses->title of course   */}
        </div>
        <div className="coursenameauthornametags">
          <h3>Course tilte</h3>
          <p>props.author</p>

          <div className="detail-tags">
            {arr.map((value: string, index: number) => {
              return <div className="detail-tag">{value}</div>;
            })}
          </div>
          {/* props.title */}
        </div>
        <div className="detailswithcartbox">
          <div className="coursedescription">
            <p>Course details</p>
            <p>
              props.descriptioJusto sed at diam sit magna aliquyam erat sanctus,
              erat invidunt labore aliquyam ipsum sed kasd. Ea diam sadipscing
              magna elitr, kasd consetetur dolor et sit et ipsum est duo no,
              sanctus dolor rebum ut eirmod, dolor diam dolor sadipscing clita
              diam. Accusam tempor no justo sanctus aliquyam invidunt, eos.n
            </p>
          </div>
          <div className="pricingcartwishlist">
            <h2>
              {/* props.discounted_price?props.discounted_price:props.actual_price */}
              Rs.840/-
            </h2>
            <p>
              {/* <s>props.discounted_price?actual_price:-</s> */}
              <s>Rs.840/-</s>
            </p>
            <div className="detail-buttongroup">
              {cartstatus ? (
                "item already in cart"
              ) : (
                <button className="addtocartbtn" onClick={addtocart}>
                  ADD TO CART
                </button>
              )}
              {wishliststatus ? (
                "item already in wishlist"
              ) : (
                <button className="addtocartbtn" onClick={addtowishlist}>
                  ADD TO WISHLIST
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursedetails;
