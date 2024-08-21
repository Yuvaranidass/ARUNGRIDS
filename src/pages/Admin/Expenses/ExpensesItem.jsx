import { useState } from "react";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Expense.css";

const ExpensesItem = ({ loadTableData, dataIn }) => {
    const { closeModal, } = useSiteContext();
    const [formData, setFormData] = useState(dataIn || {});
    const [errors, setErrors] = useState({});

    const statusOptions = [
        { value: 1, label: "Active" },
        { value: 0, label: "Inactive" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const requiredFields = ["itemName", "purchasePrice", "measuringUnit", "hsn", "gstRate", "itcApplicable"];
        requiredFields.forEach((field) => {
            if (!formData[field]) errors[field] = `${field} is required`;
        });

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const requestData = {
            item_name: formData.itemName,
            purchase_price: formData.purchasePrice,
            measuring_unit: formData.measuringUnit,
            hsn: formData.hsn,
            gst_rate: formData.gstRate,
            itc_applicable: formData.itcApplicable,
        };

        const url = dataIn ? `${VENDOR_URL.UPDATE}/${dataIn.id}` : VENDOR_URL.INSERT;
        const method = dataIn ? "put" : "post";

        axios({ method, url, data: requestData })
            .then(() => {
                toast.success(dataIn ? "Item Updated Successfully" : "Item Added Successfully");
                loadTableData();
                closeModal();
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    };

    return (
        <div>
            <div className="is-flex is-justify-content-space-between">
                <p className="title is-5">Create New Expense Item</p>
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
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Item Name</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        name="itemName"
                                        className={`input ${errors.itemName && "is-danger"}`}
                                        placeholder="Enter Item Name"
                                        value={formData.itemName || ""}
                                        onChange={handleChange}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-tag" aria-hidden="true"></i>
                                    </span>
                                </div>
                                {errors.itemName && (
                                    <p className="help is-danger">{errors.itemName}</p>
                                )}
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Purchase Price</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="number"
                                        name="purchasePrice"
                                        className={`input ${errors.purchasePrice && "is-danger"}`}
                                        placeholder="Enter Purchase Price"
                                        value={formData.purchasePrice || ""}
                                        onChange={handleChange}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-dollar-sign" aria-hidden="true"></i>
                                    </span>
                                </div>
                                {errors.purchasePrice && (
                                    <p className="help is-danger">{errors.purchasePrice}</p>
                                )}
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="field">
                                <label className="label">Measuring Unit</label>
                                <div className="control select-container">
                                    <select
                                        name="measuringUnit"
                                        className={`input ${errors.measuringUnit && "is-danger"}`}
                                        value={formData.measuringUnit || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Unit</option>
                                        <option value="Unit">Unit</option>
                                        <option value="Kg">Kg</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                    {errors.measuringUnit && <p className="help is-danger">{errors.measuringUnit}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-4">
                            <div className="field">
                                <label className="label">HSN</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        name="hsn"
                                        className={`input ${errors.hsn && "is-danger"}`}
                                        placeholder="Enter HSN"
                                        value={formData.hsn || ""}
                                        onChange={handleChange}
                                    />
                                    {errors.hsn && <p className="help is-danger">{errors.hsn}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="field">
                                <label className="label">GST Tax rate %</label>
                                <div className="control select-container">
                                    <select
                                        name="gstRate"
                                        className={`input ${errors.gstRate && "is-danger"}`}
                                        value={formData.gstRate || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Rate</option>
                                        <option value="Exempted">Exempted</option>
                                        <option value="5%">5%</option>
                                        <option value="12%">12%</option>
                                        <option value="18%">18%</option>
                                        <option value="28%">28%</option>
                                    </select>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                    {errors.gstRate && <p className="help is-danger">{errors.gstRate}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="field">
                                <label className="label">ITC Applicable</label>
                                <div className="control select-container">
                                    <select
                                        name="itcApplicable"
                                        className={`input ${errors.itcApplicable && "is-danger"}`}
                                        value={formData.itcApplicable || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Eligible">Eligible</option>
                                        <option value="Ineligible">Ineligible</option>
                                        <option value="Ineligible Others">Ineligible Others</option>
                                    </select>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                    {errors.itcApplicable && <p className="help is-danger">{errors.itcApplicable}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-4">
                            <div className="field">
                                <label className="label ml-5">Item Type</label>
                                <div className="control">
                                    <label className="radio ml-6">
                                        <input
                                            type="radio"
                                            name="itemType"
                                            value="Product"
                                            checked={formData.itemType === "Product"}
                                            onChange={handleChange}
                                        />
                                        Product
                                    </label>
                                    <label className="radio ml-6">
                                        <input
                                            type="radio"
                                            name="itemType"
                                            value="Service"
                                            checked={formData.itemType === "Service"}
                                            onChange={handleChange}
                                        />
                                        Service
                                    </label>
                                    {errors.itemType && <p className="help is-danger">{errors.itemType}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-12 has-text-right">
                            <SmartDarkButton
                                label="Cancel"
                                classList={["button is-danger"]}
                                onClick={closeModal}
                            />
                            <SmartDarkButton
                                label="Save Item"
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

ExpensesItem.propTypes = {
    loadTableData: PropTypes.func.isRequired,
    dataIn: PropTypes.object,
};

export default ExpensesItem;
