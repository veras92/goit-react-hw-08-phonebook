import styled from 'styled-components';

export const User = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  min-width: 150px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px;
`;

export const UserName = styled.p`
  font-size: 30px;
  margin: 0 0 0 0;
`;

export const UserButton = styled.button`
  padding: 5px 15px;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #0058b8;
  background-color: #fff;
  border: 3px solid #0058b8;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 350ms ease, color 350ms ease;

  &:hover,
  &:focus {
    color: #b7012a;
    background-color: none;
    border: 3px solid #b7012a;
  }
`;
