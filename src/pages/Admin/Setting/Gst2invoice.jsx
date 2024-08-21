import { AppLogo } from "../../../services/ImageServices";

const Invoice = () => {
  // Sample data for invoice items
  const items = [
    {
      id: 1,
      name: "Samsung A30",
      description: "Samsung Phone",
      qty: 1,
      rate: 11800,
    },
    {
      id: 2,
      name: "Parle G 200g",
      description: "Best Biscuits",
      qty: 1,
      rate: 360,
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
        maxWidth: "600px",
        margin: "auto",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div className="columns is-vcentered">
          <div className="column is-narrow">
            <figure className="image is-48x48">
              <img src={AppLogo} alt="AppLogo" />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="title is-5">SJ Printers</h1>
          </div>
          <div className="column has-text-right">
            <p>Advanced GST Tally</p>
            <p>Mobile: 123456789</p>
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-half">
            <h4 className="title is-6">Bill To:</h4>
            <p>Sample Party</p>
            <p>Address: No.90, Outer Circle, Chennai, 609879</p>
            <p>Mobile: 123456789</p>
          </div>
          <div className="column is-half">
            <h4 className="title is-6">Ship To:</h4>
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
          <h4 className="title is-6">Invoice No.: AABCCDD/2023</h4>
          <p>Invoice Date: 17/01/2023</p>
          <p>Due Date: 16/02/2023</p>
        </div>

        <table
          className="table is-bordered is-fullwidth"
          style={{ fontSize: "0.75rem" }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "black", color: "#fff" }}>S.NO</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>ITEMS</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>QTY.</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>
                AMOUNT
              </th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>CGST</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>SGST</th>
              <th style={{ backgroundColor: "black", color: "#fff" }}>TAX</th>
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
                  <td>{item.qty} PCS</td>
                  <td>{itemAmount.toLocaleString("en-IN")}</td>
                  <td>{itemCGSTAmount.toLocaleString("en-IN")}</td>
                  <td>{itemSGSTAmount.toLocaleString("en-IN")}</td>
                  <td>{itemTaxValue.toLocaleString("en-IN")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="has-text-right" style={{ fontSize: "0.75rem" }}>
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

        <div className="content" style={{ fontSize: "0.75rem" }}>
          <h4 className="title is-6">Terms and Conditions</h4>
          <p>1. Goods once sold will not be taken back or exchanged</p>
          <p>
            2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
            only
          </p>
        </div>

        <div className="has-text-right" style={{ fontSize: "0.75rem" }}>
          <p>Authorized Signatory For</p>
          <p>SJ Printers</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
