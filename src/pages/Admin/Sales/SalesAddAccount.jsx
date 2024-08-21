import { useState, useEffect } from "react";
import "./SalesCashandBank.css";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const SalesAddAccount = () => {
  const { closeModal } = useSiteContext();
  const [date, setDate] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [reEnterAccountNumber, setReEnterAccountNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const [upiID, setUpiID] = useState("");
  const [accountName, setAccountName] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankBranchName, setBankBranchName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");

  useEffect(() => {
    // Initialize the date state to current date
    const currentDate = new Date().toISOString().split("T")[0];
    setDate(currentDate);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  const validate = () => {
    const newErrors = {};

    // Validate required fields
    if (!accountName.trim()) newErrors.accountName = "Account Name is required";
    if (!openingBalance.trim())
      newErrors.openingBalance = "Opening Balance is required";
    if (checked) {
      if (accountNumber !== reEnterAccountNumber) {
        newErrors.reEnterAccountNumber = "Account numbers do not match";
      } else if (accountNumber.length < 11 || accountNumber.length > 16) {
        newErrors.reEnterAccountNumber =
          "Account number must be between 11 and 16 characters";
      }

      if (!ifscCode.trim() || ifscCode.length !== 11)
        newErrors.ifscCode = "IFSC Code must be 11 characters";
      if (!bankBranchName.trim())
        newErrors.bankBranchName = "Bank & Branch Name is required";
      if (!accountHolderName.trim())
        newErrors.accountHolderName = "Account Holder Name is required";

      const upiIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!upiIdPattern.test(upiID)) newErrors.upiID = "Invalid UPI ID format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, proceed with submission
      console.log("Form submitted");
      // Perform actual form submission logic here
    }
  };

  return (
    <div>
      <div className="is-flex is-justify-content-space-between mt-3">
        <div className="subtitle">Add Account</div>
        <div className="mr-5">
          <i
            className="fa fa-times is-clickable"
            aria-hidden="true"
            onClick={closeModal}
          ></i>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label className="has-text-link">
            Account Name<span className="has-text-danger">*</span>
          </label>
          <input
            type="text"
            className={`input ${errors.accountName ? "is-danger" : ""}`}
            placeholder="Enter Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
          {errors.accountName && (
            <p className="help is-danger">{errors.accountName}</p>
          )}
        </div>
        <div className="columns mt-4">
          <div className="column">
            <label className="has-text-link">
              Opening Balance<span className="has-text-danger">*</span>
            </label>
            <input
              type="number"
              className={`input ${errors.openingBalance ? "is-danger" : ""}`}
              placeholder="Enter Opening Balance"
              value={openingBalance}
              onChange={(e) => setOpeningBalance(e.target.value)}
            />
            {errors.openingBalance && (
              <p className="help is-danger">{errors.openingBalance}</p>
            )}
          </div>
          <div className="column">
            <label className="has-text-link">As of Date</label>
            <input
              type="date"
              className="input"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <hr />
        <div className="is-flex is-justify-content-space-between">
          <div>Add Bank Details</div>
          <div>
            <div className="field">
              <input
                id="switchRoundedInfo"
                type="checkbox"
                className="switch is-rounded is-info"
                checked={checked}
                onChange={handleToggle}
              />
              <label htmlFor="switchRoundedInfo"></label>
            </div>
          </div>
        </div>
        <hr />
        {checked && (
          <div>
            <div className="columns">
              <div className="column">
                <label className="has-text-link">
                  Bank Account Number<span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${
                    errors.reEnterAccountNumber ? "is-danger" : ""
                  }`}
                  placeholder="Enter Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  maxLength={16}
                />
              </div>
              <div className="column">
                <label className="has-text-link">
                  Re-Enter Bank Account Number
                  <span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${
                    errors.reEnterAccountNumber ? "is-danger" : ""
                  }`}
                  placeholder="Re-Enter Account Number"
                  value={reEnterAccountNumber}
                  onChange={(e) => setReEnterAccountNumber(e.target.value)}
                  maxLength={16}
                />
                {errors.reEnterAccountNumber && (
                  <p className="help is-danger">
                    {errors.reEnterAccountNumber}
                  </p>
                )}
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label className="has-text-link">
                  IFSC Code<span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${errors.ifscCode ? "is-danger" : ""}`}
                  placeholder="Enter IFSC Code"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  maxLength={11}
                />
                {errors.ifscCode && (
                  <p className="help is-danger">{errors.ifscCode}</p>
                )}
              </div>
              <div className="column">
                <label className="has-text-link">
                  Bank & Branch Name<span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${
                    errors.bankBranchName ? "is-danger" : ""
                  }`}
                  placeholder="Enter Bank & Branch Name"
                  value={bankBranchName}
                  onChange={(e) => setBankBranchName(e.target.value)}
                />
                {errors.bankBranchName && (
                  <p className="help is-danger">{errors.bankBranchName}</p>
                )}
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label className="has-text-link">
                  Account Holder Name<span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${
                    errors.accountHolderName ? "is-danger" : ""
                  }`}
                  placeholder="Enter Account Holder Name"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
                {errors.accountHolderName && (
                  <p className="help is-danger">{errors.accountHolderName}</p>
                )}
              </div>
              <div className="column">
                <label className="has-text-link">
                  UPI ID<span className="has-text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`input ${errors.upiID ? "is-danger" : ""}`}
                  placeholder="Enter UPI ID"
                  value={upiID}
                  onChange={(e) => setUpiID(e.target.value)}
                />
                {errors.upiID && (
                  <p className="help is-danger">{errors.upiID}</p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="is-flex is-justify-content-flex-end mt-4">
          <SmartDarkButton
            label="Save"
            classList={["mr-3 mb-3"]}
            type="submit"
          />
          <SmartDarkButton
            label="Cancel"
            classList={["is-link mb-3"]}
            type="button"
            onClick={closeModal}
          />
        </div>
      </form>
    </div>
  );
};

export default SalesAddAccount;
