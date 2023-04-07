import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  display: block;
  margin-top: 150px;
  font-size: 50px;
  text-align: center;
  color: #000;
`;

export const Text = styled.p`
  display: block;
  font-size: 30px;
  text-align: center;
  color: #000;
`;

export const UserLink = styled(Link)`
  padding: 15px;
  display: block;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #0058b8;
  background-color: none;
  border: 3px solid #ffd600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #0058b8;
    background-color: #ffd600;
  }
`;

export const LogOutButton = styled.button`
  padding: 15px;
  display: block;
  min-width: 230px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #b7012a;
  background-color: #ffffff;
  border: 3px solid #b7012a;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #b7012a;
  }
`;
