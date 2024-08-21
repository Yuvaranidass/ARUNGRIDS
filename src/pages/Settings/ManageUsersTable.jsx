import { SmartDarkTable } from "dark_power25";


const ManageUsersTable = () => {
    const columns = [
        {
            title: "S.no",
            type: "sno",
        },
        {
            title: " Name",
            index: "Name",
        },
        {
            title: "Mobile Number",
            index: "Mobile_Number",
        },
        {
            title: "Email",
            index: "Email",
        },
        {
            title: "User Role",
            index: "User_role",
        }


    ];

    const data = [
        {
            Name: "AAdhi",
            Mobile_Number: "342394828",
            Email: "rohitsharma@gmail.com",
            User_role: "Admin",

        },
        {
            Name: "Friends Card",
            Mobile_Number: "342394828",
            Email: "cutomer@gmail.com",
            User_role: "Admin",

        },


    ];

    return (
        <div className="vendor-table">
            <div className="title is-4 mt-4">CA REPORT TABLE</div>
            <div className="card smart-admin-container py-2 mt-2">
                <div className="columns is-centered">
                    <div className="column is-6">
                        <div className="field my-2">
                            <div className="control smart-customer-search has-icons-left">
                                <input
                                    className="input is-rounded "
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

    )
}

export default ManageUsersTable