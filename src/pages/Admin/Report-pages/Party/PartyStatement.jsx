import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";

const PartyStatement = () => {
    const { closeModal } = useSiteContext();
    const salesColumns = [
        { title: "Date", index: "date" },
        { title: "Transaction Type", index: "transaction_type" },
        { title: "Transaction No", index: "transaction_no" },
        { title: "Original Invoice No", index: "original_invoice_no" },
        { title: "Credit", index: "credit" },
        { title: "Debit", index: "debit" },
        { title: "TDS By Party", index: "TDS_by_party" },
        { title: "TDS By Self", index: "TDS_by_self" },
        { title: "Payment Mode", index: "payment_mode" },
    ];

    const salesData = [
        {
            "date": "xxx",
            "transaction_type": 3,
            "transaction_no": 44,
            "original_invoice_no": 900,
            "credit": 2,
            "debit": 5000,
            "TDS_by_party": "xx",
            "TDS_by_self": "xxx",
            "payment_mode": "xxxx"
        },
    ];
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // const filteredData = salesData.filter(item => 
    //     item.party_name.toLowerCase().includes(searchTerm.toLowerCase())
    // );


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
                   

                    Party Statement (Ledger)
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
                <SmartDarkTable columns={salesColumns} data={salesData} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }}  />
            </div>
            </div>
        </div>
    );
}

export default PartyStatement;



