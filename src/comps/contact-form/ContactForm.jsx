import React, { useState } from 'react';
import {
  Container,
  Form,
  TextAreaLabel,
  Full,
  TextArea,
  CheckBox
} from './contactFormStyles';
import FormInput from '../form-input/FormInput';
import { Button } from '../custom-btn/customBtnStyles';

const ContactForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const { name, email, phone, company, message } = user;

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = () => {
    console.log('on submit');
  };
  return (
    <Container>
      <Form>
        <FormInput
          name='name'
          type='name'
          value={name}
          handleChange={handleChange}
          label='Full name'
          required
        />

        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email address'
          required
        />

        <FormInput
          name='phone'
          type='phone'
          handleChange={handleChange}
          value={phone}
          label='Phone'
        />

        <FormInput
          name='company'
          type='company'
          handleChange={handleChange}
          value={company}
          label='Company name'
        />

        <Full>
          <TextAreaLabel>Message</TextAreaLabel>
          <TextArea
            name='message'
            rows='5'
            value={message}
            onChange={handleChange}
          ></TextArea>
        </Full>
        <CheckBox type='checkbox'></CheckBox>
        <Full>
          <Button onClick={onSubmit} style={{ width: '100%' }}>
            Submit
          </Button>
        </Full>
      </Form>
    </Container>
  );
};

export default ContactForm;
