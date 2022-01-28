import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ItemElement from "../../atoms/ItemElement/ItemElement";
import { AppContext } from "../../../providers/AppProvider";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemElementSkeleton = styled.div`
  min-height: 100px;
  width: 100%;

  margin: 5px;
  background: lightblue;
  border-radius: 5px;
  display: flex;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

const DisplayItems = (props) => {
  const { items, setItems } = useContext(AppContext);

  useEffect(() => {
    const fetchItems = async () => {
      fetch("https://dujour.squiz.cloud/developer-challenge/data")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.error(err));
    };
    fetchItems();
  }, []);

  return (
    <Wrapper>
      {items != null ? (
        items.map((item) => <ItemElement item={item} key={item.id} />)
      ) : (
        <h1>Loading</h1>
      )}
    </Wrapper>
  );
};

export default DisplayItems;
