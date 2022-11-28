import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./drdoctor-company-logo.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  width: 100px;
  padding: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  color: black;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  padding: 40px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>Welcome</Title>
    </HeaderContainer>
  );
};

export default Header;
