import React from "react";
import styled from "styled-components";
import ItemsSection from "./components/organisms/ItemsSection/ItemsSection";
import SortFilterSection from "./components/organisms/SortFilterSection/SortFilterSection";

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Content = styled.div`
  width: 75%;
  min-height: 50vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const App = (props) => {
  return (
    <Wrapper>
      <Content>
        <SortFilterSection />
        <ItemsSection />
      </Content>
    </Wrapper>
  );
};

export default App;
