import { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logoImage from "../../../../assets/images/applogo.png";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    name: "",
    phone: "",
    sno: "",
    billno: "",
    paymenttype: "cheque",
    amount: "",
    total: "",
  });

  useEffect(() => {
    generateUniqueNumbers();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    if (id === "amount") {
      updateTotal(value);
    }
  };

  const generateUniqueNumbers = () => {
    const uniqueNumber = Math.floor(Math.random() * 1000000);
    setFormData((prevData) => ({
      ...prevData,
      sno: uniqueNumber,
      billno: uniqueNumber + 1,
    }));
  };

  const updateTotal = (amountValue) => {
    const amount = parseFloat(amountValue) || 0;
    setFormData((prevData) => ({
      ...prevData,
      total: amount.toFixed(2),
    }));
  };

  const submitForm = () => {
    alert("Form submitted!");
  };

  const downloadForm = () => {
    const input = document.getElementById("form-container");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("form_data.pdf");
    });
  };

  const printForm = () => {
    window.print();
  };

  return (
    <div className="container">
      <div className="box" id="form-container">
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "80px", marginRight: "10px" }}
          />
          <div>
            <p className="title">JAYAM PRINTER</p>
            <p className="subtitle">Payment</p>
          </div>
        </div>

        <div className="field is-horizontal">
          <div
            className="field-label is-normal"
            style={{ justifyContent: "flex-end" }}
          >
            <label className="label" style={{ marginRight: 10 }}>
              Date:
            </label>

            <div className="field-body">
              <div className="field">
                <div className="control" style={{ justifyContent: "flex-end" }}>
                  <input
                    className="input"
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    style={{ borderBottom: "2px solid #333", width: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Name:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Phone Number:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="columns">
          <div className="column is-3 field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">S.No:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="sno"
                    value={formData.sno}
                    readOnly
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" column is-3 field is-horizontal ">
            <div className="field-label is-normal">
              <label className="label">Bill No:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="billno"
                    value={formData.billno}
                    readOnly
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" column is-3 field is-horizontal ">
            <div className="field-label is-normal">
              <label className="label">Payment Type:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div className="select">
                    <select
                      id="paymenttype"
                      value={formData.paymenttype}
                      onChange={handleInputChange}
                      style={{ width: "150px" }}
                    >
                      <option value="cheque">Cheque</option>
                      <option value="upi">UPI</option>
                      <option value="neft">NEFT</option>
                      <option value="bhim">BHIM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" column is-3 field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Amount:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    id="amount"
                    value={formData.amount}
                    onChange={(e) => handleInputChange(e)}
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal  ">
          <div
            className="field-label is-normal"
            style={{ justifyContent: "flex-end" }}
          >
            <label className="label">Total:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="total"
                value={formData.total}
                readOnly
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            <div className="field-body">
              <div className="field">
                <div className="control" style={{ justifyContent: "flex-end" }}>
                  <p className="content"> JAYAM PRINTER</p>
                  <p className="content"> sign</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="field is-horizontal"
          style={{ justifyContent: "flex-end" }}
        >
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary ml-2" onClick={submitForm}>
                  Submit
                </button>
                <button className="button is-info ml-2" onClick={downloadForm}>
                  Download
                </button>
                <button className="button is-warning ml-2" onClick={printForm}>
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
