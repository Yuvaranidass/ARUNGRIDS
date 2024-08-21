import { useState } from 'react';
import "./Report.css";
import { SmartDarkTable,SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const Gstr2Purchase = () => {
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

    const PurchaseColumns = [
        { title: "S.no", index: "sno" },
        { title: "GSTIN", index: "gstin" },
        { title: "Customer Name", index: "customer_name" },
        { title: "State Name", index: "state_name" },
        { title: "State Code", index: "state_code" },
        { title: "Invoice Number", index: "invoice_number" },
        { title: "Original Number", index: "Original_number" },
        { title: "Invoice Date", index: "invoice_date" },
        { title: "Invoice Value", index: "invoice_value" },
        { title: "Total Tax(%)", index: "total_tax_percent" },
        { title: "Taxable Value", index: "taxable_value" },
        { title: "CGST", index: "cgst" },
        { title: "SGST/UTGST", index: "sgst_utgst" },
        { title: "IGST", index: "igst" },
        { title: "CESS", index: "cess" },
        { title: "Total Tax", index: "total_tax" },
    ];

    const PurchaseData = [
        {
            "sno": 1,
            "gstin": "01AAAPR0001Z",
            "customer_name": "Customer 1",
            "state_name": "Andhra Pradesh",
            "state_code": "AP",
            "invoice_number": "INV-123",
            "Original_number": "INV-123",
            "invoice_date": "2022-01-01",
            "invoice_value": 1000.00,
            "total_tax_percent": 10.00,
            "taxable_value": 900.00,
            "cgst": 9.00,
            "sgst_utgst": 9.00,
            "igst": 0.00,
            "cess": 0.00,
            "total_tax": 99.00,
        },
        // Add more data objects as needed
    ];

    const PurchaseReturnColumns = [
        { title: "S.no", index: "sno" },
        { title: "GSTIN", index: "gstin" },
        { title: "Customer Name", index: "customer_name" },
        { title: "State Name", index: "state_name" },
        { title: "State Code", index: "state_code" },
        { title: "Invoice Number", index: "invoice_number" },
        { title: "Original Number", index: "Original_number" },
        { title: "Invoice Date", index: "invoice_date" },
        { title: "Invoice Value", index: "invoice_value" },
        { title: "Invoice Type", index: "invoice_type" },
        { title: "Total Tax(%)", index: "total_tax_percent" },
        { title: "Taxable Value", index: "taxable_value" },
        { title: "CGST", index: "cgst" },
        { title: "SGST/UTGST", index: "sgst_utgst" },
        { title: "IGST", index: "igst" },
        { title: "CESS", index: "cess" },
        { title: "Total Tax", index: "total_tax" },
    ];

    const PurchaseReturnData = [
        {
            "sno": 1,
            "gstin": "01AAAPR0001Z",
            "customer_name": "Customer 1",
            "state_name": "Andhra Pradesh",
            "state_code": "AP",
            "invoice_number": "INV-123",
            "Original_number": "INV-123",
            "invoice_date": "2022-01-01",
            "invoice_value": 1000.00,
            "invoice_type": "Purchase",
            "total_tax_percent": 10.00,
            "taxable_value": 900.00,
            "cgst": 9.00,
            "sgst_utgst": 9.00,
            "igst": 0.00,
            "cess": 0.00,
            "total_tax": 99.00,
        },
        // Add more data objects as needed
    ];

    const getData = () => {
        if (selectedTable === 'purchase') {
            return PurchaseData;
        } else {
            return PurchaseReturnData;
        }
    };

    const getColumns = () => {
        if (selectedTable === 'purchase') {
            return PurchaseColumns;
        } else {
            return PurchaseReturnColumns;
        }
    };

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

                    GSTR-2 (Purchase)
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
                    <div className="select">
                        <select id="downloadSelect" onChange={handleDownload}>
                            <option value="json">Download JSON</option>
                            <option value="excel">Download Excel</option>
                            <option value="pdf">Download PDF</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="tabs mt-3">
                <div className={`tab ${selectedTable === 'purchase' ? 'is-active' : ''}`} onClick={() => setSelectedTable('purchase')}>Purchase</div>
                <div className={`tab ${selectedTable === 'purchaseReturn' ? 'is-active' : ''}`} onClick={() => setSelectedTable('purchaseReturn')}>Purchase Return</div>
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className="table-container">
                    <SmartDarkTable columns={getColumns()} data={getData()} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Gstr2Purchase;
