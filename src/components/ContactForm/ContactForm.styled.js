import styled from 'styled-components';

export const ContactLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
`;

export const ContactInput = styled.input`
  width: 250px;
  height: 30px;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 18px;
  transition: border 300ms linear;

  &:hover,
  &:focus {
    border: 2px solid #006600;
  }
`;

export const AddBtn = styled.button`
  width: 250px;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 0 auto;
  border: none;
  font-size: 18px;
  background-color: #98fb98;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #90ee90;
  }
`;
