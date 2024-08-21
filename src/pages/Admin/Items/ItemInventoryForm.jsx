import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { VENDOR_URL } from "../../../api/AdminApi/VendorApi";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import StockDetailsForm from "./StockDetails";
import PricingDetails from "./PricingDetails";
import CustomDetails from "./CustomDetails";

const ItemInventoryForm = ({ dataIn }) => {
  const { closeModal, openModal } = useSiteContext();

  const {
    itemtype: initialItemType = "product",
    phoneNumber: initialPhoneNumber = "",
    email: initialEmail = "",
    paymentType: initialPaymentType = "",
    orderDate: initialOrderDate = "",
    dueDateTime: initialDueDateTime = "",
    gst: initialGst = "",
    status: initialStatus = "",
    totalAmount: initialTotalAmount = "",
    address: initialAddress = "",
    servicename: initialServicename = "",
    servicecode: initialServicecode = "",
    sales: initialSales = "",
    rate: initialRate = "",
    category: initialCategory = "",
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
  const [servicename, setServicename] = useState(initialServicename);
  const [servicecode, setServicecode] = useState(initialServicecode);
  const [sales, setSales] = useState(initialSales);
  const [rate, setRate] = useState(initialRate);
  const [category, setCategory] = useState(initialCategory);

  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!itemType) errors.itemType = "Item type is required";
    if (!phoneNumber) errors.phoneNumber = "select size is required";
    if (!email) errors.email = "Product name is required";
    if (!paymentType) errors.paymentType = "Payment type is required";
    if (!orderDate) errors.orderDate = "Order date is required";
    if (!dueDateTime) errors.dueDateTime = "printing type is required";
    if (!gst) errors.gst = "GST is required";
    if (!measuringUnit) errors.measuringUnit = "printing type is required";
    if (!openingStack) errors.openingStack = "number of unit  is required";
    if (!totalAmount) errors.totalAmount = "Sales price is required";
    if (!address) errors.address = "Category is required";
    if (!servicename) errors.servicename = "service name is required";
    if (!servicecode) errors.servicecode = "service code is required";
    if (!sales) errors.sales = "sales price is required";
    if (!rate) errors.rate = "Gst Tax Rate is required";
    if (!category) errors.category = "category is required";

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

  const openMyModal = () => {
    const modalObject = {
      body: <StockDetailsForm />,
      modalClass: "smart-modal-60 mt-6",
    };
    openModal(modalObject);
  };

  const openMyModalpricingDetails = () => {
    const modalObject = {
      body: <PricingDetails />,
      modalClass: "smart-modal-60 mt-6",
    };
    openModal(modalObject);
  };
  const openMyModalCustomDetails = () => {
    const modalObject = {
      body: <CustomDetails />,
      modalClass: "smart-modal-60 mt-6",
    };
    openModal(modalObject);
  };

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

  const gsttax = [
    {
      name: "None",
      value: "none",
    },
    {
      name: "5%",
      value: "5%",
    },
    {
      name: "12%",
      value: "12%",
    },
    {
      name: "18%",
      value: "18%",
    },
    {
      name: "28%",
      value: "28%",
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
    <div className="mt-6">
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">CREATE NEW ITEM</p>
        <div className="is-size-5">
          <SmartDarkButton
            type="icon"
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
            onClick={closeModal}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="columns">
            <div
              className=""
              style={{ height: 480, width: 400, marginLeft: 28 }}
            >
              <div className="column is-12">
                <div className="field mt-6">
                  <SmartDarkButton
                    label="Basic Details"
                    classList={[
                      "is-link is-6 ml-3 item-basic-detail-button is-fullwidth",
                    ]}
                  />
                </div>

                <div className="field">
                  <label>
                    <b>Advance Details</b>
                  </label>
                </div>
                <div className="field">
                  <SmartDarkButton
                    label="Stock Details"
                    classList={[
                      "is-link is-6 ml-3 item-basic-detail-button is-fullwidth",
                    ]}
                    onClick={openMyModal}
                  />
                </div>
                <div className="field">
                  <SmartDarkButton
                    label="Pricing Details"
                    classList={[
                      "is-link is-6 ml-3 item-basic-detail-button is-fullwidth",
                    ]}
                    onClick={openMyModalpricingDetails}
                  />
                </div>
                <div className="field">
                  <SmartDarkButton
                    label="Custom Details"
                    classList={[
                      "is-link is-6 ml-3 item-basic-detail-button is-fullwidth",
                    ]}
                    onClick={openMyModalCustomDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-4"
          style={{ height: 480, width: 800, marginLeft: 28 }}
        >
          <div className="columns">
            <div className="column is-6">
              <div className="field ml-6 mt-3">
                <label className="label has-text-link">Item Type</label>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="itemType"
                      value="product"
                      checked={itemType === "product"}
                      onChange={(e) => setItemType(e.target.value)}
                    />
                    Product
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="itemType"
                      value="Service"
                      style={{ marginLeft: 30 }}
                      checked={itemType === "Service"}
                      onChange={(e) => setItemType(e.target.value)}
                    />
                    Service
                  </label>
                </div>
                {errors.itemType && (
                  <p className="help is-danger">{errors.itemType}</p>
                )}
              </div>
            </div>
          </div>

          {itemType === "product" ? (
            <>
              <form action="" onSubmit={handleSubmit}>
                <div className="columns">
                  <div className="column is-6">
                    <div className="field ml-6 mt-3">
                      <label className="label has-text-link">
                        Product Name
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${errors.email && "is-danger"}`}
                          placeholder="Ex: 4x4 banner"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field ml-6 mt-3">
                      <label className="label has-text-link">Category</label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${errors.address && "is-danger"}`}
                          placeholder="Select category"
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
                <div className="columns">
                  <div className="column is-6">
                    <div className="field ml-6">
                      <label className="label has-text-link">Sales Price</label>
                      <div className="control">
                        <input
                          type="number"
                          className={`input ${
                            errors.totalAmount && "is-danger"
                          }`}
                          placeholder="Enter amount"
                          value={totalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                        />
                      </div>
                      {errors.totalAmount && (
                        <p className="help is-danger">{errors.totalAmount}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Gst Tax Rate
                      </label>
                      <div className="control has-icons-right">
                        <select className="input">
                          {gsttax.map((item) => {
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
                      {errors.gst && (
                        <p className="help is-danger">{errors.gst}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <div className="field ml-6">
                      <label className="label has-text-link">Select Size</label>
                      <div className="control has-icons-right">
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
                      {errors.phoneNumber && (
                        <p className="help is-danger">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Printing Type
                      </label>
                      <div className="control has-icons-right">
                        <select className="input">
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
                      {errors.measuringUnit && (
                        <p className="help is-danger">{errors.measuringUnit}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Number Of Units
                      </label>
                      <div className="control">
                        <input
                          type="number"
                          className={`input ${
                            errors.totalAmount && "is-danger"
                          }`}
                          placeholder="Enter Unit"
                          value={openingStack}
                          onChange={(e) => setOpeningStack(e.target.value)}
                        />
                      </div>
                      {errors.openingStack && (
                        <p className="help is-danger">{errors.openingStack}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
                    <SmartDarkButton
                      label="Clear"
                      classList={["button is-danger"]}
                      // onClick={clearForm}
                    />
                    <SmartDarkButton
                      classList={["button is-info ml-3"]}
                      label="submit"
                    />
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <form action="">
                <div className="columns">
                  <div className="column">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Service Name
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${
                            errors.servicename && "is-danger"
                          }`}
                          placeholder="Enter the service name"
                          value={servicename}
                          onChange={(e) => setServicename(e.target.value)}
                        />
                      </div>
                      {errors.servicename && (
                        <p className="help is-danger">{errors.servicename}</p>
                      )}
                    </div>
                  </div>
                  <div className="column">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Service Code
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${
                            errors.servicecode && "is-danger"
                          }`}
                          placeholder="Enter the service code"
                          value={servicecode}
                          onChange={(e) => setServicecode(e.target.value)}
                        />
                      </div>
                      {errors.servicecode && (
                        <p className="help is-danger">{errors.servicecode}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field ml-6">
                      <label className="label has-text-link">Category</label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${errors.category && "is-danger"}`}
                          placeholder="Select category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                      {errors.category && (
                        <p className="help is-danger">{errors.category}</p>
                      )}
                    </div>
                  </div>
                  <div className="column">
                    <div className="field ml-6">
                      <label className="label has-text-link">Sales Price</label>
                      <div className="control">
                        <input
                          type="text"
                          className={`input ${errors.sales && "is-danger"}`}
                          placeholder="Enter sales price"
                          value={sales}
                          onChange={(e) => setSales(e.target.value)}
                        />
                      </div>
                      {errors.sales && (
                        <p className="help is-danger">{errors.sales}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field ml-6">
                      <label className="label has-text-link">
                        Gst Tax Rate
                      </label>
                      <div className="control has-icons-right">
                        <select className="input">
                          {gsttax.map((item) => {
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
                      {errors.rate && (
                        <p className="help is-danger">{errors.rate}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-6 is-flex is-align-items-center is-justify-content-center">
                    <SmartDarkButton
                      label="Clear"
                      classList={["button is-danger"]}
                    />
                    <SmartDarkButton
                      label="submit"
                      classList={["button is-info ml-3"]}
                    />
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

ItemInventoryForm.propTypes = {
  dataIn: PropTypes.object,
};

export default ItemInventoryForm;
