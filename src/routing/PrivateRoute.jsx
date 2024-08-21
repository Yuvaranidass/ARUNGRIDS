import React from "react";
import { useSiteContext } from "../context/SiteDarkProvider";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import UnauthorizedPage from "./UnauthorizedPage";
import { useNavigate } from "react-router-dom";

const PrivateRoute = React.memo(({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const { user } = useSiteContext();

  if (!user) {
    navigate("/");
    return (
      <>
        <UnauthorizedPage />
      </>
    );
  }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    toast.error("Unauthorized access");
    return null;
  }

  return children;
});

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

PrivateRoute.displayName = "PrivateRoute";

export default PrivateRoute;
