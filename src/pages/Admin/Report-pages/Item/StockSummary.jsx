import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const StockSummary = () => {
    const { closeModal } = useSiteContext();
    const HSNsalesColumns = [
        { title: "Item Name", index: "item_name" },
        { title: "Item Code", index: "item_code" },
        { title: "Stock Quantity", index: "stock_quantity" },
        { title: "Low Stock Level", index: "low_stock_level" },
        { title: "Stock Value", index: "stock_value" },


    ];

    const HSNsalesData = [
        {
            "item_name": "Item 1",
            "item_code": "ABC123",
            "stock_quantity": 10,
            "low_stock_level": 5,
            "stock_value": 100
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
                    
                    Low Stock Summary
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

export default StockSummary;








































































































































































;
