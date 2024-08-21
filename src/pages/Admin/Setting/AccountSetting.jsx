import { useState } from "react";
import "bulma/css/bulma.min.css"; // Import Bulma CSS
import { SmartDarkButton } from "dark_power25";

const AccountSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};

    if (!name) validationErrors.name = "Name is required";
    if (!email) validationErrors.email = "Email is required";
    if (!mobileNumber)
      validationErrors.mobileNumber = "Mobile Number is required";
    if (!referralCode)
      validationErrors.referralCode = "Referral Code is required";

    const mobileNumberPattern = /^[0-9]{10}$/;
    if (mobileNumber && !mobileNumberPattern.test(mobileNumber)) {
      validationErrors.mobileNumber = "Mobile Number must be 10 digits";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleApply = () => {
    if (validateForm()) {
      // Process form submission here
      console.log("Form submitted:", {
        name,
        email,
        mobileNumber,
        referralCode,
      });
      // Reset form fields
      setName("");
      setEmail("");
      setMobileNumber("");
      setReferralCode("");
      setErrors({});
    }
  };

  const handleCancel = () => {
    // Reset form fields and errors
    setName("");
    setEmail("");
    setMobileNumber("");
    setReferralCode("");
    setErrors({});
  };

  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Account Settings</h1>
          <form>
            <div className="columns">
              <div className="column">
                <div
                  className={`field ${errors.name ? "has-text-danger" : ""}`}
                >
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className={`input ${errors.name ? "is-danger" : ""}`}
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            name: "",
                          }));
                        }
                      }}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className={`field ${
                    errors.mobileNumber ? "has-text-danger" : ""
                  }`}
                >
                  <label className="label">Mobile Number</label>
                  <div className="control">
                    <input
                      className={`input ${
                        errors.mobileNumber ? "is-danger" : ""
                      }`}
                      type="text"
                      placeholder="Enter your mobile number"
                      value={mobileNumber}
                      pattern="\d{10}"
                      maxLength={10}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            mobileNumber: "",
                          }));
                        }
                      }}
                      required
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="help is-danger">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div
                  className={`field ${errors.email ? "has-text-danger" : ""}`}
                >
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className={`input ${errors.email ? "is-danger" : ""}`}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            email: "",
                          }));
                        }
                      }}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className={`field ${
                    errors.referralCode ? "has-text-danger" : ""
                  }`}
                >
                  <label className="label">Referral Code</label>
                  <div className="control">
                    <input
                      className={`input ${
                        errors.referralCode ? "is-danger" : ""
                      }`}
                      type="text"
                      placeholder="Enter Referral Code"
                      value={referralCode}
                      onChange={(e) => {
                        setReferralCode(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            referralCode: "",
                          }));
                        }
                      }}
                      required
                    />
                  </div>
                  {errors.referralCode && (
                    <p className="help is-danger">{errors.referralCode}</p>
                  )}
                </div>
              </div>
            </div>
          </form>
          <SmartDarkButton
            label="Apply"
            leftIcon="fa fa-check"
            classList={["is-info ml-2 my-3 mr-2"]}
            onClick={handleApply}
          />
          <SmartDarkButton
            label="Cancel"
            leftIcon="fa fa-times"
            classList={["is-danger has-text-white ml-2 my-3 mr-2"]}
            onClick={handleCancel}
          />
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
