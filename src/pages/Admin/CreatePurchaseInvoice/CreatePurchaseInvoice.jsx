import React, { useState, useEffect } from "react";
import "./CreatePurchaseInvoice.css";
import "bulma/css/bulma.min.css";
import { SmartDarkTable } from "dark_power25";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import {
  faPercent,
  faRupeeSign,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import PurchaseInvoicePopup from "./PurchaseInvoicePopup";

function CreatePurchaseInvoice() {
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("10");
  const [dueDate, setDueDate] = useState("");
  const [selectedParty, setSelectedParty] = useState("");
  const [popup, setPopup] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const { openMyModal } = useSiteContext();

  const { openModal, closeModal } = useSiteContext();

  const createitem = () => {
    let modalObject = {
      body: <PurchaseInvoicePopup />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  useEffect(() => {
    let lastInvoiceNumber = localStorage.getItem("invoiceNumber");
    if (!lastInvoiceNumber) {
      lastInvoiceNumber = 1;
    } else {
      lastInvoiceNumber = parseInt(lastInvoiceNumber);
    }

    setInvoiceNumber(lastInvoiceNumber);

    const nextInvoiceNumber = lastInvoiceNumber + 1;
    localStorage.setItem("invoiceNumber", nextInvoiceNumber);

    const currentDate = new Date();
    setInvoiceDate(currentDate.toLocaleDateString());

    let newDueDate = new Date();
    newDueDate.setDate(currentDate.getDate() + parseInt(paymentTerms));
    setDueDate(newDueDate.toLocaleDateString());
  }, [paymentTerms]);

  useEffect(() => {
    const base = parseFloat(baseAmount) || 0;
    const tax = parseFloat(taxAmount) || 0;
    const discount = parseFloat(discountAmount) || 0;

    const calculatedTax = (base * tax) / 100;
    const total = base + calculatedTax - discount;
    setTotalAmount(total);
  }, [baseAmount, taxAmount, discountAmount]);

  const handlePaymentTermsChange = (e) => {
    const termDays = e.target.value;
    setPaymentTerms(termDays);

    let newDueDate = new Date();
    newDueDate.setDate(new Date().getDate() + parseInt(termDays));
    setDueDate(newDueDate.toLocaleDateString());
  };

  // const handleImageUpload = (event) => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //         const img = document.getElementById('imagePreview');
  //         const addPartyText = document.getElementById('addPartyText');

  //         if (file) {
  //             img.src = e.target.result;
  //             img.style.display = 'block';
  //             addPartyText.style.display = 'none';
  //         } else {
  //             img.style.display = 'none';
  //             addPartyText.style.display = 'block';
  //             img.src = '';
  //         }
  //     };
  //     reader.readAsDataURL(file);

  //     event.target.value = '';
  // };
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSelect = () => {
    const selectElement = document.getElementById("partySelect");
    const addPartyDiv = document.getElementById("addPartyDiv");

    if (
      selectElement.style.display === "none" ||
      selectElement.style.display === ""
    ) {
      selectElement.style.display = "block";
      addPartyDiv.style.display = "none";
    } else {
      selectElement.style.display = "none";
      addPartyDiv.style.display = "flex";
    }
  };

  const handlePartySelect = (e) => {
    const selected = e.target.value;
    setSelectedParty(selected);
  };

  const handlePopup = (popupId) => {
    setPopup(popup === popupId ? "" : popupId);
  };

  const closePopup = () => {
    setPopup("");
  };

  const Columns = [
    {
      title: "No",
      index: "no",
    },
    {
      title: "Items/Services",
      index: "item_service",
    },
    {
      title: "HSN/ SAC",
      index: "hsn_sac",
    },
    {
      title: "DISCOUNT",
      index: "discount",
    },
    {
      title: "TAX",
      index: "tax",
    },
    {
      title: "AMOUNT (₹)",
      index: "amount",
    },
  ];

  const data = [
    {
      no: "1",
      item_service: "12345",
      hsn_sac: "12345",
      discount: "12345",
      tax: "12345",
      amount: "12345",
    },
  ];

  const [showTextarea, setShowTextarea] = useState(false);
  const [note, setNote] = useState("");

  const handleAddNoteClick = () => {
    setShowTextarea(true);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div className="px-4">
      {/* title */}
      <div className="is-flex is-justify-content-space-between">
        <div className="subtitle">
          <span className="icon is-clickable">
            <FontAwesomeIcon icon={faArrowLeft} onClick={closeModal} />
          </span>
          Create Purchase Invoice
        </div>
        <div>
          <button className="button is-info">Save Purchase Invoice</button>
        </div>
      </div>

      {/* company name */}
      <div className="ml-3">
        <div className="is-flex">
          {/* <div className="box addimage"> */}
          {/* <span id="addPartyText">+ Add Profile</span> */}
          {/* </div> */}
          <div className="ml-5">
            <div className="subtitle mt-5 mb-5">
              <b>Jayam Printers</b>
            </div>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="box">
        <div className="subtitle">
          <b>
            <center>Bill To</center>
          </b>
        </div>
        <hr />
        <div className="columns align-items-center">
          <div className="column is-7">
            <div className="columns">
              <div className="column is-6">
                <div className="mt-4">
                Purchase Invoice No:{invoiceNumber}
                </div>
                <div className="mt-5"> Purchase Invoice Date:  {invoiceDate}</div>
              </div>
              <div className="column is-6">
                <div className="mt-3 is-flex">
                  Payment Terms:
                  <input
                    type="text"
                    className="input"
                    value={paymentTerms}
                    onChange={handlePaymentTermsChange}
                  />
                </div>
                <div className="mt-3">Due Date: {dueDate}</div>
              </div>
            </div>
          </div>
          <div className="column is-5 border-left">
            <div className="adddata" id="addPartyDiv" onClick={openMyModal}>
              + Add Party
            </div>
            <div>
              <select
                className="select input op"
                id="partySelect"
                onChange={handlePartySelect}
              >
                <option value="">Select dropdown</option>
                <option value="barath">barath</option>
                <option value="balaji">balaji</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container card"
        id="infoContainer"
        style={{ display: selectedParty ? "block" : "none" }}
      >
        <div className="is-flex is-justify-content-space-around">
          <div className="section">
            <button
              className="button is-info"
              onClick={() => handlePopup("changePartyPopup")}
            >
              Change Party
            </button>
            <div className="info mt-5">
              <strong>{selectedParty}</strong>
              <br />
              <span>
                Phone Number:{" "}
                {selectedParty === "barath" ? "1234567890" : "0987654321"}
              </span>
            </div>
          </div>
          <div className="section">
            <button
              className="button is-info"
              onClick={() => handlePopup("changeShippingAddressPopup")}
            >
              Change Shipping Address
            </button>
            <div className="info mt-5">
              <strong>{selectedParty}</strong>
              <br />
              <span>
                Phone Number:{" "}
                {selectedParty === "barath" ? "1234567890" : "0987654321"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <div
        className={`popup ${
          popup === "changeShippingAddressPopup" ? "show" : ""
        }`}
        id="changeShippingAddressPopup"
      >
        <div className="popup-content">
          <h2 className="title is-4">Change Shipping Address</h2>
          <form>
            <div className="field">
              <label className="label">Street Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input className="input" type="text" placeholder="City" />
              </div>
            </div>
            <div className="field">
              <label className="label">State</label>
              <div className="control">
                <input className="input" type="text" placeholder="State" />
              </div>
            </div>
            <div className="field">
              <label className="label">Postal Code</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Save</button>
              </div>
              <div className="control">
                <button
                  className="button is-danger"
                  type="button"
                  onClick={closePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <SmartDarkTable columns={Columns} data={data} />
        <div className="addproperty" onClick={createitem}>
          +Add Item
        </div>
      </div>
      <div className="columns columns-equal-height mt-3">
        <div className="column is-6 column-equal-height">
          <div className="box box-equal-height">
            <p
              className="has-text-link"
              onClick={handleAddNoteClick}
              style={{ cursor: "pointer" }}
            >
              +Add Note
            </p>
            {showTextarea && (
              <textarea
                className="textarea"
                value={note}
                onChange={handleNoteChange}
                placeholder="Write your note here..."
                style={{ width: "100%", height: "100%", marginTop: "10px" }}
              />
            )}
          </div>
        </div>
        <div className="column is-6 column-equal-height">
          <div className="box box-equal-height">
            <div
              className="is-divider has-text-weight-bold"
              data-content="Taxable Amount"
            ></div>
            <div className="columns">
              <div className="column is-4">Tax Amount</div>
              <div className="column is-4">
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className="input"
                    value={taxAmount}
                    onChange={(e) => setTaxAmount(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faPercent} />
                  </span>
                </div>
              </div>
              <p className="mt-4 is-size-4">/</p>
              <div className="column is-4">
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className="input"
                    value={baseAmount}
                    onChange={(e) => setBaseAmount(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faRupeeSign} />
                  </span>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <select className="select input">
                  <option value="">+Add</option>
                  <option value="">-Reduce</option>
                </select>
              </div>
              <div className="column is-6">
                <input type="number" className="input" />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">Total Amount:</div>
              <div className="column is-6">
                <input type="number" className="input" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p>Amount Paid:</p>
              </div>
              <div className="column">
                <input type="number" className="input" />
              </div>
              <div className="column">
                <select className="select input">
                  <option value="">cash</option>
                  <option value="">Bank</option>
                  <option value="">Cheque</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="columns has-text-success">
              <div className="column">Balance Amount</div>
              <div className="column">$0</div>
            </div>
            <hr />
            <div
              className={`addproperty ${imagePreview ? "border-hidden" : ""}`}
              onClick={() => document.getElementById("imageUpload").click()}
            >
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              {!imagePreview && (
                <span
                  id="addPartyText"
                  style={{ marginBottom: "10px", fontSize: "16px" }}
                >
                  +Add Signature
                </span>
              )}
              {imagePreview && (
                <img
                  id="imagePreview"
                  src={imagePreview}
                  alt="Uploaded Image Preview"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePurchaseInvoice;

CreatePurchaseInvoice.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};
