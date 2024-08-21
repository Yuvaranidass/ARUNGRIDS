import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SmartDarkButton, SmartDarkTable } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import ItemInventoryForm from "../Items/ItemInventoryForm";

const ReturnInvoicePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { openModal, closeModal } = useSiteContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const openMyModal = () => {
    let modalObject = {
      body: <ItemInventoryForm />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!searchQuery) formErrors.searchQuery = "Search query is required";
    // Add more field validations here if needed
    return formErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Perform save operation here
      setErrors({});
      closeModal(); // Close the modal after saving
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    setSearchQuery("");
    setErrors({});
    closeModal(); // Close the modal on cancel
  };

  const Columns = [
    { title: "PRODUCT NAME", index: "item_name" },
    { title: "PRODUCT CODE", index: "item_code" },
    { title: "SALES PRICE", index: "sales_price" },
    { title: "PURCHASE PRICE", index: "purchase_price" },
    { title: "CURRENT STOCK", index: "current_stock" },
    { title: "QUANTITY", index: "quantity" },
  ];

  const data = [
    {
      item_name: "item1",
      item_code: "code1",
      sales_price: "100",
      purchase_price: "200",
      current_stock: "300",
      quantity: "400",
    },
    {
      item_name: "item2",
      item_code: "code2",
      sales_price: "100",
      purchase_price: "200",
      current_stock: "300",
      quantity: "400",
    },
    {
      item_name: "item3",
      item_code: "code3",
      sales_price: "100",
      purchase_price: "200",
      current_stock: "300",
      quantity: "400",
    },
  ];

  return (
    <div className="">
      <div className="subtitle">Add Items</div>
      <hr />
      <div className="card smart-admin-container py-2 px-2 ">
        <div className="columns">
          <div className="column is-9">
            <div className="field mt-3">
              <div className="control  has-icons-left">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <span className="icon is-left">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                {errors.searchQuery && <p className="help is-danger">{errors.searchQuery}</p>}
              </div>
            </div>
          </div>
          <div className="column is-3">
            <SmartDarkButton
              label="Create New Product"
              leftIcon="fa fa-plus"
              classList={["is-link ml-2 my-3 is-justify-content-flex-end ml-6"]}
              onClick={openMyModal}
            />
          </div>
        </div>
        <div>
          <SmartDarkTable columns={Columns} data={data} tableProps={{
            className:
              "admin-table-layout is-hoverable is-clickable has-text-left mt-3",
          }} />
        </div>
        <div className="field is-grouped">
          <div>
            <SmartDarkButton
              label="Cancel"
              leftIcon="fa fa-times"
              classList={["is-danger has-text-white ml-2 my-3 mr-2"]}
              onClick={handleCancel}
            />
            <SmartDarkButton
              label="Submit"
              leftIcon="fa fa-check"
              classList={["is-link ml-2 my-3 mr-2"]}
              onClick={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnInvoicePopup;
