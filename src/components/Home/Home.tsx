import { products } from "../../data";
import homeImg from "../../images/home.jpg";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home-image" src={homeImg} alt="home-img" />
      <div className="container">
        <div className="home-content">
          <div className="home-row">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
