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

  const hasError = Boolean(errors);
  console.log("hasError:", hasError);

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
              console.log(data);
            })}
          >
            <ImputGroup>
              <label for="lastName">Last Name</label>
              <input
                hasError
                {...register("lastName", {
                  required: "This is required",
                  minLength: { value: 2, message: "Minimum lenght is 2" },
                  maxLength: { value: 50, message: "Maximum lenght is 50" },
                  pattern: { value: /^[A-Za-z]+$/i, message: "Only letters" },
                  // pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="Last Name"
              />
              <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>

              <span className="msg">Valid Name</span>
            </ImputGroup>
            <ImputGroup>
              <label for="dbirth">Date of Birth</label>
              <input
                type="date"
                name="dbirth"
                id="dbirth"
                onChange={(e) =>
                  console.log(
                    "e: ",
                    e
                    // "target: ",
                    // e.target,
                    // "timeStamp: ",
                    // e.timeStamp
                  )
                }
              />
              <span className="msg">Incorrect date of birth</span>
            </ImputGroup>
            <ImputGroup>
              <label for="postCode">Post Code</label>
              <input
                {...register("postCode", {
                  required: "This is required",
                  minLength: { value: 5, message: "Minimum lenght is 5" },
                  maxLength: { value: 7, message: "Maximum lenght is 7" },
                  pattern: {
                    value: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
                    message: "This is not a correct Post Code",
                  },
                })}
                placeholder="Post Code"
              />
              <ErrorMessage>{errors?.postCode?.message}</ErrorMessage>
              <span className="msg">Incorrect post code</span>
            </ImputGroup>
            <Button type="submit">Login</Button>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
