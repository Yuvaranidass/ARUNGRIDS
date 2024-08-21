import "bulma/css/bulma.css";
import "./BillingTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
// import BillingForm from "./BillingForm";

const BillingTable = () => {
    const { openModal } = useSiteContext();

    const buttons = [
        {
            label: "",
            leftIcon: "fa fa-pencil-square-o",
            type: "icon",
            classList: ["has-text-info"],
            // onClick: (response) => {
            //     openEditModal(response);
            // },
        },
        {
            label: "",
            leftIcon: "fa fa-trash",
            type: "icon",
            classList: ["has-text-danger"],
            // onClick: (response) => {
            //     openDeleteModal(response);
            // },
        },
    ];

    const columns = [
        {
            title: "#",
            type: "sno",
        },
        {
            title: "Customer",
            index: "Customer",
        },
        {
            title: "Phone Number",
            index: "phone_no",
        },
        {
            title: "Email",
            index: "email",
        },
        {
            title: "Address",
            index: "address",
        },
        {
            title: "Pincode",
            index: "pincode",
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
            Customer: "kaviya",
            phone_no: 9345198763,
            email: "kaviyatamizh1909@gmail.com",
            address: "No: 40, Kuyavar Street, Thirkazhukundram",
            pincode: 603109,
            status: 1,
        },
        {
            Customer: "Balaji",
            phone_no: 8524050014,
            email: "balabalaji1125@gmail.com",
            address: "No: 03, Vanniyar Street, Thirkazhukundram",
            pincode: 603109,
            status: 0,
        },
        {
            Customer: "Tamizh",
            phone_no: 9025958912,
            email: "tamizh@gmail.com",
            address: "No: 40, Kuyavar Street, Thirkazhukundram",
            pincode: 603109,
            status: 1,
        },
    ];

    const openMyModal = () => {
        let modalObject = {
            body: <BillingForm />,
            modalClass: "smart-modal-80",
        };
        openModal(modalObject);
    };
    return (
        <>
            <div>
                <div className="smart-customertable">
                    <div className="is-flex is-justify-content-space-between">
                        <div className="title is-4 mt-4">BILLING</div>

                        <SmartDarkButton
                            label="ADD BILLING"
                            leftIcon="fa fa-plus"
                            classList={["is-link my-3"]}
                            onClick={() => openMyModal()}
                        />
                    </div>

                    <div className="card smart-admin-container py-2">
                        <div className="is-flex is-justify-content-space-around">
                            <div className="field my-2">
                                <div className="control smart-customer-search has-icons-left">
                                    <input
                                        className="input is-rounded"
                                        type="search"
                                        placeholder="Search Vendors"
                                        //value={searchQuery}
                                        //onChange={handleSearch}
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
                        <SmartDarkTable columns={columns} data={data} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default BillingTable;
