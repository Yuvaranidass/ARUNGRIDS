import { useState } from "react";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import ItemInventoryForm from "./ItemInventoryForm";
import { FaShoppingCart } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";

const ItemInventory = () => {
  const [filteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { openModal } = useSiteContext();

  const buttons = [
    {
      label: "",
      leftIcon: "fa fa-pencil-square-o",
      type: "icon",
      classList: ["has-text-info"],
      // onClick: (response) => {
      //   openEditModal(response);
      // },
    },
    {
      label: "",
      leftIcon: "fa fa-trash",
      type: "icon",
      classList: ["has-text-danger"],
      // onClick: (response) => {
      //   openDeleteModal(response);
      // },
    },
  ];

  const columns = [
    {
      title: "#",
      type: "sno",
    },
    {
      title: "Product Name",
      index: "item_name",
    },
    {
      title: "Product Code",
      index: "item_code",
    },
    {
      title: "Stock Qty",
      index: "stock_qty",
    },
    {
      title: "Selling Price",
      index: "selling_price",
    },
    {
      title: "Purchase Price",
      index: "purchase_price",
    },
    {
      title: "Action",
      index: "action",
      type: "buttons",
      buttons: buttons,
    },
  ];

  // const tableData = [
  //   {
  //     id: 1,
  //     item_name: "Item 1",
  //     item_code: "Item 1",
  //     stock_qty: "10",
  //     selling_price: "100",
  //     purchase_price: "100",
  //     action: "",
  //   },
  // ];

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const openMyModal = () => {
    let modalObject = {
      body: <ItemInventoryForm />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };

  const SelectCategory = [
    {
      label: "Select Category",
      value: "All",
    },
    {
      label: "Category 1",
      value: "Category 1",
    },
  ];
  const BulkActions = [
    {
      label: "Delete",
      value: "Delete",
    },
    {
      label: "Export",
      value: "Export",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="">
          <div className="is-5">
          <div className="subtitle has-text-weight-bold">ITEMS</div>
            <hr />
            <div className="columns is-flex is-justify-content-space-between mb-3">
              <div className="column is-6">
                <div className="box has-background-white">
                  <div className="has-text-info">
                    <span className="icon">
                      <FaShoppingCart className="mr-2" size={24} />
                    </span>
                    Stock Value
                  </div>
                  <div>200</div>
                </div>
              </div>

              <div className="column is-6">
                <div className="box has-background-white">
                  <div className="has-text-warning">
                    <span className="icon">
                      <FaExclamationTriangle className="mr-2" size={24} />
                    </span>
                    Low Stock
                  </div>
                  <div>200</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card smart-admin-container py-2">
            <div className="columns is-vcentered">
              <div className="column is-3 ml-2">
                <div className="control has-icons-left">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="column is-3">
                <div className="field">
                  <div className="control has-icons-right">
                    <div className="select is-fullwidth">
                      <select>
                        {SelectCategory.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <span className="icon is-right is-small">
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-2">
                <div className="field">
                  <div className="control has-icons-right">
                    <div className="select is-fullwidth">
                      <select>
                        {BulkActions.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <span className="icon is-right is-small">
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-2">
                <SmartDarkButton label="Low Stock" leftIcon="fa fa-sort" />
              </div>
              <div className="column is-2">
                <SmartDarkButton
                  label="Create Item"
                  leftIcon="fa fa-plus"
                  onClick={openMyModal}
                />
              </div>
            </div>
            <div>
              <SmartDarkTable
                columns={columns}
                data={filteredData}
                tableProps={{
                  className:
                    "admin-table-layout is-hoverable is-clickable has-text-left",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInventory;
