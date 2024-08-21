// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const ExpenseTransactionReport = () => {
  // const [selectedTable, setSelectedTable] = useState('sales');
  const { closeModal } = useSiteContext();

  const salesColumns = [
    { title: "S.no", type: "sno" },
    { title: "Date", index: "date" },
    { title: "Expense Number", index: "expense_number" },
    { title: "Category", index: "category" },
    { title: "Payment Mode", index: "payment_mode" },
    { title: "Total Amount", index: "total_amount" },
  ];

  const salesData = [
    {
      sno: 1,
      date: "2022-01-01",
      expense_number: "INV-123",
      category: "rent",
      payment_mode: "cash",
      total_amount: 10000,
    },
  ];

  return (
    <div className=" ">
      <div className="is-flex is-justify-content-flex-end my-2  px-2 mx-2 is-size-5">
        <SmartDarkButton
          type="icon"
          onClick={closeModal}
          leftIcon="fa fa-times"
          classList={["is-clickable"]}
        />
      </div>
      <div className="header">
        <div className="subtitle">Expense Transaction Report</div>

        <div className="column is-4 ">
          {/* <div className='select mr-3'>
                        <select>
                            <option value="">Cash</option>
                            <option value="">All Cash/ Back Accouts</option>
                            <option value=""></option>
                            <option value=""></option>


                        </select>
                    </div> */}
        </div>
        <div className="column is-2">
          <div className="select mr-3">
            <select>
              <option value="">All Expense Categories</option>
            </select>
          </div>
        </div>
        <div className="column is-2">
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
            columns={salesColumns}
            data={salesData}
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

export default ExpenseTransactionReport;
