import React from "react";
import styled from "styled-components";
import DisplayItems from "../../molecules/DisplayItems/DisplayItems";

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;

const ItemsSection = ({ items }) => {
  return (
    <Wrapper>
      <DisplayItems items={items}></DisplayItems>
    </Wrapper>
  );
};

ItemsSection.propTypes = {};

export default ItemsSection;
