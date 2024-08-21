
import "./PaymentOutResponse.css"
import { SmartDarkButton, SmartDarkTable } from 'dark_power25';

const PaymentOutResponse = () => {

    const Columns = [
        { title: 'Date', index: 'date' },
              { title: 'Invoice Number', index: 'invoice_number' },
              { title: 'INVOICE AMOUNT', index: 'invoice_amount' },
              { title: 'INVOICE AMOUNT SETTLED', index: 'invoice_amount_settled' },
      ];
    
    const data = [
        {
          date: '1/1/2024',
          invoice_number: '1',
          invoice_amount: '20000',
          invoice_amount_settled: '20000',
       },

     ];
    const shareOnWhatsApp = () => {
        const message = 'Check out this awesome content!'; 
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); 
    };

    const printPage = () => {
        window.print();
    };
    

    const downloadPDF = () => {
        const pdfUrl = 'https://example.com/sample.pdf';
        if (!pdfUrl) {
            console.error('PDF URL is missing');
            return;
        }
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'sample.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='mx-3 my-3'>
            <div className='columns is-align-items-center'>
                <div className='column is-flex is-align-items-center is-11'>
                    <span className='icon mr-2'>
                        <i className='fa fa-arrow-left' aria-hidden='true'></i>
                    </span>
                    <div className='has-text-weight-bold is-size-5'>
                        payment out
                    </div>
                </div>
                
                <div className='column is-flex is-align-items-center is-2'>
                <i
                        className='fa fa-pencil-square-o mr-3 is-size-5 has-text-link iconborderedit'
                        aria-hidden='true'
                    ></i>
                    <i class="fa fa-trash-o   is-size-5 has-has-text-danger-dark iconborderdelete" aria-hidden="true"></i>
                </div>
            </div>
            <div className='is-flex'>
                <div className='ml-3'>
                    <SmartDarkButton label='Download PDF' leftIcon='fa fa-download'onClick={downloadPDF}/>
                </div>
                <div className='ml-3'>
                    <SmartDarkButton label='Print PDF' leftIcon='fa fa-print'onClick={printPage}/>
                </div>
                <div className='ml-3'>
                    <SmartDarkButton label='Share' leftIcon='fa fa-whatsapp' onClick={shareOnWhatsApp}/>
                </div>
            </div>
            <div className='box mt-3'>
                <div className='has-text-weight-bold has-has-background-info-dark has-text-centered is-align-items-center is-flex is-justify-content-center mb-4'>Payment Out <hr /></div>
                <div className='columns'>
                    <div className='column is-4'>
                        <p>PARTY NAME</p>
                        <span>
                            <b>barath</b>
                        </span>
                    </div>
                    <div className='column is-4'>
                        <p>PAYMENT DATE</p>
                        <span>
                            <b>01-01-2024</b>
                        </span>
                    </div>
                    <div className='column is-4'>
                        <p>PAYMENT AMOUNT</p>
                        <span>
                            <b>500</b>
                        </span>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column is-4'>
                        <p>PAYMENT TYPE</p>
                        <span>
                            <b>cheque</b>
                        </span>
                    </div>
                    <div className='column is-4'>
                        <p>BANK</p>
                        <span>
                            <b>SBI</b>
                        </span>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column is-4'>
                        <p>NOTES</p>
                        <span>
                            <b>Hello</b>
                        </span>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='has-text-weight-bold has-has-background-info-dark has-text-centered is-align-items-center is-flex is-justify-content-center mb-4'>
                    Invoices settled with this payment
                    <hr />
                </div>
                <div>
                    <SmartDarkTable columns={Columns} data={data}/>
                </div>
            </div>
        </div>
    );
};

export default PaymentOutResponse;
