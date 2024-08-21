
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { SmartDarkTable } from 'dark_power25';

const Estimate = () => {

    const Columns = [
      { title: 'Date', index: 'date' },
      { title: 'Performa Invoice Number', index: 'performa_invoice_no' },
      { title: 'Party Name', index: 'party_name' },
      { title: 'Due In', index:'due_in' },
      { title: 'Amount', index: 'amount' },
      { title: 'Status', index: 'status' },
    ];


    const data = [
      {
        date: '1/1/2024',
        performa_invoice_no: '1',
        party_name: 'barath',
        due_in: '12/1/2024',
        amount: '20000',
        status: 'Recieved',
      },
      {
        date: '2/1/2024',
        performa_invoice_no: '2',
        party_name: 'balaji',
        due_in: '13/1/2024',
        amount: '100',
        status: 'Non-Recieved',
      },
    ]
  return (
    <div className='box'>
      <div className='subtitle'>
       PROFIT INVOICE
      </div>
      <div className='columns'>
        <div className='column is-10'>
      <div className='is-flex'>
        <div className="field">
          <div className="control has-icons-left">
            <input type="search" className="input" placeholder="Search"/>
            <span className="icon is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>

        <div className='select ml-3 mr-3'>
          <select>
            <option value="">Today</option>
            <option value="">Yesterday</option>
            <option value="">This Week</option>
            <option value="">Last Week</option>
            <option value="">This Month</option>
            <option value="">Last Month</option>
            <option value="">This Year</option>
            <option value="">Last Year</option>
          </select>
        </div>
        <div className='select'>
          <select>
            <option value="">Show All Invoices</option>
            <option value="">Show Open Invoices</option>
            <option value="">Show Closed Invoices</option>
          </select>
        </div>
      </div>
    </div>
    <div className='column is-2'>
        <button className='button is-info'>Create Quotation</button>
    </div>
    </div>

    <div>
        <SmartDarkTable columns={Columns} data={data} />
    </div>
    </div>
  );
}

export default Estimate;
