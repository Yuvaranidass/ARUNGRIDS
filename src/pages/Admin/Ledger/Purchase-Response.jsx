
import 'bulma/css/bulma.min.css';

const PaymentVoucher = () => {
  return (
    <div>
      <style>
        {`
          .container.is-small {
            max-width: 600px;
            height: 800px; /* Define a fixed height for the page */
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Ensure the content is spaced evenly */
          }
          .signature-box {
            margin-top: 40px;
            text-align: center;
          }
          .signature-line {
            width: 200px;
            height: 1px;
            background-color: #000;
            margin-top: 10px;
            margin: 0 auto; /* Center the signature line */
          }
        `}
      </style>
      <div className="container is-small">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title">Barath45</h1>
            <div>
              <strong>PAID TO</strong>
              <p>perumal</p>
            </div>
            <div>
              <p>Total: <strong>₹ 300.0</strong></p>
              <p>Amount Paid in Words:</p>
              <p><strong>Three Hundred Rupees</strong></p>
              <p>Notes:</p>
              <p>good</p>
            </div>
          </div>
          <div className="column is-half">
            <div className="content has-text-right">
              <h2 className="title is-4">Payment Voucher</h2>
              <p>Bill Number: <strong>4</strong></p>
              <p>Payment Date: <strong>25-07-2024</strong></p>
              <p>Payment Mode: <strong>cash</strong></p>
            </div>
          </div>
        </div>
        <div className="signature-box">
          <p>Authorized signatory for</p>
          <h2 className="title">Barath45</h2>
          <p>Signature:</p>
          <div className="signature-line"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentVoucher;
