import PropTypes from "prop-types";
import "./DataNotFound.css";

const DataNotFound = ({ msg }) => {
  return (
    <div className="data-not-found">
      <p className="title is-5">{msg}</p>
    </div>
  );
};

DataNotFound.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default DataNotFound;
