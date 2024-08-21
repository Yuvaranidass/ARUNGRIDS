/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SmartDarkButton } from "dark_power25";
import "./FilterForm.css";

const FilterForm = ({ columns, onApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({});
  useEffect(() => {
    const savedSelections = JSON.parse(localStorage.getItem("selectedColumns"));
    if (savedSelections) {
      setSelectedColumns(savedSelections);
    } else {
      const initialSelections = columns.reduce((acc, column) => {
        acc[column.index] = column.isSelect || false;
        return acc;
      }, {});
      setSelectedColumns(initialSelections);
    }
  }, [columns]);

  useEffect(() => {
    localStorage.setItem("selectedColumns", JSON.stringify(selectedColumns));
  }, [selectedColumns]);

  const toggleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (index) => {
    setSelectedColumns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleApply = () => {
    const selected = columns.filter((column) => selectedColumns[column.index]);
    onApply(selected);
    toggleSideNav();
  };

  return (
    <div>
      <SmartDarkButton
        label="Filter"
        leftIcon="fa fa-filter"
        classList={["is-link is-outlined is-rounded"]}
        onClick={toggleSideNav}
      />
      <div
        className={`sidenav ${
          isOpen ? "is-open" : ""
        } is-flex is-flex-direction-column`}
      >
        <div className="is-flex is-justify-content-space-between">
          <h2 className="title is-5">Filter Options</h2>
          <SmartDarkButton
            type="icon"
            leftIcon="fa fa-times"
            classList={["is-clickable has-text-danger"]}
            onClick={toggleSideNav}
          />
        </div>
        <div className="sidenav-content">
          {columns.map((column) => (
            <div key={column.index} className="field mt-2">
              <input
                id={column.index}
                type="checkbox"
                name={column.index}
                className="switch is-rounded is-link"
                checked={selectedColumns[column.index] || false}
                onChange={() => handleCheckboxChange(column.index)}
              />
              <label htmlFor={column.index}>{column.title}</label>
            </div>
          ))}
        </div>
        <SmartDarkButton
          label="Apply"
          classList={["is-link mt-3 is-outlined "]}
          onClick={handleApply}
        />
      </div>
      {isOpen && (
        <div className="sidenav-overlay" onClick={toggleSideNav}></div>
      )}
    </div>
  );
};

export default FilterForm;
