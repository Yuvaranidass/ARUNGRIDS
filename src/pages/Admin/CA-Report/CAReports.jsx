import { useState } from 'react';
import { useSiteContext } from "../../../context/SiteDarkProvider";
import { SmartDarkButton } from "dark_power25";
import CAReportsForm from "./CAReports-Form";

const CAReportsAdd = () => {
  const { openModal, closeModal } = useSiteContext();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const CAReportModal = () => {
    let modalObject = {
      body: (
        <CAReportsForm 
          onCancel={handleModalClose} 
        />
      ),
      modalClass: "smart-modal-60 mt-6",
    };
    openModal(modalObject);
  };

  const handleSwitchChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIsSwitchOn(true);
      CAReportModal();
    } else {
      // If switch is turned off, ensure modal is closed (if it was open)
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    closeModal();
    setIsSwitchOn(false); // Ensure the switch is turned off when the modal is closed
  };

  return (
    <div>
      <div className='box'>
        <div className="columns">
          <div className="column">
            <p className="title is-size-5">CA Reports Sharing</p>
            <p className="subtitle is-size-6">Automatically share reports with your CA every month</p>
          </div>
          <div className="field mx-5 mt-1">
            <SmartDarkButton
              label="Save"
              leftIcon="fa fa-check"
              classList={["is-link"]}
              onClick={handleModalClose}
            />
          </div>
        </div>
        <hr />
        <div className='App'>
          <div className='columns'>
            <div className='column'>
              <p className="subtitle is-size-5">Enable Sharing</p>
              <p className="subtitle is-size-6">Control the business reports sharing with your CA</p>
            </div>
            <div className='is-flex is-justify-content-space-between'>
              <div className='column'>
                <div className="field">
                  <input
                    id="switchRoundedInfo"
                    type="checkbox"
                    name="switchRoundedInfo"
                    className={`switch is-rounded ${isSwitchOn ? 'is-info' : 'is-grey'}`} // Conditional styling
                    checked={isSwitchOn}
                    onChange={handleSwitchChange}
                  />
                  <label htmlFor="switchRoundedInfo"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAReportsAdd;
