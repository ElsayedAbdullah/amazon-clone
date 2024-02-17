import starIcon from "../../images/icons/star.png";
import { useContext } from "react";
import "./CheckoutProduct.css";
import { GlobalContext } from "../../context/GlobalContext";
interface IProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

const CheckoutProduct = ({ id, title, rating, price, image }: IProps) => {
  const { cart, dispatch } = useContext(GlobalContext);
  const removeItem = () => {
    const index = cart.findIndex((item) => item.id === id);
    // if (!index) return;

    dispatch &&
      dispatch({
        type: "REMOVE_ITEM",
        payload: index,
      });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt={title} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <strong>${price}</strong>
        </p>

        <div className="checkoutProduct-rating">
          {Array.from({ length: rating }, (_, i) => (
            <p key={i}>
              <img src={starIcon} alt="star" />
            </p>
          ))}
        </div>
        <button onClick={() => removeItem()}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
