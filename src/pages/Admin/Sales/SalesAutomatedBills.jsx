import { AUTO, CREATE, PAYMENT } from "../../../services/ImageServices";
import { SmartDarkButton } from "dark_power25";

export const SalesAutomatedBills = () => {
  return (
    <div>
      <div>
        <div className=" columns is-flex">
          <div className="column">
            <div className="subtitle has-text-weight-bold">AUTOMATED BILLS</div>

            {/* <button className="button is-light title is-6 ml-4 ">
                <a>What is Automated Bills</a>
              </button> */}
          </div>
        </div>
        <hr />

        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <img className="image " src={CREATE} alt="" />
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <img className="image " src={AUTO} alt="" />
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <img className="image " src={PAYMENT} alt="" />
            </div>
          </div>
        </div>
        <center>
          <b>Schedule Your repeated Invoices hassle-free</b>
          <div>
            <SmartDarkButton
              label="Create Automated Invoice"
              classList={["is-link mt-4"]}
            />
          </div>
        </center>
      </div>
    </div>
  );
};
export default SalesAutomatedBills;
