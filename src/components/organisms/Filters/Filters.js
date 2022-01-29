import React, { useState } from "react";
import styled from "styled-components";
import {
  handleRemoveItem,
  handleAddItem,
} from "../../../helpers/filterAndSortHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  display: ${(props) => (props.showFilters ? "flex" : "none")};
`;

const CheckboxContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
`;

const CheckboxElement = styled.div`
  height: auto;
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    margin-left: 5px;
  }

  input[type="checkbox"] {
    transform: scale(1);
  }
`;

const SeeMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  button {
    width: 100px;
    height: 25px;
  }
`;

const Filters = ({
  countries,
  countriesCheckboxes,
  setCountriesCheckboxes,
  industries,
  industriesCheckboxes,
  setIndustriesCheckboxes,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <Wrapper showFilters={showFilters}>
        <CheckboxContainer>
          <h3>Country</h3>

          {countries.map((item) => (
            <CheckboxElement key={item}>
              <input
                type="checkbox"
                className="checkbox"
                id={"countries" + countries.indexOf(item)}
                name={item}
                value={item}
                label={item}
                onChange={(e) =>
                  countriesCheckboxes.includes(e.target.value)
                    ? handleRemoveItem(
                        e.target,
                        countriesCheckboxes,
                        setCountriesCheckboxes
                      )
                    : handleAddItem(
                        e.target,
                        countriesCheckboxes,
                        setCountriesCheckboxes
                      )
                }
              />
              <label htmlFor={"countries" + countries.indexOf(item)}>
                {item}
              </label>
            </CheckboxElement>
          ))}
        </CheckboxContainer>
        <CheckboxContainer>
          <h3>Industry</h3>

          {industries.map((item) => (
            <CheckboxElement key={item}>
              <input
                type="checkbox"
                className="checkbox"
                id={"industries" + industries.indexOf(item)}
                name={item}
                value={item}
                label={item}
                onChange={(e) =>
                  industriesCheckboxes.includes(e.target.value)
                    ? handleRemoveItem(
                        e.target,
                        industriesCheckboxes,
                        setIndustriesCheckboxes
                      )
                    : handleAddItem(
                        e.target,
                        industriesCheckboxes,
                        setIndustriesCheckboxes
                      )
                }
              />
              <label htmlFor={"industries" + industries.indexOf(item)}>
                {item}
              </label>
            </CheckboxElement>
          ))}
        </CheckboxContainer>
      </Wrapper>
      <SeeMoreButton>
        {" "}
        <button onClick={() => setShowFilters((showFilters) => !showFilters)}>
          {showFilters ? "Hide filters" : "Show filters"}
        </button>
      </SeeMoreButton>
    </>
  );
};

Filters.propTypes = {};

export default Filters;
