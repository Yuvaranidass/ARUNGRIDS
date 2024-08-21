import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import ExpensesItem from './ExpensesItem';
import PropTypes from "prop-types";

function ExpenseForm() {
  const { openModal, closeModal } = useSiteContext();
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
      title: "Item Name",
      type: "item_name",
    },
    {
      title: "HSN/SAC",
      index: "hsn_sac",
    },
    {
      title: "Price",
      index: "price",
    },
    {
      title: "Add",
      index: "add",
    },
  ];

  const data = [
    {
      item_name: "Friends Card",
      hsn_sac: "90",
      price: "006",
    },
  ];

  const openMyModal = () => {
    let modalObject = {
      body: <ExpensesItem loadTableData={handleSaveExpense} />,
      
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const handleSaveExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    closeModal();
  };

  return (
    <div className="px-4 py-3 ">
        <div className="subtitle has-text-weight-bold">Add Expense Items</div>
      <div className="card smart-admin-container py-2 px-2 ">
        <div className='columns my-2'>
            <div className='column is-9'>
              <div className="control  has-icons-left">
                <input
                  className="input is-rounded"
                  type="text"
                  name="search"
                  placeholder="Search "
                  // value={search}
                  onChange={handleChange}
                />
                <span className="icon is-left">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className='column is-3'>
            <SmartDarkButton
              label="Create New Item"
              leftIcon="fa fa-plus-circle"
              classList={["is-link "]}
              onClick={openMyModal}
            />
            </div>
          
        </div>
        <SmartDarkTable columns={columns} data={data} tableProps={{
          className: "admin-table-layout is-hoverable is-clickable has-text-left",
        }} />
        <div className='is-flex is-justify-content-end '>
          <SmartDarkButton
            label="Cancel"
            leftIcon="fas fa-times"
            classList={["is-white ml-3 mr-3 mb-6"]}
            onClick={closeModal}
          />
          <SmartDarkButton
            label="Save"
            leftIcon="fa fa-check"
            classList={["is-link ml-2 mr-3 mb-6"]}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
ExpenseForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
      id: PropTypes.number,
  }),
};

export default ExpenseForm;
