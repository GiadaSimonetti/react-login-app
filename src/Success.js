import React from "react";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import styled from "styled-components";

const FormContainer = styled.div`
  box-shadow: 0 0 15px 0 #a19f9f;
  padding: 40px 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 20px;
  text-align: center;
`;

const Success = () => {
  const { data } = useData();

  return (
    <MainContainer>
      <FormContainer>
        <h2>Dear {data.lastName},</h2>
        <h3>you have successfully logged in</h3>
      </FormContainer>
    </MainContainer>
  );
};

export default Success;
