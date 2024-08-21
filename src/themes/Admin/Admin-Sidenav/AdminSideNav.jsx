import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./AdminSideNav.css";

const SidebarItem = ({
  item,
  location,
  handleNavigation,
  isOpen,
  toggleDropdown,
  openItemId,
}) => {
  const isActive = location.pathname === item.link;

  return (
    <li className={isActive ? "is-active" : ""}>
      <div
        onClick={() =>
          item.subItems ? toggleDropdown(item.id) : handleNavigation(item.link)
        }
        className="sidebar-item"
      >
        <span className="pr-1">{item.icon}</span>
        <span>{item.label}</span>
        {item.subItems && (
          <i
            className={`fa fa-chevron-${isOpen ? "up" : "down"} is-size-7`}
            aria-hidden="true"
          ></i>
        )}
      </div>
      {item.subItems && isOpen && (
        <ul>
          {item.subItems.map((subItem) => (
            <SidebarItem
              key={subItem.id}
              item={subItem}
              location={location}
              handleNavigation={handleNavigation}
              isOpen={openItemId === subItem.id}
              toggleDropdown={toggleDropdown}
              openItemId={openItemId}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  openItemId: PropTypes.number,
};

const AdminSidebar = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openItemId, setOpenItemId] = useState(null);

  const handleNavigation = (link) => {
    navigate(link);
  };

  const toggleDropdown = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="sidebar-container">
      <ul className="smart-side-nav-view p-4 is-hidden-mobile py-1 px-5">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            location={location}
            handleNavigation={handleNavigation}
            isOpen={openItemId === item.id}
            toggleDropdown={toggleDropdown}
            openItemId={openItemId}
          />
        ))}
      </ul>
    </div>
  );
};

AdminSidebar.propTypes = {
  items: PropTypes.array.isRequired,
};

const AdminSideNav = () => {
  const sidebarItem = [
    {
      id: 1,
      label: "Dashboard",
      icon: <i className="fa fa-home" aria-hidden="true"></i>,
      link: "/admin/dashboard",
    },
    {
      id: 2,
      label: "Master",
      icon: <i className="fa fa-sitemap" aria-hidden="true"></i>,
      subItems: [
        {
          id: 21,
          label: "Supplier",
          icon: <i className="fa fa-user" aria-hidden="true"></i>,
          link: "/admin/vendor-table",
        },
        {
          id: 22,
          label: "Customer",
          icon: <i className="fa fa-users" aria-hidden="true"></i>,
          link: "/admin/customer-table",
        },
      ],
    },
    {
      id: 3,
      label: "Product",
      icon: <i className="fa fa-list" aria-hidden="true"></i>,
      subItems: [
        {
          id: 23,
          label: "Inventory",
          icon: <i className="fa fa-inbox" aria-hidden="true"></i>,
          link: "/admin/iteminventory",
        },
        {
          id: 24,
          label: "Godown",
          icon: <i className="fa fa-industry" aria-hidden="true"></i>,
          link: "/admin/godown",
        },
      ],
    },
    {
      id: 4,
      label: "Sales",
      icon: <i className="fa fa-bar-chart" aria-hidden="true"></i>,
      subItems: [
        {
          id: 25,
          label: "Invoice",
          icon: <i className="fa fa-file-text-o" aria-hidden="true"></i>,
          link: "/admin/sales-invoice",
        },
        {
          id: 26,
          label: "Quotation",
          icon: <i className="fa fa-file" aria-hidden="true"></i>,
          link: "/admin/estimate",
        },
        {
          id: 27,
          label: "Payment In",
          icon: <i className="fa fa-money" aria-hidden="true"></i>,
          link: "/admin/paymentin",
        },
        {
          id: 28,
          label: "Return",
          icon: <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>,
          link: "/admin/salesreturn",
        },
        {
          id: 29,
          label: "Credit Note",
          icon: <i className="fa fa-credit-card" aria-hidden="true"></i>,
          link: "/admin/creditnote",
        },
        {
          id: 30,
          label: "Delivery",
          icon: <i className="fa fa-truck" aria-hidden="true"></i>,
          link: "/admin/deliverychallan",
        },
      ],
    },
    {
      id: 5,
      label: "Purchase",
      icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
      subItems: [
        {
          id: 31,
          label: "Invoice",
          icon: <i className="fa fa-file-text-o" aria-hidden="true"></i>,
          link: "/admin/purchase-invoice",
        },
        {
          id: 32,
          label: "Payment Out",
          icon: <i className="fa fa-money" aria-hidden="true"></i>,
          link: "/admin/payment-out",
        },
        {
          id: 33,
          label: "Return",
          icon: <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>,
          link: "/admin/purchase-return",
        },
        {
          id: 34,
          label: "Debit Note",
          icon: <i className="fa fa-credit-card" aria-hidden="true"></i>,
          link: "/admin/purchase-debitnote",
        },
        {
          id: 35,
          label: "Order",
          icon: <i className="fa fa-shopping-bag" aria-hidden="true"></i>,
          link: "/admin/purchase-order",
        },
      ],
    },
    {
      id: 6,
      label: "Account",
      icon: <i className="fa fa-id-badge" aria-hidden="true"></i>,
      subItems: [
        {
          id: 36,
          label: "Cash/Bank",
          icon: <i className="fa fa-university" aria-hidden="true"></i>,
          link: "/admin/cashandbank",
        },
        {
          id: 37,
          label: "E-Invoice",
          icon: <i className="fa fa-exchange" aria-hidden="true"></i>,
          link: "/admin/e-invoicing",
        },
        {
          id: 38,
          label: "Auto Bills",
          icon: <i className="fa fa-files-o" aria-hidden="true"></i>,
          link: "/admin/automatedbills",
        },
        {
          id: 39,
          label: "Expenses",
          icon: <i className="fa fa-bars" aria-hidden="true"></i>,
          link: "/admin/expense-table",
        },
      ],
    },
    
    {
      id: 8,
      label: "Report",
      icon: <i className="fa fa-flag-o" aria-hidden="true"></i>,
      link: "/admin/report",
    },
  ];
  return (
    <>
      <div className=" has-text-light main-side-view">
        <AdminSidebar items={sidebarItem} />
      </div>
    </>
  );
};

export default AdminSideNav;
