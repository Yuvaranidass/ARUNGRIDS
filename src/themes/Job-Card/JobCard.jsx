import { useState } from "react"; // Import useState from React
import { AppLogo } from "../../services/ImageServices";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import "./JobCard.css";

const JobCard = () => {
  const [first, setFirst] = useState("");
  const [rate, setRate] = useState("");
  const [advance, setAdvance] = useState("");
  const [balance, setBalance] = useState("");
  const [apAdvance, setApAdvance] = useState("");
  const [dtp, setDtp] = useState("");
  const [proof, setProof] = useState("");
  const [printing, setPrinting] = useState("");
  const [binding, setBinding] = useState("");
  const [packing, setPacking] = useState("");
  const [delivery, setDelivery] = useState("");

  const total = [
    first,
    rate,
    advance,
    balance,
    apAdvance,
    dtp,
    proof,
    printing,
    binding,
    packing,
    delivery,
  ].reduce((acc, val) => acc + (Number(val) || 0), 0);

  const Range = [
    {
      name: "1 Copy",
      value: "1 Copy",
    },
    {
      name: "2 Copy",
      value: "2 Copy",
    },
    {
      name: "3 Copy",
      value: "3 Copy",
    },
    {
      name: "4 Copy",
      value: "4 Copy",
    },
    {
      name: "5 Copy",
      value: "5 Copy",
    },
  ];

  const Printing = [
    {
      name: "1 St Copy",
      value: "1 St Copy",
    },
    {
      name: "2 St Copy",
      value: "2 St Copy",
    },
    {
      name: "3 St Copy",
      value: "3 St Copy",
    },
    {
      name: "4 St Copy",
      value: "4 St Copy",
    },
    {
      name: "5 St Copy",
      value: "5 St Copy",
    },
  ];

  const printingcolor = [
    {
      name: "Royal Blue",
      value: "Royal Blue",
    },
    {
      name: "Pecock Blue",
      value: "Pecock Blue",
    },
    {
      name: "Green",
      value: "Green",
    },
    {
      name: "Red",
      value: "Red",
    },
    {
      name: "Mejantha",
      value: "Mejantha",
    },
    {
      name: "Merun",
      value: "Merun",
    },
    {
      name: "Brown",
      value: "Brown",
    },
    {
      name: "Black",
      value: "Black",
    },
  ];
  const margin = [
    {
      name: "Center",
      value: "Center",
    },
    {
      name: "Top",
      value: "Top",
    },
    {
      name: "Right",
      value: "Right",
    },
    {
      name: "Left",
      value: "Left",
    },
  ];
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(false);

  const validateInput = (e) => {
    setMobileNumber(e.target.value);
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      alert("Valid mobile number");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className="section">
        <div className="title is-4 is-size-5-mobile is-underlined has-text-centered-mobile">
          JOB CARD
        </div>
        <div className="columns">
          <div className="column mt-5 is-9 has-text-centered-mobile">
            <div className="title is-5 is-size-6-mobile">
              Sri Jayam Printers
            </div>
            <div className="subtitle is-6 is-size-7-mobile">Navalur-600130</div>
            <img
              src={AppLogo}
              alt="Applogo"
              className="image is-128x128 smart-job-logo"
            />
          </div>
          <div className="column">
            <div className="field">
              <label className="label has-text-link">No:</label>
              <div className="control">
                <input type="text" className="input" placeholder="Enter No" />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-link">DC No:</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter DC No"
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-link">Bill No:</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Bill No"
                />
              </div>
            </div>
          </div>
        </div>
        {/* job details */}
        <div
          className="is-divider has-text-weight-bold"
          data-content="Job Details"
        ></div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label has-text-link">Party Name:</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Party Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-link">Mobile Number</label>
              <div className="control">
                <input
                  type="text"
                  className={`input ${error ? "is-danger" : ""}`}
                  value={mobileNumber}
                  onChange={validateInput}
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  minLength={10}
                />
              </div>
              {error && (
                <p className="help is-danger">
                  Please enter a 10-digit mobile number.
                </p>
              )}
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label has-text-link">Job Name:</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Job Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-link">Size:</label>
              <div className="control">
                <input type="text" className="input" placeholder="Enter Size" />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label has-text-link">Date:</label>
              <div className="control">
                <input type="date" className="input" />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-link">Time:</label>
              <div className="control">
                <input type="time" className="input" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="is-divider has-text-weight-bold"
          data-content="Type of printing"
        ></div>
        <div className="is-flex is-justify-content-space-between smart-jobcard-checkbox">
          {[
            "Offset",
            "Screen",
            "Multi Colour",
            "Xerox",
            "B/W Printout",
            "Colour Printout",
          ].map((type) => (
            <div className="is-flex ml-4" key={type}>
              <input type="checkbox" className="checkbox mx-1" />
              <p>{type}</p>
            </div>
          ))}
        </div>
        <div
          className="is-divider has-text-weight-bold"
          data-content="Date and Time"
        ></div>
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">Proff Date-Time:</label>
              <div className="control">
                <input type="datetime-local" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">Delivery Date-Time:</label>
              <div className="control">
                <input type="datetime-local" className="input" />
              </div>
            </div>
          </div>
        </div>
        {/* Paper Details */}
        <div
          className="is-divider has-text-weight-bold"
          data-content="Paper Details"
        ></div>
        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Range:</label>
              <div className="control has-icons-right">
                <select className="input select">
                  {Range.map((range) => (
                    <option key={range.name} value={range.name}>
                      {range.name}
                    </option>
                  ))}
                </select>
                <span className="icon is-small is-right">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Kgs:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Colour:</label>
              <div className="control">
                <input type="text" className="input" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Qty:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Cutting Size:</label>
              <div className="control">
                <input type="text" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Printing:</label>
              <div className="control has-icons-right">
                <select className="input select">
                  {Printing.map((printing) => (
                    <option key={printing.name} value={printing.name}>
                      {printing.name}
                    </option>
                  ))}
                </select>
                <span className="icon is-small is-right">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="is-divider has-text-weight-bold"
          data-content="Type of Margin Printing"
        ></div>
        <div className="columns">
          <div className="column">
            <label className="has-text-link">Printing Color:</label>
            <div className="control has-icons-right">
              <select className="input ">
                {printingcolor.map((color) => (
                  <option key={color.name} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="column">
            <label className="has-text-link">Margin:</label>
            <div className="control has-icons-right">
              <select className="input select">
                {margin.map((margin) => (
                  <option key={margin.name} value={margin.name}>
                    {margin.name}
                  </option>
                ))}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div
          className="is-divider has-text-weight-bold"
          data-content="Number Details"
        ></div>
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">Serial No Form-To:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">Book No Form-To:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="is-divider has-text-weight-bold"
          data-content="Job Details"
        ></div>
        <div className="is-flex is-justify-content-space-between smart-jobcard-checkbox">
          {[
            "1 st Proof",
            "2 nd Proof",
            "Proof Ok",
            "Tracing",
            "Master",
            "Screen",
            "Printing",
            "Binding",
            "Ready",
          ].map((type) => (
            <div className="is-flex ml-4" key={type}>
              <input type="checkbox" className="checkbox mx-1" />
              <p>{type}</p>
            </div>
          ))}
        </div>
        <div
          className="is-divider has-text-weight-bold"
          data-content="Dc and Bill No"
        ></div>
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">DC No:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-link">Bill No:</label>
              <div className="control">
                <input type="number" className="input" />
              </div>
            </div>
          </div>
        </div>
        {/* payment details */}
        <div
          className="is-divider has-text-weight-bold"
          data-content="Payment Details"
        ></div>
        <div className="columns">
          <div className="column">
            <label className="label has-text-link">1 St:</label>
            <input
              type="number"
              className="input"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Rate:</label>
            <input
              type="number"
              className="input"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Advance:</label>
            <input
              type="number"
              className="input"
              value={advance}
              onChange={(e) => setAdvance(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Balance:</label>
            <input
              type="number"
              className="input"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label className="label has-text-link">A.P.Advance:</label>
            <input
              type="number"
              className="input"
              value={apAdvance}
              onChange={(e) => setApAdvance(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">D.T.P:</label>
            <input
              type="number"
              className="input"
              value={dtp}
              onChange={(e) => setDtp(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Proof:</label>
            <input
              type="number"
              className="input"
              value={proof}
              onChange={(e) => setProof(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Printing:</label>
            <input
              type="number"
              className="input"
              value={printing}
              onChange={(e) => setPrinting(e.target.value)}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label className="label has-text-link">Binding:</label>
            <input
              type="number"
              className="input"
              value={binding}
              onChange={(e) => setBinding(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Packing:</label>
            <input
              type="number"
              className="input"
              value={packing}
              onChange={(e) => setPacking(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Delivery:</label>
            <input
              type="number"
              className="input"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            />
          </div>
          <div className="column">
            <label className="label has-text-link">Total:</label>
            <input type="number" className="input" value={total} readOnly />
          </div>
        </div>
      </div>
    </>
  );
};
export default JobCard;
