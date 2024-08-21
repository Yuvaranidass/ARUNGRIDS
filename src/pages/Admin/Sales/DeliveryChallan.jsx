// 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { SmartDarkTable } from 'dark_power25';

// const Estimate = () => {

//     const Columns = [
//       { title: 'Date', index: 'date' },
//       { title: 'Delivery Challan Number', index: 'delivery_challan_no' },
//       { title: 'Party Name', index: 'party_name' },
//       { title: 'Amount', index: 'amount' },
//       { title: 'Status', index: 'status' },
//     ];

//     const data = [
//       {
//         date: '1/1/2024',
//         delivery_challan_no: '1',
//         party_name: 'barath',
//         amount: '20000',
//         status: 'Recieved',
//       },
//       {
//         date: '2/1/2024',
//         delivery_challan_no: '2',
//         party_name: 'balaji',
//         amount: '100',
//         status: 'Non-Recieved',
//       },
//     ]
//   return (
//     <div className='box'>
//       <div className='subtitle'>
//        Delivery Challan
//       </div>
//       <div className='columns'>
//         <div className='column is-10'>
//       <div className='is-flex'>
//         <div className="field">
//           <div className="control has-icons-left">
//             <input type="search" className="input" placeholder="Search"/>
//             <span className="icon is-left">
//               <FontAwesomeIcon icon={faSearch} />
//             </span>
//           </div>
//         </div>

//         <div className='select ml-3 mr-3'>
//           <select>
//             <option value="">Today</option>
//             <option value="">Yesterday</option>
//             <option value="">This Week</option>
//             <option value="">Last Week</option>
//             <option value="">This Month</option>
//             <option value="">Last Month</option>
//             <option value="">This Year</option>
//             <option value="">Last Year</option>
//           </select>
//         </div>
//         <div className='select'>
//           <select>
//             <option value="">Show All Challans</option>
//             <option value="">Show Open Challans</option>
//             <option value="">Show Closed Challans</option>
//           </select>
//         </div>
//       </div>
//     </div>
//     <div className='column is-2'>
//         <button className='button is-info'>Create Quotation</button>
//     </div>
//     </div>

//     <div>
//         <SmartDarkTable columns={Columns} data={data} />
//     </div>
//     </div>
//   );
// }

// export default Estimate;

import { useState } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";

// import PropTypes from "prop-types";
import { useSiteContext } from "../../../context/SiteDarkProvider";
// import Expense from '../Expenses/Expense';
import DeliveryPopup from "../CreateSalesInvoice/DeliveryPopup";

function DeliveryChallan() {
  const { openModal } = useSiteContext();
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: "",
    expenseNumber: "",
    partyName: "",
    category: "",
    amount: "",
  });

  // const openMyModal =() =>{
  //   let modalObject={
  //      body:<CreateSalesInvoice/>,
  //      modalClass:"smart-modal-80 mt-6",
  //   };
  //   openModal(modalObject);
  // };

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
    { title: "Delivery Challan Number", index: "delivery_challan_no" },
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
      body: <DeliveryPopup />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div className="  px-3 py-3  ">
      <div className="subtitle has-text-weight-bold">DELIVERY CHALLAN</div>
      <form onSubmit={handleSubmit}>
        <div className="card smart-admin-container py-2 px-2">
          <div className="columns my-2">
          <div className="column is-5">
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
            <div className="column is-2">
            <div className="field ">
              <div className="control is-rounded ml-2">
                <div className="select">
                  <div className="select">
                    <select>
                      <option value="">Show All Challans</option>
                      <option value="">Show Open Challans</option>
                      <option value="">Show Closed Challans</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="column is-3">
            <SmartDarkButton
              label="Create Delivery Challan"
              leftIcon="fa fa-ambulance"
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

export default DeliveryChallan;
