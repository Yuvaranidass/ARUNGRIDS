import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import "./SalesCashandBank.css";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const SalesAdjustBalance = () => {
  const { closeModal } = useSiteContext();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().substr(0, 10);

  const [form, setForm] = useState({
    from: "",
    to: "",
    date: formattedDate,
    amount: "",
    remarks: "",
  });

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
    if (!form.from) errors.from = "Transfer money from is required";
    if (!form.to) errors.to = "Transfer money to is required";
    if (!form.date) errors.date = "Date is required";
    if (!form.amount) errors.amount = "Amount is required";
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
        <div className="subtitle">Transfer Balance</div>
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
          <p className="has-text-link">Transfer money from</p>
          <select
            name="from"
            value={form.from}
            onChange={handleChange}
            className={`select is-fullwidth mt-2 ${errors.from && "is-danger"}`}
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
          {errors.from && <p className="help is-danger">{errors.from}</p>}
        </div>
        <div className="mt-4">
          <p className="has-text-link">Transfer money to</p>
          <select
            name="to"
            value={form.to}
            onChange={handleChange}
            className={`select is-fullwidth mt-2 ${errors.to && "is-danger"}`}
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
          {errors.to && <p className="help is-danger">{errors.to}</p>}
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
          <div className="control" style={{ position: "relative" }}>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className={`SABEnterAmount ${errors.amount && "is-danger"}`}
              style={{ paddingLeft: "2.5rem" }}
            />
            <span
              className="icon is-small has-text-dark"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            >
              <i className="fa fa-inr" aria-hidden="true"></i>
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
