import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: move;
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
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.checked ? "#007bff" : "#fff")};
  border: 2px solid ${(props) => (props.checked ? "#2469F6" : "#CDCDCD")};
  border-radius: 8px;
  cursor: pointer;
  background-image: ${(props) =>
    props.checked ? "url('/checked.svg')" : "none"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CheckboxLabel = ({ name, checked, onChange }) => (
  <>
    <Label>
      {name.replace("page", "Page ")}
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          aria-label={`Checkbox for ${name}`}
        />
        <CheckMark checked={checked} />
      </CheckboxWrapper>
    </Label>
  </>
);

export default CheckboxLabel;
