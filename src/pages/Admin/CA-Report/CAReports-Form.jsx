import { SmartDarkButton } from "dark_power25";
import { useState } from "react";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import CAReports from "./CAReportsSharing";
const CAReportsForm = () => {
  const { openModal, closeModal } = useSiteContext();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailValue)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const openAddModal = () => {
    let modalObject = {
      body: <CAReports />,
      modalClass: "smart-modal-60 mt-6",
    };
    openModal(modalObject);
  };
  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">CA Reports</p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            onClick={closeModal}
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div className="field">
        <label className="label">CA Whatsapp Number</label>
        <div className="control">
          <input
            className="input"
            type="tel"
            placeholder="WhatsApp Number"
            pattern="\d{10}"
            title="Please enter exactly 10 digits"
            maxLength={10}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email input"
            value={email}
            onChange={validateEmail}
          />
        </div>
        {error && <p className="help is-danger">{error}</p>}
      </div>
      <footer className="">
        <div className="field mx-5 mt-1 py-6">
          <SmartDarkButton
            label="Add Your CA "
            leftIcon="fa fa-plus"
            classList={["is-link "]}
            onClick={openAddModal}
          />
          <SmartDarkButton
          label="Cancel"
          leftIcon="fa fa-times"
          classList={["is-white ml-3 mr-3 mb-6"]}
          onClick={closeModal}
          />
        </div>
      </footer>
    </div>
  )
}

export default CAReportsForm