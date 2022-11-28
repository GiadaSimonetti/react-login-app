import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import styled from "styled-components";

const Container = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  > p {
    font-size: 20px;
  }
`;

const BoldText = styled.span`
  font-size: 20px;
  color: #a19f9f;
  font-weight: bold;
`;

const ImputContainer = styled.div`
  margin-top: 20px;
`;

const FormContainer = styled.div`
  box-shadow: 0 0 15px 0 #a19f9f;
  padding: 40px 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const ImputGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px 5px 10px;
  > label {
    color: black;
    font-weight: lighter;
    font-size: 1.25rem;
    padding-bottom: 2px;
  }
  > input[type="radio" i] {
    margin: 3px 10px 0px 5px;
  }
`;

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

const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      validation: ["A"],
    },
  });

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };
  console.log("step2 data: ", data);

  const CapitalizedLastName =
    data?.lastName?.charAt(0).toUpperCase() + data?.lastName?.slice(1);

  const UppercasePostCode = data?.postCode.toUpperCase();

  console.log("data: ", data);
  return (
    <Container>
      <InformationContainer>
        <p>
          <BoldText>Last Name: </BoldText>
          <span>{CapitalizedLastName}</span>
        </p>
        <p>
          <BoldText>Date of Birth: </BoldText>
          <span>{data.dateOfBirth}</span>
        </p>
        <p>
          <BoldText>Post Code: </BoldText>
          <span>{UppercasePostCode}</span>
        </p>
      </InformationContainer>

      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 2</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <BoldText>Please choose a method of validation:</BoldText>
            <ImputContainer>
              <p>Email</p>
              <ImputGroup>
                <input {...register("validation")} type="radio" value="A" />
                <label for="email">g***********@gmail.com</label>
              </ImputGroup>
              <p>Phone Call</p>
              <ImputGroup>
                <input {...register("validation")} type="radio" value="B" />
                <label for="phone">********111</label>
              </ImputGroup>
              <p>Text to Mobile</p>
              <ImputGroup>
                <input {...register("validation")} type="radio" value="C" />
                <label for="mobile">*******111</label>
              </ImputGroup>
            </ImputContainer>
          </section>
          <Button type="submit">Next</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step2;
