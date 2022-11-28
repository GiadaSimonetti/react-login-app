import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import FormContainer from "./FormContainer";
import MainButton from "./components/MainButton";
import FormElement from "./components/FormElement";
import ErrorMessage from "./components/ErrorMessage";

const ImputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

// const ErrorMessage = styled.p`
//   color: red;
// `;

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

  const verificationCode = "0000";
  const validateImput = (value) => value === verificationCode;

  const onSubmit = (data) => {
    history.push("./success");
    setValues(data);
  };

  return (
    <MainContainer>
      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 3</h2>
        <FormElement onSubmit={handleSubmit(onSubmit)}>
          <ImputGroup>
            <label htmlFor="verificationCode">
              Verify the authorization code
            </label>
            <input
              {...register("verificationCode", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Verification Code must be 4 digits",
                },
                maxLength: {
                  value: 4,
                  message: "Verification Code must be 4 digits",
                },
                pattern: {
                  value: /^[0-9]*$/i,
                  message: "Must contains only numbers",
                },
                validate: {
                  checkImput: (v) =>
                    validateImput(v) || "Wrong verification number",
                },
              })}
              placeholder="0000"
            />
            <ErrorMessage>{errors?.verificationCode?.message}</ErrorMessage>
          </ImputGroup>

          <MainButton type="submit">Submit</MainButton>
        </FormElement>
      </FormContainer>
    </MainContainer>
  );
};

export default Step3;
