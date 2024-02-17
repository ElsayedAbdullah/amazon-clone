import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { getCartTotalPrice } from "../../utils";

const Payment = () => {
  const { cart, user } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if cart is empty, then navigate
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);
  return (
    <div className="payment">
      <div className="container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {cart.length} {cart.length == 1 ? "item" : "items"}
          </Link>
          )
        </h1>
        {/* Delivery Address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
        {/* Review Items*/}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {cart.length > 0 && (
              <>
                {cart.map((item) => {
                  return (
                    <CheckoutProduct key={item.id + Math.random()} {...item} />
                  );
                })}
              </>
            )}
          </div>
        </div>
        {/* Payment method*/}
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <form onSubmit={() => {}}>
              {/* <CardElement onChange={handleChange} /> */}
              <div className="payment-priceContainer">
                <strong>${getCartTotalPrice(cart)}</strong>
                <button type="submit" disabled={false}>
                  {/* <span>{processing ? <p>Processing</p> : "Buy Now"}</span> */}
                  <span>Buy Now</span>
                </button>
              </div>
              {/* {error && <div>{error}</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
