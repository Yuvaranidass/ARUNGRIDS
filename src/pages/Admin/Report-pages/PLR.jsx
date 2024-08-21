import "./Report.css";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const PLR = () => {
  const { closeModal } = useSiteContext();
  const Columns = [
    { title: "PARTICULARS", index: "particular" },
    { title: "Amount", index: "amount" },
  ];
  const data = [
    { particular: "Sales(+)", amount: 1500 },
    { particular: "Cr. Note/Sale Return(-)", amount: 2000 },
    { particular: "Purchase(-)", amount: 3000 },
    { particular: "Dr. Note/Purchase Return(+)", amount: 4000 },
    { particular: "Tax Payable(-)", amount: 5000 },
    { particular: "Tax Receivable(+)", amount: 6000 },
    { particular: "Opening Stock(-)", amount: 1000 },
    { particular: "Closing Stock(+)", amount: 2000 },
    { particular: "Gross Profit", amount: 3000 },
    { particular: "Other Income(+)", amount: 4000 },
    { particular: "Indirect Expenses(-)", amount: 5000 },
    { particular: "Net Profit", amount: 200000 },
  ];

  // const handleDownload = (format) => {
  //   if (format === "excel") {
  //     // Excel Download
  //     const workbook = XLSX.utils.book_new();
  //     const worksheet = XLSX.utils.json_to_sheet(data);
  //     XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
  //     XLSX.writeFile(workbook, "Profit_And_Loss_Report.xlsx");
  //   } else if (format === "pdf") {
  //     // PDF Download
  //     const doc = new jsPDF();
  //     doc.text("Profit And Loss Report", 14, 16);

  //     // Generate table
  //     doc.autoTable({
  //       head: [["Date", "Amount"]],
  //       body: data.map((item) => [item.Date, item.Amount]),
  //       startY: 22,
  //     });

  //     doc.save("Profit_And_Loss_Report.pdf");
  //   }
  // };

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
      <div className="is-flex is-justify-content-space-between">
        <div className="subtitle">Profit And Loss Report</div>
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

          <button
            className="button mr-3"
            // onClick={() => handleDownload("excel")}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faFileExcel} />
            </span>
            <span>Excel Download</span>
          </button>

          <button className="button">
            <span className="icon">
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
            <span>PDF Download</span>
          </button>
        </div>
      </div>
      <div className="card smart-admin-container py-2 px-2 mt-3">
        <div>
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

export default PLR;