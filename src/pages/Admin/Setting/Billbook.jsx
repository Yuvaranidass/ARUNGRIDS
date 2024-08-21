import { AppLogo } from "../../../services/ImageServices";

function Invoice() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      <div className="section" style={{ padding: "10px" }}>
        <div className="columns is-vcentered">
          <div className="column is-narrow">
            <figure className="image is-48x48">
              <img src={AppLogo} alt="AppLogo" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-5">SJ Printers</h1>
            <p style={{ fontSize: "0.75rem" }}>
              address, address, address, address
            </p>
            <p style={{ fontSize: "0.75rem" }}>0123456789, 0123456789</p>
            <p style={{ fontSize: "0.75rem" }}>
              sjprinters@email.com, www.sjprinters.com
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-half">
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Name:</strong> [xxx]
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Address:</strong> [Address]
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Phone Number:</strong> [1234567890]
            </p>
          </div>

          <div className="column is-half">
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Invoice No.:</strong> [0012345]
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Invoice Date:</strong> [098765]
            </p>
          </div>
        </div>

        <table
          className="table is-fullwidth is-bordered"
          style={{ fontSize: "0.75rem", marginBottom: "10px" }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "black", color: "#fff" }}>
                Sl.No.
              </th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>
                Description
              </th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>Qty</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>Rate</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sample Item</td>
              <td>1</td>
              <td>₹1000</td>
              <td>₹1000</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="columns">
          <div className="column is-half">
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Rupees in words:</strong> [Amount in Words]
            </p>
          </div>

          <div className="column is-half">
            <p className="has-text-right" style={{ fontSize: "0.75rem" }}>
              <strong>Total:</strong> ₹[Total Amount]
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Terms & Conditions:</strong>
            </p>
            <p style={{ fontSize: "0.75rem" }}>[Terms & Conditions]</p>
          </div>
        </div>

        <div className="columns">
          <div className="column has-text-right">
            <p style={{ fontSize: "0.75rem" }}>
              <strong>Signature:</strong> ___________________
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
