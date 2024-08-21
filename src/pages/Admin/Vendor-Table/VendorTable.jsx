import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import VendorForm from "./VendorForm";
import { useEffect, useState, useCallback } from "react";
import createAxiosInstance from "../../../services/axios";
import { VENDOR_URL } from "../../../api/AdminApi/VendorApi";
import { toast } from "react-toastify";
import DataNotFound from "../../../components/AdminDataNotFound/DataNotFound";
import jsPDF from "jspdf";
import FilterForm from "../../../components/Filter-Form/FilterForm";
import moment from "moment/moment";

const VendorTable = () => {
  const { openModal, closeModal, setLoading } = useSiteContext();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const tableData = useCallback(async () => {
    try {
      setLoading(true);
      const axiosInstance = await createAxiosInstance();
      const response = await axiosInstance.get(VENDOR_URL.GET_ALL);
      setData(response.data.vendor);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.code);
      setLoading(false);
    }
  }, [setLoading, setData]);

  useEffect(() => {
    tableData();
  }, [tableData]);

  const filteredData = data.filter((vendor) => {
    return Object.keys(vendor).some((key) => {
      const value = vendor[key];
      if (typeof value === "string" && key !== "phone_number") {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (key === "phone_number") {
        return value.toString().includes(searchQuery);
      }
      return false;
    });
  });

  const openDeleteModal = (vendor) => {
    let modalObject = {
      title: "Do you want to Delete The Vendor?",
      body: "Note: The Vendor will be deleted! Action cannot be reverted",
      modalClass: "smart-modal-30",
      okFunction: () => {
        deleteVendor(vendor.id);
      },
      cancelFunction: () => {
        closeModal();
      },
      okText: "Yes",
      cancelText: "No",
    };
    openModal(modalObject);
  };

  const deleteVendor = async (id) => {
    try {
      const axiosInstance = await createAxiosInstance();
      const response = await axiosInstance.delete(`${VENDOR_URL.DELETE}/${id}`);
      console.log("Vendor deleted:", response.data);
      toast.success("Vendor deleted successfully", { autoClose: 500 });
      closeModal();
      tableData();
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  const openEditModal = (vendor) => {
    let modalObject = {
      body: <VendorForm dataIn={vendor} />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const openViewModal = (vendor) => {
    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Vendor Details", 14, 22);

      const tableColumn = ["Field", "Value"];
      const tableRows = [];

      const vendorDetails = [
        ["Vendor ID", vendor.vendor_id],
        ["Vendor Name", vendor.vendor_name],
        ["Phone Number", vendor.phone_number],
        ["Date of Creation", vendor.date_of_creation],
        ["GST Number", vendor.gst_number],
        ["Status", vendor.status === 1 ? "Active" : "Inactive"],
        ["Address", vendor.address],
        ["PAN Number", vendor.pan_number],
        ["Group Name", vendor.group_name],
        ["Company Name", vendor.company_name],
        ["Supplier Description", vendor.supplier_description],
        ["Bank Name", vendor.bank_name],
        ["Bank Address", vendor.bank_address],
        ["Account Number", vendor.account_number],
        ["IFSC Code", vendor.ifsc_code],
      ];

      vendorDetails.forEach((detail) => {
        tableRows.push(detail);
      });

      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 30,
      });

      doc.save(`vendor_${vendor.vendor_id}.pdf`);
    };

    let modalObject = {
      body: (
        <>
          <div>
            <div className="is-flex is-justify-content-space-between">
              <h2 className="title is-5 mt-2">Vendor Details</h2>
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
                  <th>Vendor ID</th>
                  <td>{vendor.vendor_id}</td>
                </tr>
                <tr>
                  <th>Vendor Name</th>
                  <td>{vendor.vendor_name}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{vendor.phone_number}</td>
                </tr>
               
                
                <tr>
                  <th>Status</th>
                  <td>{vendor.status === 1 ? "Active" : "Inactive"}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{vendor.address}</td>
                </tr>
                
                
                <tr>
                  <th>Company Name</th>
                  <td>{vendor.company_name}</td>
                </tr>
                <tr> 
                  <th>Supplier Description</th>
                  <td>{vendor.supplier_description}</td>
                </tr>
                <tr>
                  <th>Bank Name</th>
                  <td>{vendor.bank_name}</td>
                </tr>
                <tr>
                  <th>Bank Address</th>
                  <td>{vendor.bank_address}</td>
                </tr>
                <tr>
                  <th>Account Number</th>
                  <td>{vendor.account_number}</td>
                </tr>
                <tr>
                  <th>IFSC Code</th>
                  <td>{vendor.ifsc_code}</td>
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
      onClick: (vendor) => {
        openEditModal(vendor);
      },
    },
    {
      label: "",
      leftIcon: "fa fa-trash",
      type: "icon",
      classList: ["has-text-danger is-clickable"],
      onClick: (vendor) => {
        openDeleteModal(vendor);
      },
    },
  ];

  const columns = [
    {
      title: "VENDOR ID",
      index: "vendor_id",
      isSelect: true,
      valueFunction: (vendor) => (
        <div onClick={() => openViewModal(vendor)}>
          {" "}
          <span className="has-text-link">{vendor.vendor_id}</span>
        </div>
      ),
    },
    {
      title: "VENDOR NAME",
      index: "vendor_name",
      isSelect: true,
    },
    {
      title: "PHONE NUMBER",
      index: "phone_number",
      isSelect: true,
    },
    {
      title: "DATE OF CREATION",
      index: "date_of_creation",
      valueFunction: (index) => (
        <span>{moment(index.date_of_creation).format("DD-MM-YYYY")}</span>
      ),
      isSelect: true,
    },
    {
      title: "GST NUMBER",
      index: "gst_number",
      isSelect: true,
    },
    {
      title: "ADDRESS",
      index: "address",
    },
    {
      title: "PAN NUMBER",
      index: "pan_number",
    },
    {
      title: "GROUP NAME",
      index: "group_name",
    },
    {
      title: "COMPANY NAME",
      index: "company_name",
    },
    {
      title: "DESCRIPTION",
      index: "supplier_description",
    },
    {
      title: "BANK NAME",
      index: "bank_name",
    },
    {
      title: "ACCOUNT NUMBER",
      index: "account_number",
    },
    {
      title: "IFSC CODE",
      index: "ifsc_code",
    },
    {
      title: "STATUS",
      index: "status",
      isSelect: true,
      valueFunction: (vendor) => (
        <span
          className={`tag is-${vendor.status === 1 ? "success" : "danger"}`}
        >
          {vendor.status === 1 ? "Active" : "Inactive"}
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

  const openAddModal = () => {
    let modalObject = {
      body: <VendorForm />,
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
          <DataNotFound msg="No Vendors Found" />
          <SmartDarkButton
            label="ADD VENDOR"
            leftIcon="fa fa-plus"
            classList={["is-link my-6 ml-2"]}
            onClick={openAddModal}
          />
          <SmartDarkButton
            label=""
            leftIcon="fa fa-refresh"
            classList={["is-link is-outlined my-6 ml-3"]}
            onClick={() => tableData()}
          />
        </div>
      ) : (
        <div>
          <div className="is-flex is-justify-content-space-between">
            <div className="title is-4 mt-4">VENDOR TABLE</div>
            <div>
              <SmartDarkButton
                label=""
                leftIcon="fa fa-refresh"
                classList={["is-link is-outlined my-3 mr-3"]}
                onClick={() => tableData()}
              />
              <SmartDarkButton
                label="ADD VENDOR"
                leftIcon="fa fa-plus"
                classList={["is-link my-3"]}
                onClick={openAddModal}
              />
            </div>
          </div>
          <div className="card smart-admin-container px-2">
            <div className="columns mt-2 ml-2">
              <div className="column is-10">
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className="input is-rounded"
                      type="search"
                      placeholder="Search Vendors"
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
                <FilterForm columns={columns} onApply={handleApply} />
              </div>
            </div>
            <SmartDarkTable
              columns={visibleColumns}
              data={filteredData}
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

export default VendorTable;
