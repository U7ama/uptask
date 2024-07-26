import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";

const Home = () => {
  const [checkedState, setCheckedState] = useState({
    "All Pages": false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
      ...(name === "All Pages" && {
        page1: checked,
        page2: checked,
        page3: checked,
        page4: checked,
      }),
    }));
  };

  const handleDoneClick = () => {
    const checkedPages = Object.keys(checkedState).filter(
      (page) => checkedState[page]
    );
    if (checkedPages.includes("All Pages")) {
      alert(`You checked All Pages`);
    } else {
      alert(`You checked: ${checkedPages.join(", ")}`);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <MainContainer>
        <Container
          checkedState={checkedState}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Button onClick={handleDoneClick} />
      </MainContainer>
    </DndProvider>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  width: 330px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
`;

export default Home;
