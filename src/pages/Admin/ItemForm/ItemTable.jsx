import "bulma/css/bulma.css";
import "./ItemTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
const ItemTable = () => {
  const columns = [
    {
      title: "S.no",
      type: "sno",
    },
    {
      title: "Item Name",
      index: "ItemName",
    },
    {
      title: "Size",
      index: "Size",
    },
    {
      title: "Quantity",
      index: "Quantity",
    },
    {
      title: "Base Price",
      index: "BasePrice",
    },
    {
      title: "Tax Amount",
      index: "TaxAmount",
    },
    {
      title: "Total",
      //   index: "Total",
    },
    {
      title: "Action",
      type: "action",
      // valueFunction: (index) => {
      //   return (
      //     <div className="is-flex is-justify-content-space-between">
      //       <button className="button is-link is-rounded is-small">Edit</button>
      //       <button className="button is-danger is-rounded is-small">
      //         Delete
      //       </button>
      //     </div>
      //   );
      // },
    },
  ];

  const data = [
    {
      ItemName: "Friends Card",
      Size: "90",
      Quantity: "006",
      BasePrice: "900",
      TaxAmount: "9%",
      Total: "1000",

    },
    {
      ItemName: "Menu Card",
      Size: "50",
      Quantity: "008",
      BasePrice: "500",
      TaxAmount: "9%",
      Total: "600",

    },
    {
      ItemName: "Binding",
      Size: "70",
      Quantity: "009",
      BasePrice: "100",
      TaxAmount: "2%",
      Total: "200",

    },

  ];
  return (
    <>
      <div>
        <div className="smart-Purchase">
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-4 mt-4">ITEM</div>

            <SmartDarkButton
              label="ADD SALES"
              leftIcon="fa fa-plus"
              classList={["is-link my-3"]} />
          </div>
          <div className="card smart-admin-container py-2 px-2 mt-3">
            <div className="columns">
              <div className="column is-8">
                <div className="field">
                  <div className="control has-icons-left">
                    <input type="search"
                      className="input is-rounded "
                      placeholder="Search Vendors"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-2">
                <div>
                  <SmartDarkButton
                    label="Filter"
                    leftIcon="fa fa-filter"
                    classList={["is-link"]}
                  />
                </div>
              </div>
              <div className="column is-2">
                <div>
                  <SmartDarkButton
                    label="Sort By"
                    leftIcon="fa fa-sort"
                    classList={["is-link "]}
                  />
                </div>
              </div>
            </div>
            <SmartDarkTable columns={columns} data={data} tableProps={{
              className:
                "admin-table-layout is-hoverable is-clickable has-text-left",
            }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemTable;
