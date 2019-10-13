import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

export const TextAreaLabel = styled.label`
  display: block;
  font-size: 11px;
`;

export const Full = styled.p`
  grid-column: 1 / 3;
`;

export const ContactButton = styled.button`
  width: 100%;
  padding: 1em;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid #eeeff0;
  background: #f8f9fc;
`;

export const CheckBox = styled.input`
  padding: 1em;
  border-radius: 4px;
  margin-left: 2px;
`;
