import "./PageLoader.css";
import PropTypes from "prop-types";

const PageLoader = ({ loading, msg }) => {
  return loading ? (
    <div className="smart-page-loader">
      <div className="smart-spinner"></div>
      {msg && msg.length > 1 ? (
        <p className="smart-spinner-msg">{msg}</p>
      ) : (
        <p className="smart-spinner-msg">Loading...</p>
      )}
    </div>
  ) : null;
};

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  msg: PropTypes.string,
};

export default PageLoader;
