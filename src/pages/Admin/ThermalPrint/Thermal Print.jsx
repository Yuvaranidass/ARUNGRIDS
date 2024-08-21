import { useState } from "react";
import "bulma/css/bulma.min.css";
import { SmartDarkButton } from "dark_power25";

const ThermalPrint = () => {
  const [paperSize, setPaperSize] = useState(
    localStorage.getItem("paperSize") || "3 inch"
  );

  const handlePaperSizeChange = (size) => {
    setPaperSize(size);
  };

  function handleCancel() {
    setPaperSize("3 inch");
  }

  const handleSave = () => {
    localStorage.setItem("paperSize", paperSize);
    alert("Settings saved");
  };
  const size = [
    {
      name: "3 inch",
      value: "3 inch",
    },
    {
      name: "2 inch",
      value: "2 inch",
    },
  ];
  return (
    <div className=" py-4 px-4">
      <div className="is-flex is-justify-content-space-between">
        <div className="title is-5">ThermalPrint</div>
        <div className="mx-2">
          <SmartDarkButton
            label="Cancel"
            leftIcon="fas fa-times"
            classList={["is-whith mx-2"]}
            onClick={handleCancel}
          />
          <SmartDarkButton
            label="Save"
            leftIcon="fas fa-save"
            classList={["is-link"]}
            onClick={handleSave}
          />
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-4 is-one-quarter">
          <div className="field">
            <label className="label">Select paper size</label>
            <hr />
            <div className="field">
              <div className="control has-icons-right">
                <select
                  value={paperSize}
                  onChange={(e) => handlePaperSizeChange(e.target.value)}
                  className="input"
                >
                  {size.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <span className="icon is-small is-right">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>

          {/* <SmartDarkButton
                        label="Print"
                        leftIcon="fas fa-print"
                        classList={["is-link mx-3 mt-5"]}
                        onClick={handlePrint}
                    /> */}
        </div>

        <div className="column is-8 is-flex is-justify-content-center">
          <div
            className="print-preview"
            style={{
              width: paperSize === "2 inch" ? "2in" : "3in",
              padding: "10px",
              border: "1px solid #000",
              overflowX: "auto",
            }}
          >
            <div className="invoice">
              <h2 className="title is-size-4">JAYAM PRINTERS</h2>
              <p>HSR Layout, Bengaluru, Karnataka, 560102</p>
              <p>Mobile: 8439474123</p>
              <p>Date: 23-09-2022</p>
              <p>Invoice Number: 2</p>
              <p>Bill To: Cash sale</p>
              <hr />
              <div
                className=""
                style={{ fontSize: paperSize === "2 inch" ? "8px" : "10px" }}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Item Description</th>
                    <th>Qty</th>
                    <th>Units</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Bisk Farm Tidbit 200 Gm</td>
                    <td>1</td>
                    <td>PCS</td>
                    <td>20.00</td>
                    <td>20.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Cadbury Celebrations Premium Assorted Chocolate Gift Pack,
                      258.3 Gm
                    </td>
                    <td>1</td>
                    <td>PCS</td>
                    <td>250.00</td>
                    <td>250.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Gowdas Coffee Premium 250 Gm</td>
                    <td>1</td>
                    <td>PCS</td>
                    <td>50.00</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Heritage Vanilla Agarbhatti 1 Pc</td>
                    <td>1</td>
                    <td>PCS</td>
                    <td>20.00</td>
                    <td>20.00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Top Top Blend Coffee 250 Gm</td>
                    <td>1</td>
                    <td>PCS</td>
                    <td>50.00</td>
                    <td>50.00</td>
                  </tr>
                </tbody>
              </div>
              <hr />
              <p>Shipping Charges: 40.00</p>
              <p>Discount: 0.00</p>
              <p>Total Amount: Rs 709.52</p>
              <p>Paid Amount: Rs 800</p>
              <p>Balance Amount: Rs 90.48</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermalPrint;
