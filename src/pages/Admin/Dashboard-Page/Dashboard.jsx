import { useState, useEffect } from "react";
import ThermalPrint from "./ThermalPrint";

function Dashboard() {
  const [showThermalPrint, setShowThermalPrint] = useState(false);

  const handleSubmit = () => {
    setShowThermalPrint(true);
  };

  const handleCancel = () => {
    // Clear all input fields or reset the form as needed
    setRows([
      {
        barcode: "",
        code: "",
        mrp: "",
        productName: "",
        rate: "",
        qty: 1,
        value: 0,
      },
    ]);
    setAmountTendered("");
    setOldPoints("");
    setNewPoints("");
    setAmountRefundable(0);
    setTotalAmount(0);
    setShowThermalPrint(false);
  };

  const [date, setDate] = useState(new Date());
  const [billNumber, setBillNumber] = useState("");
  const [rows, setRows] = useState([
    {
      barcode: "",
      code: "",
      mrp: "",
      productName: "",
      rate: "",
      qty: 1,
      value: 0,
    },
  ]);
  const [oldPoints, setOldPoints] = useState("");
  const [newPoints, setNewPoints] = useState("");
  const [amountTendered, setAmountTendered] = useState("");
  const [amountRefundable, setAmountRefundable] = useState(0);
  const [terms, setTerms] = useState("Cash");
  const [totalAmount, setTotalAmount] = useState(0);

  const products = [
    {
      barcode: "1001",
      code: "1001",
      mrp: "100",
      productName: "Manjal",
      rate: "95",
    },
    {
      barcode: "1002",
      code: "1002",
      mrp: "200",
      productName: "Dairy Milk",
      rate: "190",
    },
    {
      barcode: "1003",
      code: "1003",
      mrp: "300",
      productName: "Kitkat",
      rate: "285",
    },
    // Add more products as needed
  ];

  useEffect(() => {
    const generatedBillNumber = `A${Math.floor(Math.random() * 100000)}`;
    setBillNumber(generatedBillNumber);

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [rows]);

  const calculateTotalAmount = () => {
    const total = rows.reduce(
      (sum, row) => sum + parseFloat(row.value || 0),
      0
    );
    setTotalAmount(total);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    if (field === "barcode") {
      const product = products.find((p) => p.barcode === value);
      if (product) {
        newRows[index].code = product.code;
        newRows[index].mrp = product.mrp;
        newRows[index].productName = product.productName;
        newRows[index].rate = product.rate;
        newRows[index].value = parseFloat(product.rate) * newRows[index].qty;
      }
    }

    if (field === "rate" || field === "qty") {
      const rate = parseFloat(newRows[index].rate) || 0;
      const qty = parseFloat(newRows[index].qty) || 0;
      newRows[index].value = rate * qty;
    }

    setRows(newRows);

    if (index === rows.length - 1 && field !== "value" && value) {
      setRows([
        ...newRows,
        {
          barcode: "",
          code: "",
          mrp: "",
          productName: "",
          rate: "",
          qty: 1,
          value: 0,
        },
      ]);
    }
  };

  const handleAmountTenderedChange = (e) => {
    const tendered = parseFloat(e.target.value) || 0;
    setAmountTendered(tendered);
    setAmountRefundable(tendered - totalAmount);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>ARUN PERUMAL & CO</header>
      <div style={styles.billInfo}>
        <div style={styles.infoItem}>
          <span style={styles.label}>Bill Number:</span>
          <input type="text" value={billNumber} readOnly style={styles.input} />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Date:</span>
          <input
            type="text"
            value={date.toLocaleDateString()}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Time:</span>
          <input
            type="text"
            value={date.toLocaleTimeString()}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.amountLabel}>Total Rs:</span>
          <span style={styles.amount}>{totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>SNo</th>
            <th style={styles.tableHeader}>Bar code</th>
            <th style={styles.tableHeader}>Code</th>
            <th style={styles.tableHeader}>M.R.P</th>
            <th style={styles.tableHeader}>Product name</th>
            <th style={styles.tableHeader}>Rate</th>
            <th style={styles.tableHeader}>Qty</th>
            <th style={styles.tableHeader}>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}
            >
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.barcode}
                  onChange={(e) =>
                    handleInputChange(index, "barcode", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.code}
                  onChange={(e) =>
                    handleInputChange(index, "code", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.mrp}
                  onChange={(e) =>
                    handleInputChange(index, "mrp", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.productName}
                  onChange={(e) =>
                    handleInputChange(index, "productName", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="number"
                  value={row.qty}
                  onChange={(e) =>
                    handleInputChange(index, "qty", e.target.value)
                  }
                  style={styles.input}
                  min="1"
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  value={row.value.toFixed(2)}
                  readOnly
                  style={styles.input}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.customerInfo}>
        <div style={styles.infoItem}>
          <span style={styles.label}>Customer Name:</span>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Mobile:</span>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Area:</span>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Points:</span>
          <input type="text" style={styles.input} />
        </div>
      </div>
      <div style={styles.pointsTable}>
        <div style={styles.pointRow}>
          <span style={styles.label}>Old Points:</span>
          <input
            type="text"
            value={oldPoints}
            onChange={(e) => setOldPoints(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.pointRow}>
          <span style={styles.label}>New Points:</span>
          <input
            type="text"
            value={newPoints}
            onChange={(e) => setNewPoints(e.target.value)}
            style={styles.input}
          />
        </div>
      </div>
      <div style={styles.amountSection}>
        <div style={styles.amountDetail}>
          <span style={styles.label}>Amount Tendered:</span>
          <input
            type="text"
            value={amountTendered}
            onChange={handleAmountTenderedChange}
            style={styles.input}
          />
        </div>
        <div style={styles.amountDetail}>
          <span style={styles.label}>Amount Refundable:</span>
          <input
            type="text"
            value={amountRefundable.toFixed(2)}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.amountDetail}>
          <span style={styles.label}>Terms:</span>
          <select
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            style={styles.input}
          >
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>
        </div>
      </div>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleSubmit}>
          Submit
        </button>
        <button style={styles.button} onClick={handleCancel}>
          Cancel
        </button>
        {showThermalPrint && (
          <ThermalPrint rows={rows} totalAmount={totalAmount} />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
    color: "#007bff",
  },
  billInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    backgroundColor: "#e9ecef",
    padding: "10px",
    borderRadius: "4px",
  },
  infoItem: {
    flex: "1",
    marginRight: "10px",
  },
  label: {
    fontWeight: "bold",
    marginRight: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
  },
  amountLabel: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#28a745",
    marginTop: "60px",
    
  },
  amount: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#28a745",
    marginLeft: "5px",

  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    border: "1px solid #dee2e6",
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    textAlign: "left",
  },
  tableCell: {
    border: "1px solid #dee2e6",
    padding: "8px",
  },
  tableRowEven: {
    backgroundColor: "#f8f9fa",
  },
  tableRowOdd: {
    backgroundColor: "#ffffff",
  },
  customerInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    backgroundColor: "#e9ecef",
    padding: "10px",
    borderRadius: "4px",
  },
  pointsTable: {
    marginBottom: "20px",
  },
  pointRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  amountSection: {
    marginBottom: "20px",
  },
  amountDetail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  termsSection: {
    marginBottom: "20px",
    backgroundColor: "#f1f3f5",
    padding: "10px",
    borderRadius: "4px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
  },
};

export default Dashboard;
