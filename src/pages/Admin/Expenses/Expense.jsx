import React, { useState } from "react";
import "./Expense.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import PropTypes from "prop-types";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import ExpenseForm from "./ExpensesForm";

function Expense() {
  const { openModal, closeModal } = useSiteContext();
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseWithGST, setExpenseWithGST] = useState(false);
  const [expenseNumber, setExpenseNumber] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentMadeFrom, setPaymentMadeFrom] = useState("");
  const [note, setNote] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [party, setParty] = useState("");

  const handleCategoryChange = (e) => {
    setExpenseCategory(e.target.value);
  };

  const handlePartyChange = (e) => {
    setParty(e.target.value);
  };

  const handleSave = () => {
    const newExpense = {
      date,
      expenseNumber,
      expenseCategory,
      invoiceNumber,
      paymentMode,
      paymentMadeFrom,
      note,
      expenseWithGST: expenseWithGST ? "Yes" : "No",
      party,
    };

    setExpenses([...expenses, newExpense]);

    clearForm();
  };

  const clearForm = () => {
    setExpenseCategory("");
    setExpenseWithGST(false);
    setExpenseNumber("");
    setDate("");
    setInvoiceNumber("");
    setPaymentMode("");
    setPaymentMadeFrom("");
    setNote("");
    setParty("");
  };

  const openMyModal = () => {
    let modalObject = {
      body: <ExpenseForm />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const selectCategory = [
    { value: "", label: "Select Category" },
    { value: "Bank Fee and Charges", label: "Bank Fee and Charges" },
    {
      value: "Employee Salaries & Advances",
      label: "Employee Salaries & Advances",
    },
    { value: "Printing and Stationery", label: "Printing and Stationery" },
    { value: "Raw Materials", label: "Raw Materials" },
    { value: "Rent Expense", label: "Rent Expense" },
    { value: "Repair & Maintenance", label: "Repair & Maintenance" },
    {
      value: "Telephone & Internet Expense",
      label: "Telephone & Internet Expense",
    },
    {
      value: "Transportation & Travel Expense",
      label: "Transportation & Travel Expense",
    },
  ];

  const paymentModes = [
    { value: "", label: "Select Payment Mode" },
    { value: "Cash", label: "Cash" },
    { value: "Bank", label: "Bank" },
    { value: "Online", label: "Online" },
    { value: "Cheque", label: "Cheque" },
  ];

  const selectParty = [
    { value: "", label: "Select Party" },
    { value: "Party A", label: "Party A" },
    { value: "Party B", label: "Party B" },
    { value: "Party C", label: "Party C" },
  ];

  const columns = [
    { title: "#", type: "no" },
    { title: "ITEMS", index: "items" },
    { title: "QTY", index: "qty" },
    { title: "PRICE/ITEM", index: "price_item" },
    { title: "AMOUNT", index: "amount" },
  ];
const Categories=[
    {
      value: "Bank Fee and Charges",
      label: "Bank Fee and Charges",
    },
    {
      value: "Employee Salaries & Advances",
      label: "Employee Salaries & Advances",
    },
    { value: "Printing and Stationery", label: "Printing and Stationery" },
    { value: "Raw Materials", label: "Raw Materials" },
    { value: "Rent Expense", label: "Rent Expense" },
    { value: "Repair & Maintenance", label: "Repair & Maintenance" },
    {
      value: "Telephone & Internet Expense",
      label: "Telephone & Internet Expense",
    },
    {
      value: "Transportation & Travel Expense",
      label: "Transportation & Travel Expense",
    },
]
  return (
    <div className="has-background-white">
      <div className="is-flex is-justify-content-space-between">
        <div className="title mt-4 ml-2">Create Expense</div>
        <div>
          <SmartDarkButton
            label="Cancel"
            leftIcon="fa fa-times"
            classList={["ml-2 my-3 mr-2"]}
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
      <div className="container py-3 px-2">
        <div className="columns">
          <div className="column is-6">
            <div className="card-height ml-2">
              <div className="field mt-3 ml-2 pt-3">
                <div className="field">
                  <input
                    id="switchExample"
                    type="checkbox"
                    name="switchExample"
                    className="switch is-rounded is-info mt-3"
                    checked={expenseWithGST}
                    onChange={(e) => setExpenseWithGST(e.target.checked)}
                  />
                  <label
                    htmlFor="switchExample"
                    className="has-text-link is-size-6 "
                  >
                    Expense With GST
                  </label>
                </div>

                {expenseWithGST && (
                  <div className="container">
                    <div className="field">
                      <label className="label ml-2 has-text-link">
                        Select Party
                      </label>
                      <div className="control ml-2 mr-2 has-icons-right">
                        <select
                          id="party"
                          value={party}
                          onChange={handlePartyChange}
                          className="input"
                        >
                          {selectParty.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="icon is-small is-right">
                          <i
                            className="fa fa-chevron-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="">
              <label className="label has-text-link">Expense Category</label>
                <div className=" is-rounded ml-2 field">
                  <div className="control has-icons-right">
                    <select
                      id="category"
                      name="category"
                      className="input"
                      // value={form.category}
                      // onChange={handleChange}
                    >
                      {
                        Categories.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      }
                    </select>
                    <span className="icon is-small is-right">
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="field ml-2 mr-2">
                <label className="label has-text-link">Expense Number</label>
                <input
                  className="input"
                  type="text"
                  value={expenseNumber}
                  onChange={(e) => setExpenseNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="card-height has-background-white mt-5">
              <div className="columns">
                <div className="column ml-2 mt-2">
                  <label className="label has-text-link">Date</label>
                  <input
                    className="input"
                    type="date"
                    id="date-field"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="column ml-2 mt-2 mr-2">
                  <label className="label has-text-link">
                    Original Invoice Number
                  </label>
                  <input
                    className="input"
                    type="number"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="columns">
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
                          {paymentModes.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="column mt-2 mr-2">
                    <label className="label has-text-link">
                      Payment Made From
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={paymentMadeFrom}
                      onChange={(e) => setPaymentMadeFrom(e.target.value)}
                    />
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card smart-admin-container py-2 px-2 mt-3">
        <SmartDarkTable
          columns={columns}
          data={expenses}
          tableProps={{
            className:
              "admin-table-layout is-hoverable is-clickable has-text-left",
          }}
        />
        <SmartDarkButton
          label="Add Item"
          leftIcon="fa fa-plus-square-o"
          classList={["is-info ml-2 my-3 mr-2"]}
          onClick={openMyModal}
        />
      </div>
    </div>
  );
}

Expense.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Expense;
