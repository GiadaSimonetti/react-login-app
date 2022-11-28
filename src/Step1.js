import React from "react";
import * as dayjs from "dayjs";
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
  }
`;

// const ErrorMessage = styled.p`
//   color: red;
// `;

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
  const formattedDate = dayjs().format("YYYY-MM-DD");

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  console.log("step1 data: ", data);

  return (
    <MainContainer>
      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 1</h2>
        <FormElement onSubmit={handleSubmit(onSubmit)}>
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
                  value: formattedDate, //here the code check if the date of bith is not in the future, assuming that a parent/carer can login for a newborn
                  message: "Enter a previous date of birth",
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
          <MainButton>Next</MainButton>
        </FormElement>
      </FormContainer>
    </MainContainer>
  );
};

export default Step1;
