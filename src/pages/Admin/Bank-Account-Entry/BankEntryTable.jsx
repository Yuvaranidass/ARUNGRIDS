import "bulma/css/bulma.css";
import "./BankEntryTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import BankEntryForm from "./BankEntryForm";

const BankEntryTable = () => {
    const { openModal } = useSiteContext();

    const openEditModal = (response) => {
        openModal({
            body: <BankEntryForm dataIn={response} loadTableData={loadTableData} />,
            modalClass: "smart-modal-80",
        });
    };

    const openDeleteModal = (response) => {
        // Implement delete functionality here
    };

    const loadTableData = () => {
        // Implement data loading functionality here
    };

    const buttons = [
        {
            label: "",
            leftIcon: "fa fa-pencil-square-o",
            type: "icon",
            classList: ["has-text-info"],
            onClick: (response) => {
                openEditModal(response);
            },
        },
        {
            label: "",
            leftIcon: "fa fa-trash",
            type: "icon",
            classList: ["has-text-danger"],
            onClick: (response) => {
                openDeleteModal(response);
            },
        },
    ];

    const columns = [
        {
            title: "#",
            type: "sno",
        },
        {
            title: "Bank Name",
            index: "bank_name",
        },
        {
            title: "Account Name",
            index: "account_name",
        },
        {
            title: "IFSC Code",
            index: "ifsc_code",
        },
        {
            title: "Account No",
            index: "account_no",
        },
        {
            title: "Opening Balance",
            index: "opening_balance",
        },
        {
            title: "Description",
            index: "description",
        },
        {
            title: "Status",
            index: "status",
            valueFunction: (index) => (
                <span className={`tag is-${index.status === 1 ? "success" : "danger"}`}>
                    {index.status === 1 ? "Active" : "Inactive"}
                </span>
            ),
        },
        { title: "Action", index: "action", type: "buttons", buttons: buttons },
    ];

    const data = [
        {
            bank_name: "SBI",
            account_name: "saving account",
            ifsc_code: "SBI1234",
            account_no: 1234567890,
            opening_balance: 10000,
            description: "SBI",
            status: 1,
        },
        {
            bank_name: "HDFC",
            account_name: "saving account",
            ifsc_code: "HDFC1234",
            account_no: 1234567890,
            opening_balance: 10000,
            description: "HDFC",
            status: 1,
        },
        {
            bank_name: "ICICI",
            account_name: "saving account",
            ifsc_code: "ICICI1234",
            account_no: 1234567890,
            opening_balance: 10000,
            description: "ICICI",
            status: 1,
        },
    ];

    const openMyModal = () => {
        openModal({
            body: <BankEntryForm loadTableData={loadTableData} />,
            modalClass: "smart-modal-80",
        });
    };

    return (
        <div>
            <div className="smart-customertable">
                <div className="is-flex is-justify-content-space-between">
                    <div className="title is-5">Bank Entry</div>

                    <SmartDarkButton
                        label="Add Bank"
                        leftIcon="fa fa-plus"
                        classList={["is-link"]}
                        onClick={openMyModal}
                    />
                </div>

                <div className="card">
                    <div className="is-flex is-justify-content-space-around mt-4">
                        <div className="field mt-3">
                            <div className="control smart-customer-search has-icons-left">
                                <input
                                    className="input is-rounded"
                                    type="text"
                                    placeholder="Search"
                                />
                                <span className="icon is-left">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <SmartDarkButton
                            label="Filter"
                            leftIcon="fa fa-filter"
                            classList={["is-link ml-2 my-3"]}
                        />
                        <SmartDarkButton
                            label="Sort By"
                            leftIcon="fa fa-sort"
                            classList={["is-link ml-2 my-3"]}
                        />
                    </div>
                    <SmartDarkTable columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default BankEntryTable;
