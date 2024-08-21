import { useState } from 'react';
import { SmartDarkTable,SmartDarkButton} from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const CashAndBankReport = () => {
    const [selectedTable, setSelectedTable] = useState('sales'); // Add state for selected table
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "S.no", type: "sno" },
        { title: "GSTIN", index: "gstin" },
        { title: "Customer Name", index: "customer_name" },
        { title: "State Name", index: "state_name" },
        { title: "State Code", index: "state_code" },
        { title: "Invoice Number", index: "invoice_number" },
        { title: "Invoice Date", index: "invoice_date" },
        { title: "Invoice Value", index: "invoice_value" },
        { title: "Total Tax(%)", index: "total_tax(%)" },
        { title: "Taxable Value", index: "taxable_value" },
        { title: "CGST", index: "cgst" },
        { title: "SGST/UTGST", index: "sgst/utgst" },
        { title: "IGST", index: "igst" },
        { title: "CESS", index: "cess" },
        { title: "Total Tax", index: "total_tax" },
    ];

    const salesReturnColumns = [
        { title: "S.no", type: "sno" },
        { title: "GSTIN", index: "gstin" },
        { title: "Customer Name", index: "customer_name" },
        { title: "State Name", index: "state_name" },
        { title: "State Code", index: "state_code" },
        { title: "Invoice Number", index: "invoice_number" },
        { title: "Invoice Date", index: "invoice_date" },
        { title: "Invoice Value", index: "invoice_value" },
        { title: "Invoice Type", index: "invoice_type" },
        { title: "Total Tax(%)", index: "total_tax(%)" },
        { title: "Taxable Value", index: "taxable_value" },
        { title: "CGST", index: "cgst" },
        { title: "SGST/UTGST", index: "sgst/utgst" },
        { title: "IGST", index: "igst" },
        { title: "CESS", index: "cess" },
        { title: "Total Tax", index: "total_tax" },
    ];

    const purchaseReturnColumns = [
        { title: "S.no", type: "sno" },
        { title: "GSTIN", index: "gstin" },
        { title: "Customer Name", index: "customer_name" },
        { title: "State Name", index: "state_name" },
        { title: "State Code", index: "state_code" },
        { title: "Invoice Number", index: "invoice_number" },
        { title: "Invoice Date", index: "invoice_date" },
        { title: "Invoice Value", index: "invoice_value" },
        { title: "Invoice Type", index: "invoice_type" },
        { title: "Total Tax(%)", index: "total_tax(%)" },
        { title: "Taxable Value", index: "taxable_value" },
        { title: "CGST", index: "cgst" },
        { title: "SGST/UTGST", index: "sgst/utgst" },
        { title: "IGST", index: "igst" },
        { title: "CESS", index: "cess" },
        { title: "Total Tax", index: "total_tax" },
    ];

    const salesData = [
        {
            "sno": 1,
            "gstin": "01AAAPR0001Z",
            "customer_name": "Customer 1",
            "state_name": "Andhra Pradesh",
            "state_code": "AP",
            "invoice_number": "INV-123",
            "invoice_date": "2022-01-01",
            "invoice_value": 1000.00,
            "total_tax(%)": 10.00,
            "taxable_value": 900.00,
            "cgst": 9.00,
            "sgst/utgst": 9.00,
            "igst": 0.00,
            "cess": 0.00,
            "total_tax": 99.00,
        },
        // Add more sales data objects as needed
    ];

    const salesReturnData = [
        {
            "sno": 1,
            "gstin": "01AAAPR0002Z",
            "customer_name": "Customer 2",
            "state_name": "Tamil Nadu",
            "state_code": "TN",
            "invoice_number": "INV-124",
            "invoice_date": "2022-02-01",
            "invoice_value": 2000.00,
            "invoice_type": "Sales Return",
            "total_tax(%)": 8.00,
            "taxable_value": 1800.00,
            "cgst": 7.00,
            "sgst/utgst": 7.00,
            "igst": 0.00,
            "cess": 0.00,
            "total_tax": 112.00,
        },
        // Add more sales return data objects as needed
    ];

    const purchaseReturnData = [
        {
            "sno": 1,
            "gstin": "01AAAPR0003Z",
            "customer_name": "Supplier 3",
            "state_name": "Karnataka",
            "state_code": "KA",
            "invoice_number": "INV-125",
            "invoice_date": "2022-03-01",
            "invoice_value": 3000.00,
            "invoice_type": "Purchase Return",
            "total_tax(%)": 12.00,
            "taxable_value": 2500.00,
            "cgst": 10.00,
            "sgst/utgst": 10.00,
            "igst": 0.00,
            "cess": 0.00,
            "total_tax": 140.00,
        },
        // Add more purchase return data objects as needed
    ];

    const getColumns = () => {
        switch (selectedTable) {
            case 'sales':
                return salesColumns;
            case 'salesReturn':
                return salesReturnColumns;
            case 'purchaseReturn':
                return purchaseReturnColumns;
            default:
                return [];
        }
    };

    const getData = () => {
        switch (selectedTable) {
            case 'sales':
                return salesData;
            case 'salesReturn':
                return salesReturnData;
            case 'purchaseReturn':
                return purchaseReturnData;
            default:
                return [];
        }
    };

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
                <div className="subtitle">
                  
                    Cash And Bank Report (All Payments)
                </div>
            </div>
            <hr />
            <div className="columns">
                <div className='column is-2'>
                    <div className='select mr-3'>
                        <select>
                            <option value="">Cash</option>
                            <option value="">All Cash/ Bank Accounts</option>
                        </select>
                    </div>
                </div>
                <div className='column is-2'>
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
                <div className='column is-2'>
                    <div className='select mr-3'>
                        <select onChange={(e) => setSelectedTable(e.target.value)}>
                            <option value="sales">Sales</option>
                            <option value="salesReturn">Sales Return</option>
                            <option value="purchaseReturn">Purchase Return</option>
                            <option value="">All Transactions</option>
                            <option value="">Payment In</option>
                            <option value="">Payment Out</option>
                            <option value="">Add Money</option>
                            <option value="">Reduce Money</option>
                            <option value="">Credit Note</option>
                            <option value="">Debit Note</option>
                            <option value="">Expense</option>
                        </select>
                    </div>
                </div>
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

export default CashAndBankReport;
