import { useState } from "react";
import "./BusinessSetting.css";

const BusinessSettings = () => {
  const [formValues, setFormValues] = useState({
    businessName: "",
    mobileNumber: "",
    pincode: "",
    email: "",
    city: "",
    state: "",
    businessType: "",
    gstRegistered: false,
    enableEInvoice: false,
    enableTDS: false,
    enableTCS: false,
    industryType: "",
    registrationType: "",
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [gstRegistered, setGstRegistered] = useState(false);
  const [enableEInvoice, setEnableEInvoice] = useState(false);
  const [enableTDS, setEnableTDS] = useState(false);
  const [enableTCS, setEnableTCS] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
            setShowImagePreview(true);
          };
          reader.readAsDataURL(file);
        } else {
          setImagePreview('');
          setShowImagePreview(false);
        }
      };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Basic validation
    if (!formValues.businessName)
      validationErrors.businessName = "Business Name is required";
    if (!formValues.mobileNumber)
      validationErrors.mobileNumber = "Mobile Number is required";
    if (!formValues.pincode) validationErrors.pincode = "Pincode is required";
    if (!formValues.email) validationErrors.email = "Email is required";
    if (!formValues.city) validationErrors.city = "City is required";
    if (!formValues.state) validationErrors.state = "State is required";
    if (!formValues.businessType)
      validationErrors.businessType = "Business Type is required";
    if (!formValues.industryType)
      validationErrors.industryType = "Industry Type is required";
    if (!formValues.registrationType)
      validationErrors.registrationType =
        "Business Registration Type is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Process form submission here
    console.log("Form submitted:", formValues);

    // Reset form fields
    setFormValues({
      businessName: "",
      mobileNumber: "",
      pincode: "",
      email: "",
      city: "",
      state: "",
      businessType: "",
      gstRegistered: false,
      enableEInvoice: false,
      enableTDS: false,
      enableTCS: false,
      industryType: "",
      registrationType: "",
    });
    setErrors({});
    setImagePreview("");
    setShowImagePreview(false);
  };

  const state = [
    {
      label: "Select State",
      value: "Select State",
    },
    {
      label: "Alabama",
      value: "Alabama",
    },
    {
      label: "Alaska",
      value: "Alaska",
    },
    {
      label: "Arizona",
      value: "Arizona",
    },
    {
      label: "Arkansas",
      value: "Arkansas",
    },
  ];
  const business = [
    {
      label: "Select Business Type",
      value: "Select Business Type",
    },
    {
      label: "Retailer",
      value: "Retailer",
    },
    {
      label: "Wholesale",
      value: "Wholesale",
    },
    {
      label: "Services",
      value: "Services",
    },
    {
      label: "Distributor",
      value: "Distributor",
    },
    {
      label: "Manufacturer",
      value: "Manufacturer",
    },
  ];

  const industry = [
    {
      label: "Select Industry Type",
      value: "Select Industry Type",
    },
    {
      label: "Agriculture",
      value: "Agriculture",
    },
    {
      label: "Accounting and Financial",
      value: "Accounting and Financial",
    },
    {
      label: "Automobile",
      value: "Automobile",
    },
    {
      label: "Batter",
      value: "Batter",
    },
    {
      label: "Construction",
      value: "Construction",
    },
    {
      label: "Education",
      value: "Education",
    },
    {
      label: "Electronics",
      value: "Electronics",
    },
    {
      label: "Food",
      value: "Food",
    },
    {
      label: "Healthcare",
      value: "Healthcare",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];
  const register = [
    {
      label: "Select Registration Type",
      value: "Select Registration Type",
    },
    {
      label: "Private Limited Company",
      value: "Private Limited Company",
    },
    {
      label: "Public Limited Company",
      value: "Public Limited Company",
    },
    {
      label: "Partnership Firm",
      value: "Partnership Firm",
    },
    {
      label: "Limited Liability Partnership",
      value: "Limited Liability Partnership",
    },
    {
      label: "One Person Company",
      value: "One Person Company",
    },
  ];
  const [imagePreview1, setImagePreview1] = useState("");

    const handleImageUpload1 = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview1(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
        <div>
            <p className="title">Business Settings</p>
            <div className="profile" onClick={() => document.getElementById('imageUpload').click()}>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      {!showImagePreview ? (
        <span className="placeholder-text">+ Add Profile</span>
      ) : (
        <img
          src={imagePreview}
          alt="Uploaded Preview"
          className="image-preview"
        />
      )}
    </div>
            <form onSubmit={handleSubmit}>
                <div className="columns">
                    <div className="column is-6">
                        <div className={`field ${errors.businessName ? 'has-text-danger' : ''}`}>
                            <label className="label">Business Name</label>
                            <div className="control">
                                <input
                                    className={`input ${errors.businessName ? 'is-danger' : ''}`}
                                    type="text"
                                    name="businessName"
                                    placeholder="Enter your Business name"
                                    value={formValues.businessName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.businessName && <p className="help is-danger">{errors.businessName}</p>}
                        </div>
                        <div className={`field ${errors.mobileNumber ? 'has-text-danger' : ''}`}>
                            <label className="label">Mobile Number</label>
                            <div className="control">
                                <input
                                    className={`input ${errors.mobileNumber ? 'is-danger' : ''}`}
                                    type="text"
                                    name="mobileNumber"
                                    placeholder="Enter your mobile number"
                                    value={formValues.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.mobileNumber && <p className="help is-danger">{errors.mobileNumber}</p>}
                        </div>
                        <div className={`field ${errors.pincode ? 'has-text-danger' : ''}`}>
                            <label className="label">Pincode</label>
                            <div className="control">
                                <input
                                    className={`input ${errors.pincode ? 'is-danger' : ''}`}
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter your Pincode"
                                    value={formValues.pincode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.pincode && <p className="help is-danger">{errors.pincode}</p>}
                        </div>
                        <div className={`field ${errors.email ? 'has-text-danger' : ''}`}>
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    className={`input ${errors.email ? 'is-danger' : ''}`}
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.email && <p className="help is-danger">{errors.email}</p>}
                        </div>
                        <div className={`field ${errors.city ? 'has-text-danger' : ''}`}>
                            <label className="label">City</label>
                            <div className="control">
                                <input
                                    className={`input ${errors.city ? 'is-danger' : ''}`}
                                    type="text"
                                    name="city"
                                    placeholder="Enter your city"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.city && <p className="help is-danger">{errors.city}</p>}
                        </div>
                        <div className={`field ${errors.state ? 'has-text-danger' : ''}`}>
                            <label className="label">State</label>
                            <div className="control has-icons-right">
                                <select
                                    className='input'
                                    name="state"
                                    value={formValues.state}
                                    onChange={handleInputChange}
                                >
                                    {
                                        state.map((item) => (
                                            <option value={item.label}>{item.label}</option>
                                        ))
                                    }
                                </select>
                                <span className="icon is-small is-right">
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            {errors.state && <p className="help is-danger">{errors.state}</p>}
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className={`field ${errors.businessType ? 'has-text-danger' : ''}`}>
                            <label className="label">Business Type (Select multiple, if applicable)</label>
                            <div className="control has-icons-right">
                                <select
                                    className='input'
                                    name="businessType"
                                    value={formValues.businessType}
                                    onChange={handleInputChange}
                                >
                                    {
                                        business.map((item) => (
                                            <option value={item.label}>{item.label}</option>
                                        ))
                                    }
                                </select>
                                <span className='icon is-small is-right'>
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            {errors.businessType && <p className="help is-danger">{errors.businessType}</p>}
                        </div>
                        <div className='columns'>
                            <div className='column'>
                            <div className="field">
                            <label className="label">Are You GST Registered</label>
                            <div className="control">
                                <div class="field">
                                    <input id="switchRoundedDefault"
                                        type="checkbox"
                                        name="switchRoundedDefault"
                                        class="switch is-rounded is-link"
                                        checked={gstRegistered}
                                        onChange={() => setGstRegistered(!gstRegistered)}
                                    />
                                    <label for="switchRoundedDefault"></label>
                                </div>
                                {gstRegistered && <label className='has-text-link'>Yes, I am GST registered</label>}
                            </div>
                        </div>
                            </div>
                            <div className='column'>
                            <div className="field">
                            <label className="label">Enable e-Invoice</label>
                            <div className="control">
                                <div class="field">
                                    <input id="invoice"
                                        type="checkbox"
                                        name="switchRoundedDefault"
                                        class="switch is-rounded is-link"
                                        checked={enableEInvoice}
                                        onChange={() => setEnableEInvoice(!enableEInvoice)}
                                    />
                                    <label for="invoice"></label>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column'>
                            <div className="field">
                            <label className="label">Enable TDS</label>
                            <div className="control">
                                <div class="field">
                                    <input id="tds"
                                        type="checkbox"
                                        name="switchRoundedDefault"
                                        class="switch is-rounded is-link"
                                        checked={enableTDS}
                                        onChange={() => setEnableTDS(!enableTDS)}
                                    />
                                    <label for="tds"></label>
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className='column'>
                            <div className="field">
                            <label className="label">Enable TCS</label>
                            <div className="control">
                                <div class="field">
                                    <input id="tcs"
                                        type="checkbox"
                                        name="switchRoundedDefault"
                                        class="switch is-rounded is-link"
                                        checked={enableTCS}
                                        onChange={() => setEnableTCS(!enableTCS)}
                                    />
                                    <label for="tcs"></label>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        
                        
                        <div className={`field ${errors.industryType ? 'has-text-danger' : ''}`}>
                            <label className="label">Industry Type</label>
                            <div className="control has-icons-right">
                                <select
                                    className='input'
                                    name="industryType"
                                    value={formValues.industryType}
                                    onChange={handleInputChange}
                                >
                                    {
                                        industry.map((item) => (
                                            <option value={item.label}>{item.label}</option>
                                        ))
                                    }
                                </select>
                                <span className="icon is-small is-right">
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            {errors.industryType && <p className="help is-danger">{errors.industryType}</p>}
                        </div>
                        <div className={`field ${errors.registrationType ? 'has-text-danger' : ''}`}>
                            <label className="label">Business Registration Type</label>
                            <div className="control has-icons-right">
                                <select
                                    className='input'
                                    name="registrationType"
                                    value={formValues.registrationType}
                                    onChange={handleInputChange}
                                >
                                    {
                                        register.map((item) => (
                                            <option value={item.label}>{item.label}</option>
                                        ))

                                    }
                                </select>
                                <span className='icon is-small is-right'>
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            {errors.registrationType && <p className="help is-danger">{errors.registrationType}</p>}
                        </div>
                        <div className="container">
                            <h1 className="subtitle"><b>Signature</b></h1>
                            <div
                                className={`addproperty ${imagePreview1 ? "border-hidden" : ""}`}
                                onClick={() => document.getElementById("imageUpload1").click()}
                            >
                                <input
                                    type="file"
                                    id="imageUpload1"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageUpload1}
                                />
                                {!imagePreview1 && (
                                    <span
                                        id="addPartyText1"
                                        style={{ marginBottom: "10px", fontSize: "16px" }}
                                    >
                                        +Add Signature
                                    </span>
                                )}
                                {imagePreview1 && (
                                    <img
                                        id="imagePreview1"
                                        src={imagePreview1}
                                        alt="Uploaded Image Preview"
                                    />
                                )}
                            </div>
                            <p>You have enabled to show Empty Signature box on invoices</p><br />
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button type="submit" className="button is-success">Save</button>
                            </div>
                            <div className="control ml-3"> {/* ml-3 adds margin-left */}
                                <button type="button" className="button is-danger" onClick={() => {
                                    // Reset form fields to empty state
                                    setFormValues({
                                        businessName: '',
                                        mobileNumber: '',
                                        pincode: '',
                                        email: '',
                                        city: '',
                                        state: '',
                                        businessType: '',
                                        gstRegistered: false,
                                        enableEInvoice: false,
                                        enableTDS: false,
                                        enableTCS: false,
                                        industryType: '',
                                        registrationType: '',
                                    });
                                    setErrors({});
                                    setImagePreview('');
                                    setShowImagePreview(false);
                                }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BusinessSettings;
