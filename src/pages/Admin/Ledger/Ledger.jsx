import { useState } from 'react';

const AccountFormat = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gstin, setGstin] = useState('');
  const [email, setEmail] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [entries, setEntries] = useState([]);

  const [date, setDate] = useState('');
  const [creditDebit, setCreditDebit] = useState('');
  const [particulars, setParticulars] = useState('');
  const [voucherType, setVoucherType] = useState('');
  const [voucherNumber, setVoucherNumber] = useState('');
  const [debit, setDebit] = useState('');
  const [credit, setCredit] = useState('');

  const handleAddEntry = () => {
    const newEntry = {
      date,
      creditDebit,
      particulars,
      voucherType,
      voucherNumber,
      debit,
      credit,
    };
    setEntries([...entries, newEntry]);
    setDate('');
    setCreditDebit('');
    setParticulars('');
    setVoucherType('');
    setVoucherNumber('');
    setDebit('');
    setCredit('');
  };

  const styles = {
    container: {
      width: '90%',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    tableContainer: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      border: '1px solid #ccc',
      padding: '8px',
      backgroundColor: '#f9f9f9',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ccc',
      padding: '8px',
      textAlign: 'left',
    },
    tableHeader: {
      backgroundColor: '#4CAF50',
      color: 'white',
      textAlign: 'left',
      padding: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Account Format</h1>
      <div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone No.:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>GSTIN No.:</label>
          <input
            type="text"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Time Period:</label>
          <input
            type="text"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            style={styles.input}
          />
        </div>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Credit / Debit</th>
              <th style={styles.th}>Particulars</th>
              <th style={styles.th}>Voucher Type</th>
              <th style={styles.th}>Voucher Number</th>
              <th style={styles.th}>Debit</th>
              <th style={styles.th}>Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" style={styles.td}>Opening Balance</td>
            </tr>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td style={styles.td}>{entry.date}</td>
                <td style={styles.td}>{entry.creditDebit}</td>
                <td style={styles.td}>{entry.particulars}</td>
                <td style={styles.td}>{entry.voucherType}</td>
                <td style={styles.td}>{entry.voucherNumber}</td>
                <td style={styles.td}>{entry.debit}</td>
                <td style={styles.td}>{entry.credit}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="7" style={styles.td}>Closing Balance</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 style={styles.header}>Add New Entry</h2>
      <form onSubmit={handleAddEntry}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Credit / Debit:</label>
          <input
            type="text"
            value={creditDebit}
            onChange={(e) => setCreditDebit(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Particulars:</label>
          <input
            type="text"
            value={particulars}
            onChange={(e) => setParticulars(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Voucher Type:</label>
          <input
            type="text"
            value={voucherType}
            onChange={(e) => setVoucherType(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Voucher Number:</label>
          <input
            type="text"
            value={voucherNumber}
            onChange={(e) => setVoucherNumber(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Debit:</label>
          <input
            type="number"
            value={debit}
            onChange={(e) => setDebit(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Credit:</label>
          <input
            type="number"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="button" onClick={handleAddEntry} style={styles.button}>
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AccountFormat;
