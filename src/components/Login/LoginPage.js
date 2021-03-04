import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  Title,
  FormContainer,
  LoginForm,
  FormGroup,
  Input,
  LinkContainer,
} from "./LoginPage.elements";

const LoginPage = ({
  username,
  usernameplaceholder,
  passwordname,
  passwordplaceholder,
  usernametype,
  passwordtype,

}) => {
  return (
    <>
      <Container>
        <Title>Login</Title>
        <FormContainer>
          <LoginForm>
            <FormGroup>
              <Input type={usernametype} name={username} placeholder={usernameplaceholder} />
            </FormGroup>
            <FormGroup>
              <Input type={passwordtype} name={passwordname} placeholder={passwordplaceholder} />
            </FormGroup>
              <LinkContainer>
              <Link to="/reset-password">Forgot password?</Link>
              <Link to="/register">Haven't yet an Account?</Link>
              </LinkContainer>
            <FormGroup>
            <Button>Login</Button>
            </FormGroup>
          </LoginForm>
        </FormContainer>
      </Container>
    </>
  );
};

export default LoginPage;
