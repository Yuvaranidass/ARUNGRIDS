import { useState } from 'react';
import "./Report.css";
import { SmartDarkTable,SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";


const HSNsalessummary = () => {
    const [selectedTable, setSelectedTable] = useState('purchase');
    const { closeModal } = useSiteContext();
    const handleDownload = (event) => {
        const selectedOption = event.target.value;
        const data = getData();

        switch (selectedOption) {
            case 'json':
                downloadJSON(data);
                break;
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

    const downloadJSON = (data) => {
        const filename = `${selectedTable}_data.json`;
        const jsonContent = JSON.stringify(data, null, 2);
        downloadFile(filename, 'application/json', jsonContent);
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
        let excelContent = 'S.no\tGSTIN\tCustomer Name\tState Name\tState Code\tInvoice Number\tInvoice Date\tInvoice Value\tTotal Tax(%)\tTaxable Value\tCGST\tSGST/UTGST\tIGST\tCESS\tTotal Tax\n';

        data.forEach((item, index) => {
            excelContent += `${index + 1}\t${item.gstin}\t${item.customer_name}\t${item.state_name}\t${item.state_code}\t${item.invoice_number}\t${item.invoice_date}\t${item.invoice_value}\t${item.total_tax_percent}\t${item.taxable_value}\t${item.cgst}\t${item.sgst_utgst}\t${item.igst}\t${item.cess}\t${item.total_tax}\n`;
        });

        return excelContent;
    };

    const generatePDFContent = (data) => {
        let pdfContent = 'PDF Content for Table:\n\n';

        data.forEach((item, index) => {
            pdfContent += `Row ${index + 1}:\n`;
            pdfContent += `GSTIN: ${item.gstin}, Customer Name: ${item.customer_name}, Invoice Date: ${item.invoice_date}\n`;
            pdfContent += `----------------------------------------------\n`;
        });

        return pdfContent;
    };


    const HSNsalesColumns = [
        { title: "S.no", index: "sno" },
        { title: "HSN", index: "hsn" },
        { title: "Item Name", index: "item_name" },
        { title: "Total Quantity", index: "total_qty" },
        { title: "Total Value", index: "total_value" },
        { title: "IGST", index: "igst" },
        { title: "CGST", index: "cgst" },
        { title: "SGST", index: "sgst" },
        { title: "Cess", index: "cess" },
        { title: "Total Tax Amount", index: "total_tax_amount" },

    ];

    const HSNsalesData = [
        {
            "sno": 1,
            "date": "2022-01-01",
            "hsn": "1234",
            "item_name": "Item 1",
            "total_qty": 10,
            "total_value": 100.0,
            "igst": 5.0,
            "cgst": 2.5,
            "sgst": 2.5,
            "cess": 0.0,
            "total_tax_amount": 12.5
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
                   
                    HSN wise sales summary
                </div>
                <div>
                    <div className='select mr-3'>
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
                    <SmartDarkTable columns={HSNsalesColumns} data={HSNsalesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>
    );
}

export default HSNsalessummary;
