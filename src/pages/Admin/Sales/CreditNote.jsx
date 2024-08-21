
import { useState } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";


import CreditPopup from "../CreateSalesInvoice/CreditPopup";

function CreditNote() {
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
  const Columns = [
    { title: "Date", index: "date" },
    { title: "Credit Note Number", index: "credit_note_no" },
    { title: "Party Name", index: "party_name" },
    { title: "Amount", index: "amount" },
    { title: "Status", index: "status" },
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
      body: <CreditPopup />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div className="px-3 py-3"> 
        <div className="subtitle has-text-weight-bold">CREDIT NOTE</div>
      <form onSubmit={handleSubmit}>
        <div className="card smart-admin-container py-2 px-2">
          <div className="columns my-2">
          <div className="column is-7">
            <div className="field ">
              <div className="control  has-icons-left">
                <input
                  className="input is-rounded "
                  type="search"
                  placeholder="Search"
                  //value={searchQuery}
                  //onChange={handleSearch}
                />
                <span className="icon is-left">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            </div>
            <div className="column is-2">
            <div className="field">
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
            {/* <div className="field mt-3">
              <div className="control is-rounded ml-2"></div>
            </div> */}
             <div className="column is-3">
            <SmartDarkButton
              label="Create Credit Note"
              leftIcon="fa fa-credit-card"
              classList={["is-link "]}
              onClick={() => openMyModal()}
            />
          </div>
          </div>
          <SmartDarkTable
            columns={Columns}
            data={data}
            tableProps={{
              className:
                "admin-table-layout is-hoverable is-clickable has-text-left",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default CreditNote;
