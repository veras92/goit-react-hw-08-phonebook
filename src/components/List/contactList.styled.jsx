import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  gap: 30px;
  font-size: 30px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Number = styled.span`
  font-size: 30px;
`;

export const Button = styled.button`
  padding: 10px;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #ffd600;
  background-color: #0058b8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 350ms ease, color 350ms ease;
  &:hover,
  &:focus {
    color: #b7012a;
    background-color: #ffffff;
    border: 3px solid #b7012a;
  }
`;
