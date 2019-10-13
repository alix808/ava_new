import styled, { css } from 'styled-components';

const primaryStyles = css`
  background-color: #f0f7fe;
  color: #6090bf;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: #357ae8;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const invertedButtonTwo = css`
  background-color: #357ae8;
  color: white;
  border: 1px solid #357ae8;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = props => {
  if (props.primary) {
    return primaryStyles;
  }

  if (props.two) {
    return invertedButtonStyles;
  }

  if (props.three) {
    return invertedButtonTwo;
  }
};

export const Button = styled.button`
  font-size: 1em;
  padding: 15px 30px;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  ${getButtonStyles}
`;
