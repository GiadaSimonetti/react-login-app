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
    display: block;
    text-align: center;
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
    text-align: center; 
    letter-spacing: 0.5em;
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

const Step3 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      verificationCode: data.verificationCode,
    },
    mode: "onBlur",
  });

  console.log("errors: ", errors);

  const onSubmit = (data) => {
    history.push("./success");
    setValues(data);
  };

  console.log("Step3 data: ", data);
  return (
    <Container>
      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 3</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImputGroup>
            <label htmlFor="verificationCode">
              Verify the authorization code
            </label>
            <input
              {...register("verificationCode", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum lenght is 4" },
                maxLength: { value: 4, message: "Maximum lenght is 4" },
                pattern: {
                  value: /^[0-9]*$/i,
                  message: "Must contains only numbers",
                },
              })}
              placeholder="0000"
            />
            <ErrorMessage>{errors?.verificationCode?.message}</ErrorMessage>
          </ImputGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step3;
