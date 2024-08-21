import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable,SmartDarkButton} from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const DetailReport = () => {
    const { closeModal } = useSiteContext();

    const salesColumns = [
        { title: "Date", index: "date" },
        { title: "Transaction Type", type: "transaction_type" },
        { title: "Qty", index: "qty" },
        { title: "Closing Stock", index: "closing_stock" },
        { title: "Notes", index: "notes" },
    ];


    const salesData = [
        {

            "date": "2022-02-01",
            "transaction_type": "Sales",
            "qty": 10,
            "closing_stock": 20,
            "notes": "Sales transaction"
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
                <div className="subtitle">
                   
                    Stock Detail Report
                </div>
            </div>
            <hr />
            <div className="columns">
                {/* <div className='column is-2'>
                <div className='select mr-3'>
                    <select>
                        <option value="">All Categories</option>
                    </select>
                </div>
                </div> */}
                <div className='column is-3'>
                    <div className='select mr-3'>
                        <select>
                            <option value="">No Party Found</option>
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
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className="">
                    <SmartDarkTable columns={salesColumns} data={salesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>
    );
}

export default DetailReport;
