import "./AdminNavbar.css";
import { useSiteContext } from "../../../context/SiteDarkProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { logout } = useSiteContext();
  const [openItemId, setOpenItemId] = useState(null);

  const handleLogout = () => {
    logout();
  };

  const toggleDropdown = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  const handleItemClick = () => {
    setOpenItemId(null); // Close dropdown after selection
  };

  const sidebarItems = [
    {
      id: 1,
      label: "Billing",
      link: "/admin/dashboard",
    },
    {
      id: 2,
      label: "Master",
      subItems: [
        {
          id: 21,
          label: "Supplier",
          link: "/admin/vendor-table",
        },
        {
          id: 22,
          label: "Customer",
          link: "/admin/customer-table",
        },
      ],
    },
    {
      id: 3,
      label: "Product",
      subItems: [
        {
          id: 23,
          label: "Product Setup",
          link: "/admin/product-setup",
        },
        {
          id: 24,
          label: "Godown",
          link: "/admin/godown",
        },
      ],
    },
    {
      id: 4,
      label: "Sales",
      subItems: [
        {
          id: 25,
          label: "Invoice",
          link: "/admin/sales-invoice",
        },
        {
          id: 26,
          label: "Quotation",
          link: "/admin/estimate",
        },
        {
          id: 27,
          label: "Payment In",
          link: "/admin/paymentin",
        },
        {
          id: 28,
          label: "Return",
          link: "/admin/salesreturn",
        },
        {
          id: 29,
          label: "Credit Note",
          link: "/admin/creditnote",
        },
        {
          id: 30,
          label: "Delivery",
          link: "/admin/deliverychallan",
        },
      ],
    },
    {
      id: 5,
      label: "Purchase",
      subItems: [
        {
          id: 31,
          label: "Invoice",
          link: "/admin/purchase-invoice",
        },
        {
          id: 32,
          label: "Payment Out",
          link: "/admin/payment-out",
        },
        {
          id: 33,
          label: "Return",
          link: "/admin/purchase-return",
        },
        {
          id: 34,
          label: "Debit Note",
          link: "/admin/purchase-debitnote",
        },
        {
          id: 35,
          label: "Order",
          link: "/admin/purchase-order",
        },
      ],
    },
    {
      id: 6,
      label: "Account",
      subItems: [
        {
          id: 36,
          label: "Cash/Bank",
          link: "/admin/cashandbank",
        },
        {
          id: 37,
          label: "E-Invoice",
          link: "/admin/e-invoicing",
        },
        {
          id: 38,
          label: "Auto Bills",
          link: "/admin/automatedbills",
        },
        {
          id: 39,
          label: "Expenses",
          link: "/admin/expense-table",
        },
      ],
    },
    {
      id: 8,
      label: "Report",
      link: "/admin/report",
    },
  ];

  return (
    <>
      <nav
        className="navbar smart-AdminNavbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <p className="jayam">Arun Grid Pvt Ltd</p>
          </div>
        </div>

        <div className="navbar-end">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`navbar-item has-dropdown ${
                openItemId === item.id ? "is-active" : ""
              }`}
            >
              <a
                className="navbar-link"
                href={item.link ? item.link : "#"}
                onClick={() => item.subItems && toggleDropdown(item.id)}
              >
                {item.label}
              </a>
              {item.subItems && openItemId === item.id && (
                <div className="navbar-dropdown">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.link}
                      className="navbar-item"
                      onClick={handleItemClick}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="navbar-item">
            <a onClick={handleLogout} className="navbar-link">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
