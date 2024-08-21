import "bulma/css/bulma.css";
import "./StockTable.css";
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
const Stock = () => {
    const columns = [
        {
            title: "#",
            type: "sno",
        },
        {
            title: "Category",
            index: "Category",
        },
        {
            title: "Size",
            index: "Size",
        },

        {
            title: "Quantity",
            index: "Quantity",
        },


        {
            title: "Action",
            type: "action",

        },
    ];

    const data = [
        {
            Category: "banner",
            Size: "xxx",
            Quantity: "006",


        },
        {
            Category: "visting cards",
            Size: "xx",
            Quantity: "008",
           
        },


    ];
    return (
        <>
            <div>
                <div className="smart-Purchase">
                    <div className="is-flex is-justify-content-space-between">
                        <div className="title is-5">Stock</div>


                    </div>

                    <div className="card">
                        <div className=" is-flex is-justify-content-space-around mt-5">
                            <div className="field mt-3">
                                <div className="control smart-stock-search has-icons-left">
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

                        </div>
                        <SmartDarkTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stock;
