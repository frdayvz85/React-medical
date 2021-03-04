import React from 'react';
import { LoginPage } from '../../components';
import { homeObjOne } from './Data';

function Login() {
  return (
    <>
      <LoginPage {...homeObjOne} />
    </>
  );
}

export default Login;