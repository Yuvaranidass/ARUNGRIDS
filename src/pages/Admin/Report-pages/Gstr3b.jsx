import { useState } from 'react';
// import "./Report.css";
import { SmartDarkTable,SmartDarkButton } from "dark_power25";
import { useSiteContext } from "../../../context/SiteDarkProvider";
const Gstr3b = () => {
    const [selectedTable, setSelectedTable] = useState('reverseCharge');
    const { closeModal } = useSiteContext();
    const handleDownload = (event) => {
        const selectedOption = event.target.value;
        const data = getData();

        switch (selectedOption) {
            case 'json':
                downloadJSON(data);
                break;
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

    const downloadJSON = (data) => {
        const filename = `${selectedTable}_data.json`;
        const jsonContent = JSON.stringify(data, null, 2);
        downloadFile(filename, 'application/json', jsonContent);
    };

    const downloadExcel = (data) => {
        const filename = `${selectedTable}_data.xlsx`;
        const excelContent = generateExcelContent(data);
        downloadFile(filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', excelContent);
    };

    const downloadPDF = (data) => {
        const filename = `${selectedTable}_data.pdf`;
        const pdfContent = generatePDFContent(data);
        downloadFile(filename, 'application/pdf', pdfContent);
    };

    const downloadFile = (filename, contentType, content) => {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const generateExcelContent = (data) => {
        let excelContent = 'S.no\tNature of Supplies\tTotal Taxable Value\tIntegrated Tax\tCentral Tax\tState/UT Tax\tCess\n';

        data.forEach((item, index) => {
            excelContent += `${index + 1}\t${item.nature_of_supply}\t${item.total_taxable_value}\t${item.integrated_tax}\t${item.central_tax}\t${item.state_ut_tax}\t${item.cess}\n`;
        });

        return excelContent;
    };

    const generatePDFContent = (data) => {
        let pdfContent = 'PDF Content for Table:\n\n';

        data.forEach((item, index) => {
            pdfContent += `Row ${index + 1}:\n`;
            pdfContent += `Nature of Supplies: ${item.nature_of_supply}, Total Taxable Value: ${item.total_taxable_value}, Integrated Tax: ${item.integrated_tax}\n`;
            pdfContent += `----------------------------------------------\n`;
        });

        return pdfContent;
    };

    const ReverseChargeColumns = [
        { title: "S.no", index: "sno" },
        { title: "Nature of Supplies", index: "nature_of_supply" },
        { title: "Total Taxable Value", index: "total_taxable_value" },
        { title: "Integrated Tax", index: "integrated_tax" },
        { title: "Central Tax", index: "central_tax" },
        { title: "State/UT Tax", index: "state_ut_tax" },
        { title: "Cess", index: "cess" },
    ];

    const ReverseChargeData = [
        {
            sno: 1,
            nature_of_supply: "Reverse Charge",
            total_taxable_value: 10000,
            integrated_tax: 2000,
            central_tax: 3000,
            state_ut_tax: 4000,
            cess: 5000,
        },
    ];

    const UINholdersColumns = [
        { title: "S.no", index: "sno" },
        { title: "Place of Supply", index: "place_of_supply" },
        { title: "Supplies Made to Unregistered Persons", index: "supplies_made_to_unregistered_persons" },
        { title: "Total Taxable Value", index: "total_taxable_value" },
        { title: "Amount of Integrated Tax", index: "amount_of_integrated_tax" },
        { title: "Amount of Central Tax", index: "amount_of_central_tax" },
        { title: "Amount of State/UT Tax", index: "amount_of_state_ut_tax" },
        { title: "Cess", index: "cess" },
    ];

    const UINholdersData = [
        {
            sno: 1,
            place_of_supply: "Andhra Pradesh",
            supplies_made_to_unregistered_persons: 1000,
            total_taxable_value: 10000,
            amount_of_integrated_tax: 2000,
            amount_of_central_tax: 3000,
            amount_of_state_ut_tax: 4000,
            cess: 5000,
        },
    ];
    const TaxCreditColumns = [
        { title: "S.no", index: "sno" },
        { title: "Details", index: "details " },
        { title: "Integrated Tax ", index: "integrated_tax " },
        { title: " Central Tax", index: "central_tax" },
        { title: "State/UT Tax", index: "state_ut_tax" },
        { title: "Cess", index: "cess" },

    ];

    const TaxCreditData = [
        {
            sno: 1,
            details: "Tax Credit",
            integrated_tax: 2000,
            central_tax: 3000,
            state_ut_tax: 4000,
            cess: 5000,
        },
    ];
    const GSTinwardsuppliesColumns = [
        { title: "S.no", index: "sno" },
        { title: "Nature of Supplies", index: "nature_of_supply" },
        { title: "Inter State Supplies", index: "inter_state_supplies" },
        { title: "Intra State Supplies", index: "intra_state_supplies" },

    ];

    const GSTinwardsuppliesData = [
        {
            sno: 1,
            nature_of_supply: "Reverse Charge",
            inter_state_supplies: 1000,
            intra_state_supplies: 1000,
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
            <div className="header">
                <div className="subtitle">
                   
                    GSTR-3b
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
                    <div className="select">
                        <select id="downloadSelect" onChange={handleDownload}>
                            <option value="json">Download JSON</option>
                            <option value="excel">Download Excel</option>
                            <option value="pdf">Download PDF</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card smart-admin-container py-2 px-2 mt-3">
                <div className='py-3 px-3'>
                    <div className="title is-size-5">3.1 Details of Outward supplies and Inward supplies liable to reverse charge</div>

                    <div className="">
                        <SmartDarkTable columns={ReverseChargeColumns} data={ReverseChargeData} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>
                    <hr />
                    <div className="title is-size-5">3.2 Details of Inter-State supplies made to unregistered persons, composition dealer and UIN holders</div>
                    <div className="table-container">
                        <SmartDarkTable columns={UINholdersColumns} data={UINholdersData} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>
                    <hr />
                    <div className="title is-size-5">4. Details of Eligible Input Tax Credit</div>
                    <div className="">
                        <SmartDarkTable columns={TaxCreditColumns} data={TaxCreditData} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>
                    <hr />
                    <div className="title is-size-5">5. Details of exempt, nil-rated and non-GST inward supplies</div>
                    <div className="">
                        <SmartDarkTable columns={GSTinwardsuppliesColumns} data={GSTinwardsuppliesData} tableProps={{
                            className:
                                "admin-table-layout is-hoverable is-clickable has-text-left",
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gstr3b;
