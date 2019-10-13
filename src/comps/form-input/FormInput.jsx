import React from 'react';

import { FormInputContainer, FormInputLabel } from './formInputStyles';

const FormInput = ({ handleChange, label, ...props }) => (
  <p>
    <FormInputLabel className={props.value.length ? 'shrink' : ''}>
      {label}
    </FormInputLabel>
    <FormInputContainer onChange={handleChange} {...props} />
  </p>
);

export default FormInput;
