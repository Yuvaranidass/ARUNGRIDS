import { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkTable } from "dark_power25";

function DayBook() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: "",
    amountReceipt: "",
    amountPayment: "",
    balance: "",
    narr: "",
  });

  const [search, setSearch] = useState("");
  const [totals, setTotals] = useState({
    totalAmountReceipt: 0,
    totalAmountPayment: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    const calculateTotals = () => {
      let totalAmountReceipt = 0;
      let totalAmountPayment = 0;
      let lastBalance = 0;

      expenses.forEach((expense) => {
        totalAmountReceipt += parseFloat(expense.amountReceipt) || 0;
        totalAmountPayment += parseFloat(expense.amountPayment) || 0;
        lastBalance = parseFloat(expense.balance) || 0;
      });

      setTotals({
        totalAmountReceipt,
        totalAmountPayment,
        totalBalance: lastBalance,
      });
    };

    calculateTotals();
  }, [expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate new balance based on the last balance and current form values
    const lastBalance =
      expenses.length > 0
        ? parseFloat(expenses[expenses.length - 1].balance)
        : 0;
    const newBalance =
      lastBalance +
      parseFloat(form.amountReceipt || 0) -
      parseFloat(form.amountPayment || 0);

    const newEntry = {
      ...form,
      balance: newBalance.toFixed(2),
    };

    setExpenses([...expenses, newEntry]);
    setForm({
      date: "",
      amountReceipt: "",
      amountPayment: "",
      balance: "",
      narr: "",
    });
  };

  const columns = [
    { title: "#", type: "sno" },
    { title: "Date", index: "date" },
    { title: "Amount Receipt", index: "amountReceipt" },
    { title: "Amount Payment", index: "amountPayment" },
    { title: "Balance", index: "balance" },
    { title: "Narr", index: "narr" },
  ];

  const filteredData = expenses.filter((item) => item.date.includes(search));

  return (
    <div className="">
      <div className="is-flex is-justify-content-space-between">
        <div className="subtitle has-text-weight-bold">DAY BOOK</div>
      </div>
      <div className="card smart-admin-container py-2 px-2 mt-3">
        <div onSubmit={handleSubmit}>
          <div className="  mt-5 mb-2">
            <div className="control  has-icons-left ">
              <input
                className="input is-rounded "
                type="text"
                name="search"
                placeholder="Search by date"
                value={search}
                onChange={handleChange}
              />
              <span className="icon is-left">
                {/* <FontAwesomeIcon icon={faSearch} /> */}
              </span>
            </div>
          </div>
        </div>

        <SmartDarkTable
          columns={columns}
          data={filteredData}
          tableProps={{
            className:
              "admin-table-layout is-hoverable is-clickable has-text-left",
          }}
        />
      </div>

      <table
        id="transactionTable"
        className="table is-striped is-bordered mt-5"
      >
        <thead>
          <tr>
            <th>Total Amount Receipt</th>
            <th>Total Amount Payment</th>
            <th>Total Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="totalAmountReceipt">
              {totals.totalAmountReceipt.toFixed(2)}
            </td>
            <td id="totalAmountPayment">
              {totals.totalAmountPayment.toFixed(2)}
            </td>
            <td id="totalBalance">{totals.totalBalance.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DayBook;
