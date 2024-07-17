// useForm.js
import { useState, useEffect } from "react";

const validationRules = {
  name: { required: true },
  email: { required: true, pattern: /\S+@\S+\.\S+/ },
};

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = (name, value) => {
    const rule = validationRules[name];
    let error = "";

    if (rule.required && !value) {
      error = `${name} is required`;
    } else if (rule.pattern && !rule.pattern.test(value)) {
      error = `Invalid ${name}`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
    validate(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    Object.keys(values).forEach((key) => {
      validate(key, values[key]);
      if (errors[key]) valid = false;
    });

    setErrors(newErrors);
    setIsValid(valid);
  };

  useEffect(() => {
    validateForm();
  }, [values]);

  const handleSubmit = (callback) => {
    if (isValid) {
      callback(values);
      setValues(initialValues); // Reset form
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
  };
};

export default useForm;
