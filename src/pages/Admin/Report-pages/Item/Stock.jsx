import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";


const Stock = () => {
    const [selectedTable, setSelectedTable] = useState('sales');
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
            excelContent += `${item.sno}\t${item.gstin}\t${item.customer_name}\t${item.state_name}\t${item.state_code}\t${item.invoice_number}\t${item.invoice_date}\t${item.invoice_value}\t${item['total_tax(%)']}\t${item.taxable_value}\t${item.cgst}\t${item['sgst/utgst']}\t${item.igst}\t${item.cess}\t${item.total_tax}\n`;
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

    const salesColumns = [

        { title: "Item Name", index: "item_name" },
        { title: "Item Code", index: "item_code" },
        { title: "Purchase Price", index: "purchase_price" },
        { title: "Selling Price", index: "selling_price" },
        { title: "Stock Quantity", index: " stock_quantity" },
        { title: "Stock Value", index: "stock_value" },
    ];



    const salesData = [
        {
            sno: 1,
            item_name: "Item 1",
            item_code: "ITM001",
            purchase_price: 100,
            selling_price: 200,
            stock_quantity: 10,
            stock_value: 2000,
        },
        // Add more sales data objects as needed
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

                    Stock Summary
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

            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className="title is-size-5">Total Stock Value: 0</div>
                <div className="3">
                    <SmartDarkTable columns={salesColumns} data={salesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>

    );
}

export default Stock;
