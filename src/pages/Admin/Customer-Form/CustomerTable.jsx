import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import CustomerForm from "./CustomerForm";
import { useState } from "react";
import createAxiosInstance from "../../../services/axios";
import { CUSTOMER_URL } from "../../../api/AdminApi/VendorApi";
import { toast } from "react-toastify";
import DataNotFound from "../../../components/AdminDataNotFound/DataNotFound";
import jsPDF from "jspdf";
import FilterForm from "../../../components/Filter-Form/FilterForm";
import "./CustomerTable.css";

const CustomerTable = () => {
  const { openModal, closeModal, setLoading } = useSiteContext();
  // const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // const tableData = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const axiosInstance = await createAxiosInstance();
  //     const response = await axiosInstance.get(CUSTOMER_URL.GET_ALL);
  //     setData(response.data.customer);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error.code);
  //     setLoading(false);
  //   }
  // }, [setLoading]);

  // useEffect(() => {
  //   tableData();
  // }, [tableData]);

  // const filteredData = data.filter((customer) => {
  //   return Object.keys(customer).some((key) => {
  //     const value = customer[key];
  //     if (typeof value === "string" && key !== "phone_number") {
  //       return value.toLowerCase().includes(searchQuery.toLowerCase());
  //     } else if (key === "phone_number") {
  //       return value.toString().includes(searchQuery);
  //     }
  //     return false;
  //   });
  // });

  const openDeleteModal = (customer) => {
    let modalObject = {
      title: "Do you want to Delete The Customer?",
      body: "Note: The Customer will be deleted! Action cannot be reverted",
      modalClass: "smart-modal-30",
      okFunction: () => {
        deleteCustomer(customer.id);
        console.log("customer deleted:", customer);
      },
      cancelFunction: () => {
        closeModal();
      },
      okText: "Yes",
      cancelText: "No",
    };
    openModal(modalObject);
  };

  const deleteCustomer = async (id) => {
    try {
      const axiosInstance = await createAxiosInstance();
      const response = await axiosInstance.delete(
        `${CUSTOMER_URL.DELETE}/${id}`
      );
      console.log("Customer deleted:", response.data);
      toast.success("Customer deleted successfully", { autoClose: 500 });
      closeModal();
      // tableData();
    } catch (error) {
      console.error("Error deleting Customer:", error);
    }
  };

  const openEditModal = (customer) => {
    let modalObject = {
      body: <CustomerForm dataIn={customer} />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const openViewModal = (customer) => {
    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Customer Details", 14, 22);

      const tableColumn = ["Field", "Value"];
      const tableRows = [];

      const customerDetails = [
        ["Customer ID", customer.customer_id],
        ["customer Name", customer.customer_name],
        ["Phone Number", customer.phone_number],
        ["Status", customer.status === 1 ? "Active" : "Inactive"],
        ["Address", customer.address],
      ];

      customerDetails.forEach((detail) => {
        tableRows.push(detail);
      });

      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 30,
      });

      doc.save(`customer_${customer.customer_id}.pdf`);
    };

    let modalObject = {
      body: (
        <>
          <div>
            <div className="is-flex is-justify-content-space-between">
              <h2 className="title is-5 mt-2">Customer Details</h2>
              <div>
                <SmartDarkButton
                  type="icon"
                  leftIcon="fa fa-download"
                  classList={["is-clickable has-text-success"]}
                  onClick={handleDownloadPDF}
                />
                <SmartDarkButton
                  type="icon"
                  onClick={closeModal}
                  leftIcon="fa fa-times"
                  classList={["is-clickable has-text-danger"]}
                />
              </div>
            </div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <tbody>
                <tr>
                  <th>Customer ID</th>
                  <td>{customer.customer_id}</td>
                </tr>
                <tr>
                  <th>Customer Name</th>
                  <td>{customer.customer_name}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{customer.phone_number}</td>
                </tr>

                <tr>
                  <th>Status</th>
                  <td>{customer.status === 1 ? "Active" : "Inactive"}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{customer.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const buttons = [
    {
      label: "",
      leftIcon: "fa fa-pencil-square-o",
      type: "icon",
      classList: ["has-text-info is-clickable"],
      onClick: (customer) => {
        openEditModal(customer);
      },
    },
    {
      label: "",
      leftIcon: "fa fa-trash",
      type: "icon",
      classList: ["has-text-danger is-clickable"],
      onClick: (customer) => {
        openDeleteModal(customer);
      },
    },
  ];

  const columns = [
    {
      title: "CUSTOMER ID",
      index: "customer_id",
      isSelect: true,
      valueFunction: (customer) => (
        <div onClick={() => openViewModal(customer)}>
          {" "}
          <span className="has-text-link">{customer.customer_id}</span>
        </div>
      ),
    },
    {
      title: "CUSTOMER NAME",
      index: "customer_name",
      isSelect: true,
    },
    {
      title: "PHONE NUMBER",
      index: "phone_number",
      isSelect: true,
    },

    {
      title: "ADDRESS",
      index: "address",
    },

    {
      title: "STATUS",
      index: "status",
      isSelect: true,
      valueFunction: (customer) => (
        <span
          className={`tag is-${customer.status === 1 ? "success" : "danger"}`}
        >
          {customer.status === 1 ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      title: "ACTION",
      index: "action",
      isSelect: true,
      type: "buttons",
      buttons: buttons,
    },
  ];

  const data = [
    {
      customer_id: 1,
      customer_name: "John Doe",
      phone_number: "1234567890",
      status: 1,
      address: "123 Main St",
    },
  ];

  const openAddModal = () => {
    let modalObject = {
      body: <CustomerForm />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const [visibleColumns, setVisibleColumns] = useState(
    columns.filter((col) => col.isSelect === true || col.isSelect)
  );
  const handleApply = (selectedColumns) => {
    setVisibleColumns(selectedColumns);
  };

  return (
    <>
      {data.length === 0 ? (
        <div className="is-flex is-justify-content-center">
          {" "}
          <DataNotFound msg="No Customers Found" />
          <SmartDarkButton
            label="ADD CUSTOMER"
            leftIcon="fa fa-plus"
            classList={["is-link my-6 ml-2"]}
            onClick={openAddModal}
          />
          <SmartDarkButton
            label=""
            leftIcon="fa fa-refresh"
            classList={["is-link is-outlined my-6 ml-3"]}
            // onClick={() => tableData()}
          />
        </div>
      ) : (
        <div>
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-4 mt-4">CUSTOMER TABLE</div>
            <div>
              {/* <SmartDarkButton
                label=""
                leftIcon="fa fa-refresh"
                classList={["is-link is-outlined my-3 mr-3"]}
                // onClick={() => tableData()}
              /> */}
              <SmartDarkButton
                label="ADD CUSTOMER"
                leftIcon="fa fa-plus"
                classList={["button my-3 buttoncolor"]}
                onClick={openAddModal}
              />
            </div>
          </div>
          <div className="card smart-admin-container px-2">
            <div className="columns mt-2 ml-2">
              <div className="column is-6 ">
                <div className="field is-is-justify-content-center">
                  <div className="control has-icons-left">
                    <input
                      className="input "
                      type="search"
                      placeholder="Search customers"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                    <span className="icon is-left">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-2">
                {/* <FilterForm columns={columns} onApply={handleApply} /> */}
              </div>
            </div>
            <SmartDarkTable
              columns={visibleColumns}
              data={data}
              tableProps={{
                className: "admin-table-layout is-hoverable is-clickable",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerTable;
