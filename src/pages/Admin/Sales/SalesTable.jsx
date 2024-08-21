import "bulma/css/bulma.css";
import "./SalesTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
// import { useSiteContext } from "../../../context/SiteDarkProvider";
// import SalesForm from "./SalesForm";

const SalesTable = () => {
  // const { openModal } = useSiteContext();

  // const openEditModal = (response) => {
  //     openModal({
  //         body: <BankEntryForm dataIn={response} loadTableData={loadTableData} />,
  //         modalClass: "smart-modal-80",
  //     });
  // };

  // const openDeleteModal = (response) => {
  //     // Implement delete functionality here
  // };

  // const loadTableData = () => {
  //     // Implement data loading functionality here
  // };

  const buttons = [
    {
      label: "",
      leftIcon: "fa fa-pencil-square-o",
      type: "icon",
      classList: ["has-text-info"],
      // onClick: (response) => {
      //     openEditModal(response);
      // },
    },
    {
      label: "",
      leftIcon: "fa fa-trash",
      type: "icon",
      classList: ["has-text-danger"],
      // onClick: (response) => {
      //     openDeleteModal(response);
      // },
    },
  ];

  const columns = [
    {
      title: "#",
      type: "sno",
    },
    {
      title: "Category",
      index: "category",
    },
    {
      title: "Size",
      index: "size",
    },
    {
      title: "Quantity",
      index: "quantity",
    },
    {
      title: "Price",
      index: "price",
    },
    {
      title: "Tax",
      index: "tax",
    },
    {
      title: "Total",
      index: "total",
    },
    {
      title: "Action",
      index: "action",
    },
    {
      title: "Status",
      index: "status",
      valueFunction: (index) => (
        <span className={`tag is-${index.status === 1 ? "success" : "danger"}`}>
          {index.status === 1 ? "Active" : "Inactive"}
        </span>
      ),
    },
    { title: "Action", index: "action", type: "buttons", buttons: buttons },
  ];

  const data = [
    {
      id: 1,
      category: "Category 1",
      size: "Small",
      quantity: 10,
      price: 100,
      tax: 10,
      total: 110,
      status: 1,
      action: "Edit",
    },
    {
      id: 2,
      category: "Category 2",
      size: "Medium",
      quantity: 20,
      price: 200,
      tax: 20,
      total: 220,
      status: 0,
      action: "Edit",
    },
  ];

  // const openMyModal = () => {
  //     openModal({
  //         body: <SalesForm loadTableData={loadTableData} />,
  //         modalClass: "smart-modal-80",
  //     });
  // };

  return (
    <div>
      <div className="smart-customertable">
        <div className="is-flex is-justify-content-space-between">
          <div className="title is-5">SALES TABLE</div>

          <SmartDarkButton
            label="Add Customer"
            leftIcon="fa fa-plus"
            classList={["is-link"]}
            // onClick={openMyModal}
          />
        </div>

        <div className="card">
          <div className="is-flex is-justify-content-space-around mt-4">
            <div className="field mt-3">
              <div className="control smart-customer-search has-icons-left">
                <input
                  className="input is-rounded "
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-left">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <SmartDarkButton
              label="Filter"
              leftIcon="fa fa-filter"
              classList={["is-link ml-2 my-3"]}
            />
            <SmartDarkButton
              label="Sort By"
              leftIcon="fa fa-sort"
              classList={["is-link ml-2 my-3"]}
            />
          </div>
          <SmartDarkTable columns={columns} data={data} />
        </div>
        <hr></hr>
        <div className="columns">
          <div className="column is-3">
            <label>S.No</label>
            <div>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="column is-3">
            <label>Category</label>

            <select className="input">
              <option value="">--select--</option>
              <option value="">Friends Card </option>
              <option value="">Menu Card</option>
              <option value="">Binding</option>
              <option value="">Register</option>
              <option value="">Transfer Certificate Design</option>
              <option value="">Visiting Card</option>
              <option value="">ID Card</option>
              <option value="">Thamboola Bag</option>
              <option value="">Digital Banner</option>
              <option value="">Calender</option>
              <option value="">Digital Printout</option>
              <option value="">Rubber Stamp</option>
            </select>
          </div>
          <div className="column is-3">
            <label>HSN</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Size</label>
            <input type="text" className="input" />
          </div>
        </div>
        <hr></hr>
        <div className="columns">
          <div className="column is-3">
            <label>Unit</label>
            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Quantity</label>

            <input type="text" className="input" />
          </div>
          <div className="column is-3">
            <label>Price</label>
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
            <label>Amount</label>
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
          <div style={{ marginLeft: 500 }}>
            <b>Adjustment:</b>
            <input
              type="text"
              className="input mt-2"
              style={{ marginLeft: 109, width: 300 }}
            />
          </div>
          <div style={{ marginLeft: 500 }}>
            <b>Discount:</b>
            <input
              type="text "
              className="input mt-2"
              style={{ marginLeft: 109, width: 300 }}
            />
          </div>
          <div style={{ marginLeft: 500 }}>
            <b>Total:</b>
            <input
              type="text"
              className="input mt-2"
              style={{ marginLeft: 109, width: 300 }}
            />
          </div>
        </center>
        <div style={{ marginLeft: 670 }}>
          <button className="button is-link mt-5"> Save Invoice</button>
          <button className="button is-success mt-5 ml-6">
            Submit Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesTable;
