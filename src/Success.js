import React from "react";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import FormContainer from "./FormContainer";

const Success = () => {
  const { data } = useData();

  return (
    <MainContainer>
      <FormContainer style={{ textAlign: "center" }}>
        <h2>Dear {data.lastName},</h2>
        <h3>you have successfully logged in</h3>
      </FormContainer>
    </MainContainer>
  );
};

export default Success;
