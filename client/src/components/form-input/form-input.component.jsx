import React from "react";

import { Group, FormInputContainer, FormInputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <Group>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </Group>
);

export default FormInput;
