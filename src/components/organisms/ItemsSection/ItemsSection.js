import React from "react";
import styled from "styled-components";
import DisplayItems from "../../molecules/DisplayItems/DisplayItems";

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 1000px;
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
