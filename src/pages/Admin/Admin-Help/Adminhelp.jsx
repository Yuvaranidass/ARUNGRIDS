
import 'bulma/css/bulma.min.css';
import './Adminhelp.css';

class AdminHelps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'FAQS',
      faqs: {
        FAQS: [
          { question: 'What is the meaning of payment?', answer: 'Payment is the exchange of money, goods, or services for goods and services in an acceptable amount to both parties and has been agreed upon in advance. You can pay with cash, a check, a wire transfer, a credit card, a debit card, or even cryptocurrency.' },
          { question: 'What are payment types?', answer: 'These methods include cash, credit / debit cards, bank transfers, mobile payments and digital wallets. They serve as the bridge between consumers and businesses, facilitating the exchange of money. They offer various features and security measures to suit individual preferences and situations.' },
          { question: 'What is bank payment?', answer: 'Bank payments are payments made from one bank account directly to another.' },
        ],
        invoice: [
          { question: 'Is an invoice a receipt?', answer: 'Invoices and receipts have different purposes as theyre issued at different stages of the sales process. Invoices are issued prior to the customer sending the payment, whereas a receipt is issued after the payment has been received. The invoice acts as a request for payment, and the receipt acts as a proof of payment.' },
          { question: 'What are the payment options?', answer: 'An invoice payment is a scheduled payment a customer makes toward the balance of goods and services rendered. An invoice is a document showing details of any goods or services sold and requests an amount payable for these services' },
          { question: 'Is an invoice a payment?', answer: 'An invoice payment is a scheduled payment a customer makes toward the balance of goods and services rendered. An invoice is a document showing details of any goods or services sold and requests an amount payable for these services' },
        ],
        Shortcuts: [
          { question: 'How to open settings shortcut?', answer: 'Windows Key + I' },
          { question: 'What is shortcut to open?', answer: 'Ctrl+O Opens the dialog box or page for selecting a file to open. Ctrl+P Open the print window. Ctrl+R Aligns the line or selected text to the right of the screen' },
          { question: 'What are shortcut keys A to Z?', answer: 'A to Z list of Excel Shortcuts A - Select All (Ctrl + A) B - Bold (Ctrl + B) C - Copy (Ctrl + C) D - Fill Down (Ctrl + D) E - Centre (Ctrl + E) F - Find (Ctrl + F) G - Go To (Ctrl + G) H - Replace (Ctrl + H) I - Italic (Ctrl + I) J - Justify (Ctrl + J) K - Insert Hyperlink (Ctrl + K) L - Align Text left (Ctrl + L) M ' },
        ],
        MultiUser: [
          { question: 'What is the difference between multi company and multi tenant?', answer: 'Multi tenant setup will host multiple sites on one bench. Multi company is having multiple companies under one site / database.' },
          { question: 'What is the difference between multi-tenancy and multi user?', answer: 'The term multi-user does not imply anything for the architecture of the system. On the other hand, while a multi-tenant system is a multi-user system, multi-tenancy tells us something about the architecture of the system: namely that multiple users share the same application and database instance' },
          { question: 'Which is better single tenant or multi-tenant?', answer: 'Single tenant architecture offers transparent, predictable scalability for customers. All clients have their own application instances and can scale up by changing sizing or launching additional instances. In a multi-tenant architecture, since resources are shared, they can be utilized more effectively by the vendor' },
        ],
        data: [
          { question: 'What is meant by data security?', answer: 'Data security is the process of safeguarding digital information throughout its entire life cycle to protect it from corruption, theft, or unauthorized access. It covers everything—hardware, software, storage devices, and user devices; access and administrative controls; and organization' },
          { question: 'What are the three types of data security?', answer: 'Answer and Explanation: Different types of data security include hardware security, software security, and legal security. For example, a hardware device may only allow people having a certain device to read data' },
          { question: 'What is data and system security?', answer: 'Operating system security: This is the protection of systems from operating system-based threats, such as buffer overflow attacks and privilege escalation attacks. Data security: This is the protection of data from unauthorized access, use, disclosure, disruption, modification, or destruction' },
        ],
        Account: [
          { question: 'What is in an account?', answer: 'An account is a place to record transactions that occur within a business. Accounts are divided into three specific categories: assets, liabilities, and owners equity. Assets are things that a business owns. Liabilities are things that a company owes' },
          { question: 'What is account and its types?', answer: 'Typically, businesses use many types of accounts to keep track of their financial information and current value. These can include asset, expense, income, liability and equity accounts. You may use each account for a different purpose and maintain them on your financial ledger or balance sheet continuously' },
          { question: 'What is the bank account?', answer: 'A bank account is a place for you to deposit and withdraw funds. Beyond the ability to store and access money, bank accounts may offer a number of other features: A debit card' },
        ],
        Moblie: [
          { question: 'What is the Moblie App', answer: 'A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch' },
          { question: 'What is an app used for?', answer: 'An app is a type of software application designed to perform specific functions on a mobile device, computer or digital platform. Apps provide users with a convenient way to access information, services and entertainment, while they can also enhance productivity and streamline communication' },
          { question: 'What is mobile me app?', answer: 'MobileMe is an online backup system from Apple that enables you to sync data between different devices such as desktop computers, iPhone and iPad' },
        ],
        Payments: [
          { question: 'What is the meaning of payment?', answer: 'Payment is the exchange of money, goods, or services for goods and services in an acceptable amount to both parties and has been agreed upon in advance. You can pay with cash, a check, a wire transfer, a credit card, a debit card, or even cryptocurrency' },
          { question: 'What is payment types?', answer: 'These methods include cash, credit / debit cards, bank transfers, mobile payments and digital wallets. They serve as the bridge between consumers and businesses, facilitating the exchange of money. They offer various features and security measures to suit individual preferences and situations' },
          { question: 'What is bank payment?', answer: 'Bank payments are payments made from one bank account directly to another' },
        ],
        TUTORIALS: [
          { question: 'What do you mean tutorial?', answer: ' a paper, book, film, or computer program that provides practical information about a specific subject. 2. : a class conducted by a tutor for one student or a small number of students. tutorial.' },
          { question: 'What is tutorial studies?', answer: 'Tutorial Studies is a program only in an administrative sense; it serves as an alternative for students who propose a coherent course of studies that clearly will not fit within a regular major' },
          { question: 'What are tutorials used for?', answer: 'Tutorials are smaller classes which allow discussion of lecture content and assignments. You can ask questions and clarify what you have studied. Workshops usually involve academic staff presenting themes or concepts related to the course' },
        ],
        Items: [
          { question: 'What is a bill item?', answer: ' An itemized bill is a piece of paper which you are given before you pay for goods or services, listing the cost of each item purchased rather than just the total cost. You should always request an itemized bill' },
          { question: 'What is an item example?', answer: 'An item is one of a list of things for someone to do, deal with, or talk about. The other item on the agenda is the tour. An item is a report or article in a newspaper or magazine, or on television or radio. There was an item in the paper about him' },
          { question: 'What is an item list?', answer: 'Item List. Definition and Usage. The Item List component is a widget that lets you display a list of items from a data set either as a flat list or as a structure tree. Item List allows end users to perform actions on the entire list or specific list items.' },
        ],
        Parties: [
          { question: 'What is the use of parties?', answer: 'A party is a gathering of people who have been invited by a host for the purposes of socializing, conversation, recreation, or as part of a festival or other commemoration or celebration of a special occasion' },
          { question: 'What type of word is parties?', answer: 'noun. , plural par·ties. a social gathering, as of invited guests at a private home, for conversation, refreshments, entertainment, etc.: a cocktail party.' },
          { question: 'When to use partys and parties?', answer: 'A singular possessive ends with an apostrophe before the s. The plural of party is parties. This is correct as long as you are talking about more than one party. It is the same on both sides of the pond.' },
        ],
        // Add more categories and their questions and answers here
      }
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  toggleFAQ = (index) => {
    const { selectedCategory, faqs } = this.state;
    const updatedFaqs = faqs[selectedCategory].map((faq, idx) => {
      if (idx === index) {
        return { ...faq, active: !faq.active };
      }
      return faq;
    });
    this.setState({ faqs: { ...faqs, [selectedCategory]: updatedFaqs } });
  };

  render() {
    const { selectedCategory, faqs } = this.state;

    
    return (
      <div className="">
        <div className="">
          <div className="columns">
            <div className="column">
              <p className="title is-size-4">Help And Support</p>
              <p className="subtitle is-size-5">Find Answers For All Your Doubts</p>
            </div>
            <div className="column">
              <div className="field mt-3">
                <div className="control has-icons-left">
                  <input type="search"
                    className="input is-rounded "
                    placeholder="Search"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="columns">
          <aside className="column is-3 py-">
            <nav className="menu">
              <ul className="menu-list">
                <div className='vl'>
                  <li><a onClick={() => this.handleCategoryChange('FAQS')}>FAQS</a></li>
                  <li><a onClick={() => this.handleCategoryChange('invoice')}>Invoices</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Shortcuts')}>Shortcuts</a></li>
                  <li><a onClick={() => this.handleCategoryChange('MultiUser')}>Multi-Company and Mulity-User</a></li>
                  <li><a onClick={() => this.handleCategoryChange('data')}>Data and Security</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Account')}>Account</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Moblie')}>Moblie App</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Payments')}>Payments</a></li>
                  <li><a onClick={() => this.handleCategoryChange('TUTORIALS')}>TUTORIALS</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Items')}>Items</a></li>
                  <li><a onClick={() => this.handleCategoryChange('Parties')}>Parties</a></li>
                  {/* Add more categories here */}
                </div>
              </ul>
            </nav>
          </aside>

          <div className="column main-content">
            <section className="section">
              <div className="container">
                <div className="accordion">
                  {faqs[selectedCategory].map((faq, index) => (
                    <div key={index} className={`acc-item ${faq.active ? 'active' : ''}`}>
                      <div className="acc-question" onClick={() => this.toggleFAQ(index)}>
                        <h2 className="subtitle is-4">{faq.question}</h2>
                      </div>
                      {faq.active && (
                        <div className="acc-answer ">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHelps;



