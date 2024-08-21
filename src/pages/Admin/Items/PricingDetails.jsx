import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { VENDOR_URL } from "../../../api/AdminApi/VendorApi";
// import PropTypes from "prop-types";

const PricingDetails = ({ loadTableData, dataIn }) => {
  const { closeModal } = useSiteContext();
  const [formData, setFormData] = useState(dataIn || {});

  
  const {
    customerName: initialcustomerName = "",
    phoneNumber: initialPhoneNumber = "",
    email: initialEmail = "",
    status: initialStatus = "",
    address: initialAddress = "",
    pincode: initialPincode = "",
  } = dataIn || {};

  const [customerName, setCustomerName] = useState(initialcustomerName);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState(initialStatus);
  const [address, setAddress] = useState(initialAddress);
  const [pincode, setPincode] = useState(initialPincode);
  const [errors, setErrors] = useState({});

  
  
  const [showRemarks, setShowRemarks] = useState(false);

  const toggleRemarks = () => {
    setShowRemarks(!showRemarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!customerName) errors.customerName = "sales price is required";
    if (!phoneNumber) errors.phoneNumber = "purchase price is required";
    if (!email) errors.email = "gst is required";
    if (!status) errors.status = "wholesale price is required";
    if (!address) errors.address = "wholesale quantiy is required";
    if (!pincode) errors.pincode = "Pincode is reqiured";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const requestData = {
      customer_name: customerName,
      phone_no: phoneNumber,
      email,
      status,
      address,
      pincode,
    };

    const url = dataIn
      ? VENDOR_URL.INSERT + "/" + dataIn.id
      : VENDOR_URL.UPDATE;
    const method = dataIn ? "put" : "post";

    axios({
      method,
      url,
      data: requestData,
    })
      .then(() => {
        toast.success(
          dataIn
            ? "Customer Updated Successfully"
            : "Customer Added Successfully"
        );
        clearForm();
        closeModal();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const clearForm = () => {
    setCustomerName("");
    setPhoneNumber("");
    setEmail("");
    setStatus("");
    setAddress("");
    setPincode("");
    setErrors({});
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setErrors({ ...errors, phoneNumber: "" });
    } else {
      setErrors({ ...errors, phoneNumber: "Phone number must be numeric" });
    }
  };
  return (
  
      <div>
      
      
      <div>
        <form onSubmit={handleSubmit}>

        <div  style={{marginLeft:'97%'}}className="is-size-5 mt-3">
          <SmartDarkButton
            type="icon"
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
            onClick={closeModal}
          /> 
         </div>
          <div className="columns">
            {/* sales price */}
            <div className="column is-4">
              <div className="field">
                <label className="label">sales price</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.customerName && "is-danger"}`}
                    placeholder="Enter sales price"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  
                </div>
                {errors.customerName && (
                  <p className="help is-danger">{errors.customerName}</p>
                )}
              </div>
            </div>

           
           
            {/* Purchase price */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Purchase price</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.phoneNumber && "is-danger"}`}
                    placeholder="Enter purchase price"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    pattern="\d*"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="help is-danger">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* GST Tax Rate% */}
            <div className="column is-4">

            <div className="field ml-6">
                  <label className="label ">GST Tax Rate (%)</label>
                  <div className="control">
                    <select
                   
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`input ${errors.email && "is-danger"}`}
                    >
                      <option value="">None</option>
                      <option value="5">5%</option>
                      <option value="12">12%</option>
                      <option value="18">18%</option>
                      <option value="28">28%</option>
                    </select>
                  </div>
                  {errors.email && <p className="help is-danger">{errors.email}</p>}
                </div>
            </div> 
          </div>
          <div className='mt-4 has-text-link is-clickable' onClick={toggleRemarks}>
        + Wholesale Rate
      </div> 
      {showRemarks && (
          <div className="columns">
            {/* sales price */}

            <div className="column is-6">
              <div className="field">
                <label className="label">Wholesale price</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.status && "is-danger"}`}
                    placeholder="Enter wholesale price"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  
                </div>
                {errors.status && (
                  <p className="help is-danger">{errors.status}</p>
                )}
              </div>
            </div>
           
            {/* sales price */}
           
            <div className="column is-6">
              <div className="field">
                <label className="label">wholesale Quantity</label>
                <div className="control has-icons-left"> 
                  <input
                    type="text"
                    className={`input ${errors.address && "is-danger"}`}
                    placeholder="Enter wholesale Quantity"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  
                </div>
                {errors.address && (
                  <p className="help is-danger">{errors.address}</p>
                )}
              </div>
            </div>
            </div>
            )}

            
          <div className="column is-4 is-offset-5">
            <div className="is-flex is-justify-content-flex-center">
              <SmartDarkButton
                label="Clear"
                classList={["button is-danger"]}
                onClick={closeModal}
              />
              <SmartDarkButton
                label={dataIn ? "Update" : "Submit"}
                classList={["button is-info ml-3"]}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  
  );
}

export default PricingDetails




