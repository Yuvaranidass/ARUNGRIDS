import React, { useState, useEffect } from 'react';
import { SmartDarkTable } from 'dark_power25';

const LedgerEntery = () => {
    const option = [
        { value: 1, label: 'Test1' },
        { value: 2, label: 'Test2' }
    ];

    const option1 = {
        1: [
            { value: 1, label: '1' },
            { value: 2, label: '2' }
        ],
        2: [
            { value: 3, label: '3' },
            { value: 4, label: '4' }
        ]
    };

    const option2 = {
        1: [
            { value: 1020, label: '1020' },
            { value: 1021, label: '1021' }
        ],
        2: [
            { value: 1022, label: '1022' },
            { value: 1023, label: '1023' }
        ]
    };

    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedOption1, setSelectedOption1] = useState(option1[1]);
    const [selectedOption2, setSelectedOption2] = useState(option2[1]);

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSelectedOption(value);
    };

    useEffect(() => {
        setSelectedOption1(option1[selectedOption]);
        setSelectedOption2(option2[selectedOption]);
    }, [selectedOption]);

    const Columns = [
        { title: 'Date', index: 'date' },
        { title: 'Customer Name', index: 'customer_name' },
        { title: 'Description', index: 'description' },
        { title: 'Journal Ref.', index: 'journal_ref' },
        { title: 'Transaction', index: 'transaction' },
        { title: 'Balance', index: 'balance' }
    ];

    const data = [
        {
            data: '2022-01-01',
            customer_name: 'Test1',
            description: 'Test1',
            journal_ref: 'Test1',
            transaction: 'Test1',
            balance: 'Test1'
        },
        {
            data: '2022-01-01',
            customer_name: 'Test2',
            description: 'Test2',
            journal_ref: 'Test2',
            transaction: 'Test2',
            balance: 'Test2'
        }
    ];

    return (
        <div>
            <div className='subtitle'>
                LEDGER SHEET
            </div>
            <div className='columns'>
                <div className='column'>
                    <div className='field'>
                        <label>Account Holder Name:</label>
                        <div className="control has-icons-right">
                            <select className='input is-fullwidth' onChange={handleChange}>
                                {option.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="icon is-small is-right">
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='field'>
                        <label>Sheet Number:</label>
                        <div className="control has-icons-right">
                            <select className='input is-fullwidth'>
                                {selectedOption1.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="icon is-small is-right">
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='field'>
                        <label>Account Number:</label>
                        <div className="control has-icons-right">
                            <select className='input is-fullwidth'>
                                {selectedOption2.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <span className="icon is-small is-right">
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card smart-admin-container py-2">
                <div className="is-flex is-justify-content-space-around">
                    <div className="field my-2">
                    </div>
                </div>
                <div>
                    <SmartDarkTable columns={Columns} data={data} tableProps={{
                        className:
                            "admin-table-layout is-hoverable is-clickable has-text-left",
                    }} />
                </div>
            </div>
        </div>
    );
}

export default LedgerEntery;
