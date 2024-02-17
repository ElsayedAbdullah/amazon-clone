import { useContext } from "react";
import "./Subtotal.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const { cart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const getCartTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({cart.length} items):{" "}
          <strong>${getCartTotalPrice()}</strong>
        </p>
        <small className="subtotal__gift"></small>
      </>
      <button
        onClick={() => {
          cart.length > 0 && navigate("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
