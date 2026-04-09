import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Login.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isEmailValid = emailRegex.test(email.trim());
  const isPasswordValid = password.trim().length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!isFormValid) {
      return;
    }

    localStorage.setItem(
      "popxUser",
      JSON.stringify({
        name: "PopX User",
        email: email.trim(),
        company: "PopX",
        isAgency: "no",
      })
    );
    localStorage.setItem(
      "popxSession",
      JSON.stringify({
        email: email.trim(),
        isLoggedIn: true,
      })
    );
    navigate("/account");
  };

  return (
    <section className="auth-page">
      <div className="auth-page__header">
        <h1 className="auth-page__title">Sign in to your PopX account</h1>
        <p className="auth-page__subtitle">
          Access your account securely and continue your journey.
        </p>
      </div>

      <form className="auth-page__form" onSubmit={handleLogin} noValidate>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={isSubmitted && !isEmailValid ? "Enter a valid email address." : ""}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={isSubmitted && !isPasswordValid ? "Password is required." : ""}
          required
        />
        <Button text="Login" type="submit" disabled={!isFormValid} />
      </form>
    </section>
  );
}

export default Login;
