/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import createAxiosInstance from "../../../services/axios";
import { VENDOR_URL } from "../../../api/AdminApi/VendorApi";
import { toast } from "react-toastify";

const VendorForm = ({ dataIn }) => {
  const { closeModal, setLoading } = useSiteContext();
  const initialValues = {
    vendorName: "",
    phoneNumber: "",
    email: "",
    orderDate: "",
    gst: "",
    status: "",
    address: "",
    panNumber: "",
    groupName: "",
    companyName: "",
    supplierDescription: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    bankBranch: "",
    bankAddress: "",
  };
  const [vendorName, setVendorName] = useState(initialValues.vendorName);
  const [phoneNumber, setPhoneNumber] = useState(initialValues.phoneNumber);
  const [email, setEmail] = useState(initialValues.email);
  const [orderDate, setOrderDate] = useState(initialValues.orderDate);
  const [gst, setGst] = useState(initialValues.gst);
  const [status, setStatus] = useState(initialValues.status);
  const [address, setAddress] = useState(initialValues.address);
  const [panNumber, setPanNumber] = useState(initialValues.panNumber);
  const [groupName, setGroupName] = useState(initialValues.groupName);
  const [companyName, setCompanyName] = useState(initialValues.companyName);
  const [supplierDescription, setSupplierDescription] = useState(
    initialValues.supplierDescription
  );
  const [bankName, setBankName] = useState(initialValues.bankName);
  const [accountNumber, setAccountNumber] = useState(
    initialValues.accountNumber
  );
  const [bankAddress, setBankAddress] = useState(initialValues.bankAddress);
  const [ifscCode, setIfscCode] = useState(initialValues.ifscCode);
  const [errors, setErrors] = useState({});

  const statusOptions = [
    { value: 1, label: "Active" },
    { value: 0, label: "Inactive" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const requestData = {
      vendor_name: vendorName,
      phone_number: phoneNumber,
      email,
      date_of_creation: orderDate,
      gst_number: gst,
      status,
      address,
      pan_number: panNumber,
      group_name: groupName,
      company_name: companyName,
      supplier_description: supplierDescription,
      bank_name: bankName,
      bank_address: bankAddress,
      account_number: accountNumber,
      ifsc_code: ifscCode,
    };

    try {
      setLoading(true);
      const axiosInstance = createAxiosInstance();
      const response = await (
        await axiosInstance
      ).post(
        dataIn ? `${VENDOR_URL.UPDATE}/${dataIn.id}` : VENDOR_URL.INSERT,
        requestData
      );
      console.log(response);
      toast.success(
        dataIn ? "Vendor updated successfully" : "Vendor added successfully",
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

  const validateForm = () => {
    const errors = {};
    if (!vendorName) errors.vendorName = "Vendor name is required";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!email) errors.email = "Email is required";
    if (!orderDate) errors.orderDate = "Order date is required";
    if (!gst) errors.gst = "GST No is required";
    if (!status) errors.status = "Status is required";
    if (!address) errors.address = "Address is required";
    if (!panNumber) errors.panNumber = "PAN number is required";
    if (!companyName) errors.companyName = "Company name is required";
    if (!supplierDescription)
      errors.supplierDescription = "Supplier description is required";
    if (!bankName) errors.bankName = "Bank name is required";
    if (!accountNumber) errors.accountNumber = "Account number is required";
    if (!bankAddress) errors.bankAddress = "Bank address is required";
    if (!ifscCode) errors.ifscCode = "IFSC code is required";
    return errors;
  };

  const clearForm = () => {
    setVendorName("");
    setPhoneNumber("");
    setEmail("");
    setOrderDate("");
    setGst("");
    setStatus("");
    setAddress("");
    setPanNumber("");
    setGroupName("");
    setCompanyName("");
    setSupplierDescription("");
    setBankName("");
    setBankAddress("");
    setAccountNumber("");
    setIfscCode("");
    setErrors({});
  };

  useEffect(() => {
    if (dataIn) {
      setVendorName(dataIn.vendor_name || "");
      setPhoneNumber(dataIn.phone_number || "");
      setEmail(dataIn.email || "");
      setOrderDate(dataIn.date_of_creation || "");
      setGst(dataIn.gst_number || "");
      setStatus(dataIn.status || "");
      setAddress(dataIn.address || "");
      setPanNumber(dataIn.pan_number || "");
      setGroupName(dataIn.group_name || "");
      setCompanyName(dataIn.company_name || "");
      setSupplierDescription(dataIn.supplier_description || "");
      setBankName(dataIn.bank_name || "");
      setBankAddress(dataIn.bank_address || "");
      setAccountNumber(dataIn.account_number || "");
      setIfscCode(dataIn.ifsc_code || "");
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().substr(0, 10);
      setOrderDate(formattedDate);
    }
  }, [dataIn]);

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setErrors({ ...errors, phoneNumber: "" });
    } else {
      setErrors({ ...errors, phoneNumber: "Phone number must be numeric" });
      toast.error("Phone number must be numeric", { autoClose: 800 });
    }
  };
  const handleAccountNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setAccountNumber(value);
      setErrors({ ...errors, accountNumber: "" });
    } else {
      setErrors({ ...errors, accountNumber: "Account Number must be numeric" });
      toast.error("Account number must be numeric", { autoClose: 800 });
    }
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    const regex1 = /^[0-9]{0,2}$/;
    const regex2 = /^[0-9]{2}[a-zA-Z]{0,5}$/;
    const regex3 = /^[0-9]{2}[a-zA-Z]{5}[0-9]{0,4}$/;
    const regex4 = /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{0,1}$/;
    const regex5 = /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[0-9a-zA-Z]{0,1}$/;
    const regex6 =
      /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[a-zA-Z0-9]{1}[Z]{0,1}$/;
    const regex7 =
      /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[a-zA-Z0-9]{1}[Z]{1}[0-9a-zA-Z]{0,1}$/;

    if (
      regex1.test(text) ||
      regex2.test(text) ||
      regex3.test(text) ||
      regex4.test(text) ||
      regex5.test(text) ||
      regex6.test(text) ||
      regex7.test(text)
    ) {
      setGst(text);
      if (regex7.test(text)) {
        setErrors({});
      } else {
        setErrors({
          gst: "The format should be: two numbers, five letters, four numbers, one letter, one number or one letter, the capital letter Z, and one number or one letter.",
        });
      }
    } else {
      setErrors({
        gst: "The format should be: two numbers, five letters, four numbers, one letter, one number or one letter, the capital letter Z, and one number or one letter.",
      });
    }
  };

  const handlePANInputChange = (event) => {
    const text = event.target.value;
    const panRegex = /^[A-Za-z]{0,5}$/;
    const panRegex2 = /^[A-Za-z]{5}[0-9]{0,4}$/;
    const panRegex3 = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{0,1}$/;

    if (panRegex.test(text) || panRegex2.test(text) || panRegex3.test(text)) {
      setPanNumber(text);
      setErrors((prevErrors) => ({ ...prevErrors, pan: null }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pan: "The format should be: five letters, four numbers, and one letter",
      }));
      toast.error(
        "The format should be: five letters, four numbers, and one letter",
        { autoClose: 800 }
      );
    }
  };
  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">
          {dataIn ? "UPDATE VENDOR FORM" : "VENDOR FORM"}
        </p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            onClick={closeModal}
            leftIcon="fa fa-times"
            classList={["is-clickable has-text-danger"]}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="columns">
          {/* <div className="column is-4 mt-5">
            <div className="is-flex is-justify-content-center">
              <label className="label has-text-link">Vendor ID:</label>
              <p className="label has-text-link">
                {dataIn ? dataIn.vendor_id : "N/A"}
              </p>
            </div>
          </div> */}
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Vendor Name</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.vendorName && "is-danger"}`}
                  placeholder="Enter Vendor Name"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              {errors.vendorName && (
                <p className="help is-danger">{errors.vendorName}</p>
              )}
            </div>
          </div>
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
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Email</label>
              <div className="control has-icons-left">
                <input
                  type="email"
                  className={`input ${errors.email && "is-danger"}`}
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Order Date</label>
              <div className="control has-icons-left">
                <input
                  type="date"
                  className={`input ${errors.orderDate && "is-danger"}`}
                  placeholder="Enter Order Date"
                  value={orderDate}
                  onChange={(e) => setOrderDate(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
              </div>
              {errors.orderDate && (
                <p className="help is-danger">{errors.orderDate}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">GST No</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.gst && "is-danger"}`}
                  placeholder="Enter GST No"
                  value={gst}
                  onChange={handleInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-file" aria-hidden="true"></i>
                </span>
              </div>
              {errors.gst && <p className="help is-danger">{errors.gst}</p>}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Status</label>
              <div className="control has-icons-left">
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
                <span className="icon is-small is-left">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </span>
              </div>
              {errors.status && (
                <p className="help is-danger">{errors.status}</p>
              )}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Address</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.address && "is-danger"}`}
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-address-card" aria-hidden="true"></i>
                </span>
              </div>
              {errors.address && (
                <p className="help is-danger">{errors.address}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">PAN No</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.pan && "is-danger"}`}
                  placeholder="Enter PAN No"
                  value={panNumber}
                  onChange={handlePANInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-id-card" aria-hidden="true"></i>
                </span>
              </div>
              {errors.panNumber && (
                <p className="help is-danger">{errors.panNumber}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Group Name</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Group Name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Company Name</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.companyName && "is-danger"}`}
                  placeholder="Enter Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-building" aria-hidden="true"></i>
                </span>
              </div>
              {errors.companyName && (
                <p className="help is-danger">{errors.companyName}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">
                Supplier Description
              </label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.supplierDescription && "is-danger"
                    }`}
                  placeholder="Enter Supplier Description"
                  value={supplierDescription}
                  onChange={(e) => setSupplierDescription(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                </span>
              </div>
              {errors.supplierDescription && (
                <p className="help is-danger">{errors.supplierDescription}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Bank Name</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.bankName && "is-danger"}`}
                  placeholder="Enter Bank Name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-university" aria-hidden="true"></i>
                </span>
              </div>
              {errors.bankName && (
                <p className="help is-danger">{errors.bankName}</p>
              )}
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Bank Address</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.bankAddress && "is-danger"}`}
                  placeholder="Enter Bank Address"
                  value={bankAddress}
                  onChange={(e) => setBankAddress(e.target.value)}
                  disabled={dataIn && dataIn.status === 0 ? true : false}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-address-book" aria-hidden="true"></i>
                </span>
              </div>
              {errors.bankAddress && (
                <p className="help is-danger">{errors.bankAddress}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">Account Number</label>
              <div className="control has-icons-left">
                <input
                  type="number"
                  className={`input ${errors.accountNumber && "is-danger"}`}
                  placeholder="Enter Account Number"
                  value={accountNumber}
                  onChange={handleAccountNumberChange}
                  maxLength={16}
                  minLength={11}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                </span>
              </div>
              {errors.accountNumber && (
                <p className="help is-danger">{errors.accountNumber}</p>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-link">IFSC Code</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className={`input ${errors.ifscCode && "is-danger"}`}
                  placeholder="Enter IFSC Code"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  maxLength={11}
                  minLength={11}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-code" aria-hidden="true"></i>
                </span>
              </div>
              {errors.ifscCode && (
                <p className="help is-danger">{errors.ifscCode}</p>
              )}
            </div>
          </div>
        </div>

        <div className="field"> 
          <div className="control">
            <div>
              <SmartDarkButton
                label={dataIn ? "UPDATE" : "SUMBIT"}
                classList={["button is-link has-text-white"]}
                type="submit"
              />
              {!dataIn && (
                <SmartDarkButton
                  label="CLEAR"
                  classList={["button is-danger ml-3 has-text-white"]}
                  onClick={clearForm}
                  type="reset"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
