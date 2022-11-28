import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const FormElement = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>;
};

export default FormElement;
