import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  Title,
  FormContainer,
  LoginForm,
  FormGroup,
  Input,
  TextArea,
  FormDetail,
  Detail,
  LogoWebsite,
  LogoMobile,
  LogoPhone,
  LogoLocation,
  LogoEmail,
  Text,
  Label,
  MainDetail,
} from "./ContactPage.elements";

const ContactPage = ({
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
        <Title>Contact</Title>
        <FormContainer>
          <LoginForm>
            <FormGroup>
              <Input
                type={usernametype}
                name={username}
                placeholder={usernameplaceholder}
              />
              <Input
                type={usernametype}
                name={username}
                placeholder={usernameplaceholder}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type={passwordtype}
                name={passwordname}
                placeholder={passwordplaceholder}
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                type={passwordtype}
                name={passwordname}
                placeholder={passwordplaceholder}
              />
            </FormGroup>
            <FormGroup>
              <Button>Send</Button>
            </FormGroup>
          </LoginForm>
        
          <FormDetail>
          <Detail>
          <Label>
            <LogoLocation />
            <Text>Country/City</Text>
          </Label>
          <MainDetail>Azerbaijan/Baku</MainDetail>
          </Detail>
          <Detail>
          <Label>
            <LogoPhone />
            <Text>Phone number</Text>
          </Label>
          <MainDetail>+994775061538</MainDetail>
          </Detail>
          <Detail>
          <Label>
            <LogoMobile />
            <Text>Home number</Text>
          </Label>
          <MainDetail>xxxxxxxxxx</MainDetail>
          </Detail>
          <Detail>
          <Label>
            <LogoEmail />
            <Text>Email</Text>
          </Label>
          <MainDetail>ferideyvazov25@gmail.com</MainDetail>
          </Detail>
          <Detail>
          <Label>
            <LogoWebsite />
            <Text>Website</Text>
          </Label>
          <MainDetail>ferideyvazov.herokuapp.com</MainDetail>
          </Detail>
          </FormDetail>
        </FormContainer>

        
      
      </Container>
    </>
  );
};

export default ContactPage;
