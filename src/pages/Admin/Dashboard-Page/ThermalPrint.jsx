

const ThermalPrint = ({ rows = [], totalAmount = 0, gstDetails = [] }) => {
  // Convert totalAmount to a number and handle undefined or non-numeric values
  const formattedTotalAmount = parseFloat(totalAmount) ? parseFloat(totalAmount).toFixed(2) : '0.00';

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`;
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={thermalStyles.container}>
      <h2 style={thermalStyles.header}>Arun Perumal & Co</h2>
      
      {/* Date and Time */}
      <div style={thermalStyles.dateTime}>
        <span>{formattedDate}</span>
        <span style={thermalStyles.time}>{formattedTime}</span>
      </div>

      <div style={thermalStyles.table}>
        {/* Table Headers */}
        <div style={thermalStyles.tableHeader}>
          <span style={thermalStyles.headerItem}>Item Name</span>
          <span style={thermalStyles.headerItem}>Qty x Rate = Value</span>
        </div>
        {/* Table Rows */}
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div key={index} style={thermalStyles.row}>
              <span style={thermalStyles.itemName}>{row.productName}</span>
              <span>{row.qty} x {row.rate} = {row.value.toFixed(2)}</span>
            </div>
          ))
        ) : (
          <div style={thermalStyles.row}>
            <span>No items found</span>
          </div>
        )}
      </div>
      {/* GST Details */}
      <div style={thermalStyles.gstSection}>
        <h3 style={thermalStyles.gstHeader}>GST Details</h3>
        {gstDetails.length > 0 ? (
          gstDetails.map((gst, index) => (
            <div key={index} style={thermalStyles.gstRow}>
              <span style={thermalStyles.gstLabel}>{gst.type}:</span>
              <span>{gst.amount.toFixed(2)}</span>
            </div>
          ))
        ) : (
          <div style={thermalStyles.gstRow}>
            <span>No GST details</span>
          </div>
        )}
      </div>
      {/* Total Amount */}
      <div style={thermalStyles.total}>
        <span>Total Amount:</span>
        <span>{formattedTotalAmount}</span>
      </div>
    </div>
  );
};

// Define your styles
const thermalStyles = {
  container: {
    width: '100%',
    maxWidth: '300px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #000',
    padding: '10px',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontSize: '16px',
    margin: '0 0 10px',
    fontWeight: 'bold',
  },
  dateTime: {
    textAlign: 'right',
    fontSize: '12px',
    marginBottom: '10px',
  },
  time: {
    marginLeft: '10px',  // Adds gap between date and time
  },
  table: {
    marginBottom: '10px',
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #000',
    paddingBottom: '5px',
    marginBottom: '5px',
  },
  headerItem: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
    borderBottom: '1px solid #ddd',
  },
  itemName: {
    flex: 1,
    textAlign: 'left',
  },
  gstSection: {
    marginBottom: '10px',
  },
  gstHeader: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0 0 5px',
  },
  gstRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3px 0',
  },
  gstLabel: {
    fontWeight: 'bold',
  },
  total: {
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'right',
  },
};

export default ThermalPrint;
