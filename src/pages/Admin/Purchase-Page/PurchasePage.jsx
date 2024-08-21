import "bulma/css/bulma.css";
import "./PurchasePage.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
// import PurchaseForm from "./PurchaseForm";
import CreatePurchaseInvoice from "../CreatePurchaseInvoice/CreatePurchaseInvoice";
const Purchasepage = () => {

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
      title: "Name",
      index: "Name",
    },
    {
      title: "Order Date",
      index: "orderdate",
    },
    {
      title: "Due Date",
      index: "duedate",
    },
    {
      title: "PaymentType",
      index: "paymenttype",
    },
    {
      title: "TotalAmount",
      index: "totalamount",
    },
    {
      title: "Status",
      index: "status",
      valueFunction: (index) => (
        <span className={`tag is-${index.status === 1 ? "success" : "danger"}`}>
          {index.status === 1 ? "paid" : "unpaid"}
        </span>
      ),
    },
    { title: "Action", index: "action", type: "buttons", buttons: buttons },

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
  ];


  const data = [
    {
      Name: "swathi shop",
      orderdate: "09/07/2024",
      duedate: "15/07/2024",
      paymenttype: "cash",
      totalamount: "5,657",
      status: 1,
    },
    {
      Name: "kaviya shop",
      orderdate: "17/09/2024",
      duedate: "26/09/2024",
      paymenttype: "cash",
      totalamount: "3,657",
      status: 0,
    },
  ];
  const openMyModal = () => {
    let modalObject = {
      body: <CreateSalesInvoice />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };
  return (
    <>
      <div>
        <div className="smart-Purchase">
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-5">PURCHASE TABLE</div>

            <SmartDarkButton
              label="Add Purchase"
              leftIcon="fa fa-plus"
              classList={["is-link"]}
              onClick={() => openMyModal()}
            />
          </div>

          <div className="card">
            <div className=" is-flex is-justify-content-space-around mt-4">
              <div className="field mt-3">
                <div className="control smart-purchase-search has-icons-left">
                  <input
                    className="input "
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

export default Purchasepage;
