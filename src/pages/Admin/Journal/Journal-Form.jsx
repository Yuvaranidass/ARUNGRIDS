import { SmartDarkTable } from "dark_power25";

const JournalForm = () => {
  const column = [
    {
      title: "S.no",
      index: "S_no",
    },
    {
      title: "Date",
      index: "Date",
    },
    {
      title: "Reference No",
      index: "Reference_No",
    },
    {
      title: "Account",
      index: "Account",
    },
    {
      title: "Voucher type",
      index: "voucher_type",
    },
    {
      title: "Customer Name",
      index: "Customer_Name",
    },
    {
      title: "Description",
      index: "Description",
    },
    {
      title: "Debit",
      index: "Debit",
    },
    {
      title: "Credit",
      index: "Credit",
    },
  ];
  const data = [
    {
      S_no: "1",
      Date: "12/07/2024",
      Reference_No: "1",
      Account: "Captial",
      voucher_type: "Cash",
      Customer_Name: "Aadhi",
      Description: "To cash",
      Debit: "12000",
      Credit: "",
    },
    {
      S_no: "2",
      Date: "12/07/2024",
      Reference_No: "1",
      Account: "Captial",
      voucher_type: "Bank",
      Customer_Name: "Aadhi",
      Description: "To cash",
      Debit: "",
      Credit: "12000",
    },
  ];
  return (
    <div>
      <h1 className="title is-size-4 ">JOURNAL</h1>
      <div className="field">
        <div className="control has-icons-left">
          <input type="search" className="input" placeholder="Search..." />
          <span className="icon is-small is-left">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <SmartDarkTable columns={column} data={data} />
    </div>
  );
};

export default JournalForm;
