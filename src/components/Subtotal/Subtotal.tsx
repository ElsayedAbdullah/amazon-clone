import { useContext } from "react";
import "./Subtotal.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { getCartTotalPrice } from "../../utils";
const Subtotal = () => {
  const { cart } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({cart.length} items):{" "}
          <strong>${getCartTotalPrice(cart)}</strong>
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
