import { useState } from 'react';
import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const GSTPurchaseHSN = () => {
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

    const PurchaseReturnColumns = [
        { title: "S.no", index: "sno" },
        { title: "Date", index: "date" },
        { title: "Invoice No", index: "invoice_no" },
        { title: "Original Inv No", index: "original_inv_no" },
        { title: "Party Gstin", index: "party_gstin" },
        { title: "Party Name", index: "party_name" },
        { title: "Item Name", index: "item_name" },
        { title: "Hsn Code", index: "hsn_code" },
        { title: "QTY", index: "qty" },
        { title: "Price/Unit", index: "price_unit" },
        { title: "SGST", index: "sgst" },
        { title: "CGST", index: "cgst" },
        { title: "IGST", index: "igst" },
        { title: "Amount", index: "amount" },
    ];

    const PurchaseReturnData = [
        {
            "sno": 1,
            "date": "2022-01-01",
            "invoice_no": "INV-123",
            "original_inv_no": "INV-123",
            "party_gstin": "01AAAPR0001Z",
            "party_name": "Customer 1",
            "item_name": "Item 1",
            "hsn_code": "123456",
            "qty": 10,
            "price_unit": 100.00,
            "sgst": 9.00,
            "cgst": 9.00,
            "igst": 0.00,
            "amount": 900.00,
        },
        // Add more data objects as needed
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
            <div className='columns'>
                <div className='column '>
                    <div className="subtitle">
                        GST Purchase (with HSN)
                    </div>
                </div>
                <div className='column is-3'>
                    <div>
                        <div className='select '>
                            <select onChange={handleDownload}>
                                <option value="">Download as</option>
                                <option value="json">JSON</option>
                                <option value="excel">Excel</option>
                                <option value="pdf">PDF</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className="table-container">
                    <SmartDarkTable columns={PurchaseReturnColumns} data={PurchaseReturnData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>
    );
}

export default GSTPurchaseHSN;
