import React from "react";
import styled from "styled-components";
import DisplayItems from "../../molecules/DisplayItems/DisplayItems";

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const ItemsSection = (props) => {
  return (
    <Wrapper>
      <DisplayItems></DisplayItems>
    </Wrapper>
  );
};

ItemsSection.propTypes = {};

export default ItemsSection;
