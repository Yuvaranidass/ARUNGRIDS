import { useState } from "react";
import Map from "../../themes/Map-Page/Map";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!name) validationErrors.name = "Name is required";
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!subject) validationErrors.subject = "Subject is required";
    if (!message) validationErrors.message = "Message is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", { name, email, subject, message });
    }
  };
  return (
    <>
      <div className="section">
        <p className="title is-4 is-size-5-mobile has-text-centered-mobile">
          Contact Us
        </p>
        <div className="columns mx-1 mt-5">
          <div className="column is-4">
            <Map />
            <div className="label is-flex smart-contact-loc">
              <p className="mt-2 icon is-size-4 mx-2">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </p>
              <p>
                No.5 & 6, OMR Rajiv Gandhi Salai, Navalur, Chennai - 603103
                (Near Navalur Bus Stop)
              </p>
            </div>
            <div className="label is-flex smart-contact-loc">
              <p className="mt-2 icon is-size-4 mx-2">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </p>
              <p className="mt-2">7048404674</p>
            </div>
            <div className="label is-flex smart-contact-loc">
              <p className="mt-2 icon is-size-4 mx-3">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </p>
              <p className="mt-2">jayamprinters@gmail.com</p>
            </div>
          </div>
          <div className="column is-8">
            <form onSubmit={handleSubmit}>
              <div className="columns">
                <div className="column">
                  <p className="label">Your Name</p>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${errors.name ? "is-danger" : ""}`}
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    {errors.name && (
                      <p className="help is-danger">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="column">
                  <p className="label">E-mail</p>
                  <div className="control has-icons-left">
                    <input
                      className={`input ${errors.email ? "is-danger" : ""}`}
                      type="email"
                      placeholder="Enter Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
              <p className="label">Subject</p>
              <div className="control has-icons-left">
                <input
                  className={`input ${errors.subject ? "is-danger" : ""}`}
                  type="text"
                  placeholder="Enter Your Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-exclamation" aria-hidden="true"></i>
                </span>
                {errors.subject && (
                  <p className="help is-danger">{errors.subject}</p>
                )}
              </div>
              <div className="mt-2">
                <p className="label">Message</p>
                <textarea
                  className={`textarea ${errors.message ? "is-danger" : ""}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                  <p className="help is-danger">{errors.message}</p>
                )}
                <button
                  className={`button is-fullwidth is-rounded mt-3 ${
                    Object.keys(errors).length === 0 ? "is-link" : "is-danger"
                  }`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
