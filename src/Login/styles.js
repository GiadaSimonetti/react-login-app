import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100px;
  padding: 20px;
`;

export const LoginContainer = styled.div`
  box-shadow: 0 0 15px 0 #a19f9f;
  padding: 40px 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  color: black;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  padding: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const ImputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  > label {
    color: black;
    font-weight: lighter;
  }
  > input {
    font-size: 1.25rem;
    padding: 0.5em;
    background-color: #f4f3f3;
    border: none;
    outline: none;
    border-radius: 0.25em;
    color: #a19f9f;
    font-weight: lighter;
  }
  .msg {
    display: none;
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 1.5rem;
  font-weight: lighter;
  color: black;
  background-color: #f4f3f3;
  border: 1px solid #a19f9f;
  border-radius: 0.25em;
  outline: none;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #a19f9f;
    color: #f4f3f3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
