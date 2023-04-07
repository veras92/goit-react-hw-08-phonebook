import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
`;

export const Title = styled.h3`
  display: block;
  margin-bottom: 5px;
  font-size: 25px;
  color: #000;
`;

export const Input = styled.input`
  display: block;
  max-width: 250px;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 25px;
  color: #000;
  background-color: #ffffff;
  border: 3px solid #0058b8;
  outline: none;
  border-radius: 5px;
`;
