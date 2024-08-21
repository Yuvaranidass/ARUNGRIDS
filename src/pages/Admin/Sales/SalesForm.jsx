/* eslint-disable no-unused-vars */
import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const SalesForm = ({ dataIn }) => {
  const { closeModal } = useSiteContext();
  const [formData, setFormData] = useState(dataIn || {});
  const {
    category: initialCategory = "",
    size: initialSize = "",
    quantity: initialQuantity = "",
    price: initialPrice = "",
    tax: initialTax = "",
    total: initialTotal = "",
    action: initialAction = "",
  } = dataIn || {};

  const [category, setCategory] = useState(initialCategory);
  const [size, setSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [price, setPrice] = useState(initialPrice);
  const [tax, setTax] = useState(initialTax);
  const [total, setTotal] = useState(initialTotal);
  const [action, setAction] = useState(initialAction);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!category) errors.category = "Category is required";
    if (!size) errors.size = "Size is required";
    if (!quantity) errors.quantity = "Quantity is required";
    if (!price) errors.price = "Price is required";
    if (!tax) errors.tax = "Tax is required";
    if (!total) errors.total = "Total is required";
    if (!action) errors.action = "Action is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const requestData = {
      category,
      size,
      quantity,
      price,
      tax,
      total,
      action,
    };

    const url = dataIn
      ? "/api/sales_details/" + dataIn.id
      : "/api/sales_details";
    const method = dataIn ? "put" : "post";

    axios({
      method,
      url,
      data: requestData,
    })
      .then(() => {
        toast.success(
          dataIn ? "Sales Updated Successfully" : "Sales Added Successfully"
        );
        clearForm();
        closeModal();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const clearForm = () => {
    setCategory("");
    setSize("");
    setQuantity("");
    setPrice("");
    setTax("");
    setTotal("");
    setAction("");
    setErrors({});
  };

  return (
    <div>
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-5">SALES FORM</p>
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
            {/* Category */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Category</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.category && "is-danger"}`}
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-tag" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.category && (
                  <p className="help is-danger">{errors.category}</p>
                )}
              </div>
            </div>

            {/* Size */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Size</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.size && "is-danger"}`}
                    placeholder="Enter Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-ruler" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.size && <p className="help is-danger">{errors.size}</p>}
              </div>
            </div>

            {/* Quantity */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Quantity</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.quantity && "is-danger"}`}
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-sort-numeric-up" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.quantity && (
                  <p className="help is-danger">{errors.quantity}</p>
                )}
              </div>
            </div>
          </div>

          <div className="columns">
            {/* Price */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Price</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.price && "is-danger"}`}
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-dollar-sign" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.price && (
                  <p className="help is-danger">{errors.price}</p>
                )}
              </div>
            </div>

            {/* Tax */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Tax</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.tax && "is-danger"}`}
                    placeholder="Enter Tax"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-percent" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.tax && <p className="help is-danger">{errors.tax}</p>}
              </div>
            </div>

            {/* Total */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Total</label>
                <div className="control has-icons-left">
                  <input
                    type="number"
                    className={`input ${errors.total && "is-danger"}`}
                    placeholder="Enter Total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-calculator" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.total && (
                  <p className="help is-danger">{errors.total}</p>
                )}
              </div>
            </div>
          </div>

          <div className="columns">
            {/* Action */}
            <div className="column is-4">
              <div className="field">
                <label className="label">Action</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className={`input ${errors.action && "is-danger"}`}
                    placeholder="Enter Action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-tasks" aria-hidden="true"></i>
                  </span>
                </div>
                {errors.action && (
                  <p className="help is-danger">{errors.action}</p>
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

export default SalesForm;

SalesForm.propTypes = {
  loadTableData: PropTypes.func.isRequired,
  dataIn: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    size: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    tax: PropTypes.number,
    total: PropTypes.number,
    action: PropTypes.string,
  }),
};
