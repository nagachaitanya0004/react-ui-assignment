import { useMemo } from "react";
import "./Account.css";

function Account() {
  const user = useMemo(() => {
    try {
      const data = localStorage.getItem("popxUser");
      if (!data) {
        return {
          name: "PopX User",
          email: "user@popx.com",
        };
      }

      const parsed = JSON.parse(data);
      return {
        name: parsed.name || "PopX User",
        email: parsed.email || "user@popx.com",
        company: parsed.company || "PopX",
        isAgency: parsed.isAgency || "no",
      };
    } catch (error) {
      console.warn("Failed to parse user data from localStorage:", error);
      return {
        name: "PopX User",
        email: "user@popx.com",
        company: "PopX",
        isAgency: "no",
      };
    }
  }, []);

  return (
    <section className="account">
      <div className="account__header">
        <h1 className="account__title">Account Settings</h1>
      </div>

      <div className="account__card">
        <div className="account__profile">
          <div className="account__avatar" aria-hidden="true">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="account__name">{user.name}</h2>
            <p className="account__email">{user.email}</p>
            <p className="account__company">{user.company}</p>
            <p className="account__agency">
              {user.isAgency === "yes" ? "Agency Account" : "Individual Account"}
            </p>
          </div>
        </div>
        <p className="account__description">
          Manage your profile information and preferences in one place.
        </p>
      </div>
    </section>
  );
}

export default Account;
