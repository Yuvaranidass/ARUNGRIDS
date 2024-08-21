import  { useState } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import Expense from "./Expense";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import PropTypes from "prop-types";

function ExpenseTable() {
  const { openModal } = useSiteContext();
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: "",
    expenseNumber: "",
    partyName: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, form]);
    setForm({
      date: "",
      expenseNumber: "",
      partyName: "",
      category: "",
      amount: "",
    });
  };
  const columns = [
    {
      title: "PV No",
      type: "pv no",
    },
    {
      title: "Amount",
      index: "amount",
    },
    {
      title: "Date",
      index: "date",
    },
    {
      title: "Cash",
      index: "cash",
    },
    {
      title: "Check",
      index: "check",
    },
  ];

  const data = [
    {
      ItemName: "Friends Card",
      Size: "90",
      Quantity: "006",
      BasePrice: "900",
      TaxAmount: "9%",
      Total: "1000",
    },
  ];
  const openMyModal = () => {
    let modalObject = {
      body: <Expense />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div className="px-4 py-3 "> 
        <div className="subtitle has-text-weight-bold">EXPENSES</div>
      <div className="card smart-admin-container py-2 px-2 ">
        <form onSubmit={handleSubmit}>
          <div className="columns my-2">
            <div className="is-flex ">
              <div className="column is-4">
                <div className="control  has-icons-left">
                  <input
                    className="input is-rounded "
                    type="text"
                    name="search"
                    placeholder="Search by date"
                    // value={search}
                    onChange={handleChange}
                  />
                  <span className="icon is-left ">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div className="column is-3">
                <div className="field ">
                  <div className="control is-rounded ml-2">
                    <div className="select">
                      <select
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                      >
                        <option value="">Date</option>
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="This Week">This Week</option>
                        <option value="Last Week">Last Week</option>
                        <option value="Last 7 days">Last 7 days</option>
                        <option value="This Month">This Month</option>
                        <option value="Previous Month">Previous Month</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="field">
                  <div className="control is-rounded ml-2">
                    <div className="select">
                      <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                      >
                        <option value="">All Expenses Categories</option>
                        <option value="Bank Fee and Charges">
                          Bank Fee and Charges
                        </option>
                        <option value="Employee Salaries & Advances">
                          Employee Salaries & Advances
                        </option>
                        <option value="Printing and Stationery">
                          Printing and Stationery
                        </option>
                        <option value="Raw Material">Raw Material</option>
                        <option value="Rent Expense">Rent Expense</option>
                        <option value="Repair & Maintenance">
                          Repair & Maintenance
                        </option>
                        <option value="Telephone & Internet Expense">
                          Telephone & Internet Expense
                        </option>
                        <option value="Transportation & Travel Expense">
                          Transportation & Travel Expense
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <SmartDarkButton
                  label="Create Expense"
                  leftIcon="fa fa-plus-circle"
                  classList={["is-link"]}
                  onClick={() => openMyModal()}
                />
              </div>
            </div>
          </div>
        </form>

        <SmartDarkTable
          columns={columns}
          data={data}
          tableProps={{
            className:
              "admin-table-layout is-hoverable is-clickable has-text-left",
          }}
        />
      </div>
    </div>
  );
}

export default ExpenseTable;
