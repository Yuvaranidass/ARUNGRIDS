import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const CustomerForm = ({ loadTableData, dataIn }) => {
    const { closeModal } = useSiteContext();
    const [formData, setFormData] = useState(dataIn || {});
    const {
        customerName: initialcustomerName = "",
        phoneNumber: initialPhoneNumber = "",
        email: initialEmail = "",
        status: initialStatus = "",
        address: initialAddress = "",
        pincode: initialPincode = ""
    } = dataIn || {};

    const [customerName, setCustomerName] = useState(initialcustomerName);
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const [email, setEmail] = useState(initialEmail);
    const [status, setStatus] = useState(initialStatus);
    const [address, setAddress] = useState(initialAddress);
    const [pincode, setPincode] = useState(initialPincode);
    const [errors, setErrors] = useState({});

    const statusOptions = [
        { value: 1, label: "Active" },
        { value: 0, label: "Inactive" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!customerName) errors.customerName = "Customer Name is required";
        if (!phoneNumber) errors.phoneNumber = "Phone number is required";
        if (!email) errors.email = "Email is required";
        if (!status) errors.status = "Status is required";
        if (!address) errors.address = "Address is required";
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
            pincode
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
                    dataIn ? "Customer Updated Successfully" : "Customer Added Successfully"
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

    return (
        <div>
            <div className="is-flex is-justify-content-space-between">
                <p className="title is-5">Customer Form</p>
                <div className="is-size-5">
                    <SmartDarkButton
                        type="icon"
                        onClick={closeModal}
                        leftIcon="fa fa-times"
                        classList={["is-clickable"]}
                    />
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="columns">
                        {/* Customer Name */}
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Customer Name</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className={`input ${errors.customerName && "is-danger"}`}
                                        placeholder="Enter Customer Name"
                                        value={customerName}
                                        onChange={(e) => setcustomerName(e.target.value)}
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
                                <label className="label">Phone Number</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className={`input ${errors.phoneNumber && "is-danger"}`}
                                        placeholder="Enter Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className={`input ${errors.email && "is-danger"}`}
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                {errors.email && (
                                    <p className="help is-danger">{errors.email}</p>
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="columns">
                        {/* Status */}
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Status</label>
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

                        {/* pincode */}
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Pincode</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className={`input ${errors.pincode && "is-danger"}`}
                                        placeholder="Enter Pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                {errors.pincode && (
                                    <p className="help is-danger">{errors.pincode}</p>
                                )}
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Address</label>
                                <div className="control">
                                    <textarea
                                        className={`textarea ${errors.address && "is-danger"}`}
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                </div>
                                {errors.address && (
                                    <p className="help is-danger">{errors.address}</p>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="column is-4 is-offset-5">
                        <div className="is-flex is-justify-content-flex-center">
                            <SmartDarkButton
                                label="Clear"
                                classList={["button is-danger"]}
                                onClick={clearForm}
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
};

export default CustomerForm;

CustomerForm.propTypes = {
    loadTableData: PropTypes.func.isRequired,
    dataIn: PropTypes.shape({
        id: PropTypes.number,
    }),
};
