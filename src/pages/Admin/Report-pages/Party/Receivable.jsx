import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";
const Receivable = () => { 
    const { closeModal } = useSiteContext();
    const salesColumns = [

        { title: "Customer Name", index: "customer_name" },
        { title: "1-15 Days", index: "1-15_days" },
        { title: "16-30 Days", index: "16-30_days" },
        { title: "31-45 Days", index: "31-45_days" },
        { title: "More Than 45 Days", index: "days" },
        { title: "Total", index: "total" },
    ];
    const salesData = [
        {
            "customer_name": "Customer 1",
            "1-15_days":11,
            "16-30_days":26,
            "31-45_days":40, 
              "days":60,
            "total": 1000,
          
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
                    
                  Receivable Ageing Report
                </div>
                
            </div>
            <div className="card smart-admin-container py-2 px-2 mt-5">
            <div  >
                <SmartDarkTable columns={salesColumns} data={salesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }}  />
            </div>
            </div>
        </div>
    );
}

export default Receivable;
