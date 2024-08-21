import "bulma/css/bulma.css";
import "./SalesCashandBank.css";
import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import SalesAdjustBalance from "./SalesAdjustBalance";
import SalesBalance from "./SalesBalance";
import SalesAddAccount from "./SalesAddAccount";
import DataNotFound from "../../../components/AdminDataNotFound/DataNotFound";
// import SalesAddAccount from "./SalesAddAccount";
function SalesCashandBank() {


  const { openModal } = useSiteContext();
  const openMyModal = () => {
    let modalObject = {
      body: <SalesAdjustBalance />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const openMyModalTransferMoney = () => {
    let modalObject = {
      body: <SalesBalance />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };

  const openMyModalAddBank = () => {
    let modalObject = {
      body: <SalesAddAccount />,
      modalClass: "smart-modal-80 mt-6",
    };
    openModal(modalObject);
  };


  return (
    <div>
      <div className="mt-3 ml-3">
        <div className=" columns is-flex is-justify-content-space-between ">
          <div className="column is-5">
            <div className="subtitle has-text-weight-bold">CASH AND BANK</div>
          </div>

          <div className="column is-7 is-flex">
            <div>
              <SmartDarkButton
                label="Add/Reduce Money"
                leftIcon="fa fa-money"
                classList={["ml-3 is-link is-outlined"]}
                onClick={() => openMyModal()}
              />
            </div>
            <div>
              <SmartDarkButton
                label="Transfer Money"
                leftIcon="fa fa-exchange"
                classList={["ml-3 is-link is-outlined"]}
                onClick={() => openMyModalTransferMoney()}
              />
            </div>
            <div>
              <SmartDarkButton
                label="Add New Bank"
                leftIcon="fa fa-plus"
                classList={["ml-3 is-link is-outlined"]}
                onClick={() => openMyModalAddBank()}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-3">
            <p>Total Balance: &nbsp;{10000}</p>
            <div className="has-background-light SCB-Cash is-flex is-align-items-center is-justify-content-center mt-3 mb-3">
              <p className="has-text-centered">Cash</p>
            </div>
            <p>Cash in hand:</p>
            <div className="has-background-light SCB-Bank is-flex is-align-items-center is-justify-content-center mt-3 mb-3">
              <p className="has-text-centered">Bank Accounts</p>
            </div>
            <p>Unlinked Transactions</p>
            <hr />
            <div
              className="is-clickable has-text-link"
              onClick={() => openMyModalAddBank()}
            >
              + Add New Bank
            </div>
            <hr />
          </div>
          <hr className="vertical-line" />
          <div className="column is-9" style={{ marginTop: 200 }}>
            <center>
              <DataNotFound msg="No Transactions" />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesCashandBank;
