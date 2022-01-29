import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.div`
  width: auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    width: 1400px;
  }
`;

export const Wrapper = styled.div`
  color: white;
  height: auto;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 5% 0 5%;
  hr {
    margin: 10px 0 10px 0;
  }
  select {
    margin: 10px 0 10px 0;
  }

  @media screen and (min-width: 1200px) {
    width: 35%;
    margin-bottom: 0px;
  }
`;
