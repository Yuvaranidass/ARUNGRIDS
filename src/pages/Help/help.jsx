import "./help.css";

import { DOWNLOAD, HELPIMAGE } from "../../services/ImageServices";

const Help = () => {
  return (
    <>
      <div className="container section has-text-centered">
        <div className="title is-size-6-mobile">
          HELLO, HOW CAN WE HELP YOU?
        </div>
        <div className="control has-icons-right smart-help-search">
          <input
            className="input is-rounded"
            type="search"
            placeholder="Search..."
          />
          <span className="icon is-small is-right">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <div className="subtitle is-6 mt-3 is-size-7-mobile">
          Or Choose a Category To Quickly Find The Help You Need
        </div>
        <img
          src={DOWNLOAD}
          className="image smart-help-image is-hidden-mobile"
          alt="Help-Image-Desktop"
        />
        <img
          src={HELPIMAGE}
          alt="Help-Image-Mobile"
          className="image is-hidden-desktop smart-help-image-mobile"
        />
      </div>
    </>
  );
};

export default Help;
