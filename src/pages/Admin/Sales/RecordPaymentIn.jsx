/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./RecordPaymentIn.css";
import PropTypes from "prop-types";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

function RecordPaymentIn() {
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseWithGST, setExpenseWithGST] = useState(false);
  const [partyName, setPartyName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentMadeFrom, setPaymentMadeFrom] = useState("");
  const [paymentinnumber, setPaymentinnumber] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useSiteContext();

  const handleCategoryChange = (e) => {
    setExpenseCategory(e.target.value);
  };

  const handleGSTToggle = () => {
    setExpenseWithGST(!expenseWithGST);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!partyName) formErrors.partyName = "Party Name is required";
    if (!paymentAmount) formErrors.paymentAmount = "Payment Amount is required";
    if (!date) formErrors.date = "Payment Date is required";
    if (!paymentMode) formErrors.paymentMode = "Payment Mode is required";
    if (!paymentMadeFrom)
      formErrors.paymentMadeFrom = "Payment Made From is required";
    if (!paymentinnumber)
      formErrors.paymentinnumber = "Payment In Number is required";
    if (!note) formErrors.note = "Note is required";
    return formErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const newExpense = {
        date,
        partyName,
        expenseCategory,
        invoiceNumber,
        paymentMode,
        paymentMadeFrom,
        paymentinnumber,
        note,
        paymentAmount,
        expenseWithGST: expenseWithGST ? "Yes" : "No",
      };

      // Assuming setExpenses is defined somewhere else in your code or context
      //   setExpenses([...expenses, newExpense]);

      // Clear the form fields
      setExpenseCategory("");
      setExpenseWithGST(false);
      setPartyName("");
      setPaymentAmount("");
      setDate("");
      setInvoiceNumber("");
      setPaymentMode("");
      setPaymentMadeFrom("");
      setPaymentinnumber("");
      setNote("");
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    // Clear the form fields
    setExpenseCategory("");
    setExpenseWithGST(false);
    setPartyName("");
    setPaymentAmount("");
    setDate("");
    setInvoiceNumber("");
    setPaymentMode("");
    setPaymentMadeFrom("");
    setPaymentinnumber("");
    setNote("");
    setErrors({});
    // Navigate back to the table view
    // navigate("payment-out"); Adjust the path as needed
  };

  return (
    <div className="">
      <div className="is-flex is-justify-content-space-between">
        <div className="title is-size-4 mt-4 ml-2">RECORD PAYMENT IN #1</div>
        <div>
          <SmartDarkButton
            label="Cancel"
            leftIcon="fa fa-times"
            classList={["is-danger has-text-white ml-2 my-3 mr-2"]}
            onClick={closeModal}
          />
          <SmartDarkButton
            label="Save"
            leftIcon="fa fa-check"
            classList={["is-link ml-2 my-3 mr-2"]}
            onClick={handleSave}
          />
        </div>
      </div>
      <div className="">
        <div className="columns">
          <div className="column is-6">
            <div className=" card-height has-background-white ml-2">
              <div className="field mt-3 ml-2 mr-2">
                <label className="label has-text-link">Party Name</label>
                <input
                  className="input"
                  type="text"
                  value={partyName}
                  onChange={(e) => setPartyName(e.target.value)}
                />
                {errors.partyName && (
                  <p className="help is-danger">{errors.partyName}</p>
                )}
              </div>

              <div className="field ml-2 mr-2">
                <label className="label has-text-link">
                  Enter Payment Amount
                </label>
                <input
                  className="input"
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
                {errors.paymentAmount && (
                  <p className="help is-danger">{errors.paymentAmount}</p>
                )}
              </div>
            </div>
          </div>
          <div className="column is-6 py-2 px-2">
            <div className=" card-height has-background-white mt-5">
              <div className="columns">
                <div className="column ml-2">
                  <label className="label has-text-link">Payment Date</label>
                  <input
                    className="input"
                    type="date"
                    id="date-field"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {errors.date && (
                    <p className="help is-danger">{errors.date}</p>
                  )}
                </div>
                <div className="column">
                  <label className="label ml-2 has-text-link">
                    Payment Mode
                  </label>
                  <div className="control ml-2">
                    <div className="select">
                      <select
                        id="payment-mode"
                        value={paymentMode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                      >
                        <option value="">Select Payment Mode</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                        <option value="Online">Online</option>
                        <option value="Cheque">Cheque</option>
                      </select>
                      {errors.paymentMode && (
                        <p className="help is-danger">{errors.paymentMode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns">
                {/* <div className="column is-6  mr-2 ml-2">
                                        <label className="label has-text-link">Payment Made From</label>
                                        <input
                                            className="input"
                                            type="text"
                                            value={paymentMadeFrom}
                                            onChange={(e) => setPaymentMadeFrom(e.target.value)}
                                        />
                                        {errors.paymentMadeFrom && <p className="help is-danger">{errors.paymentMadeFrom}</p>}
                                    </div> */}

                <div className="column ">
                  <div className="field ml-2 mr-2">
                    <label className="label has-text-link">
                      Payment In Number
                    </label>
                    <input
                      className="input"
                      type="number"
                      value={paymentinnumber}
                      onChange={(e) => setPaymentinnumber(e.target.value)}
                    />
                    {errors.paymentinnumber && (
                      <p className="help is-danger">{errors.paymentinnumber}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="field ml-2 mr-2">
                <label className="label has-text-link">Note</label>
                <input
                  className="input"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                {errors.note && <p className="help is-danger">{errors.note}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordPaymentIn;

RecordPaymentIn.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};
