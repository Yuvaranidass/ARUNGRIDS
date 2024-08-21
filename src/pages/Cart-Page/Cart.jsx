// import { useState } from "react";
import { SmartDarkTable } from "dark_power25";
import { CardImageBook, IMAGE1 } from "../../services/ImageServices";
import { CARTLOGIN } from "../../services/ImageServices";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
const CartDetails = () => {
  const displayItem = (index) => {
    return (
      <>
        <div className="image is-64x64">
          <img src={index.displayItem} alt="image1" />
        </div>
      </>
    );
  };
  const columns = [
    {
      title: "Item",
      index: "item",
      valueFunction: displayItem,
    },
    {
      title: "Price",
      index: "price",
    },
    {
      title: "Quantity",
      index: "qty",
    },
    {
      title: "Total",
      index: "total",
    },
  ];
  const data = [
    {
      displayItem: CardImageBook,
      price: 1000,
      qty: 1,
      total: 1000,
    },
    {
      displayItem: IMAGE1,
      price: 1000,
      qty: 1,
      total: 1000,
    },
    {
      displayItem: IMAGE1,
      price: 1000,
      qty: 1,
      total: 1000,
    },
  ];
  return (
    <div>
      <SmartDarkTable columns={columns} data={data} />
    </div>
  );
};

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="columns">
        <div className="section column is-4 is-centered is-offset-3">
          <div className="image smart-cart-image-desktop is-hidden-mobile">
            <img src={CARTLOGIN} alt="LOGIN" />
          </div>
          <div className="image smart-cart-image is-hidden-desktop">
            <img src={CARTLOGIN} alt="LOGIN" />
          </div>
        </div>
      </div>
      <div className="smart-text">
        <ul>
          <li>
            <b>Missing Jayam Printers Cart items?</b>
          </li>
          <li>
            <div>Login to see the items you added previously</div>
          </li>
          <a
            className="button is-rounded is-dark mt-4"
            onClick={() => navigate("/signup")}
          >
            <span className="icon is-small">
              <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </span>
            <span>Login</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

const Cart = () => {
  const isLogin = false;
  return <>{isLogin ? CartDetails() : CartEmpty()}</>;
};

export default Cart;
