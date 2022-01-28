import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100px;
  width: 100%;

  margin: 5px;
  background: whitesmoke;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  h1 {
    font-size: 24px;
    line-height: 30px;
  }

  h2 {
    font-size: 16px;
    line-height: 20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

const ItemId = styled.p``;
const BasicData = styled.div`
  width: 60%;
  padding: 5px;
`;

const NumberOfEmployees = styled.div`
  background: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItemElement = ({ item }) => {
  return (
    <Wrapper>
      <BasicData>
        <ItemId>
          <u>{item.id}</u>
        </ItemId>

        <h1>{item.name}</h1>
        <h2>{item.industry}</h2>
        <p>From: {item.country}</p>
      </BasicData>
      <NumberOfEmployees>
        <p>Employees: </p>

        <h1>{item.numberOfEmployees}</h1>
      </NumberOfEmployees>
    </Wrapper>
  );
};

ItemElement.propTypes = {};

export default ItemElement;
