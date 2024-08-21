import "bulma/css/bulma.css";
import "./DayBookTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
const DayBookTable = () => {
  const columns = [
    {
      title: "PV No",
      type: "pv no",
    },
    {
      title: "Amount",
      index: "amount",
    },
    {
      title: "Date",
      index: "date",
    },
    {
      title: "Cash",
      index: "cash",
    },
    {
      title: "Check",
      index: "check",
    },
    {
      title: "To",
      index: "to",
    },
    {
      title: "Being",
      index: "being",
    },
    {
      title: "Payee",
      index: "payee",
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
  ];
  return (
    <>
      <div className="px-4 py-3">
        <div className="smart-Purchase">
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-4 mt-4">VOUCHER</div>

            <SmartDarkButton
              label="ADD VOUCHER"
              leftIcon="fa fa-plus"
              classList={["is-link my-3"]} />
          </div>
          <div className="card smart-admin-container py-2">
            <div className="columns my-2">
              <div className="column is-7">
                <div className="field my-2">
                  <div className="control  has-icons-left">
                    <input
                      className="input is-rounded"
                      type="search"
                      placeholder="Search Vendors"
                    //value={searchQuery}
                    //onChange={handleSearch}
                    />
                    <span className="icon is-left">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-2">
                <SmartDarkButton
                  label="Filter"
                  leftIcon="fa fa-filter"
                  classList={["is-link ml-2 my-3"]}
                />
              </div>
              <div className="column is-3">
                <SmartDarkButton
                  label="Sort By"
                  leftIcon="fa fa-sort"
                  classList={["is-link ml-2 my-3"]}
                />
              </div>
            </div>
            <SmartDarkTable columns={columns} data={data} tableProps={{
              className:
                "admin-table-layout is-hoverable is-clickable has-text-left",
            }} />
          </div>
        </div>
      </div >
    </>
  );
};

export default DayBookTable;
