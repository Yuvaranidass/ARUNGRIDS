import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../themes/Loading-Page/Loading";
import AdminLayout from "../themes/Admin/Admin-MainLayout/AdminLayout";

import LoginPage from "../pages/Admin/Admin-login/AdminLogin";
import Dashboard from "../pages/Admin/Dashboard-Page/Dashboard";
import CustomerTable from "../pages/Admin/Customer-Form/CustomerTable";
import ThermalPrint from "../pages/Admin/Dashboard-Page/ThermalPrint";
import VendorTable from "../pages/Admin/Vendor-Table/VendorTable";
import ProductSetup from "../pages/Admin/ProductSetup/ProductSetup";

//lazy loading

function ParentRoute() {
  //Admin Routes
  const adminRoute = () => {
    return (
      <>
        <AdminLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customer-table" element={<CustomerTable />} />
              <Route path="/thermal-print" element={<ThermalPrint />} />
              <Route path="/vendor-table" element={<VendorTable />} />
              <Route path="/product-setup" element={<ProductSetup />} />
            </Routes>
          </Suspense>
        </AdminLayout>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={adminRoute()} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default ParentRoute;
