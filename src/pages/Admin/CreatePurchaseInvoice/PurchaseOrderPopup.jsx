import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SmartDarkButton, SmartDarkTable } from 'dark_power25';
import { useSiteContext } from '../../../context/SiteDarkProvider';
import ItemInventoryForm from '../Items/ItemInventoryForm';

const PurchaseOrderPopup = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [errors, setErrors] = useState({});
    const { openModal, closeModal } = useSiteContext(); // Ensure closeModal is available

    const createitem = () => {
        let modalObject = {
            body: <ItemInventoryForm />,
            modalClass: "smart-modal-80 mt-6",
        };
        openModal(modalObject);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSave = () => {
        const validationErrors = {};

        // Validate searchQuery
        if (!searchQuery) {
            validationErrors.searchQuery = 'Search field is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Handle save logic here
        console.log('Save successful');
    };

    const handleCancel = () => {
        setSearchQuery('');
        setErrors({});
        if (closeModal) {
            closeModal(); // Close the modal on cancel
        }
    };

    const Columns = [
        { title: 'ITEM NAME', index: 'item_name' },
        { title: 'ITEM CODE', index: 'item_code' },
        { title: 'SALES PRICE', index: 'sales_price' },
        { title: 'PURCHASE PRICE', index: 'purchase_price' },
        { title: 'CURRENT STOCK', index: 'current_stock' },
        { title: 'QUANTITY', index: 'quantity' },
    ];

    const data = [
        {
            item_name: 'item1',
            item_code: 'code1',
            sales_price: '100',
            purchase_price: '200',
            current_stock: '300',
            quantity: '400',
        },
        {
            item_name: 'item2',
            item_code: 'code2',
            sales_price: '100',
            purchase_price: '200',
            current_stock: '300',
            quantity: '400',
        },
        {
            item_name: 'item3',
            item_code: 'code3',
            sales_price: '100',
            purchase_price: '200',
            current_stock: '300',
            quantity: '400',
        },
    ];

    return (
        <div className='box'>
            <div className='subtitle'>
                Add Items
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 ">
                <div className='columns'>
                    <div className='column is-9'>
                        <div className="control has-icons-left">
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
                            {errors.searchQuery && <p className="help is-danger">{errors.searchQuery}</p>}
                        </div>
                    </div>
                    <div className='column is-3'>
                        <SmartDarkButton
                            label="Create New Item"
                            classList={["is-link has-text-white"]}
                            leftIcon='fa-plus'
                            onClick={createitem}
                        />
                    </div>
                </div>
                <div>
                    <SmartDarkTable columns={Columns} data={data} tableProps={{
                        className: "admin-table-layout is-hoverable is-clickable has-text-left mt-3",
                    }} />
                </div>
                <div className="field is-grouped">
                    <div>
                        <SmartDarkButton
                            label="Cancel"
                            leftIcon="fa fa-times"
                            classList={["is-danger has-text-white ml-2 my-3 mr-2"]}
                            onClick={handleCancel}
                        />
                        <SmartDarkButton
                            label="Submit"
                            leftIcon="fa fa-check"
                            classList={["is-link ml-2 my-3 mr-2"]}
                            onClick={handleSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderPopup;
