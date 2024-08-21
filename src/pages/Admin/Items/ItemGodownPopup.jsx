import { useState } from 'react';
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const AddGodownForm = () => {
  const { openModal, closeModal, setLoding } = useSiteContext();
  const [form, setForm] = useState({
    godownName: '',
    streetAddress: '',
    placeOfSupply: '',
    pincode: '',
    city: ''
  });
  const [errors, setErrors] = useState({});

  const adjustMoney = [
    { name: "India", value: "India" },
    { name: "USA", value: "USA" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!form.godownName) errors.godownName = 'Godown Name is required';
    if (!form.streetAddress) errors.streetAddress = 'Street Address is required';
    if (!form.placeOfSupply) errors.placeOfSupply = 'Place of Supply is required';
    if (!form.pincode) errors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(form.pincode)) errors.pincode = 'Pincode must be 6 digits';
    if (!form.city) errors.city = 'City is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Form submitted', form);
      // Add your form submission logic here
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="mx-4 my-3">
      <div className="subtitle is-flex is-justify-content-space-between">
        <b>Add Godown</b>
        <i className="fa fa-times mr-4 is-clickable" aria-hidden="true" onClick={closeModal}></i>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="has-text-link">Godown Name</label>
          <input
            type="text"
            className={`input mt-2 ${errors.godownName && 'is-danger'}`}
            placeholder="Enter Godown Name"
            name="godownName"
            value={form.godownName}
            onChange={handleChange}
          />
          {errors.godownName && <p className="help is-danger">{errors.godownName}</p>}
        </div>
        <div className="my-3">
          <label className="has-text-link">Street Address</label>
          <textarea
            className={`textarea mt-2 ${errors.streetAddress && 'is-danger'}`}
            placeholder="Enter Street Address"
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleChange}
          ></textarea>
          {errors.streetAddress && <p className="help is-danger">{errors.streetAddress}</p>}
        </div>
        <div className="columns">
          <div className="column is-6">
            <label className="has-text-link">Place of Supply</label>
            <select
              className={`input is-fullwidth mt-2 ${errors.placeOfSupply && 'is-danger'}`}
              name="placeOfSupply"
              value={form.placeOfSupply}
              onChange={handleChange}
            >
              <option value="" disabled>Select Place of Supply</option>
              {adjustMoney.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.placeOfSupply && <p className="help is-danger">{errors.placeOfSupply}</p>}
          </div>
          <div className="column is-6">
            <label className="has-text-link">Pincode</label>
            <input
              type="text"
              className={`input mt-2 ${errors.pincode && 'is-danger'}`}
              placeholder="Enter Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              maxLength={6}
            />
            {errors.pincode && <p className="help is-danger">{errors.pincode}</p>}
          </div>
        </div>
        <div>
          <label className="has-text-link">City</label>
          <input
            type="text"
            className={`input mt-2 ${errors.city && 'is-danger'}`}
            placeholder="Enter City"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <p className="help is-danger">{errors.city}</p>}
        </div>
        <div className="mt-3 is-flex is-justify-content-end">
          <button type="submit" className="button is-primary mr-2">
            Save
          </button>
          <button type="button" className="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGodownForm;
