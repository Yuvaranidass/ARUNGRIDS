/* eslint-disable no-unused-vars */
import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import "./SalesCashandBank.css";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const SalesAdjustBalance = () => {
  const { closeModal } = useSiteContext();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().substr(0, 10);

  const [form, setForm] = useState({
    adjustMoney: "",
    amount: "",
    date: formattedDate,
    remarks: "",
  });
  const [activeIcon, setActiveIcon] = useState("");
  const [errors, setErrors] = useState({});
  const [showRemarks, setShowRemarks] = useState(false);

  const adjustMoneyOptions = [
    { value: "cash", name: "Cash" },
    { value: "cheque", name: "Cheque" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!form.adjustMoney) errors.adjustMoney = "Adjust money is required";
    if (!form.amount) errors.amount = "Amount is required";
    if (!form.date) errors.date = "Date is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log("Form submitted", form);
      // Add your form submission logic here
    } else {
      setErrors(errors);
    }
  };

  const toggleRemarks = () => {
    setShowRemarks(!showRemarks);
  };

  return (
    <div className="mb-6">
      <div className="is-flex is-justify-content-space-between mt-3">
        <div className="subtitle">Adjust Balance</div>
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
          <p className="has-text-link">Adjust money in</p>
          <select
            name="adjustMoney"
            value={form.adjustMoney}
            onChange={handleChange}
            className={`select is-fullwidth mt-2 ${
              errors.adjustMoney && "is-danger"
            }`}
          >
            <option value="" disabled>
              Select
            </option>
            {adjustMoneyOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.adjustMoney && (
            <p className="help is-danger">{errors.adjustMoney}</p>
          )}
        </div>
        <div className="mt-4">
          <p className="has-text-link">Add or Reduce</p>
          <div className="is-flex">
            <SmartDarkButton
              label="Add Money"
              leftIcon="fa fa-plus"
              classList={["is-dark", "is-outlined", "mt-3", "mr-3"]}
              onClick={() => setActiveIcon("plus")}
            />
            <SmartDarkButton
              label="Reduce Money"
              leftIcon="fa fa-minus"
              classList={["is-dark", "is-outlined", "mt-3"]}
              onClick={() => setActiveIcon("minus")}
            />
          </div>
        </div>
        <div className="columns mt-4">
          <div className="column is-6">
            <p className="has-text-link">Current Balance</p>
            <i className="fa fa-inr" aria-hidden="true"></i>
          </div>
          <div className="column is-6">
            <p className="has-text-link">Date</p>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`salesadj-date ${errors.date && "is-danger"}`}
            />
            {errors.date && <p className="help is-danger">{errors.date}</p>}
          </div>
        </div>
        <div className="mt-4">
          <p className="has-text-link">Enter Amount</p>
          <div
            className="control has-icons-left"
            style={{ position: "relative" }}
          >
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className={`SABEnterAmount ${errors.amount && "is-danger"}`}
            />
            <span
              className="icon is-small"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                position: "absolute",
                left: "10px",
                bottom: "-20px",
              }}
            >
              <span className="has-text-dark">
                <i className="fa fa-inr" aria-hidden="true"></i>
              </span>
            </span>
          </div>
          {errors.amount && <p className="help is-danger">{errors.amount}</p>}
        </div>
        <div className="mt-4 has-text-link">New balance: {form.amount}</div>
        <div
          className="mt-4 has-text-link is-clickable"
          onClick={toggleRemarks}
        >
          + Add Remarks
        </div>
        {showRemarks && (
          <textarea
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            className="textarea mt-2"
            placeholder="Enter your remarks here"
            rows="4"
          />
        )}
        <div className="is-flex is-justify-content-flex-end mt-4">
          <SmartDarkButton label="Save" classList={["mr-3"]} />
          <SmartDarkButton
            label="Cancel"
            classList={["is-link"]}
            type="cancel"
            onClick={closeModal}
          />
        </div>
      </form>
    </div>
  );
};

export default SalesAdjustBalance;
