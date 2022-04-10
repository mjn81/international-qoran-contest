import styled from 'styled-components';
import { Field } from 'formik';

const CheckBoxField = styled.div`
  outline: none;
  display: block;
  cursor: pointer;
  border: none;
  background-color: var(--text-color);
  width: 22px;
  height: 22px;
  border-radius: 5px;
  position: relative;
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    background-color: #fff;
    width: 5px;
    height: 10px;
    border-radius: 2px;
    top: 60%;
    left: 19%;
    transform: translateY(-50%) rotate(-45deg);
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    background-color: #fff;
    width: 5px;
    height: 15px;
    border-radius: 2px;
    top: 50%;
    left: 49%;
    transform: translateY(-50%) rotate(45deg);
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Label = styled.label`
  margin: ${(props) => props.margin || 'auto'};
  max-width: fit-content;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    margin: 10px;
    line-height: 1rem;
    display: block;
  }
`;

export const CheckBox = ({ text, value, setValue, name, margin }) => {
  return (
    <Label htmlFor={name} margin={margin}>
      <span hidden={!text} onClick={() => setValue(name, !value)}>
        {text}
      </span>
      <Field
        name={name}
        id={name}
        type="checkbox"
        value={value}
        checked={value}
        as={CheckBoxField}
        onClick={() => setValue(name, !value)}
      />
    </Label>
  );
};

export const RadioButton = styled.div`
  min-width: 22px;
  min-height: 22px;
  outline: none;
  display: block;
  cursor: pointer;
  border: 4px solid var(--dark-text-color);
  background-color: ${(props) =>
    props.checked ? 'var(--dark-text-color)' : 'transparent'};
  padding: 2px;
`;
