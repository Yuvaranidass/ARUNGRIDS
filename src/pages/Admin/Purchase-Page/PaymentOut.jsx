import { useState } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider"; //popup
import RecordPaymentOut from "./RecordPaymentOut";

function PaymentOut() {

  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: "",
    expenseNumber: "",
    partyName: "",
    category: "",
    amount: "",
  });
  const { openModal } = useSiteContext(); //popp
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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
      title: 'PV No',
      index: 'expenseNumber',
    },
    {
      title: 'Amount',
      index: 'amount',
    },
    {
      title: 'Date',
      index: 'date',
    },
    {
      title: 'Cash',
      index: 'cash',
    },
    {
      title: 'Check',
      index: 'check',
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
      body: <RecordPaymentOut />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div className="  px-4 py-3 ">
      <div className="subtitle has-text-weight-bold">PAYMENT OUT</div>
      <div className="card smart-admin-container py-2 px-2 ">
        <form onSubmit={handleSubmit}>
          <div className="columns my-2">
            <div className="column is-7">
              <div className="control has-icons-left">
                <input
                  className="input is-rounded "
                  type="text"
                  placeholder="Search"
                  // value={searchQuery}
                  onChange={handleSearch}
                />
                <span className="icon is-small is-left ">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className="column is-2 ">
              <div className="field ">
                <div className="control is-rounded ">
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
            <div className="column is-3 ">
              <SmartDarkButton
                label="Create Expense"
                leftIcon="fa fa-money"
                classList={["is-link "]}
                onClick={() => openMyModal()}
              />
            </div>
          </div>
        </form>
        <SmartDarkTable columns={columns} data={data} tableProps={{
          className:
            "admin-table-layout is-hoverable is-clickable has-text-left mt-3",
        }} />
      </div>
    </div>
  );

}

export default PaymentOut;
