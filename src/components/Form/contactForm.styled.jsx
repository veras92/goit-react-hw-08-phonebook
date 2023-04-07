import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  border: 3px solid #0058b8;
  border-radius: 5px;
  max-width: 700px;
  padding: 50px 20px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  display: block;
  font-family: inherit;
  font-size: 20px;
  color: #ffd600;
  background-color: #0058b8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 350ms ease, color 350ms ease;

  &:hover,
  &:focus {
    color: #0058b8;
    background-color: #ffd600;
  }
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 25px;
  color: #3c2a21;
  background-color: #fff;
  border: 3px solid #0058b8;
  outline: none;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
`;

export const Title = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 35px;
  color: #1a120b;
`;
