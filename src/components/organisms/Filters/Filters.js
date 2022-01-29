import React from "react";
import styled from "styled-components";
import {
  handleRemoveItem,
  handleAddItem,
} from "../../../helpers/filterAndSortHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const Filters = ({
  countries,
  countriesCheckboxes,
  setCountriesCheckboxes,
  industries,
  industriesCheckboxes,
  setIndustriesCheckboxes,
}) => {
  return (
    <Wrapper>
      <CheckboxContainer>
        <h3>Country</h3>

        {countries.map((item) => (
          <CheckboxElement key={item}>
            <input
              type="checkbox"
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
  );
};

Filters.propTypes = {};

export default Filters;
