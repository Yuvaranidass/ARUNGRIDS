import { AppLogo } from "../../../services/ImageServices";

const Invoice = () => {
  const items = [
    {
      id: 1,
      name: "Samsung A30",
      description: "Samsung Phone",
      qty: 1,
      rate: 11800,
      hsn: "1234",
    },
    {
      id: 2,
      name: "Parle G 200g",
      description: "Best Biscuits",
      qty: 1,
      rate: 360,
      hsn: "5678",
    },
  ];

  // Calculate totals and taxes
  const CGST_RATE = 9; // 9%
  const SGST_RATE = 9; // 9%

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.qty * item.rate, 0);

  const totalAmount = calculateTotal(items);
  const CGSTAmount = (totalAmount * CGST_RATE) / 100;
  const SGSTAmount = (totalAmount * SGST_RATE) / 100;
  const totalTaxValue = CGSTAmount + SGSTAmount;
  const finalTotal = totalAmount + totalTaxValue;

  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
        margin: "auto",
        border: "1px solid black",
        padding: "5px",
      }}
    >
      <div style={{ padding: "5px", fontSize: "0.7rem" }}>
        <div className="columns is-vcentered" style={{ marginBottom: "5px" }}>
          <div className="column is-narrow">
            <figure className="image is-32x32">
              <img src={AppLogo} alt="AppLogo" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-6">SJ Printers</h1>
          </div>
          <div className="column has-text-right">
            <p>Advanced GST</p>
            <p>Mobile: 123456789</p>
          </div>
        </div>

        <div className="columns is-mobile" style={{ marginBottom: "5px" }}>
          <div className="column is-half" style={{ fontSize: "0.7rem" }}>
            <p>
              <strong>Name:</strong> [xxx]
            </p>
            <p>
              <strong>Address:</strong> [Address]
            </p>
            <p>
              <strong>Phone Number:</strong> [1234567890]
            </p>
          </div>
          <div className="column is-half" style={{ fontSize: "0.7rem" }}>
            <p>
              <strong>Invoice No.:</strong> [0012345]
            </p>
            <p>
              <strong>Invoice Date:</strong> [098765]
            </p>
          </div>
        </div>

        <table
          className="table is-bordered is-fullwidth"
          style={{ fontSize: "0.7rem", marginBottom: "5px" }}
        >
          <thead>
            <tr>
              <th>S.NO</th>
              <th>ITEMS</th>
              <th>QTY.</th>
              <th>AMOUNT</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>TAX</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const itemAmount = item.qty * item.rate;
              const itemCGSTAmount = (itemAmount * CGST_RATE) / 100;
              const itemSGSTAmount = (itemAmount * SGST_RATE) / 100;
              const itemTaxValue = itemCGSTAmount + itemSGSTAmount;
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.name}
                    <br />
                    <small>{item.description}</small>
                  </td>
                  <td>{item.qty}</td>
                  <td>{itemAmount.toLocaleString("en-IN")}</td>
                  <td>{itemCGSTAmount.toLocaleString("en-IN")}</td>
                  <td>{itemSGSTAmount.toLocaleString("en-IN")}</td>
                  <td>{itemTaxValue.toLocaleString("en-IN")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="content"
          style={{ marginTop: "10px", fontSize: "0.7rem" }}
        >
          <h4 className="title is-6">Advanced GST Details</h4>
          <table
            className="table is-bordered is-fullwidth"
            style={{ fontSize: "0.7rem" }}
          >
            <thead>
              <tr>
                <th>HSN/SAC</th>
                <th>Taxable Value</th>
                <th>Central Tax</th>
                <th>State Tax</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const itemAmount = item.qty * item.rate;
                const itemCGSTAmount = (itemAmount * CGST_RATE) / 100;
                const itemSGSTAmount = (itemAmount * SGST_RATE) / 100;
                return (
                  <tr key={item.id}>
                    <td>{item.hsn}</td>
                    <td>{itemAmount.toLocaleString("en-IN")}</td>
                    <td>{itemCGSTAmount.toLocaleString("en-IN")}</td>
                    <td>{itemSGSTAmount.toLocaleString("en-IN")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="has-text-right" style={{ fontSize: "0.7rem" }}>
          <p>
            <strong>Total Amount:</strong> ₹
            {totalAmount.toLocaleString("en-IN")}
          </p>
          <p>
            <strong>Total CGST:</strong> ₹{CGSTAmount.toLocaleString("en-IN")}
          </p>
          <p>
            <strong>Total SGST:</strong> ₹{SGSTAmount.toLocaleString("en-IN")}
          </p>
          <p>
            <strong>Total Tax Value:</strong> ₹
            {totalTaxValue.toLocaleString("en-IN")}
          </p>
          <p>
            <strong>Final Total (including taxes):</strong> ₹
            {finalTotal.toLocaleString("en-IN")}
          </p>
          <p>
            <strong>Received Amount:</strong> ₹4,453.5
          </p>
          <p>
            <strong>Balance Amount:</strong> ₹
            {(finalTotal - 4453.5).toLocaleString("en-IN")}
          </p>
        </div>

        <div className="content" style={{ fontSize: "0.7rem" }}>
          <h4 className="title is-6">Terms and Conditions</h4>
          <p>1. Goods once sold will not be taken back or exchanged</p>
          <p>
            2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
            only
          </p>
        </div>

        <div className="has-text-right" style={{ fontSize: "0.7rem" }}>
          <p>Authorized Signatory For</p>
          <p>SJ Printers</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
