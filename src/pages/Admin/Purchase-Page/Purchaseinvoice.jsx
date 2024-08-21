
import { useState, useEffect } from "react";
import {
  faDollarSign,
  faMoneyBillWave,
  faMoneyBill,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmartDarkButton, SmartDarkTable } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import CreatePurchaseInvoice from "../CreatePurchaseInvoice/CreatePurchaseInvoice";


const PurchaseInvoice = () => {
  const { openModal } = useSiteContext();
  const [totalSales, setTotalSales] = useState(1000.0);
  const [paid, setPaid] = useState(200.0);
  const [unpaid, setUnpaid] = useState(0.0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // const { openModal, closeModal, setLoading } = useSiteContext(); 

  const createpurchaseinvoice = () => {
    let modalObject = {
      body: <CreatePurchaseInvoice />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  }

  const data = [
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
  ];

  const calculateUnpaid = () => {
    const unpaidAmount = totalSales - paid;
    return unpaidAmount.toFixed(2);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setUnpaid(calculateUnpaid());
  }, [totalSales, paid]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowercasedQuery)
      )
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const openMyModal = () => {
    let modalObject = {
      body: <CreatePurchaseInvoice />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

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
    <div className=" px-4 py-3">
      {/* Title */}
      <div className="subtitle has-text-weight-bold">PURCHASE INVOICE</div>
      <div className="columns">
        {/* Total Sales */}
        <div className="column is-4">
          <div className="box has-background-white">
            <div className="has-text-info">
              <span className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              Total Purchase
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
              Paid
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
              Unpaid
            </div>
            <div id="unpaid">{unpaid}</div>
          </div>
        </div>
      </div>

      <div className="card smart-admin-container py-2 px-2">
        <div className="columns my-2">
          <div className="field  column is-9">
            <div className="control  has-icons-left">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
              <span className="icon is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div className="column is-3">
            <SmartDarkButton
              label="Create Purchase Invoice"
              leftIcon="fa fa-shopping-cart"
              classList={["is-link "]}
              onClick={() => createpurchaseinvoice()}
            />
          </div>
        </div>

        <SmartDarkTable columns={columns} data={filteredData} tableProps={{
          className: "admin-table-layout is-hoverable is-clickable has-text-left",
        }} />
      </div>
    </div>
  );
};

export default PurchaseInvoice;

