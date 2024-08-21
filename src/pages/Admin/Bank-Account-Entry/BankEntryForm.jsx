import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import PropTypes from "prop-types";

const BankEntryForm = ({ dataIn }) => {
  const { closeModal } = useSiteContext();
  //   const [formData, setFormData] = useState(dataIn || {});
  const {
    bankName: initialBankName = "",
    accountName: initialAccountName = "",
    ifscCode: initialIfscCode = "",
    description: initialDescription = "",
    openingBalance: initialOpeningBalance = "",
    accountNumber: initialAccountNumber = "",
  } = dataIn || {};

  const [bankName, setBankName] = useState(initialBankName);
  const [accountName, setAccountName] = useState(initialAccountName);
  const [ifscCode, setIfscCode] = useState(initialIfscCode);
  const [description, setDescription] = useState(initialDescription);
  const [openingBalance, setOpeningBalance] = useState(initialOpeningBalance);
  const [accountNumber, setAccountNumber] = useState(initialAccountNumber);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!bankName) errors.bankName = "Bank Name is required";
    if (!accountName) errors.accountName = "Account Name is required";
    if (!ifscCode) errors.ifscCode = "IFSC Code is required";
    if (!description) errors.description = "Description is required";
    if (!openingBalance) errors.openingBalance = "Opening Balance is required";
    if (!accountNumber) errors.accountNumber = "Account Number is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  const clearForm = () => {
    setBankName("");
    setAccountName("");
    setIfscCode("");
    setDescription("");
    setOpeningBalance("");
    setAccountNumber("");
    setErrors({});
  };

  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">Bank Entry Form</p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            onClick={closeModal}
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
          />
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            {/* Bank Name */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Bank Name</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.bankName && "is-danger"}`}
                    placeholder="Enter Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-university" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.bankName && (
                  <p className="help is-danger">{errors.bankName}</p>
                )}
              </div>
            </div>

            {/* Account Name */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Account Name</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.accountName && "is-danger"}`}
                    placeholder="Enter Account Name"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.accountName && (
                  <p className="help is-danger">{errors.accountName}</p>
                )}
              </div>
            </div>

            {/* IFSC Code */}
            <div className="column is-4">
              <div className="field">
                <label className="label">IFSC Code</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.ifscCode && "is-danger"}`}
                    placeholder="Enter IFSC Code"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.ifscCode && (
                  <p className="help is-danger">{errors.ifscCode}</p>
                )}
              </div>
            </div>
          </div>

          <div className="columns">
            {/* Description */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className={`textarea ${errors.description && "is-danger"}`}
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className="help is-danger">{errors.description}</p>
                )}
              </div>
            </div>

            {/* Opening Balance */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Opening Balance</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.openingBalance && "is-danger"}`}
                    placeholder="Enter Opening Balance"
                    value={openingBalance}
                    onChange={(e) => setOpeningBalance(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-money" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.openingBalance && (
                  <p className="help is-danger">{errors.openingBalance}</p>
                )}
              </div>
            </div>

            {/* Account Number */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Account Number</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.accountNumber && "is-danger"}`}
                    placeholder="Enter Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-id-card" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.accountNumber && (
                  <p className="help is-danger">{errors.accountNumber}</p>
                )}
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-center">
            <SmartDarkButton
              label="Clear"
              classList={["button is-danger"]}
              onClick={clearForm}
            />
            <SmartDarkButton
              label={dataIn ? "Update" : "Submit"}
              classList={["button is-info ml-3"]}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

BankEntryForm.propTypes = {
  dataIn: PropTypes.shape({
    id: PropTypes.number,
    bankName: PropTypes.string,
    accountName: PropTypes.string,
    ifscCode: PropTypes.string,
    description: PropTypes.string,
    openingBalance: PropTypes.number,
    accountNumber: PropTypes.string,
  }),
};

export default BankEntryForm;
