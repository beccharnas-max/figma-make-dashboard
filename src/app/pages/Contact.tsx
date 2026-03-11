const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      setIsSuccess(true);
      setFormState({
        name: "",
        business: "",
        email: "",
        service: "strategy",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }

  setIsSubmitting(false);
};