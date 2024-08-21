import "bulma/css/bulma.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";
import CustomerForm from "../../Customer-Form/CustomerForm"
const PaymentTable = () => {
    const { openModal } = useSiteContext();
    const columns = [
        {
            title: "#",
            type: "sno",
        },
        {
            title: "Date",
            index: "date",
        },
        {
            title: "Bill No",
            index: "billno",
        },
        {
            title: "Name",
            index: "name",
        },
        {
            title: "Phone Number",
            index: "phonenumber",
        },
        {
            title: "Payment Type",
            index: "paymenttype",
        },
        {
            title: "Pincode",
            index: "pincode",
        },

        {
            title: "Action",
            type: "action",
            // valueFunction: (index) => {
            //   return (
            //     <div className="is-flex is-justify-content-space-between">
            //       <button className="button is-link is-rounded is-small">Edit</button>
            //       <button className="button is-danger is-rounded is-small">
            //         Delete
            //       </button>
            //     </div>
            //   );
            // },
        },
    ];

    const data = [
        {

            date: "30/09/2024",
            billno: "2184",
            name: "perumal",
            phonenumber: "6379892147",
            paymenttype: "cash",
            pincode: "603109",
            totalamount: "3,657",
            status: "paid",
        },

    ];

    const openMyModal = () => {
        let modalObject = {
            body: <CustomerForm />,
            modalClass: "smart-modal-80",
        };
        openModal(modalObject);
    };
    return (
        <>
            <div>
                <div className="smart-Purchase">
                    <div className="is-flex is-justify-content-space-between">
                        <div className="title is-4 mt-4">PAYMENT</div>
                        <SmartDarkButton
                            label="ADD PAYMENT"
                            leftIcon="fa fa-plus"
                            classList={["is-link my-3"]}
                            onClick={openMyModal}
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
                        </div>
                        <SmartDarkTable
                            columns={columns}
                            data={data}
                            tableProps={{
                                className:
                                    "admin-table-layout is-hoverable is-clickable has-text-left",
                            }}
                        />
                    </div>
                </div>

            </div>


        </>
    );
};

export default PaymentTable;
