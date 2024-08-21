import "bulma/css/bulma.css";
import "./VoucherTable.css";
import { SmartDarkTable,SmartDarkButton, } from "dark_power25";
const VoucherTable = () => {
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
      <div>
        <div className="smart-Purchase">
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-5">Voucher</div>
            
            <SmartDarkButton
              label="Add Voucher"
              leftIcon="fa fa-plus"
              classList={["is-link"]}/>
          </div>

          <div className="card">
            <div className=" is-flex is-justify-content-space-around mt-5">
            <div className="field mt-3">
                <div className="control smart-sales-search has-icons-left">
                  <input
                    className="input is-rounded"
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
        </div>
      </div>
    </>
  );
};

export default VoucherTable;
