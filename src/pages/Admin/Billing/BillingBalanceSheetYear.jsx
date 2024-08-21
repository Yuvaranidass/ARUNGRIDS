import React from "react";
import "./BillingTable.css";

export const BillingBalanceSheetYear = () => {
  return (
    <div className="borserstyle">
      <div className="has-background-link p-4">
        
        
        <b className="title is-6 has-text-white mt-4">BALANCE SHEET</b>
      </div>
      <div className="columns px-5">
        <div className="column is-8">
          <div className="has-text-weight-bold  ">Assets</div>

          <div className="py-5">
            <b className="mb-4">Current Assets</b>
            <p className="mb-4">Cash and Cash Equivalent</p>
            <p className="mb-4">Short Term Investments</p>
            <p className="mb-4">Account receivables net</p>
            <p className="mb-4">Other receivables</p>
            <b className="mb-4"> Total Current Assets</b>
          </div>

          <div className="py-5">
            <b className="mb-4">Investments</b>
            <br />
            <b className="mb-4">Property plants and equipments</b>
            <p className="mb-4">Land</p>
            <p className="mb-4">Land Improvements</p>
            <p className="mb-4">Buildings</p>
            <p className="mb-4">Equipment</p>
            <p className="mb-4">Less:accumulated depreciation</p>
            <b className="mb-4"> Total Property plants and equipments</b>
          </div>

          <div className="py-5">
            <b className="mb-4">Intangible Assets</b>
            <p className="mb-4">Goodwill</p>
            <p className="mb-4">Other tangible assets</p>
            <p className="mb-4">Total Intangible Assets</p>
            <b className="mb-4"> Total Intangible Assets</b>
          </div>

          <div className="has-text-weight-bold">Liabilities</div>
          <div className="py-5">
            <b className="mb-4">Current Liabilities</b>
            <p className="mb-4">Short Term Loans Payable</p>
            <p className="mb-4">Current portion of long term debt</p>
            <p className="mb-4">Accounts Payable</p>
            <p className="mb-4">Accrued Compensation and benefits</p>
            <p className="mb-4">Income taxes payable</p>
            <p className="mb-4">Other accrued liabilities</p>
            <p className="mb-4">Deferred revenue</p>
            <b className="mb-4"> Total Current Liabilities </b>
          </div>

          <div className="py-5">
            <b className="mb-2">Long Term Liabilities</b>
            <br />

            <p className="mb-4">Notes Payable</p>
            <p className="mb-4">Bonds Payable</p>
            <p className="mb-4">Deferred Income taxes</p>
            <b className="mb-4"> Total Long Term Liabilities</b>
          </div>

          <div className="py-5">
            <b className="mb-4">Stockholders Equity</b>
            <p className="mb-4">Common Stock</p>
            <p className="mb-4">Retained earnings</p>
            <p className="mb-4">Accum other comprehensive income</p>
            <p className="mb-4">Less: Treasury Stock</p>

            <b className="mb-4"> Total Stockholders Equity</b>
          </div>
        </div>

        <div className="column is-4 has-text-weight-bold">Amount</div>
      </div>
    </div>
  );
};
export default BillingBalanceSheetYear;
