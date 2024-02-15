import { useContext } from "react";
import starIcon from "../../images/icons/star.png";
import "./Product.css";
import { GlobalContext } from "../../context/GlobalContext";

interface IProductProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  id: string;
}

const Product = ({ title, price, image, rating, id }: IProductProps) => {
  const { dispatch } = useContext(GlobalContext);
  const addToCart = () => {
    dispatch &&
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id,
          title,
          price,
          image,
          rating,
        },
      });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array.from({ length: rating }, (_, i) => (
          <p key={i}>
            <img src={starIcon} />
          </p>
        ))}
      </div>
      <div style={{ textAlign: "center", width: "100%", marginTop: "auto" }}>
        <img src={image} className="product-img" alt="product-img" />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
