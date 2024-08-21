import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
const SalesSummary = () => {
  const { closeModal } = useSiteContext();
  const partes = [
    {
      label: "All Parties",
      value: "All Parties",
    },
    {
      label: "Parties 1",
      value: "Parties 1",
    },
    {
      label: "Parties 2",
      value: "Parties 2",
    },
  ];

  const filterdata = [
    {
      label: "Today",
      value: "Today",
    },
    {
      label: "Yesterday",
      value: "Yesterday",
    },
    {
      label: "This Week",
      value: "This Week",
    },
    {
      label: "Last Week",
      value: "Last Week",
    },
    {
      label: "This Month",
      value: "This Month",
    },
    {
      label: "Last Month",
      value: "Last Month",
    },
    {
      label: "This Year",
      value: "This Year",
    },
    {
      label: "Last Year",
      value: "Last Year",
    },
  ];

  const invoicestatus = [
    {
      label: "All Invoices",
      value: "All Invoices",
    },
    {
      label: "Paid",
      value: "Paid",
    },
    {
      label: "Unpaid",
      value: "Unpaid",
    },
  ];

  const invoicetype = [
    {
      label: "Cash",
      value: "Cash",
    },
    {
      label: "Credit",
      value: "Credit",
    },
  ];

  const Columns = [
    {
      title: "Date",
      index: "date",
    },
    {
      title: "Invoice Number",
      index: "invoice_no",
    },
    {
      title: "Party Name",
      index: "party_name",
    },
    {
      title: "Amount",
      index: "amount",
    },
    {
      title: "Due Date",
      index: "due_date",
    },
    {
      title: "Status",
      index: "status",
    },
    {
      title: "Balance Amount",
      index: "balance_amount",
    },
    {
      title: "Invoice Type",
      index: "invoice_type",
    },
    {
      title: "Invoice Status",
      index: "invoice_status",
    },
    {
      title: "Created By",
      index: "created_by",
    },
  ];
  const data = [
    {
      date: "1/1/2024",
      invoice_no: "INV-001",
      party_name: "Party 1",
      amount: "1000",
      due_date: "1/1/2024",
      status: "Paid",
      balance_amount: "1000",
      invoice_type: "Cash",
      invoice_status: "Paid",
      created_by: "User 1",
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
      <div className="subtitle">Sales Summary</div>
      <div className="columns">
        <div className="column is-3">
          <div className="field">
            <div className="control has-icons-right">
              <select className="input">
                {partes.map((parte) => {
                  return (
                    <option key={parte.value} value={parte.value}>
                      {parte.label}
                    </option>
                  );
                })}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="field">
            <div className="control has-icons-right">
              <select className="input">
                {filterdata.map((filter) => {
                  return (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  );
                })}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="field">
            <div className="control has-icons-right">
              <select className="input">
                {invoicestatus.map((filter) => {
                  return (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  );
                })}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="field">
            <div className="control has-icons-right">
              <select className="input">
                {invoicetype.map((filter) => {
                  return (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  );
                })}
              </select>
              <span className="icon is-small is-right">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card smart-admin-container py-2 px-2 mt-3">
        <div className="has-text-weight-bold">Total Sales:</div>
        <div className="mt-6">
          <SmartDarkTable
            columns={Columns}
            data={data}
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

export default SalesSummary;
