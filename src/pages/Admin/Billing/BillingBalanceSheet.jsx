import React from "react";

import "./BillingTable.css";

export const BillingBalanceSheet = () => {
  return (
    <div>
      <div className="borserstyle">
        <div className="has-background-link p-4">
          <b className="title is-6 has-text-white mt-4">BALANCE SHEET</b>
        </div>
        <div className="columns px-5">
          <div className="column is-8">
            <div className="has-text-weight-bold  ">Assets</div>
            <div className="py-5">
              <b className="mb-4">Current Assets</b>
              <p className="mb-4">Cash </p>
              <p className="mb-4">Account receivable</p>
              <p className="mb-4">Inventory</p>
              <p className="mb-4">Prepaid expenses</p>
              <p className="mb-4">Other Current Assets</p>
              <b className="mb-4"> Total Current Assets</b>
            </div>
            <div className="py-5">
              <b className="mb-4">Current Liabilities</b>
              <p className="mb-4">Short-term notes </p>
              <p className="mb-4">Account payble</p>
              <p className="mb-4">Interest payable</p>
              <p className="mb-4">Taxes payable</p>
              <p className="mb-4">Accrued payroll</p>
              <b className="mb-4"> Total Current Assets</b>
            </div>
            <div className="py-5">
              <b className="mb-4">Fixed Assets</b>
              <p className="mb-4">Long-term investments </p>
              <p className="mb-4">Land</p>
              <p className="mb-4">Buildings</p>
              <p className="mb-4">Equipment</p>
              <p className="mb-4">Furniture & fixtures</p>
              <b className="mb-4"> Total Fixed Assets</b>
            </div>
            <div className="py-5">
              <b className="mb-2">Long Term Liabilities</b>
              <br />

              <p className="mb-4">Mortgage</p>
              <p className="mb-4">Bank loans</p>
              <p className="mb-4">Other long term liabilities</p>
              <b className="mb-4"> Total Long Term Liabilities</b>
            </div>
            <div className="py-5">
              <b className="mb-4">Stockholders Equity</b>
              <p className="mb-4">Capital stock</p>
              <p className="mb-4">Retained earnings</p>

              <b className="mb-4"> Total Stockholders Equity</b>
            </div>
          </div>
          <div className="column is-4 has-text-weight-bold">Amount</div>
        </div>
      </div>
    </div>
  );
};
export default BillingBalanceSheet;
