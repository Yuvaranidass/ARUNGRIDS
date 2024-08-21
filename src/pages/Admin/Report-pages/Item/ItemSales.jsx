import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const ItemSales = () => {
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "Item Name", type: "item_name" },
        { title: "Sales Quantity", index: "sales_quantity" },
        { title: "Purchase Quantity", index: "purchase_quantity" },
    ];


    const salesData = [
        {
            "item_name": "Item 1",
            "sales_quantity": 10,
            "purchase_quantity": 5
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

                    Item Sales And Purchase Summary
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
                <div className='column is-2'>
                    <div className='select mr-3'>
                        <select>
                            <option value="">All Categories</option>
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

export default ItemSales;
