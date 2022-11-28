import React from "react";
import { ReactComponent as Logo } from "./drdoctor-company-logo.svg";
import {
  Container,
  LogoContainer,
  LoginContainer,
  Title,
  Form,
  ImputGroup,
  Button,
} from "./styles";

const Login = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title>Welcome</Title>
        <LoginContainer>
          <Form>
            <ImputGroup>
              <label for="lname">Last Name</label>
              <input type="text" name="lname" id="lname" />
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
                    e,
                    "target: ",
                    e.target,
                    "timeStamp: ",
                    e.timeStamp
                  )
                }
              />
              <span className="msg">Incorrect date of birth</span>
            </ImputGroup>
            <ImputGroup>
              <label for="pcode">Post Code</label>
              <input type="text" name="pcode" id="pcode" />
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
