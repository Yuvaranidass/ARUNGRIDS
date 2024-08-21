

import './Report.css';
import { faArrowLeft, faStar, faMoneyBill, faExchangeAlt, faBox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSiteContext } from '../../../context/SiteDarkProvider';
import Gstr from './Gstr';
import PartyWiseOutstanding from './PartyWiseOutstanding';
import PLR from './PLR';

import CAReports from '../CA-Report/CAReports';
import { SmartDarkButton } from 'dark_power25';
import SalesSummary from './SalesSummary';

import Gstr2Purchase from'./Gstr2Purchase';
import Gstr3b from'./Gstr3b';
import GSTPurchaseHSN from'./GSTPurchaseHSN';
import GstSalesHSN from'./GstSalesHSN';
import HSNsalessummary from './HSNsalessummary';
import TdsPayable from './TdsPayable';
import TdsReceivable from'./TdsReceivable';
import TcsPayable from './TcsPayable';
import AuditTrail from'./Transaction/AuditTrail';
import BillWiseProfit from'./Transaction/BillWiseProfit';
import CashAndBankReport from'./Transaction/CashAndBankReport';
import ReportDaybook from'./Transaction/ReportDaybook';
import ExpenseCategoryReport from'./Transaction/ExpenseCategoryReport';
import ExpenseTransactionReport from'./Transaction/ExpenseTransactionReport';
import PurchaseSummary from'./Transaction/PurchaseSummary';
import ItemReport  from'./Item/ItemReport ';
import ItemSales from'./Item/ItemSales';
import StockSummary from'./Item/StockSummary';
import RateList from'./Item/RateList'
import DetailReport from './Item/DetailReport'
import Stock from './Item/Stock'
// import { SmartDarkButton } from 'dark_power25';

import Receivable from"./Party/Receivable";
import PartyReport  from"./Party/PartyReport";
import PartyStatement from"./Party/PartyStatement";
import SalesSummarys from"./Party/SalesSummarys";

