import { useState } from "react";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import Returnpopup from "../CreateSalesInvoice/ReturnPopup";
function Estimate() {
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
    { title: "Quotation Number", index: "quotation_no" },
    { title: "Party Name", index: "party_name" },
    { title: "Due In", index: "due_in" },
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
      body: <Returnpopup />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div className="px-3 py-3">
      <div className="subtitle has-text-weight-bold">SALES RETURN</div>
      <form onSubmit={handleSubmit}>
        <div className="card smart-admin-container py-2 px-2">
          <div className="columns my-2">
            <div className="column is-7">
              <div className="control has-icons-left">
                <input
                  className="input is-rounded "
                  type="text"
                  name="search"
                  placeholder="Search"
                  onChange={handleChange}
                />
                <span className="icon is-small is-left ">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
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
            <div className="column is-3">
              <SmartDarkButton
                label="Create Sales Return"
                leftIcon="fa fa-undo"
                classList={["is-link"]}
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

export default Estimate;
