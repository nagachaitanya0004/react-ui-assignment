import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Radio from "../components/Radio";
import "./Register.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isNameValid = formData.name.trim().length > 0;
  const isPhoneValid = formData.phone.trim().length > 0;
  const isEmailValid = emailRegex.test(formData.email.trim());
  const isPasswordValid = formData.password.trim().length > 0;
  const isCompanyValid = formData.company.trim().length > 0;

  const isFormValid =
    isNameValid &&
    isPhoneValid &&
    isEmailValid &&
    isPasswordValid &&
    isCompanyValid;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!isFormValid) {
      return;
    }
    localStorage.setItem("popxUser", JSON.stringify(formData));
    localStorage.setItem(
      "popxSession",
      JSON.stringify({ email: formData.email.trim(), isLoggedIn: true })
    );
    navigate("/account");
  };

  const agencyOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <section className="register-page">
      <div className="register-page__header">
        <h1 className="register-page__title">Create your PopX account</h1>
        <p className="register-page__subtitle">
          Join PopX and start managing your profile efficiently.
        </p>
      </div>

      <form onSubmit={handleRegister} className="register-page__form" noValidate>
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          error={isSubmitted && !isNameValid ? "Full name is required." : ""}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          error={isSubmitted && !isPhoneValid ? "Phone number is required." : ""}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={isSubmitted && !isEmailValid ? "Enter a valid email address." : ""}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          error={isSubmitted && !isPasswordValid ? "Password is required." : ""}
          required
        />
        <Input
          label="Company Name"
          name="company"
          placeholder="Enter your company name"
          value={formData.company}
          onChange={handleChange}
          error={isSubmitted && !isCompanyValid ? "Company name is required." : ""}
          required
        />

        <div className="register-page__radio">
          <Radio
            label="Are you an Agency?"
            name="isAgency"
            value={formData.isAgency}
            onChange={handleChange}
            options={agencyOptions}
          />
        </div>

        <Button text="Create Account" type="submit" disabled={!isFormValid} />
      </form>
    </section>
  );
}

export default Register;
