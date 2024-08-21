import { useState } from 'react';
// import './Report.css';
import { faArrowLeft, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SmartDarkTable, SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../../context/SiteDarkProvider";
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

const PartyWise = () => {
    const [selectedTable, setSelectedTable] = useState('all');
    const { closeModal } = useSiteContext();
    const handleDownload = (type) => {
        const data = Data;

        switch (type) {
            case 'excel':
                downloadExcel(data);
                break;
            case 'pdf':
                downloadPDF(data);
                break;
            default:
                break;
        }
    };

    const downloadExcel = (data) => {
        const filename = 'data.xlsx';
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename);
    };

    const downloadPDF = (data) => {
        const filename = 'data.pdf';
        const doc = new jsPDF();
        const columns = Columns.map(col => col.title); // Extract column titles for headers

        doc.autoTable({
            head: [columns],
            body: data.map(item => Columns.map(col => item[col.index] || '')), // Map data based on columns
            startY: 10,
            theme: 'striped'
        });

        doc.save(filename);
    };
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const Columns = [
        { title: "S.no", index: "sno" },
        { title: "Name", index: "name" },
        { title: "Category", index: "category" },
        { title: "Contact Number", index: "contact_number" },
        { title: "Closing Balance", index: "closing_balance" },
    ];

    const Data = [
        {
            "sno": 1,
            "name": "xxx",
            "category": "Customer",
            "contact_number": "1234567890",
            "closing_balance": 1000
        },
        
    ];

    return (
        <div className="">
            <div className="is-flex is-justify-content-flex-end my-2  px-2 mx-2 is-size-5">
                <SmartDarkButton
                    type="icon"
                    onClick={closeModal}
                    leftIcon="fa fa-times"
                    classList={["is-clickable"]}
                />
            </div>
            <div className="is-flex is-justify-content-space-between">
                <div className="subtitle">
                   
                    Party Wise Outstanding
                </div>
                <div className="control has-icons-left">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <span className="icon is-left">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
                <div>
                    <div className='select mr-3'>
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
                    <button className="button mr-3" onClick={() => handleDownload('excel')}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faFileExcel} />
                        </span>
                        <span>Excel Download</span>
                    </button>
                    <button className="button" onClick={() => handleDownload('pdf')}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faFilePdf} />
                        </span>
                        <span>PDF Download</span>
                    </button>
                </div>
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
            <div className="columns">
                <div className="column is-3">
                    <div className="tabs mt-3">
                        <div className={`tab ${selectedTable === 'all' ? 'is-active' : ''}`} onClick={() => setSelectedTable('all')}>All</div>
                        <div className={`tab ${selectedTable === 'toCollect' ? 'is-active' : ''}`} onClick={() => setSelectedTable('toCollect')}>To Collect</div>
                        <div className={`tab ${selectedTable === 'toPay' ? 'is-active' : ''}`} onClick={() => setSelectedTable('toPay')}>To Pay</div>
                    </div>
                </div>
            </div>
            <div>
                <SmartDarkTable columns={Columns} data={Data} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
            </div>
            </div>
        </div>
    );
};

export default PartyWise;
