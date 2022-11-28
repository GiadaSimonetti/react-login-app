import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default MainContainer;
