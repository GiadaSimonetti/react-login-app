import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import styled from "styled-components";

const Container = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  gap: 7px;
  > label {
    color: black;
    font-weight: lighter;
    font-size: 20px;
    padding-bottom: 2px;
  }
  > input {
    font-size: 1.25rem;
    padding: 0.5em;
    background-color: #f4f3f3;
    border: none;
    outline: none;
    border-radius: 0.25em;
    color: black
    font-weight: lighter;
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

const ErrorMessage = styled.p`
  color: red;
`;

const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      postCode: data.postCode,
    },
    mode: "onBlur",
  });

  console.log("errors: ", errors);

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  console.log("step1 data: ", data);
  return (
    <Container>
      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 1</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImputGroup>
            <label htmlFor="lastName">Last Name</label>
            <input
              {...register("lastName", {
                required: "This is required",
                minLength: { value: 2, message: "Minimum lenght is 2" },
                maxLength: { value: 50, message: "Maximum lenght is 50" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Only letters" },
              })}
              placeholder="Last Name"
            />
            <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
          </ImputGroup>
          <ImputGroup>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              {...register("dateOfBirth", {
                required: "This is required",
                min: {
                  value: "1899-01-01",
                  message: "Enter a valide date of birth",
                },
                max: {
                  value: "2022-11-26",
                  message: "Enter a proper date of birth",
                },
              })}
            />
            <ErrorMessage>{errors?.dateOfBirth?.message}</ErrorMessage>
          </ImputGroup>
          <ImputGroup>
            <label htmlFor="postCode">Post Code</label>
            <input
              {...register("postCode", {
                required: "This is required",
                minLength: { value: 5, message: "Minimum lenght is 5" },
                maxLength: { value: 7, message: "Maximum lenght is 7" },
                pattern: {
                  value: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
                  message: "Incorrect post code",
                },
              })}
              placeholder="Post Code"
            />
            <ErrorMessage>{errors?.postCode?.message}</ErrorMessage>
          </ImputGroup>
          <Button type="submit">Next</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step1;
