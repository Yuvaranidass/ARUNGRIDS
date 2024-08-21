import { SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";

const JournalEntry = () => {
    const { openModal, closeModal } = useSiteContext();
    return (
        <div style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ backgroundColor: '#6495ED', color: 'white', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
                New Journal Entry
            </h2>
            <form>
                <div className='columns'>
                    <div className='column'>
                        <label>Date</label>
                        <div className='control'>
                            <input type="date" className='input' placeholder="" />
                        </div>
                    </div>
                    <div className='column'>
                        <label>Refrence no.</label>
                        <div className='control'>
                            <input type="number" className='input' placeholder="Refrence no" />
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column'>
                        <label>Account</label>
                        <select className='input'>
                            <option>Captial</option>
                            <option>cash</option>
                            <option>Purchase</option>
                        </select>
                    </div>
                    <div className='column'>
                        <label>Voucher Type</label>
                        <select className='input'>
                            <option>Cash</option>
                            <option>Bank</option>
                        </select>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column'>
                        <label>Customer Name</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder="Customer Name" />
                        </div>
                    </div>
                    <div className='column'>
                        <label>Description</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder="Description" />
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column'>
                        <label>Debit</label>
                        <div className='control'>
                            <input type="Number" className='input' placeholder="Debit" />
                        </div>
                    </div>
                    <div className='column'>
                        <label>Credit</label>
                        <div className='control'>
                            <input type="number" className='input' placeholder="credit" />
                        </div>
                    </div>
                </div>
                <div className="field mx-5 mt-1 py-6">
                    <SmartDarkButton
                        label="Save "
                        leftIcon="fa fa-check"
                        classList={["is-link "]}
                        onClick={openModal}
                    />
                    <SmartDarkButton
                        label="Cancel"
                        leftIcon="fa fa-times"
                        classList={["is-white ml-3 mr-3 mb-6"]}
                        onClick={closeModal}
                    />
                </div>
            </form>
        </div>
    );
};

export default JournalEntry;
