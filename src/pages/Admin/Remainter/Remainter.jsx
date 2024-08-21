import { useState } from "react";
import "./Remainter.css";
import { SmartDarkButton } from "dark_power25";
const Remainder = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [expenseWithGST, setExpenseWithGST] = useState(false);


  const handleSaveChangesClick = () => {
    console.log("Save Changes button clicked. Current state of expenseWithGST:", expenseWithGST);

  };

  const handleCheckboxChange = (e) => {
    setExpenseWithGST(e.target.checked);

  };



  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (

    <div className="card">
      <div className="px-3 py-3">
        <div className="columns">
          <div className="column">
            <p className="subtitle is-size-4">Reminder Settings</p>
            <p className="subtitle is-size-6">
            </p>
          </div>
          <div className="field mx-5 mt-1">
            <SmartDarkButton
              label="Save"
              leftIcon="fa fa-check"
              classList={["is-link "]}
              onClick={handleSaveChangesClick}
            />
          </div>


        </div>
        <div className="columns">
          <div className="column is-6">
            <div className="box" style={{ height: "100%" }}>
              <div className="is-flex is-justify-content-space-between">
                <div className="mt-2">Send billing SMS to Party</div>
                <div className="is-flex">
                  <div className="column">
                    <div className="field">
                      <input
                        id="switchRoundedInfo"
                        type="checkbox"
                        name="switchRoundedInfoe"
                        className="switch  is-rounded is-info"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="switchRoundedInfo"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="box" style={{ height: "100%" }}>
              <div className="is-flex is-justify-content-space-between">
                <div className="mt-3">Get payment reminders on WhatsApp</div>
                <div className="is-flex">
                  <div className="column">
                    <div className="field">
                      <input
                        id="switchRoundedInfo1"
                        type="checkbox"
                        name="switchRoundedInfo1"
                        className="switch  is-rounded is-info"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="switchRoundedInfo1"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5>Get WhatsApp alerts when you have to collect payment from a customer</h5>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="box mx-2">

            <ul className="menu-list">
              <li>
                <div
                  className={`accordion ${activeAccordion === 1 ? "active" : ""}`}
                  onClick={() => handleAccordionClick(1)}
                >
                  TO PARTY (Reminders will be sent through SMS)
                </div>
                <div className={`accordion-content ${activeAccordion === 1 ? "active" : ""}`}>
                  <div className="columns">
                    <div className="column">
                      <p className="subtitle is-size-4">Sales Invoice</p>
                      <p className="subtitle is-size-6">
                        Get reminded to collect payments on time
                      </p>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>3 days before due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>On due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>On due date</label>
                        <input type="checkbox" onChange={handleCheckboxChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`accordion ${activeAccordion === 2 ? "active" : ""}`}
                  onClick={() => handleAccordionClick(2)}
                >
                  TO YOU (Reminders will be sent on mobile app and WhatsApp)
                </div>
                <div className={`accordion-content ${activeAccordion === 2 ? "active" : ""}`}>
                  <div className="columns">
                    <div className="column">
                      <p className="subtitle is-size-4">Sales Invoice</p>
                      <p className="subtitle is-size-6">
                        Get reminded to collect payments on time
                      </p>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>3 days before due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>On due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className="column">
                      <p className="subtitle is-size-4">Low Stock</p>
                      <p className="subtitle is-size-6">
                        Get reminded to buy stock
                      </p>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>When stock is below low stock level</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <p className="subtitle is-size-4">Purchase Invoice</p>
                      <p className="subtitle is-size-6">
                        Get reminded to collect payments on time
                      </p>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>3 days before due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>On due date</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className="column">
                      <p className="subtitle is-size-4">Daily Summary</p>
                      <p className="subtitle is-size-6">
                        Get daily updates about
                      </p>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>Outstanding Collections and Payments</label>
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="is-flex is-justify-content-space-between px-3 py-3">
                        <label>Yesterday’s Sales</label>
                        <input type="checkbox" onChange={handleCheckboxChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Remainder;
