// import { useState } from "react";
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const BillWiseProfit = () => {
//   const [selectedTable, setSelectedTable] = useState("purchase");
  const { closeModal } = useSiteContext();

  const HSNsalesColumns = [
    { title: "S.no", index: "sno" },
    { title: "Date", index: "date" },
    { title: "Invoice No.", index: "invoice_no" },
    { title: "Party Name", index: "party_name" },
    { title: "Invoice Amount", index: "invoice_amount" },
    { title: "Sales Amount", index: "sales_amount" },
    { title: "Purchase Amount", index: "purchase_amount" },
    { title: "Profit", index: "profit" },
  ];

  const HSNsalesData = [
    {
      sno: 1,
      date: "2022-01-01",
      invoice_no: "INV-001",
      party_name: "John Doe",
      invoice_amount: 1000,
      sales_amount: 500,
      purchase_amount: 500,
      profit: 500,
    },
  ];

  return (
    <div className="">
      <div className="is-flex is-justify-content-flex-end my-2  px-2 mx-2 is-size-5">
        <SmartDarkButton
          type="icon"
          onClick={closeModal}
          leftIcon="fa fa-times"
          classList={["is-clickable"]}
        />
      </div>
      <div className="header">
        <div className="subtitle">Bill Wise Profit</div>
        <div>
          <div className="select mr-3">
            <select>
              <option value="">Today</option>
              <option value="">Yesterday</option>
              <option value="">This Week</option>
              <option value="">Last Week</option>
              <option value="">This Month</option>
              <option value="">Last Month</option>
              <option value="">This Year</option>
              <option value="">Last Year</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="card smart-admin-container py-2 px-2 mt-3">
        <div className="title is-size-6">Net Profit: ₹ 0.00</div>
        <div className="">
          <SmartDarkTable
            columns={HSNsalesColumns}
            data={HSNsalesData}
            tableProps={{
              className:
                "admin-table-layout is-hoverable is-clickable has-text-left",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BillWiseProfit;
