import React from "react";

const SortSelect = ({ setCurrentOption }) => {
  return (
    <>
      <h2>Order by</h2>

      <select
        name="sort"
        id="sort"
        onChange={(e) => {
          setCurrentOption(e.target.value);
        }}
      >
        <option value="">Please choose an option</option>
        <option value="alphabetASC">Alphabetically - A-Z</option>
        <option value="alphabetDESC">Alphabetically - Z-A</option>
        <option value="employeesASC">Number of Employees - ascending</option>
        <option value="employeesDESC">Number of Employees - descending</option>
      </select>
      <hr />
    </>
  );
};

SortSelect.propTypes = {};

export default SortSelect;
