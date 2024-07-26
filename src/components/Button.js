import React from "react";
import styled from "styled-components";

const Button = ({ onClick }) => (
  <DoneButton onClick={onClick} aria-label="Done">
    Done
  </DoneButton>
);

const DoneButton = styled.button`
  background-color: #ffce22;
  border: none;
  margin-top: -10px;
  padding: 10px 20px;
  color: #1f2128;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ffd84d;
    color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ffce22;
  }
`;

export default Button;
