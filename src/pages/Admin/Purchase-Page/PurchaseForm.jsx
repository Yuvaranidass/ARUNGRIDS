import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
// import axios from "axios";
// import { toast } from "react-toastify";
import PropTypes from "prop-types";


const PurchaseForm = ({ dataIn }) => {
  const { closeModal } = useSiteContext();
  // const [formData, setFormData] = useState(dataIn || {});
  const {
    purchaseName: initialPurchaseName = "",
    paymentType: initialPaymentType = "",
    orderDate: initialOrderDate = "",
    dueDate: initialDueDate = "",
    DateTime: initialDateTime = "",
    status: initialStatus = "",
    totalAmount: initialTotalAmount = "",
   
  } = dataIn || {};

  const [purchaseName, setPurchaseName] = useState(initialPurchaseName);
  const [paymentType, setPaymentType] = useState(initialPaymentType);
  const [orderDate, setOrderDate] = useState(initialOrderDate);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [dateTime,setDateTime] = useState(initialDateTime);
  const [status, setStatus] = useState(initialStatus);
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [errors, setErrors] = useState({});

  const paymentTypeOptions = [
    { value: "UPI", label: "UPI" },
    { value: "NFT", label: "NFT" },
    { value: "CASH", label: "Cash" },
  ];

  const statusOptions = [
    { value: 1, label: "Paid" },
    { value: 0, label: "Unpaid" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!purchaseName) errors.purchaseName = " Purchase name is required";
    if (!paymentType) errors.paymentType = "Payment type is required";
    if (!orderDate) errors.orderDate = "Order date is required";
    if (!dueDate) errors.dueDate = "Due date is required";
    if (!dateTime) errors.DateTime = " Date $ Time is required";
    if (!status) errors.status = "Status is required";
    if (!totalAmount) errors.totalAmount = "Total amount is required";
  

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // const requestData = {
    //   purchase_name: purchaseName,
    //   payment_type: paymentType,
    //   date: orderDate,
    //   orderdate: dueDate,
    //   time: dateTime,
    //   status,
    //   totalamount: totalAmount,
     
    // };

    // const url = dataIn
    //   ? VENDOR_URL.INSERT + "/" + dataIn.id
    //   : VENDOR_URL.UPDATE;
    // const method = dataIn ? "put" : "post";

    // axios({
    //   method,
    //   url,
    //   data: requestData,
    // })
    //   .then(() => {
    //     toast.success(
    //       dataIn ? "Purchase order Updated Successfully" : "Purchase order Added Successfully"
    //     );
    //     clearForm();
    //     closeModal();
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting data:", error);
    //   });
  };

  const clearForm = () => {
    setPurchaseName("");
    setPaymentType("");
    setOrderDate("");
    setDueDate("");
    setStatus("");
    setTotalAmount("");
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
    setDateTime(formattedTime);
  }, []);



  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">PURCHASE FORM</p>
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
              <div className="column is-6">
              <div className="field">
                <label className="label">Purchase Name</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.purchaseName && "is-danger"}`}
                    placeholder="Enter Purchase Name"
                    value={purchaseName}
                    onChange={(e) => setPurchaseName(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.purchaseName && (
                  <p className="help is-danger">{errors.purchaseName}</p>
                )}
              </div>
              </div>

                <div className="column is-6">
              <div className="field">
                  <label className="label">Payment Type</label>
                    <div className={`control ${errors.paymentType && "is-danger"}`}>
                      <select
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="input"
                      >
                        <option value="">Select Payment Type</option>
                          {paymentTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                        ))}
                      </select>
                    </div>
                    {errors.paymentType && (
                    <p className="help is-danger">{errors.paymentType}</p>
                    )}
                  </div>
                  </div>
          </div>

          <div className="columns">
              <div className="column is-6">
              <div className="field">
                <label className="label">Order Date</label>
                <div className="control">
                  <input
                    type="date"
                    className={`input ${errors.orderDate && "is-danger"}`}
                    placeholder="Enter Order Date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    disabled
                  />
                </div>
                {errors.orderDate && (
                  <p className="help is-danger">{errors.orderDate}</p>
                )}
              </div>
              </div>


              <div className="column is-6">
              <div className="field">
                <label className="label">Due Date</label>
                <div className="control">
                  <input
                    type="date"
                    className={`input ${errors.dueDate && "is-danger"}`}
                    placeholder="Enter Due Date "
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    disabled
                  />
                </div>
                {errors.dueDate && (
                  <p className="help is-danger">{errors.dueDate}</p>
                )}
              </div>
            </div>
          </div>

            <div className="columns">
                <div className="column is-6">
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

                
            <div className="column is-4">
              <div className="field">
                <label className="label">Total Amount</label>
                <div className="control">
                  <input
                    type="text"
                    className={`input ${errors.totalAmount && "is-danger"}`}
                    placeholder="Enter Total Amount"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
                {errors.totalAmount && (
                  <p className="help is-danger">{errors.totalAmount}</p>
                )}
              </div>

              <div className="column is-6">
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
            </div> 
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;

PurchaseForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
  }),
};
