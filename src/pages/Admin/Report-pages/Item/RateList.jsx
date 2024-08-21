import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const RateList = () => {
    const [selectedTable, setSelectedTable] = useState('reverseCharge');
    const { closeModal } = useSiteContext();
    const handleDownload = (event) => {
        const selectedOption = event.target.value;
        const data = getData();

        switch (selectedOption) {

            case 'excel':
                downloadExcel(data);
                break;
            case 'pdf':
                downloadPDF(data);
                break;
            default:
                break;
        }
    };



    const downloadExcel = (data) => {
        const filename = `${selectedTable}_data.xlsx`;
        const excelContent = generateExcelContent(data);
        downloadFile(filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', excelContent);
    };

    const downloadPDF = (data) => {
        const filename = `${selectedTable}_data.pdf`;
        const pdfContent = generatePDFContent(data);
        downloadFile(filename, 'application/pdf', pdfContent);
    };

    const downloadFile = (filename, contentType, content) => {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const generateExcelContent = (data) => {
        let excelContent = 'S.no\tNature of Supplies\tTotal Taxable Value\tIntegrated Tax\tCentral Tax\tState/UT Tax\tCess\n';

        data.forEach((item, index) => {
            excelContent += `${index + 1}\t${item.nature_of_supply}\t${item.total_taxable_value}\t${item.integrated_tax}\t${item.central_tax}\t${item.state_ut_tax}\t${item.cess}\n`;
        });

        return excelContent;
    };

    const generatePDFContent = (data) => {
        let pdfContent = 'PDF Content for Table:\n\n';

        data.forEach((item, index) => {
            pdfContent += `Row ${index + 1}:\n`;
            pdfContent += `Nature of Supplies: ${item.nature_of_supply}, Total Taxable Value: ${item.total_taxable_value}, Integrated Tax: ${item.integrated_tax}\n`;
            pdfContent += `----------------------------------------------\n`;
        });

        return pdfContent;
    };

    const ReverseChargeColumns = [
        { title: "Name", index: "name" },
        { title: "Item Code", index: "item_code" },
        { title: "MRP", index: "mrp" },
        { title: "Selling Price", index: "selling_price" },

    ];

    const ReverseChargeData = [
        {
            name: "Reverse Charge",
            item_code: "1234",
            mrp: "100",
            selling_price: "200",

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
                <div className="subtitle">
                   
                    Rate List
                </div>
                <div>

                    <div className="select">
                        <select id="downloadSelect" onChange={handleDownload}>

                            <option value="excel">Download Excel</option>
                            <option value="pdf">Download PDF</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className='py-3 px-3'>
                    <div className="">
                        <SmartDarkTable columns={ReverseChargeColumns} data={ReverseChargeData} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    );
}

export default RateList;
