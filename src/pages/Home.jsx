import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">Welcome to PopX</h1>
        <p className="home__subtitle">
        Create your account and manage your profile seamlessly with a modern and secure experience.
        </p>
      </div>

      <div className="home__actions">
        <Button text="Create Account" variant="primary" onClick={() => navigate("/register")} />
        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </section>
  );
}

export default Home;
