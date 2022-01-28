import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AppContext } from "../../../providers/AppProvider";

const Wrapper = styled.div`
  width: 25%;
  height: auto;
  color: white;

  hr {
    margin: 10px;
  }
`;

const Filters = styled.div`
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
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    margin-left: 5px;
  }
`;

const SortFilterSection = (props) => {
  const { items, setItems } = useContext(AppContext);

  console.log(items);

  return (
    <Wrapper>
      <h2>Order by</h2>

      <select name="pets" id="pet-select">
        <option value="">Please choose an option</option>
        <option value="dog">Alphabetically - ascending</option>
        <option value="cat">Alphabetically - descending</option>
        <option value="hamster">Number of Employees - ascending</option>
        <option value="parrot">Number of Employees - descending</option>
      </select>
      <hr />
      <h2>Filters</h2>
      <hr />
      <h3>Country</h3>

      <Filters>
        <CheckboxContainer>
          {items != null ? (
            items.map((item) => (
              <CheckboxElement>
                <input
                  type="checkbox"
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
                />
                <label htmlFor="subscribeNews">{item.country}</label>
              </CheckboxElement>
            ))
          ) : (
            <></>
          )}
        </CheckboxContainer>

        <h3>Industry</h3>

        <CheckboxContainer>
          {items != null ? (
            items.map((item) => (
              <CheckboxElement>
                <input
                  type="checkbox"
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
                />
                <label htmlFor="subscribeNews">{item.industry}</label>
              </CheckboxElement>
            ))
          ) : (
            <></>
          )}
        </CheckboxContainer>
      </Filters>
    </Wrapper>
  );
};

SortFilterSection.propTypes = {};

export default SortFilterSection;
