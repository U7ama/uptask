import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import Separator from "./Separator";

const Container = ({ checkedState, handleCheckboxChange }) => {
  const [cards, setCards] = useState([
    { id: 1, text: "All Pages" },
    { id: 2, text: "page1" },
    { id: 3, text: "page2" },
    { id: 4, text: "page3" },
    { id: 5, text: "page4" },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <CheckboxContainer>
      {cards.map((card, index) => (
        <React.Fragment key={card.id}>
          <Card
            index={index}
            id={card.id}
            text={card.text}
            checked={checkedState[card.text]}
            onChange={handleCheckboxChange}
            moveCard={moveCard}
          />
          {(card.text === "All Pages" || card.text === "page4") && (
            <>
              <Separator />
            </>
          )}
        </React.Fragment>
      ))}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  margin-top: -10px;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export { Container };
