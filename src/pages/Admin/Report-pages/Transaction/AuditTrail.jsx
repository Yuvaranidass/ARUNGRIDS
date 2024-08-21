// import { useState } from "react";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const AuditTrail = () => {
//   const [selectedTable, setSelectedTable] = useState("purchase");
  const { closeModal } = useSiteContext();
  const HSNsalesColumns = [
    { title: "S.no", index: "sno" },
    { title: "Date", index: "date" },
    { title: "Voucher No", index: "voucher_no" },
    { title: "Action", index: "action" },
    { title: "By User", index: "by_user" },
  ];

  const HSNsalesData = [
    {
      sno: 1,
      date: "2022-01-01",
      voucher_no: 123,
      action: "Created",
      by_user: "John Doe",
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
        <div className="subtitle">Audit Trail</div>
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

export default AuditTrail;
