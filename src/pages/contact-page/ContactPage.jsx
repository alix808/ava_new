import React from 'react';
import ContactForm from '../../comps/contact-form/ContactForm';
import { Container, FlexContainer, FlexItem, Img } from './contactPageStyles';
import img from '../../assets/Img_Contact.png';

const ContactPage = () => {
  return (
    <Container>
      <FlexContainer>
        <FlexItem>
          <ContactForm />
        </FlexItem>
        <FlexItem>
          <Img background={img}></Img>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

export default ContactPage;
