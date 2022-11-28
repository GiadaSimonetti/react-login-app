import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  box-shadow: 0 0 15px 0 #a19f9f;
  padding: 40px 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 20px;
`;

const FormContainer = ({ children, ...props }) => {
  return <FormWrapper {...props}>{children}</FormWrapper>;
};

export default FormContainer;
