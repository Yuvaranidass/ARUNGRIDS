import { AppLogo } from "../../../services/ImageServices";
const Invoice = () => {
  return (
    <div
      className="container is-max-desktop"
      style={{
        maxWidth: "600px",
        border: "1px solid #e3e3e3",
        fontSize: "14px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="columns is-vcentered" style={{ marginBottom: "20px" }}>
          <div className="column is-narrow">
            <figure className="image is-64x64">
              <img src={AppLogo} alt="AppLogo" />
            </figure>
          </div>
          <div className="column">
            <h1
              className="title is-4 has-text-centered"
              style={{ color: "black" }}
            >
              SJ Printers
            </h1>
          </div>
          <div className="column has-text-right">
            <p className="has-text-weight-bold" style={{ color: "#333" }}>
              Mobile: 123456789
            </p>
          </div>
        </div>

        <div className="columns" style={{ marginBottom: "20px" }}>
          <div className="column">
            <h4 className="title is-5" style={{ color: "black" }}>
              Bill To:
            </h4>
            <p>Sample Party</p>
            <p>Address: No.90, Outer Circle, Chennai, 609879</p>
            <p>Mobile: 123456789</p>
          </div>
          <div className="column">
            <h4 className="title is-5" style={{ color: "black" }}>
              Ship To:
            </h4>
            <p>Sample Party</p>
            <p>Address: No.90, Outer Circle, Chennai, 609879</p>
            <p>Mobile: 123456789</p>
          </div>
        </div>

        <div
          className="content"
          style={{
            marginBottom: "20px",
            backgroundColor: "#e3f2fd",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <h4 className="title is-5" style={{ color: "black" }}>
            Invoice No.: AABCCDD/2023
          </h4>
          <p>
            Date: <strong>17/01/2023</strong>
          </p>
          <p>
            Due Date: <strong>16/02/2023</strong>
          </p>
        </div>

        <table
          className="table is-bordered is-fullwidth"
          style={{ marginBottom: "20px", borderColor: "#007bff" }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "black", color: "#fff" }}>S.NO</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>ITEMS</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>QTY.</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>RATE</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Samsung A30
                <br />
                <small>Samsung Phone</small>
              </td>
              <td>1 PCS</td>
              <td>11,800</td>
              <td>11,800</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Parle G 200g
                <br />
                <small>Best Biscuits</small>
              </td>
              <td>1 BOX</td>
              <td>360</td>
              <td>360</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Puma Blue Round Neck T-Shirt</td>
              <td>2 PCS</td>
              <td>945</td>
              <td>1,890</td>
            </tr>
          </tbody>
        </table>

        <div className="has-text-right" style={{ marginBottom: "20px" }}>
          <p>
            <strong>Total:</strong> ₹14,050
          </p>
          <p>
            <strong>Received Amount:</strong> ₹4,453.5
          </p>
          <p>
            <strong>Balance Amount:</strong> ₹9,596.5
          </p>
        </div>

        <div
          className="content"
          style={{
            marginBottom: "20px",
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <h4 className=" is-5" style={{ color: "black" }}>
            Terms and Conditions
          </h4>
          <p>1. Goods once sold will not be taken back or exchanged</p>
          <p>
            2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
            only
          </p>
        </div>

        <div className="has-text-right">
          <p style={{ color: "black" }}>Authorized Signatory For</p>
          <p>SJ Printers</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
