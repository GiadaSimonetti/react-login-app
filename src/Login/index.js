import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Logo } from "./drdoctor-company-logo.svg";
import {
  Container,
  LogoContainer,
  LoginContainer,
  Title,
  Form,
  ImputGroup,
  ErrorMessage,
  Button,
} from "./styles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors: ", errors);

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title>Welcome</Title>
        <LoginContainer>
          <Form
            onSubmit={handleSubmit((data) => {
              console.log("data: ", data);
              console.log("dateOfBirth: ", data.dateOfBirth);
            })}
          >
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
                  // valueAsDate: true,
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
            <Button type="submit">Login</Button>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
