import React from "react";
import styled from "styled-components";

const ErrorMessageParagraph = styled.p`
  color: red;
`;

const ErrorMessage = ({ children }) => {
  return <ErrorMessageParagraph>{children}</ErrorMessageParagraph>;
};

export default ErrorMessage;
