

const ProductSetup = () => {
  const styles = {
    container: {
      backgroundColor: '#e6eaf2',
      border: '1px solid #d2dae4',
      padding: '20px',
      width: '100%',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      color: '#003366',
      marginBottom: '20px',
      textDecoration: 'underline',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
    },
    section: {
      border: '1px solid #003366',
      padding: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '5px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    select: {
      width: '100%',
      padding: '5px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      border: '1px solid #ccc',
      padding: '5px',
      textAlign: 'center',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ccc',
      padding: '5px',
      textAlign: 'center',
    },
    footer: {
      gridColumn: 'span 3',
      borderTop: '1px solid #003366',
      paddingTop: '10px',
    },
    buttons: {
      gridColumn: 'span 3',
      textAlign: 'right',
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#003366',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      marginLeft: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    buttonHover: {
      backgroundColor: '#002244',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>PRODUCT SETUP</h2>
      <div style={styles.grid}>
        <div style={styles.section}>
          <label style={styles.label}>Code number</label>
          <input type="text" value="10001" readOnly style={styles.input} />
          <label style={styles.label}>Product name</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>Section type</label>
          <select style={styles.select}></select>
          <label style={styles.label}>Category</label>
          <select style={styles.select}></select>
          <label style={styles.label}>Supplier name</label>
          <select style={styles.select}></select>
          <label style={styles.label}>No of decimals</label>
          <input type="number" style={styles.input} />
          <label style={styles.label}>Tax code</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={styles.section}>
          <label style={styles.label}>Cost price</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>MARGIN %</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>WS Price</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>Sale price</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>M.R.P</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={styles.section}>
          <label style={styles.label}>UNITS</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>OPENING STOCK</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>Expiry Date</label>
          <input type="date" style={styles.input} />
          <label style={styles.label}>Minimum stock level</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>ALLOW POINTS</label>
          <input type="checkbox" />
          <label style={styles.label}>ACTIVE/INACTIVE</label>
          <div>
            <label>Yes</label>
            <input type="radio" name="status" />
            <label>No</label>
            <input type="radio" name="status" />
          </div>
        </div>

        <div style={{ ...styles.section, gridColumn: 'span 3' }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>BARCODE</th>
                <th style={styles.th}>MRP1</th>
                <th style={styles.th}>Price 1</th>
                <th style={styles.th}>MRP2</th>
                <th style={styles.th}>Price 2</th>
                <th style={styles.th}>MRP3</th>
                <th style={styles.th}>Price 3</th>
                <th style={styles.th}>MRP4</th>
                <th style={styles.th}>Price 4</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, index) => (
                <tr key={index}>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                  <td><input type="text" style={styles.input} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.footer}>
          <label style={styles.label}>Product name in Tamil</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={styles.buttons}>
          <button style={styles.button}>Add</button>
          <button style={styles.button}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSetup;
