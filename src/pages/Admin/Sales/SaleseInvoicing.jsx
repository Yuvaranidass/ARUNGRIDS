import SalesGenerate from "./SalesGenerate";
import { useSiteContext } from "../../../context/SiteDarkProvider";
const SaleseInvoicing = () => {
  const { openModal } = useSiteContext();

  const invoice = () => {
    let modalObject = {
      body: <SalesGenerate />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  return (
    <div>
      <div className=" columns  ">
        <div className="column">
          <div className="subtitle has-text-weight-bold">E-INVOICEING</div>
        </div>

        <div className="column is-flex is-justify-content-end"></div>
      </div>
      <hr />
      <div className="columns is-flex is-justify-content-space-evenly">
        <div className="column is-4">
          <div className="card" style={{ height: 300, width: 450 }}>
            <center>
              {/* <img className="image" src={COMPUTER} alt="" /> */}
            </center>
          </div>
        </div>
        <div className="column is-4">
          <div className="card" style={{ height: 300, width: 450 }}>
            {/* <img className="image " src={INVOICING} alt="" /> */}
          </div>
        </div>
        <div className="column is-4">
          <div className="card" style={{ height: 300, width: 450 }}>
            {/* <img className="image " src={GSTS} alt="" /> */}
          </div>
        </div>
      </div>
      <center>
        <div>
          <b className="is-size-5 is-4 mt-3  aligns">
            Try India`s easiest and fastest e-invoicing solution today
          </b>
        </div>
        {/* <SmartDarkButton
          label="Start Generating e-Invoice"
          classList={["is-link mt-6  mt-4 mb-6"]}
          // classList={["is-link mt-4 mb-6"]}
          
          onClick={einvoice}
        />  */}
        <button className="button is-link mt-6  mt-4 mb-6" onClick={invoice}>
          Start Generating e-Invoice
        </button>
      </center>
    </div>
  );
};
export default SaleseInvoicing;
