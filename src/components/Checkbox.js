import React from "react";
import styled from "styled-components";
import CheckArrow from "./assets/CheckArrow";

const CheckboxLabel = ({ reff, handlerId, name, checked, onChange }) => (
  <>
    <Label>
      <Span ref={reff} data-handler-id={handlerId}>
        {name.replace("page", "Page ")}
      </Span>
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          aria-label={`Checkbox for ${name}`}
        />
        <CheckMark checked={checked}>
          <CheckArrow />
        </CheckMark>
      </CheckboxWrapper>
    </Label>
  </>
);

const Span = styled.div`
  cursor: move;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
`;

const CheckMark = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  color: ${(props) => (props.checked ? "#fff" : "#fff")};
  background-color: ${(props) => (props.checked ? "#2469f6" : "#fff")};
  border: 1.5px solid ${(props) => (props.checked ? "#2469f6" : "#e1e1e1")};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    stroke 0.3s ease;

  svg {
    display: ${(props) => (props.checked ? "block" : "none")};
    stroke: ${(props) => (props.checked ? "#E3E3E3" : "transparent")};
  }

  &:hover {
    color: ${(props) => (props.checked ? "#fff" : "#e3e3e3")};
    background-color: ${(props) => (props.checked ? "#5087f8" : "#f0f0f0")};
    border-color: ${(props) => (props.checked ? "#5087f8" : "#bdbdbd")};
    svg {
      display: block;
      stroke: ${(props) => (props.checked ? "#E3E3E3" : "#999")};
    }
  }

  &:active {
    color: ${(props) => (props.checked ? "#fff" : "#878787")};
    background-color: ${(props) => (props.checked ? "#5087f8" : "#fff")};
    border-color: ${(props) => (props.checked ? "#5087f8" : "#bdbdbd")};
    svg {
      display: block;
      stroke: ${(props) => (props.checked ? "#fff" : "#666")};
    }
    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px solid #e9f0fe;
      border-radius: 8px;
      pointer-events: none;
    }
  }
`;

export default CheckboxLabel;
