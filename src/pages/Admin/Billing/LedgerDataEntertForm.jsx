import { SmartDarkButton } from "dark_power25";

const LedgerDataEntertForm = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().substr(0, 10);
  return (
    <div>
      <div className="subtitle">Ledger Form</div>
      <div className="columns">
        <div className="column is-4">
          <div className="field">
            <label>Account Holder Name</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Enter Ledger Name"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="field">
            <label>Sheet Number</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="number"
                placeholder="Sheet Number"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-building-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="field">
            <label>Account Number</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="number"
                placeholder="Account Number"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-building" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="field">
            <label>Date</label>
            <input className="input" type="date" value={formattedDate} />
          </div>
        </div>
        <div className="column is-4">
          <div className="field">
            <label>Description</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Enter Description"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-commenting-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="field">
            <label>Journal Reference</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Enter Journal Ref"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-book" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-6">
          <p className="has-text-centered">Transaction</p>
          <div className="columns mt-5">
            <div className="column is-6">
              <div className="field">
                <label>Debit</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Debit"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label>Credit</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Credit"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <p className="has-text-centered">Balance</p>
          <div className="columns mt-5">
            <div className="column is-6">
              <div className="field">
                <label>Debit</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Debit"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label>Credit</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Credit"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 is-flex is-justify-content-flex-end">
        <SmartDarkButton label="Cancel" />
        <SmartDarkButton
          label="Submit"
          classNameList={["button is-link ml-3 mr-5"]}
        />
      </div>
    </div>
  );
};

export default LedgerDataEntertForm;
