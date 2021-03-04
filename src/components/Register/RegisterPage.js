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
} from "./RegisterPage.elements";

const RegisterPage = ({
  username,
  usernameplaceholder,
  usernametype,
  passwordplaceholder,
  passwordname,
  passwordtype,
  emailplaceholder,
  emailtype,
  emailname,
  passwordplaceholderagain,

}) => {
  return (
    <>
      <Container>
        <Title>Register</Title>
        <FormContainer>
          <LoginForm>
            <FormGroup>
              <Input type={usernametype} name={username} placeholder={usernameplaceholder} />
            </FormGroup>
            <FormGroup>
              <Input type={emailtype} name={emailname} placeholder={emailplaceholder} />
            </FormGroup>
            <FormGroup>
              <Input type={passwordtype} name={passwordname} placeholder={passwordplaceholder} />
            </FormGroup>
            <FormGroup>
              <Input type={passwordtype} name={passwordname} placeholder={passwordplaceholderagain} />
            </FormGroup>
              <LinkContainer>
              <Link to="/reset-password">Forgot password?</Link>
              <Link to="/login">Have an Account?</Link>
              </LinkContainer>
            <FormGroup>
            <Button>Register</Button>
            </FormGroup>
          </LoginForm>
        </FormContainer>
      </Container>
    </>
  );
};

export default RegisterPage;
