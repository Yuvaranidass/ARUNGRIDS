/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import createAxiosInstance from "../../../services/axios";
import { CUSTOMER_URL } from "../../../api/AdminApi/VendorApi";

const CustomerForm = ({ dataIn }) => {
  const { closeModal, setLoading } = useSiteContext();
  const initialValues = {
    customerName: "",
    phoneNumber: "",

    status: "",
    address: "",
  };

  const [customerName, setCustomerName] = useState(initialValues.customerName);
  const [phoneNumber, setPhoneNumber] = useState(initialValues.phoneNumber);

  const [status, setStatus] = useState(initialValues.status);
  const [address, setAddress] = useState(initialValues.address);

  const [errors, setErrors] = useState({});

  const statusOptions = [
    { value: 1, label: "Active" },
    { value: 0, label: "Inactive" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!customerName) errors.customerName = "Customer Name is required";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";

    if (!status) errors.status = "Status is required";
    if (!address) errors.address = "Address is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const requestData = {
      customer_name: customerName,
      phone_number: phoneNumber,

      status,
      address,
    };

    try {
      setLoading(true);
      const axiosInstance = createAxiosInstance();
      const response = await (
        await axiosInstance
      ).post(
        dataIn ? `${CUSTOMER_URL.UPDATE}/${dataIn.id}` : CUSTOMER_URL.INSERT,
        requestData
      );
      console.log(response);
      toast.success(
        dataIn
          ? "Customer updated successfully"
          : "Customer added successfully",
        { autoClose: 800 }
      );
      closeModal();
      clearForm();
    } catch (error) {
      toast.error("Error submitting data");
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setCustomerName("");
    setPhoneNumber("");

    setStatus("");
    setAddress("");

    setErrors({});
  };

  useEffect(() => {
    if (dataIn) {
      setCustomerName(dataIn.customer_name);
      setPhoneNumber(dataIn.phone_number);

      setStatus(dataIn.status);
      setAddress(dataIn.address);
    }
  }, [dataIn]);

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
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">CUSTOMER FORM</p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            onClick={closeModal}
            leftIcon="fa fa-times"
            classList={["is-clickable has-text-danger"]}
          />
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            {/* Customer Name */}
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">Customer Name</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.customerName && "is-danger"}`}
                    placeholder="Enter Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    disabled={dataIn && dataIn.status === 0 ? true : false}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.customerName && (
                  <p className="help is-danger">{errors.customerName}</p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">Phone Number</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.phoneNumber && "is-danger"}`}
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    maxLength={10}
                    minLength={10}
                    pattern="\d*"
                    disabled={dataIn && dataIn.status === 0 ? true : false}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.phoneNumber && (
                  <p className="help is-danger">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            {/* Email */}
          </div>

          <div className="columns">
            {/* Status */}
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">Status</label>
                <div className={`${errors.status && "is-danger"}`}>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="input"
                  >
                    <option value="">Select Status</option>
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.status && (
                  <p className="help is-danger">{errors.status}</p>
                )}
              </div>
            </div>

            {/* Pincode */}
            <div className="column is-8">
              <div className="field">
                <label className="label has-text-link">Address</label>
                <div className="control">
                  <textarea
                    className={`textarea ${errors.address && "is-danger"}`}
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={dataIn && dataIn.status === 0 ? true : false}
                  ></textarea>
                </div>
                {errors.address && (
                  <p className="help is-danger">{errors.address}</p>
                )}
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-6"></div>
          </div>
          <div className="column">
            <div className="is-flex is-justify-content-flex-center">
              <SmartDarkButton
                label={dataIn ? "UPDATE" : "SUMBIT"}
                classList={["button is-link has-text-white"]}
                type="submit"
              />
              <SmartDarkButton
                label="CLEAR"
                classList={["button is-danger ml-3 has-text-white"]}
                onClick={clearForm}
                type="reset"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;

CustomerForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};
