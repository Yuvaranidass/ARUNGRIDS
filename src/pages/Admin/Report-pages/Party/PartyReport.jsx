import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const PartyReport = () => {
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "Party Name", index: "party_name" },
        { title: "Sales Quantity", index: "sales_quantity" },
        { title: "Sales Amount", index: "sales_amount" },
        { title: "Purchase Quantity", index: "purchase_quantity" },
        { title: "Purchase Amount", index: "purchase_amount" },
    ];

    const salesData = [
        {
            "party_name": "xxx",
            "sales_quantity": 3,
            "sales_amount": 900,
            "purchase_quantity": 2,
            "purchase_amount": 5000
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = salesData.filter(item =>
        item.party_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                   
                    Party Report By Item
                </div>
                <div className="control has-icons-left">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <span className="icon is-left">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
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
                <SmartDarkTable columns={salesColumns} data={filteredData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
            </div>
            </div>
        </div>
    );
}

export default PartyReport;
