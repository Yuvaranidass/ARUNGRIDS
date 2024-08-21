import PropTypes from "prop-types";
import AdminNavbar from "../Admin-Navbar/AdminNavbar";
// import AdminSidebar from "../Admin-Sidenav/AdminSideNav";
import "./AdminLayout.css";
const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="smart-admin-navbar">
        <AdminNavbar />
      </div>
      {/* <div className="smart-admin-sidenav">
        <AdminSidebar />
      </div> */}
      <div className="smart-admin-middle">{children}</div>
    </>
  );
};

export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
