import { useEffect, useState } from "react";
import axios from "axios";

const StockMovements = () => {
  const [stockMovements, setStockMovements] = useState([]);
  const [formData, setFormData] = useState({
    movement_date: "",
    name: "",
    sku: "",
    supplier_code: "",
    opening_stock_qty: "",
    opening_stock_amount: "",
    stockin_qty: "",
    stockin_amount: "",
    stockout_qty: "",
    stockout_amount: "",
    closing_stock_qty: "",
    closing_stock_amount: "",
  });

  const fetchStockMovements = () => {
    axios
      .get("http://localhost:8000/api/stock")
      .then((response) => {
        setStockMovements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the stock movements!", error);
      });
  };

  useEffect(() => {
    fetchStockMovements();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/stock", formData)
      .then(() => {
        fetchStockMovements();
      })
      .catch((error) => {
        console.error("Error adding the stock movement!", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .post(`http://localhost:8000/api/stock/${id}`)
      .then(() => {
        fetchStockMovements();
      })
      .catch((error) => {
        console.error("Error deleting the stock movement!", error);
      });
  };

  return (
    <div>
      <h1>Stock Movements</h1>
      <form onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column">
            <label htmlFor="movement_date">Movement Date</label>
            <input
              type="date"
              name="movement_date"
              onChange={handleInputChange}
              required
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              required
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              name="sku"
              placeholder="SKU"
              onChange={handleInputChange}
              required
              className="input"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label htmlFor="supplier_code">Supplier Code</label>
            <input
              type="text"
              name="supplier_code"
              placeholder="Supplier Code"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="opening_stock_qty">Opening Stock Qty</label>
            <input
              type="number"
              name="opening_stock_qty"
              placeholder="Opening Stock Qty"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="opening_stock_amount">Opening Stock Amount</label>
            <input
              type="number"
              step="0.01"
              name="opening_stock_amount"
              placeholder="Opening Stock Amount"
              onChange={handleInputChange}
              className="input"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label htmlFor="stockin_qty">Stockin Qty</label>
            <input
              type="number"
              name="stockin_qty"
              placeholder="Stockin Qty"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="stockin_amount">Stockin Amount</label>
            <input
              type="number"
              step="0.01"
              name="stockin_amount"
              placeholder="Stockin Amount"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="stockout_qty">Stockout Qty</label>
            <input
              type="number"
              name="stockout_qty"
              placeholder="Stockout Qty"
              onChange={handleInputChange}
              className="input"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label htmlFor="stockout_amount">Stockout Amount</label>
            <input
              type="number"
              step="0.01"
              name="stockout_amount"
              placeholder="Stockout Amount"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="closing_stock_qty">Closing Stock Qty</label>
            <input
              type="number"
              name="closing_stock_qty"
              placeholder="Closing Stock Qty"
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="column">
            <label htmlFor="closing_stock_amount">Closing Stock Amount</label>
            <input
              type="number"
              step="0.01"
              name="closing_stock_amount"
              placeholder="Closing Stock Amount"
              onChange={handleInputChange}
              className="input"
            />
          </div>
        </div>
        <button type="submit" className="button is-info">
          Add Stock Movement
        </button>
      </form>
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movement Date</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Supplier Code</th>
            <th>Opening Stock Qty</th>
            <th>Opening Stock Amount</th>
            <th>Stockin Qty</th>
            <th>Stockin Amount</th>
            <th>Stockout Qty</th>
            <th>Stockout Amount</th>
            <th>Closing Stock Qty</th>
            <th>Closing Stock Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stockMovements.map((movement) => (
            <tr key={movement.id}>
              <td>{movement.id}</td>
              <td>{movement.movement_date}</td>
              <td>{movement.name}</td>
              <td>{movement.sku}</td>
              <td>{movement.supplier_code}</td>
              <td>{movement.opening_stock_qty}</td>
              <td>{movement.opening_stock_amount}</td>
              <td>{movement.stockin_qty}</td>
              <td>{movement.stockin_amount}</td>
              <td>{movement.stockout_qty}</td>
              <td>{movement.stockout_amount}</td>
              <td>{movement.closing_stock_qty}</td>
              <td>{movement.closing_stock_amount}</td>
              <td>
                <button onClick={() => handleDelete(movement.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockMovements;
