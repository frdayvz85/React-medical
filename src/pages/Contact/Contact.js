import React from 'react';
import { ContactPage } from '../../components';
import { homeObjOne } from './Data';

function Contact() {
  return (
    <>
      <ContactPage {...homeObjOne} />
    </>
  );
}

export default Contact;