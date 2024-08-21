/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  faDollarSign,
  faMoneyBillWave,
  faMoneyBill,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmartDarkButton, SmartDarkTable } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import CreateSalesInvoice from "../CreateSalesInvoice/CreateSalesInvoice";

const SalesInvoice = () => {
  const [totalSales, setTotalSales] = useState(1000.0);
  const [paid, setPaid] = useState(200.0);
  const [unpaid, setUnpaid] = useState(0.0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { openModal } = useSiteContext();

  const openMyModal = () => {
    //popup
    let modalObject = {
      body: <CreateSalesInvoice />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const data = useMemo(
    () => [
      {
        id: 1,
        date: "1/1/2024",
        invoicenumber: "1",
        partyname: "barath",
        duein: "12/1/2024",
        amount: "20000",
        status: "Recieved",
      },
      {
        id: 2,
        date: "2/1/2024",
        invoicenumber: "2",
        partyname: "perumal",
        duein: "13/1/2024",
        amount: "0",
        status: "Non-Recieved",
      },
    ],
    []
  );

  useEffect(() => {
    setUnpaid(calculateUnpaid());
  }, [calculateUnpaid]);

  const calculateUnpaid = useCallback(() => {
    const unpaidAmount = totalSales - paid;
    return unpaidAmount.toFixed(2);
  }, [totalSales, paid]);

  useEffect(() => {
    setUnpaid(calculateUnpaid());
  }, [calculateUnpaid]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(lowercasedQuery)
      )
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

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
      title: "Invoice Number",
      index: "invoicenumber",
    },
    {
      title: "Party Name",
      index: "partyname",
    },
    {
      title: "Due In",
      index: "duein",
    },
    {
      title: "Amount",
      index: "amount",
    },
    {
      title: "Status",
      index: "status",
    },
  ];

  return (
    <div className="px-4 py-3">
      {/* Title */}
      <div className="subtitle has-text-weight-bold">SALES INVOICE</div>
      <div className="columns">
        {/* Total Sales */}
        <div className="column is-4">
          <div className="box has-background-white">
            <div className="has-text-info">
              <span className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              Total Sales
            </div>
            <div id="total-sales">{totalSales.toFixed(2)}</div>
          </div>
        </div>
        {/* Paid */}
        <div className="column is-4">
          <div className="box has-background-white">
            <div className="has-text-success">
              <span className="icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </span>
              Received Payment
            </div>
            <div id="paid">{paid.toFixed(2)}</div>
          </div>
        </div>
        {/* Unpaid */}
        <div className="column is-4">
          <div className="box has-background-white">
            <div className="has-text-danger">
              <span className="icon">
                <FontAwesomeIcon icon={faMoneyBill} />
              </span>
              Pending Payment
            </div>
            <div id="unpaid">{unpaid}</div>
          </div>
        </div>
      </div>
      {/* Search box and Create Sales Invoice button */}
      <div className="card smart-admin-container py-2 px-2">
        <div className="columns my-2">
          <div className="column is-9">
            <div className="field ">
              <div className="control smart-customer-search has-icons-left">
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
          <div className="column is-3">
            <SmartDarkButton
              label="Create Sales Invoice"
              leftIcon="fa fa-cart-arrow-down"
              classList={["is-link "]}
              onClick={() => openMyModal()}
            />
          </div>
        </div>

        <SmartDarkTable
          columns={columns}
          data={filteredData}
          tableProps={{
            className:
              "admin-table-layout is-hoverable is-clickable has-text-left",
          }}
        />
      </div>
    </div>
  );
};

export default SalesInvoice;