const Report = () => {
  const { openModal} = useSiteContext();

  const salessummary = () => {
    let modalObject = {
      body: <SalesSummary />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };

  const careport = () => {
    let modalObject = {
      body: <CAReports />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const gstr = () => {
    let modalObject = {
      body: <Gstr />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const partywiseoutstanding = () => {
    let modalObject = {
      body: <PartyWiseOutstanding />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const plr = () => {
    let modalObject = {
      body: <PLR />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const gstr2puchase = () => {
    let modalObject = {
      body: <Gstr2Purchase />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const gstr3b = () => {
    let modalObject = {
      body: <Gstr3b />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const gstpurchasehsn = () => {
    let modalObject = {
      body: <GSTPurchaseHSN />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const Gstsaleshdn = () => {
    let modalObject = {
      body: <GstSalesHSN />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const hsnsalessummary = () => {
    let modalObject = {
      body: <HSNsalessummary />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const tdspayable = () => {
    let modalObject = {
      body: <TdsPayable />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const tdsreceivable = () => {
    let modalObject = {
      body: <TdsReceivable />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const tcspayable = () => {
    let modalObject = {
      body: <TcsPayable />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const audittrail = () => {
    let modalObject = {
      body: <AuditTrail />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const billWiseprofit = () => {
    let modalObject = {
      body: <BillWiseProfit />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const cashandbankreport = () => {
    let modalObject = {
      body: <CashAndBankReport />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const reportdaybook = () => {
    let modalObject = {
      body: <ReportDaybook />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  
  const expensecategoryreport = () => {
    let modalObject = {
      body: <ExpenseCategoryReport />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const expensetransactionreport = () => {
    let modalObject = {
      body: <ExpenseTransactionReport />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const purchasesummary = () => {
    let modalObject = {
      body: <PurchaseSummary />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  };
  const itemreport  = () => {
    let modalObject = {
      body: <ItemReport  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const itemsales  = () => {
    let modalObject = {
      body: <ItemSales  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const stocksummary  = () => {
    let modalObject = {
      body: <StockSummary  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const ratelist  = () => {
    let modalObject = {
      body: <RateList  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const detailreport  = () => {
    let modalObject = {
      body: <DetailReport  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const stock  = () => {
    let modalObject = {
      body: <Stock  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const receivable  = () => {
    let modalObject = {
      body: <Receivable  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const partyreport  = () => {
    let modalObject = {
      body: <PartyReport  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const partystatement  = () => {
    let modalObject = {
      body: <PartyStatement  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  const salessummarys  = () => {
    let modalObject = {
      body: <SalesSummarys  />,
      modalClass: "smart-modal-80",
    };
    openModal(modalObject);
  }
  
  return (
    <div className="reportbox">
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <div className="subtitle">Reports</div>
        <div>
          <SmartDarkButton onClick={careport} label="CA Reports Sharing" />
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-4">
          <div className="box reportbox equal-height is-size-5">
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon icon={faStar} className="has-text-warning"/>
              <span className="ml-2">Favourite</span>
            </div>
            <hr />
            <div className="equal-height-content">
              <ul>
                <li className="mt-5">
                  <a href="#">Balance Sheet</a>
                </li>
                <li className="mt-5 is-clickable" onClick={gstr}>
                  GSTR-1(Sales)
                </li>
                <li
                  className="mt-5 is-clickable"
                  onClick={partywiseoutstanding}
                >
                  Party Wise Outstanding
                </li>
                <li className="mt-5 is-clickable" onClick={plr}>
                  Profit And Loss Report
                </li>
                <li className="mt-5 is-clickable" onClick={salessummary}>
                  Sales Summary
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="box reportbox equal-height is-size-5">
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon icon={faMoneyBill} className="has-text-danger"/>
              <span className="ml-2">GST</span>
            </div>
            <hr />
            <div className="equal-height-content">
              <ul>
                <li className="mt-5 is-clickable" onClick={gstr2puchase}>
                  GSTR-2 (Purchase)
                </li>
                <li className="mt-5 is-clickable" onClick={gstr3b}>
                  GSTR-3b
                </li>
                <li className="mt-5 is-clickable" onClick={gstpurchasehsn}>
                  GST Purchase (With HSN)
                </li>
                <li className="mt-5 is-clickable" onClick={Gstsaleshdn}>
                  GST Sales (with HSN)
                </li>
                <li className="mt-5 is-clickable" onClick={hsnsalessummary}>
                  HSN Wise Sale Summary
                </li>
                <li className="mt-5 is-clickable" onClick={tdspayable}>
                  TDS Payable
                </li>
                <li className="mt-5 is-clickable" onClick={tdsreceivable}>
                  TDS Receivable
                </li>
                <li className="mt-5 is-clickable" onClick={tcspayable}>
                  TCS Payable
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="box reportbox equal-height is-size-5">
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon icon={faExchangeAlt} className="has-text-info"/>
              <span className="ml-2">Transaction</span>
            </div>
            <hr />
            <div className="equal-height-content">
              <ul>
                <li className="mt-5 is-clickable" onClick={audittrail}>
                Audit Trail
                </li>
                <li className="mt-5 is-clickable" onClick={billWiseprofit}>
                  Bill Wise Profit
                </li>
                <li className="mt-5 is-clickable" onClick={cashandbankreport}>
                  Cash And Bank Report (All Payments)
                </li>
                <li className="mt-5 is-clickable" onClick={reportdaybook}>
                  Daybook
                </li>
                <li className="mt-5 is-clickable" onClick={expensecategoryreport}>
                  Expense Category Report
                </li>
                <li className="mt-5 is-clickable" onClick={expensetransactionreport}>
                  Expense Transaction Report
                </li>
                <li className="mt-5 is-clickable" onClick={purchasesummary}>
                  Purchase Summary
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="box reportbox equal-height is-size-5">
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon icon={faBox} className="has-text-success"/>
              <span className="ml-2">Item</span>
            </div>
            <hr />
            <div className="equal-height-content">
              <ul>
                <li className="mt-5 is-clickable" onClick={itemreport }>
                  Item Report By Party
                </li>
                <li className="mt-5 is-clickable" onClick={itemsales}>
                  Item Sales and Purchase Summary
                </li>
                <li className="mt-5 is-clickable" onClick={stocksummary}>
                 Low Stock Summary
                </li>
                <li className="mt-5 is-clickable" onClick={ratelist}>
                 Rate List
                </li>
                <li className="mt-5 is-clickable" onClick={detailreport}>
                 Stock Detail Report
                </li>
                <li className="mt-5 is-clickable" onClick={stock}>
                 Stock Summary
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="box reportbox equal-height is-size-5">
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon icon={faUserFriends} className="has-text-link"/>
              <span className="ml-2">Party</span>
            </div>
            <hr />
            <div className="equal-height-content">
              <ul>
                <li className="mt-5 is-clickable" onClick={receivable}>
                  Receivable Ageing Report
                </li>
                <li className="mt-5 is-clickable" onClick={partyreport}>
                 Party Report By Item
                </li>
                <li className="mt-5 is-clickable" onClick={partystatement}>
                  Party Statement (Ledger)
                </li>
                <li className="mt-5 is-clickable" onClick={salessummarys}>
                  Sales Summary - Category Wise
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="column is-4 ">
          <center style={{ marginTop: "220px" }}>
          <p className="ctrl_f">  Find Report Ctrl + F</p>
          </center>
        </div>
       
      </div>
    </div>
  );
};

export default Report;
