import "bulma/css/bulma.css";
import { useState } from "react";
import "./SalesGenerate.css";
import { INVOICES } from "../../../services/ImageServices";
import PropTypes from "prop-types";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import { SmartDarkButton } from "dark_power25";

const SalesGenerate = () => {
  const { closeModal } = useSiteContext();
  const [inputValue, setInputValue] = useState("");
  const [gspUsername, setGspUsername] = useState("");
  const [gspPassword, setGspPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "inputValue") setInputValue(value);
    if (name === "gspUsername") setGspUsername(value);
    if (name === "gspPassword") setGspPassword(value);
  };

  const isValidGSTIN = (gstin) => {
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][A-Z0-9Z][0-9A-Z]$/;
    return gstinRegex.test(gstin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate GSTIN NO
    if (!inputValue) {
      newErrors.inputValue = "GSTIN NO is required";
    } else if (!isValidGSTIN(inputValue)) {
      newErrors.inputValue = "Invalid GSTIN format";
    }

    // Validate GSP Username
    if (!gspUsername) {
      newErrors.gspUsername = "GSP Username is required";
    }

    // Validate GSP Password
    if (!gspPassword) {
      newErrors.gspPassword = "GSP Password is required";
    }

    setErrors(newErrors);

    // If no errors, perform submission logic
    if (Object.keys(newErrors).length === 0) {
      console.log("GSP Details Submitted");
      // Add your submission logic here
    }
  };

  return (
    <div className="mt-6">
      <div className="is-flex is-justify-content-space-between">
        <div className="subtitle has-text-weight-bold">
          Add GSP DETAILS TO GENERATE E-INVOICING
        </div>
        <div>
          <i
            className="fa fa-times is-size-4 is-clickable"
            aria-hidden="true"
            onClick={closeModal}
          ></i>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-6">
            <div className="card" style={{ height: "100%" }}>
              <div className="card-image">
                <figure className="image">
                  <img src={INVOICES} alt="Invoice" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="card" style={{ width: 680, height: 438 }}>
              <center>
                <b className="text mt-6">ENTER YOUR IRP DETAILS</b>
              </center>
              <hr />
              <div>
                <div className="is-flex is-align-items-center">
                  <div className="columns">
                    <div className="column is-4">
                      <label
                        className="has-text-link ml-4"
                        style={{ width: 150 }}
                      >
                        GSTIN NO:
                      </label>
                    </div>
                    <div className="column is-8">
                      <input
                        type="text"
                        name="inputValue"
                        className="input ml-1"
                        style={{
                          width: 275,
                          borderColor: errors.inputValue
                            ? "lightcoral"
                            : "#dbdbdb",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      {errors.inputValue && (
                        <p
                          style={{ color: "lightcoral", fontSize: "0.875rem" }}
                        >
                          {errors.inputValue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="is-flex is-align-items-center">
                  <div className="columns">
                    <div className="column is-4">
                      <label
                        className="has-text-link ml-4"
                        style={{ width: 150 }}
                      >
                        GSP Username:
                      </label>
                    </div>
                    <div className="column is-8">
                      <input
                        type="text"
                        name="gspUsername"
                        className="input"
                        style={{
                          width: 275,
                          borderColor: errors.gspUsername
                            ? "lightcoral"
                            : "#dbdbdb",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                        value={gspUsername}
                        onChange={handleInputChange}
                      />
                      {errors.gspUsername && (
                        <p
                          style={{ color: "lightcoral", fontSize: "0.875rem" }}
                        >
                          {errors.gspUsername}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="is-flex is-align-items-center">
                  <div className="columns">
                    <div className="column is-4">
                      <label
                        className="has-text-link ml-4"
                        style={{ width: 150 }}
                      >
                        GSP Password:
                      </label>
                    </div>
                    <div className="column is-8">
                      <input
                        type="password"
                        name="gspPassword"
                        className="input"
                        style={{
                          width: 275,
                          borderColor: errors.gspPassword
                            ? "lightcoral"
                            : "#dbdbdb",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                        value={gspPassword}
                        onChange={handleInputChange}
                      />
                      {errors.gspPassword && (
                        <p
                          style={{ color: "lightcoral", fontSize: "0.875rem" }}
                        >
                          {errors.gspPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <center>
                  <SmartDarkButton
                    label="Save GSP details"
                    classList={["is-link mt-4"]}
                    type="submit"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

SalesGenerate.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default SalesGenerate;
