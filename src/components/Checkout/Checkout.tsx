// import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

const Checkout = () => {
  const { cart, user } = useContext(GlobalContext);
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-content">
          <div className="checkout-left">
            <div>
              <h3>Hello, {user?.email}</h3>
              <h2 className="checkout-title">Your shopping Cart</h2>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => {
                    return (
                      <CheckoutProduct
                        key={item.id + Math.random()}
                        {...item}
                      />
                    );
                  })}
                </>
              ) : (
                <p style={{ marginTop: "50px", color: "gray" }}>
                  You have no items in your basket.
                </p>
              )}
            </div>
          </div>
          <div className="checkout-right">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
