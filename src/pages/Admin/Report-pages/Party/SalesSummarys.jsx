import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const SalesSummary = () => {
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "Date", index: "date" },
        { title: "Invoice No", index: "Invoice_no" },
        { title: "Party Sale", index: "Party_sale" },
        { title: "Created By", index: "Created_by" },
        { title: "Due Date", index: "Due_date" },
        { title: "Amount", index: "amount" },
        { title: "Balance", index: "balance" },
        { title: "Invice Type", index: "invoice_type" },
        { title: "Invoice Status", index: "invoice_status" },
    ];

    const salesData = [
        {
            "date": "xxx",
            "Invoice_no": 3,
            "Party_sale": 900,
            "Created_by": 2,
            "Due_date": 5000,
            "amount":100,
             "balance":200,
             "invoice_type":"xx",
             "invoice_status":"xxx"

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
                    
                 Sales Summary 
                </div>
               
                <div className='select mr-6'>
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

            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
            <div>
                <SmartDarkTable columns={salesColumns} data={salesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
            </div>
            </div>
        </div>
    );
}

export default SalesSummary;
