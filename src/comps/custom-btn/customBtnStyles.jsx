import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => (props.primary ? '#f0f7fe' : '#357ae8')};
  color: ${props => (props.primary ? '#6090bf' : 'white')};
  font-size: 1em;
  padding: 15px 30px;
  border-radius: 3px;
  border: none;
  font-size: 12px;
`;
