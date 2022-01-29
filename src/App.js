import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AppContext } from "./providers/AppProvider";
import { Wrapper, MainWrapper, Content } from "./App.styles";

import {
  SortArrayEmployeesDESC,
  SortArrayEmployeesASC,
  SortArrayAlphabetDESC,
  SortArrayAlphabetASC,
  handleRemoveItem,
  handleAddItem,
} from "./helpers/filterAndSortHelpers";

// components
import ItemsSection from "./components/organisms/ItemsSection/ItemsSection";
import SortSelect from "./components/molecules/SortSelect/SortSelect";
import Filters from "./components/organisms/Filters/Filters";

const SortFilterSection = (props) => {
  const { items } = useContext(AppContext);
  const [currentOption, setCurrentOption] = useState();
  const [countriesCheckboxes, setCountriesCheckboxes] = useState([]);
  const [industriesCheckboxes, setIndustriesCheckboxes] = useState([]);

  let countries = [];
  let industries = [];

  if (items != null) {
    const itemsCopy = items.map((item) => ({ ...item }));

    itemsCopy.sort(SortArrayAlphabetASC);

    itemsCopy.forEach((item) => {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
    });

    itemsCopy.forEach((item) => {
      if (!industries.includes(item.industry)) {
        industries.push(item.industry);
      }
    });
  }

  useEffect(() => {
    switch (currentOption) {
      case "alphabetASC":
        items.sort(SortArrayAlphabetASC);
        break;
      case "alphabetDESC":
        items.sort(SortArrayAlphabetDESC);
        break;
      case "employeesASC":
        items.sort(SortArrayEmployeesASC);
        break;
      case "employeesDESC":
        items.sort(SortArrayEmployeesDESC);
        break;
      default:
        console.log("def");
    }

    return function cleanup() {
      setCurrentOption(null);
    };
  }, [currentOption]);

  useEffect(() => {
    let matchingItems = document.querySelectorAll(".itemElement");
    if (industriesCheckboxes.length === 0 && countriesCheckboxes.length === 0) {
      matchingItems.forEach((item) => (item.style.display = "flex"));
    } else if (
      industriesCheckboxes.length === 0 ||
      countriesCheckboxes.length === 0
    ) {
      matchingItems.forEach((item) =>
        industriesCheckboxes.includes(item.dataset.industry) ||
        countriesCheckboxes.includes(item.dataset.country)
          ? (item.style.display = "flex")
          : (item.style.display = "none")
      );
    } else {
      matchingItems.forEach((item) =>
        industriesCheckboxes.includes(item.dataset.industry) &&
        countriesCheckboxes.includes(item.dataset.country)
          ? (item.style.display = "flex")
          : (item.style.display = "none")
      );
    }
  }, [industriesCheckboxes, countriesCheckboxes]);

  useEffect(
    () => console.log(industriesCheckboxes, countriesCheckboxes),
    [industriesCheckboxes, countriesCheckboxes]
  );
  return (
    <>
      <MainWrapper>
        <Content>
          <Wrapper>
            <SortSelect setCurrentOption={setCurrentOption} />
            <h2>Filters</h2>
            <hr />
            <Filters
              countries={countries}
              countriesCheckboxes={countriesCheckboxes}
              setCountriesCheckboxes={setCountriesCheckboxes}
              industries={industries}
              industriesCheckboxes={industriesCheckboxes}
              setIndustriesCheckboxes={setIndustriesCheckboxes}
            />
          </Wrapper>
          <ItemsSection items={items}></ItemsSection>
        </Content>
      </MainWrapper>
    </>
  );
};

SortFilterSection.propTypes = {};

export default SortFilterSection;
