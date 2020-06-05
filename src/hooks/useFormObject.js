import { useState, useRef } from "react";

const useFormObject = () => {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const validateForm = () => {
    let retval = true;
    if (!formRef.current.checkValidity()) {
      retval = false;
    }

    setValidated(true);
    return retval;
  };

  const resetForm = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleFormSubmit = onSubmit => {
    if (validateForm()) {
      if (onSubmit) {
        onSubmit();
      }
      resetForm();
    }
  };

  return [formRef, validated, handleFormSubmit];
};

export default useFormObject;
