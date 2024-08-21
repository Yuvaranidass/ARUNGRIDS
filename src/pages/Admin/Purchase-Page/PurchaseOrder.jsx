import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import PropTypes from "prop-types";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import PurchaseOrderInvoice from '../CreatePurchaseInvoice/PurchaseOrderInvoice';

function PurchaseOrder() {
  const { openModal } = useSiteContext();
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: '',
    expenseNumber: '',
    partyName: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, form]);
    setForm({
      date: '',
      expenseNumber: '',
      partyName: '',
      category: '',
      amount: '',
    });
  };
  const columns = [
    {
      title: "Date",
      type: "Date",
    },
    {
      title: "Purchase Order Number",
      index: "Purchase Order Number",
    },
    {
      title: "Party Name",
      index: "party Name",
    },
    {
      title: "Valid Till",
      index: "Valid Till",
    },
    {
      title: "Amount",
      index: "Amount",
    },
    {
      title: "Status",
      index: "status",
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
      body: <PurchaseOrderInvoice />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (

    <div className=" has-background-white px-4 py-3 ">
        <div className="subtitle has-text-weight-bold">PURCHASE ORDER</div>
      <div className="card smart-admin-container py-2 px-2 ">
        <form onSubmit={handleSubmit}>
          <div className='columns my-2'>
              <div className='column is-7'>
                <div className="control  has-icons-left">
                  <input
                    className="input is-rounded "
                    type="text"
                    name="search"
                    placeholder="Search"
                    // value={search}
                    onChange={handleChange}
                  />
                  <span className="icon is-left">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div className='column is-2 '>
                <div className="field">
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
              <div className='column is-3'>
                <SmartDarkButton
                  label="create Purchase Order"
                  leftIcon="fa fa-shopping-cart"
                  classList={["is-link "]}
                  onClick={() => openMyModal()}
                />
              </div>
          </div>
        </form>
        <SmartDarkTable columns={columns} data={data} tableProps={{
          className: "admin-table-layout is-hoverable is-clickable has-text-left",
        }} />
      </div>
    </div>

  );
}

export default PurchaseOrder;

// RecordPaymentOut.propTypes = {
//     loadTableData: PropTypes.func.isRequired,
//     dataIn: PropTypes.shape({
//         id: PropTypes.number,
//     }),
// };