import React from "react";
import styled from "styled-components";

const Button = styled.button`
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

const MainButton = ({ children, ...props }) => {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

export default MainButton;
