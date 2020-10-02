import { useState } from "react";
// write your custom hook here to control your checkout form

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, showSuccessMessage, handleSubmit, handleChanges];
};

export default useForm;
