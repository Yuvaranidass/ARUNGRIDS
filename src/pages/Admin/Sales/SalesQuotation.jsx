const SalesQuotation = () => {
  return (
    <div>
      <div className="box">
        <b className="title is-4">Quotation</b>
        <form action="">
          <center>
            <div className="is-flex" style={{ marginLeft: 300 }}>
              <div style={{ width: "70%" }} className="is-flex mt-4">
                <label>Customer Name</label>
                <select className="input ml-4">
                  <option value="">--select--</option>
                  <option value="">balaji</option>
                  <option value="">barth</option>
                  <option value="">Swathi</option>
                  <option value="">Arun</option>
                  <option value="">Kaviya</option>
                </select>
              </div>
            </div>

            <div className="is-flex" style={{ marginLeft: 300 }}>
              <div style={{ width: "70%" }} className="is-flex mt-6">
                <label>Quotation#</label>
                <input type="text" className="input ml-5" />
              </div>
            </div>
          </center>

          <div className="columns">
            <div className="column is-6">
              <label>Quotation Date</label>
              <input type="date" className="input" />
            </div>

            <div className="column is-6">
              <label>Valid Date</label>
              <div>
                <input type="date" className="input" />
              </div>
            </div>
          </div>
        </form>
        <hr></hr>
        <div className=" columns is-flex">
          <div className="column">
            <label>Product</label>
            <select className="input">
              {/* <option value="">--select--</option>
              <option value="">balaji</option>
              <option value="">barth</option>
              <option value="">Swathi</option>
              <option value="">Arun</option>
              <option value="">Kaviya</option> */}
            </select>
          </div>
          <div className="column">
            <label>Description</label>
            <textarea className="textarea" placeholder=""></textarea>
          </div>
        </div>
        <hr></hr>
        <div className="columns">
          <div className="column is-3">
            <label>Height</label>
            <div>
              <select className="input">
                <option value="">--select--</option>
                <option value="">9</option>
                <option value="">8.4</option>
                <option value="">8.9</option>
              </select>
            </div>
          </div>
          <div className="column is-3">
            <label>Width</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Size</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Rate</label>
            <input type="text" className="input" />
          </div>
        </div>
        <hr></hr>
        <div className="columns">
          <div className="column is-3">
            <label>Amount</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Quantity</label>

            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Total</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>STotal</label>
            <input type="text" className="input" />
          </div>
        </div>
        <hr></hr>
        <div className="columns">
          <div className="column is-3">
            <label>CGST%</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>SGST%</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>IGST%</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Total Amount</label>
            <input type="text" className="input" />
          </div>
        </div>
        <button className="button is-link">Add to Cart</button>

        <div className="columns">
          <div className="column">
            <b>Total Qty:</b>
          </div>
          <div className="column">
            <b>Subtotal:</b>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <b>Payment Methods:</b>
          </div>
          <div className="column">
            <b>Total GST</b>
          </div>
        </div>
        <center>
          <div style={{ marginLeft: 500 }}>
            <b>Shipping:</b>
            <input
              type="text"
              className="input"
              style={{ marginLeft: 109, width: 300 }}
            />
          </div>
        </center>
      </div>
    </div>
  );
};

export default SalesQuotation;
