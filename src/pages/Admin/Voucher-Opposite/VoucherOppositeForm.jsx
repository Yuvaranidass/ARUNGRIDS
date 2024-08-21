import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const VoucherOppositeForm = ({ dataIn }) => {
  const { closeModal } = useSiteContext();
 
  const {
    PVNo: initialVoucherNo = "",
    Amount: initialAmount = "",
    Date: initialDate = "",
    status: initialStatus = "",
    address: initialAddress = "",
    pincode: initialPincode = "",
  } = dataIn || {};

  const [voucherNo, setVoucherNo] = useState(initialVoucherNo);
  const [amount, setAmount] = useState(initialAmount);
  const [date, setDate] = useState(initialDate);
  const [status, setStatus] = useState(initialStatus);
  const [address, setAddress] = useState(initialAddress);
  const [pincode, setPincode] = useState(initialPincode);
  const [errors, setErrors] = useState({});
  const [showCashInput, setShowCashInput] = useState(false);
  const [showCheckInput, setShowCheckInput] = useState(false);
  // const [pdfLoading, setPdfLoading] = useState(false);

  const statusOptions = [
    { value: 1, label: "Active" },
    { value: 0, label: "Inactive" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!voucherNo) errors.voucherNo = "Voucher No is required";
    if (!amount) errors.amount = "Amount is required";
    if (!date) errors.date = "Date is required";
    if (!status) errors.status = "Status is required";
    if (!address) errors.address = "Address is required";
    if (!pincode) errors.pincode = "Pincode is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

  };

  const clearForm = () => {
    setVoucherNo("");
    setAmount("");
    setDate("");
    setStatus("");
    setAddress("");
    setPincode("");
    setErrors({});
    setShowCashInput(false);
    setShowCheckInput(false);
  };

  useEffect(() => {
   
    if (showCashInput) {
      setShowCheckInput(false);
    } else if (showCheckInput) {
      setShowCashInput(false);
    }
  }, [showCashInput, showCheckInput]);

 
  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">VoucherOppositeForm</p>
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
            {/* Voucher No */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Voucher No:</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.voucherNo && "is-danger"}`}
                    placeholder="Enter Voucher No"
                    value={voucherNo}
                    onChange={(e) => setVoucherNo(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.voucherNo && (
                  <p className="help is-danger">{errors.voucherNo}</p>
                )}
              </div>
            </div>

            {/* Amount */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Amount</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.amount && "is-danger"}`}
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar-sign" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.amount && (
                  <p className="help is-danger">{errors.amount}</p>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Date</label>
                <div className="control has-icons-left">
                  <input
                    type="date"
                    className={`input ${errors.date && "is-danger"}`}
                    placeholder="Enter Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.date && <p className="help is-danger">{errors.date}</p>}
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="title is-size-5 is-flex is-justify-content-center">
            <p>Method of Payment</p>
          </div>
          <hr></hr>
          <div className="columns is-flex is-justify-content-center">
            <div className="column is-narrow">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={showCashInput}
                  onChange={() => setShowCashInput(!showCashInput)}
                />
                Cash
              </label>
            </div>
            {/* <div className="column is-narrow">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={showCheckInput}
                  onChange={() => setShowCheckInput(!showCheckInput)}
                />
                Check
              </label>
            </div> */}
          </div>

          <div className="columns">
            {/* Cash */}
            {showCashInput && (
              <div className="column is-4">
                <div className="field">
                  <label className="label">Cash:</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className={`input ${errors.pincode && "is-danger"}`}
                      placeholder="Enter Cash"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                  {errors.pincode && (
                    <p className="help is-danger">{errors.pincode}</p>
                  )}
                </div>
              </div>
            )}

            {/* Check No# */}
            {showCheckInput && (
              <div className="column is-4">
                <div className="field">
                  <label className="label">Check No#:</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className={`input ${errors.pincode && "is-danger"}`}
                      placeholder="Enter Check No#"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                  {errors.pincode && (
                    <p className="help is-danger">{errors.pincode}</p>
                  )}
                </div>
              </div>
            )}

            {/* TO */}
            {showCashInput && (
              <div className="column is-4">
                <div className="field">
                  <label className="label">TO:</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className={`input ${errors.pincode && "is-danger"}`}
                      placeholder="Enter TO"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                  {errors.pincode && (
                    <p className="help is-danger">{errors.pincode}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="columns">
            {/* Being */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Being:</label>
                <div className={`${errors.status && "is-danger"}`}>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="input"
                  >
                    <option value="">Select Status</option>
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.status && (
                  <p className="help is-danger">{errors.status}</p>
                )}
              </div>
            </div>

            {/* Payee */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Payee:</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.pincode && "is-danger"}`}
                    placeholder="Enter Payee"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.pincode && (
                  <p className="help is-danger">{errors.pincode}</p>
                )}
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="columns">
            <div className="column is-4">
              <div className="field">
                <label className="label">Approved By:</label>
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <label className="label">Paid By:</label>
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <label className="label">Signature:</label>
              </div>
            </div>
          </div>

          <div className="columns is-flex is-justify-content-flex-end mt-4">
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

VoucherOppositeForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
  closeModal: PropTypes.func.isRequired,
};

export default VoucherOppositeForm;
 