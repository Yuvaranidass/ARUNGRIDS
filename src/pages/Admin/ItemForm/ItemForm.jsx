import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

const ItemForm = () => {
  const itemSizes = {
    "Friends Card": { sizes: ["A4", "A3"], prices: { "A4": 10, "A3": 20 } },
    "Menu Card": { sizes: ["A4", "A3", "A2"], prices: { "A4": 15, "A3": 25, "A2": 35 } },
    "Binding": { sizes: ["A4", "A3", "A2", "A1"], prices: { "A4": 12, "A3": 22, "A2": 32, "A1": 42 } },
    "Register": { sizes: ["A4", "A3", "A2", "A1", "A0"], prices: { "A4": 18, "A3": 28, "A2": 38, "A1": 48, "A0": 58 } },
    "Transfer Certificate Design": { sizes: ["A4", "A3"], prices: { "A4": 14, "A3": 24 } },
    "Visiting Card": { sizes: ["A4", "A3", "A2"], prices: { "A4": 8, "A3": 18, "A2": 28 } },
    "Digital Banner": { sizes: ["A4", "A3", "A2", "A1"], prices: { "A4": 20, "A3": 30, "A2": 40, "A1": 50 } },
    "Calender": { sizes: ["A4", "A3", "A2", "A1", "A0"], prices: { "A4": 22, "A3": 32, "A2": 42, "A1": 52, "A0": 62 } },
    "Digital Printout": { sizes: ["A4", "A3", "A2", "A1"], prices: { "A4": 5, "A3": 15, "A2": 25, "A1": 35 } },
    "Rubber Stamp": { sizes: ["A4", "A3", "A2", "A1", "A0"], prices: { "A4": 7, "A3": 17, "A2": 27, "A1": 37, "A0": 47 } }
  };

  const [serialNumber, setSerialNumber] = useState(0);
  const [item, setItem] = useState("Friends Card");
  const [size, setSize] = useState("A4");
  const [quantity, setQuantity] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let lastSerialNumber = parseInt(localStorage.getItem('lastSerialNumber')) || 0;
    setSerialNumber(lastSerialNumber + 1);
    localStorage.setItem('lastSerialNumber', lastSerialNumber + 1);
  }, []);

  useEffect(() => {
    const selectedSizes = itemSizes[item]?.sizes || [];
    setSize(selectedSizes[0]);
  }, [item]);

  useEffect(() => {
    const basePrice = itemSizes[item]?.prices[size] || 0;
    setBasePrice(basePrice);
  }, [item, size]);

  useEffect(() => {
    const subtotal = quantity * basePrice;
    const totalAmount = subtotal + (taxAmount / 100 * subtotal);
    setTotal(totalAmount.toFixed(2));
  }, [quantity, basePrice, taxAmount]);

  return (
    <div className="box">
      <div className="is-flex is-justify-content-space-between mb-6">
        <div className="subtitle"><b>Items</b></div>
        <div>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <form>
        <div className="columns">
          <div className="column is-6">
            <label>S.no</label>
            <div>
              <input name="serial_number" type="number" className="input" value={serialNumber} readOnly />
            </div>
          </div>
          <div className="column is-6">
            <label>Items</label>
            <div>
              <select name="item" className="input" value={item} onChange={e => setItem(e.target.value)}>
                {Object.keys(itemSizes).map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <label>Size</label>
            <div>
              <select name="size" className="input" value={size} onChange={e => setSize(e.target.value)}>
                {itemSizes[item]?.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="column is-6">
            <label htmlFor="quantity">Quantity</label>
            <input name="quantity" type="number" className="input" value={quantity} onChange={e => setQuantity(e.target.value)} />
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <label htmlFor="base_price">Base Price</label>
            <div>
              <input name="base_price" type="number" className="input" value={basePrice} readOnly />
            </div>
          </div>

          <div className="column is-6">
            <label htmlFor="tax_amount">Tax Amount</label>
            <div>
              <input name="tax_amount" type="number" className="input" value={taxAmount} onChange={e => setTaxAmount(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <label htmlFor="total">Total</label>
            <input name="total" type="number" className="input" value={total} readOnly />
          </div>
          <div className="column is-6">
            <div className="is-flex is-justify-content-flex-end mr-6 mt-5">
              <button className="button is-danger" type="reset" onClick={() => {
                setItem("Friends Card");
                setSize("A4");
                setQuantity(0);
                setBasePrice(0);
                setTaxAmount(0);
                setTotal(0);
              }}>Clear</button>
              <button className="button is-info ml-3" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
