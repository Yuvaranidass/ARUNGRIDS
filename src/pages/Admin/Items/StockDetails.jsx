import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { useSiteContext } from "../../../context/SiteDarkProvider";//closeModal
import { VENDOR_URL } from "../../../api/AdminApi/VendorApi"; 
// import { useNavigate } from "react-router-dom";

// import { useSiteContext } from "../../../context/SiteDarkProvider"; //closeModal
// import { VENDOR_URL } from "../../../api/AdminApi/VendorApi";




const StockDetailsForm = ({ loadTableData, dataIn }) => {
  const { closeModal } = useSiteContext(); //closeModal

  
  const {
    itemcode: initialItemType = "",
    phoneNumber: initialPhoneNumber = "",
    email: initialEmail = "",
    paymentType: initialPaymentType = "",
    orderDate: initialOrderDate = "",
    dueDateTime: initialDueDateTime = "",
    gst: initialGst = "",
    status: initialStatus = "",
    totalAmount: initialTotalAmount = "",
    address: initialAddress = "",
  } = dataIn || {};

  const [itemType, setItemType] = useState(initialItemType);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [email, setEmail] = useState(initialEmail);
  const [paymentType, setPaymentType] = useState(initialPaymentType);
  const [orderDate, setOrderDate] = useState(initialOrderDate);
  const [dueDateTime, setDueDateTime] = useState(initialDueDateTime);
  const [gst, setGst] = useState(initialGst);
  const [measuringUnit, setMeasuringUnit] = useState(initialStatus);
  const [openingStack, setOpeningStack] = useState("");
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!itemType) errors.itemType = "Item type is required";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!email) errors.email = "Select size is required";
    if (!paymentType) errors.paymentType = "HSN code is required";
    if (!orderDate) errors.orderDate = "Order date is required";
    if (!dueDateTime) errors.dueDateTime = "Order time is required";
    if (!gst) errors.gst = "GST is required";
    if (!measuringUnit) errors.measuringUnit = "Description is required";
    if (!openingStack) errors.openingStack = "Opening stack is required";
    if (!totalAmount) errors.totalAmount = "Printing type is required";
    if (!address) errors.address = "Address is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const requestData = {
      item_type: itemType,
      phone_no: phoneNumber,
      email,
      payment_type: paymentType,
      date: orderDate,
      time: dueDateTime,
      gst,
      measuring_unit: measuringUnit,
      opening_stack: openingStack,
      totalamount: totalAmount,
      address,
    };

    const url = dataIn
      ? `${VENDOR_URL.INSERT}/${dataIn.id}`
      : "/api/vendor_details";
    const method = dataIn ? "put" : "post";

    axios({
      method,
      url,
      data: requestData,
    })
      .then(() => {
        toast.success(
          dataIn ? "Item Updated Successfully" : "Item Added Successfully"
        );
        clearForm();
        closeModal();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const clearForm = () => {
    setItemType("");
    setPhoneNumber("");
    setEmail("");
    setPaymentType("");
    setOrderDate("");
    setDueDateTime("");
    setGst("");
    setMeasuringUnit("");
    setOpeningStack("");
    setTotalAmount("");
    setAddress("");
    setErrors({});
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
      formatMatcher: "basic",
      hourCycle: "h23",
    });

    setOrderDate(formattedDate);
    setDueDateTime(formattedTime);
  }, []);

  const size = [
    {
      name: "Select Size",
      value: "size",
    },
    {
      name: "1x1",
      value: "1x1",
    },
    {
      name: "2x3",
      value: "2x3",
    },
    {
      name: "3x5",
      value: "3x5",
    },
  ];
  const printingtype = [
    {
      name: "Printing Type",
      value: "printing type",
    },
    {
      name: "One Side",
      value: "one side",
    },
    {
      name: "Double Side",
      value: "double side",
    },
  ];

  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5"></p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
            onClick={closeModal}
          />
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">Item Code</label>
                <div className="control">
                  <input
                    type="text"
                    className={`input ${errors.itemType && "is-danger"}`}
                    placeholder="ex:ITM12549"
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                  />
                </div>
                {errors.itemType && (
                  <p className="help is-danger">{errors.itemType}</p>
                )}
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">HSN Code</label>
                <div className="control">
                  <input
                    type="text"
                    className={`input ${errors.itemType && "is-danger"}`}
                    placeholder="ex:4010"
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                  />
                </div>
                {errors.paymentType && (
                  <p className="help is-danger">{errors.paymentType}</p>
                )}
              </div>
            </div>
            <div className="column is-4">
              <div className="field">
                <label className="label has-text-link">Select Size</label>
                <div className="control has-icons-right is-danger">
                  <select className="input">
                    {size.map((item) => {
                      return (
                        <option key={item} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <span className="icon is-small is-right">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                </div>
                {errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="field ">
                <label className="label has-text-link">Printing Type</label>
                <div className="control has-icons-right">
                  <select className="input ">
                    {printingtype.map((item) => {
                      return (
                        <option key={item} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <span className="icon is-small is-right">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                </div>
                {errors.totalAmount && (
                  <p className="help is-danger">{errors.totalAmount}</p>
                )}
              </div>
            </div>

            <div className="column is-8">
              <div className="field">
                <label className="label has-text-link">Description</label>
                <div className="control">
                  <textarea
                    className={`textarea ${errors.address && "is-danger"}`}
                    placeholder="Enter Description"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                {errors.measuringUnit && (
                  <p className="help is-danger">{errors.measuringUnit}</p>
                )}
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-flex-end mr-6 mt-6">
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
        </form>
      </div>
    </div>
  );
};

StockDetailsForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
    itemcode: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    paymentType: PropTypes.string,
    orderDate: PropTypes.string,
    dueDateTime: PropTypes.string,
    gst: PropTypes.string,
    status: PropTypes.string,
    totalAmount: PropTypes.string,
    address: PropTypes.string,
  }),
};

export default StockDetailsForm;
