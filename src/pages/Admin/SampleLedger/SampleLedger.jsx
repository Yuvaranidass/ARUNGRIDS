import  { useState } from "react";
import "./SampleLedger.css";
import "bulma/css/bulma.min.css";

const SampleLedger = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    client: "",
    payment: "",
    invoice: "",
    debit: "",
    credit: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      ...formData,
      debit: parseFloat(formData.debit) || 0,
      credit: parseFloat(formData.credit) || 0
    };
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setFormData({
      date: "",
      client: "",
      payment: "",
      invoice: "",
      debit: "",
      credit: ""
    });
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.debit - transaction.credit, 0).toFixed(2);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Ledger Software</h1>
        <div className="box sampleledgerbox">
          <form className="columns is-multiline">
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Client Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="client"
                    value={formData.client}
                    onChange={handleChange}
                    placeholder="Client Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Mode of Payment</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    placeholder="Mode of Payment"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Invoice No</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="invoice"
                    value={formData.invoice}
                    onChange={handleChange}
                    placeholder="Invoice No"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Debit</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    id="debit"
                    value={formData.debit}
                    onChange={handleChange}
                    placeholder="Debit"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <label className="label">Credit</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    id="credit"
                    value={formData.credit}
                    onChange={handleChange}
                    placeholder="Credit"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="field">
                <div className="control">
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={handleAddTransaction}
                  >
                    Add Transaction
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="box sampleledgerbox">
          <h2 className="subtitle">Transactions</h2>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Date</th>
                <th>Client Name</th>
                <th>Mode of Payment</th>
                <th>Invoice No</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id="transaction-list">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.client}</td>
                  <td>{transaction.payment}</td>
                  <td>{transaction.invoice}</td>
                  <td>{transaction.debit.toFixed(2)}</td>
                  <td>{transaction.credit.toFixed(2)}</td>
                  <td>{(transaction.debit - transaction.credit).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="box sampleledgerbox">
          <h2 className="subtitle">Summary</h2>
          <p id="balance" className="has-text-centered">Balance: ${calculateBalance()}</p>
        </div>
      </div>
    </section>
  );
};

export default SampleLedger;
