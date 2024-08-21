import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable,SmartDarkButton} from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const ItemReport = () => {
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "Item Name", type: "item_name" },
        { title: "Item Code", index: "item_code" },
        { title: "Sales Quantity", index: "sales_quantity" },
        { title: "Sales Amount", index: "sales_amount" },
        { title: "Purchase Quantity", index: "purchase_quantity" },
        { title: "Purchase Amount", index: "purchase_amount" },


    ];


    const salesData = [
        {

            "item_name": "Item 1",
            "item_code": "ABC123",
            "sales_quantity": 10,
            "sales_amount": 1000,
            "purchase_quantity": 5,
            "purchase_amount": 500


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
                   
                    Item Report By Party
                </div>
            </div>
            <hr />
            <div className="columns">
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

export default ItemReport;
