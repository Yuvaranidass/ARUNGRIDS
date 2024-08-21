import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';
import { SmartDarkButton, SmartDarkTable } from 'dark_power25';
import { useSiteContext } from "../../../context/SiteDarkProvider";
import ItemGodownPopup from './ItemGodownPopup';

const Godowns = () => {
  const [selectedGodown, setSelectedGodown] = useState('JAYAM PRINTERS');
  const { openModal, closeModal, setLoading } = useSiteContext();

  const openMyModal = () => {
    let modalObject = {
      body: <ItemGodownPopup />,
      modalClass: 'smart-modal-80 mt-6',
    };
    openModal(modalObject);
  };
  const columns = [
    { title: 'Item Name', item: 'item_name' },
    { title: 'Item Code', item: 'item_code' },
    { title: 'Item Batch', item: 'item_batch' },
    { title: 'Stock QTY', item: 'stock_qty' },
    { title: 'Stock Value', item: 'stock_value' },
    { title: 'Selling Price', item: 'selling_price' },
    { title: 'Purchase Price', item: 'purchase_price' },
  ];

  const data = {
    'JAYAM PRINTERS': [
      {
        item_name: 'Banner',
        item_code: 123456,
        item_batch: 101,
        stock_qty: '1000 CCM',
        stock_value: '2,00,000',
        selling_price: 10.0,
        purchase_price: 200.0,
      },
      {
        item_name: 'Poster',
        item_code: 654321,
        item_batch: 102,
        stock_qty: '500 CCM',
        stock_value: '1,00,000',
        selling_price: 15.0,
        purchase_price: 150.0,
      },
    ],
    'EZHIL CARDS': [
      {
        item_name: 'Card',
        item_code: 987654,
        item_batch: 201,
        stock_qty: '200 CCM',
        stock_value: '50,000',
        selling_price: 20.0,
        purchase_price: 120.0,
      },
      {
        item_name: 'Flyer',
        item_code: 456789,
        item_batch: 202,
        stock_qty: '300 CCM',
        stock_value: '75,000',
        selling_price: 25.0,
        purchase_price: 140.0,
      },
    ],
  };

  const handleGodownChange = (e) => {
    setSelectedGodown(e.target.value);
  };

  const godownname = [
    {
      title: 'JAYAM PRINTERS',
      value: 'JAYAM PRINTERS',
    },
    {
      title: 'EZHIL CARDS',
      value: 'EZHIL CARDS',
    },
  ]
  return (
    <div>
      <div className="itembox">
        <div className="subtitle">
          <div className="subtitle has-text-weight-bold">GODOWNS MANAGEMENT</div>
        </div>
        <div className="columns">
          <div className="column is-10">
            <div className='field'>
              <div className='control has-icons-right'>
                <select className="select input" value={selectedGodown} onChange={handleGodownChange}>
                  {
                    godownname.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>{item.title}</option>
                      )
                    })
                  }
                </select>
                <span className='icon is-small is-right'>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="column is-2">
            <SmartDarkButton
              label="Create Godown"
              leftIcon="fa fa-plus"
              classList={["is-link"]}
              onClick={openMyModal}
            />
          </div>
        </div>
        <div className='is-flex box itembox is-justify-content-space-between'>
          <div className="subtitle">
            <b>{selectedGodown}</b>
          </div>
          <div>
            <span className="icon mr-4 is-clickable has-text-primary">
              <FontAwesomeIcon icon={faEdit} onClick={openMyModal} />
            </span>
            <span className="icon mr-4 is-clickable has-text-danger">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </div>

        <div>
          <SmartDarkTable columns={columns} data={data[selectedGodown]} />
        </div>
      </div>
    </div>
  )
}
export default Godowns;
