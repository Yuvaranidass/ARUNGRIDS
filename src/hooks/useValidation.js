import { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "../services/ValidationService";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          error = "Invalid email address";
        }
        break;
      case "password":
        if (!validatePassword(value)) {
          error =
            "Password must be at least 8 characters long and contain letters and numbers";
        }
        break;
      case "number":
        if (!validatePhone(value)) {
          error = "Invalid phone number";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return {
    errors,
    validate,
  };
};

export default useValidation;
