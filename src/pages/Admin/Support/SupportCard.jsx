/* eslint-disable react/prop-types */
import "./SupportCard.css";
import { AppLogo } from "../../../services/ImageServices";
const CompanyCard = ({ industry, location, website }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">SJ Printers</p>

        <p className="subtitle">{industry}</p>
        <p>{location}</p>
        <a href={website}>{website}</a>
      </div>
      <div className="label is-flex smart-contact-loc">
        <p className="mt-2 icon is-size-4 mx-2">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
        </p>
        <p>
          No.5 & 6, OMR Rajiv Gandhi Salai, Navalur<br></br> Chennai - 603103
          (Near Navalur Bus Stop)
        </p>
      </div>

      <div className="label is-flex smart-contact-loc">
        <p className="mt-2 icon is-size-4 mx-3">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </p>
        <p className="mt-2">jayamprinters@gmail.com</p>
      </div>
      <div className="is-flex is-justify-content-center">
        <img
          src={AppLogo}
          alt="AppLogo"
          style={{ width: "256px", height: "auto" }}
          className="image is- image-with-opacity"
        />
      </div>
    </div>
  );
};

export default CompanyCard;
