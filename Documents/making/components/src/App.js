import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Password from "./components/Password";

const AppBlock = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 1rem;
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <AppBlock>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
        <Button>BUTTON</Button>
      </AppBlock>
      <Password></Password>
    </>
  );
}

export default App;
