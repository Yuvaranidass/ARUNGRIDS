import "./HomeProducts.css";
import AllProducts from "../All-Products/AllProducts";
import About from "../About-Us/About";
import Contact from "../Contact-Us/Contact";
import Footer from "../../themes/Footer/Footer";
import { NEWLAND } from "../../services/ImageServices";
import { SmartDarkButton } from "dark_power25";

const HomeProducts = () => {
  return (
    <>
      <div className="smart-button-content">
        <div>
          <img src={NEWLAND} alt="NEWLANDINGIMG" />
        </div>
        <div id="#">{AllProducts()}</div>
        <div id="about-us">{About()}</div>
        <div id="contact-us">{Contact()}</div>
        <div>{Footer()}</div>
        <SmartDarkButton
          classList={["button is-dark smart-allproducts-button"]}
          type="icon"
          leftIcon="fa fa-arrow-up"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </>
  );
};

export default HomeProducts;
