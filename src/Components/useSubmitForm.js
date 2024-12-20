import { useState } from "react";
import axios from "axios";

function useSubmitForm(url, initialFormData = {}) {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (onSuccess) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, formData);
      const newUser = response.data;
      setUserData((prev) => [...prev, newUser]);
      setFormData(initialFormData);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error saving purchase:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    userData,
    formData,
    isLoading,
    error,
    setFormData,
    handleSubmit,
  };
}

export default useSubmitForm;
