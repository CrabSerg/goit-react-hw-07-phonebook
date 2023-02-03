import styled from 'styled-components';

export const FindLabel = styled.label`
  margin-bottom: 8px;
  font-size: 20px;
  text-align: center;
`;

export const FindInput = styled.input`
  width: 250px;
  height: 30px;
  padding: 3px 6px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 18px;
  transition: border 300ms linear;

  &:hover,
  &:focus {
    border: 2px solid #006600;
  }
`;
