import { useState } from "react";
import "./Home.css";
import { AppLogo } from "../../services/ImageServices";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mt-2 smart-home-hover">
        <div className="is-flex is-justify-content-space-around">
          <p className="title is-justify-content-center is-flex ">
            <img
              src={AppLogo}
              alt="AppLogo"
              className="image is-32x32 is-rounded mt-1 mr-2"
            />
            JAYAM PRINTERS
          </p>
          {/* <p className="title is-justify-content-center is-flex ">
            <img
              src={AppLogo}
              alt="AppLogo"
              className="image is-32x32 is-rounded mt-1 mr-2"
            />
            JAYAM PRINTERS
          </p> */}
        </div>
        <div className="tabs is-box mt-3 is-centered is-size-7-mobile">
          <ul className="smart-home-tabs" style={{ border: "none" }}>
            <li className={activeTab === "home" ? "is-active" : ""}>
              <a href="/" onClick={() => handleTabClick("home")}>
                <span className="icon is-small">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </span>
                <span>Home</span>
              </a>
            </li>
            <li className={activeTab === "about-us" ? "is-active" : ""}>
              <a href="#about-us" onClick={() => handleTabClick("about-us")}>
                <span className="icon is-small">
                  <i className="fa fa-building" aria-hidden="true"></i>
                </span>
                <span>About Us</span>
              </a>
            </li>
            <li className={activeTab === "contact-us" ? "is-active" : ""}>
              <a
                href="#contact-us"
                onClick={() => handleTabClick("contact-us")}
              >
                <span className="icon is-small">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
