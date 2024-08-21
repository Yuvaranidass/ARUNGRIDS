// import "./Report.css";
import { SmartDarkTable,SmartDarkButton} from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";
const PurchaseSummary = () => {
    const { closeModal } = useSiteContext();
    const HSNsalesColumns = [
        { title: "S.no", index: "sno" },
        { title: "Purchase No", index: "purchase_no" },
        { title: "Original Invoice No.", index: "original_invoice_no." },
        { title: "Purchase Date", index: "purchase_date" },
        { title: "Party Name", index: "party_name" },
        { title: "Purchase Amount", index: "purchase_amount" },
        { title: "Notes", index: "notes" },

    ];

    const HSNsalesData = [
        {
            "sno": 1,
            "purchase_no": "INV-123",
            "original_invoice_no.": "INV-123",
            "purchase_date": "2022-01-01",
            "party_name": "John Doe",
            "purchase_amount": 10000,
            "notes": "notes"
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
                    
                    Daybook
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
                    <div className='select mr-3'>
                        <select>
                            <option value="">All Transactions</option>
                            <option value="">Sales</option>
                            <option value="">Purchase</option>
                            <option value="">Payment In</option>
                            <option value="">Payment Out</option>
                            <option value="">Sales Return</option>
                            <option value="">Purchase Return</option>
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
                <div className="title is-size-6">Total Purchases: ₹ 00.00</div>
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

export default PurchaseSummary;
