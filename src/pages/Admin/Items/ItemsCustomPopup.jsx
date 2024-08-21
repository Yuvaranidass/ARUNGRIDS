import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import AddCustomField from "./AddCustomField";

const ItemsCustomPopup = () => {
  const [isBatchingEnabled, setIsBatchingEnabled] = useState(false);
  const [isAlertEnabled, setIsAlertEnabled] = useState(false);
  const [Mrp, setMrp] = useState(false);
  const { openModal, closeModal } = useSiteContext();
  const [Alert, setAlert] = useState(false);
  const [Whole, setWhole] = useState(false);
  const [check, setCheck] = useState(false);


  // Define a handler for click events

  const openMyModal = () => {
    let modalObject = {
      body: <AddCustomField />,
      modalClass: "smart-modal-50 mt-6",
    };
    openModal(modalObject);
  };

  return (
    <div>
      <div className="columns">
        <div className="column is-6">
          <b>ITEM SETTINGS</b>
        </div>
        <div className="column is-6">
          <div className="is-size-4" style={{ marginLeft: "230px" }}>
            <SmartDarkButton
              type="icon"
              leftIcon="fa fa-times"
              classList={["is-clickable"]}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-5">
          <b>Stock Value Calculation</b>
        </div>
        <div className="column is-6">
          <select className="input ml-6" style={{ width: 250 }}>
            <option value="">Puchase Price</option>
            <option value="">Sales Price</option>
          </select>
        </div>
      </div>
      <hr />

      <div className="columns">
        <div className="column is-6">
          <b>Enable Item Batching & Expiry</b>
          <p>Keep track of multiple prices, expiry, and manufacturing dates.</p>
        </div>
        <div className="column is-6">
          <div className="field" style={{ marginLeft: "200px" }}>
            <input
              id="batchingSwitch"
              type="checkbox"
              name="batchingSwitch"
              className="switch is-rounded is-link"
              checked={isBatchingEnabled}
              onChange={() => setIsBatchingEnabled(!isBatchingEnabled)}
            />
            <label htmlFor="batchingSwitch"></label>
          </div>
        </div>
      </div>

      {/* Conditionally render content for Batching */}
      {isBatchingEnabled && (
        <div className="columns">
          <div className="column is-6">
            <b>Alert Before Expiry</b>
          </div>
          <div className="column is-6">
            <div className="field" style={{ marginLeft: "200px" }}>
              <input
                id="alertSwitch"
                type="checkbox"
                name="alertSwitch"
                className="switch is-rounded is-link"
                checked={isAlertEnabled}
                onChange={() => setIsAlertEnabled(!isAlertEnabled)}
              />
              <label htmlFor="alertSwitch"></label>
            </div>
          </div>
        </div>
      )}

      {/* Section for "Alert Before Expiry" */}

      {/* Conditionally render content for Alert */}
      {isAlertEnabled && (
        <div className="columns">
          <div className="column is-5">
            <p>
              We will notify you the below selected days before your batch
              expires
            </p>
          </div>
          <div className="column is-6">
            <select className="input ml-6" style={{ width: 250 }}>
              <option value="">Days</option>
              <option value="">30 days</option>
              <option value="">60 days</option>
              <option value="">90 days</option>
            </select>
          </div>
        </div>
      )}

      <hr />
      <div className="columns">
        <div className="column is-6">
          <b>Enable Serial Number/IMEI</b>
          <p>
            Manage your items by Serial Number or IMEI and track them easily
          </p>
        </div>
        <div className="column is-6">
          <div className="field" style={{ marginLeft: 200 }}>
            <input
              id="imeiSwitch"
              type="checkbox"
              name="imeiSwitch"
              className="switch is-rounded is-link"
              checked={Alert}
              onChange={() => setAlert(!Alert)}
            />
            <label htmlFor="imeiSwitch"></label>
          </div>
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-6">
          <b>MRP</b>
        </div>
        <div className="column is-6">
          <div className="field" style={{ marginLeft: 200 }}>
          <input
              id="mrpSwitch"
              type="checkbox"
              name="mrpSwitch"
              className="switch is-rounded is-link"
              checked={Mrp}
              onChange={() => setMrp(!Mrp)}
            />
            <label htmlFor="mrpSwitch"></label>
          </div>
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-6">
          <b>Wholesale Price</b>
        </div>
        <div className="column is-6">
          <div className="field" style={{ marginLeft: 200 }}>
          <input
              id="wholeSwitch"
              type="checkbox"
              name="wholeSwitch"
              className="switch is-rounded is-link"
              checked={Whole}
              onChange={() => setWhole(!Whole)}
            />
            <label htmlFor="wholeSwitch"></label>
          </div>
        </div>
      </div>
      <hr />
      <div className="is-clickable has-text-link" onClick={openMyModal}>
        + Add custom Fields
      </div>
      <hr />
      <div className="columns is-flex is-justify-content-end">
        <SmartDarkButton
          label="Clear"
          classList={["is-light mr-5"]}
          onClick={closeModal}
        />
        <SmartDarkButton label="Save" classList={["is-link"]} />
      </div>
    </div>
  );
};

export default ItemsCustomPopup;
