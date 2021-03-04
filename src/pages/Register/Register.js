import React from 'react';
import { RegisterPage } from '../../components';
import { homeObjOne} from './Data';

function Register() {
  return (
    <>
      <RegisterPage {...homeObjOne} />
    </>
  );
}

export default Register;