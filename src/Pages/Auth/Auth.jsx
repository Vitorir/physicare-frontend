import '../Auth/Auth.css'

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { sendSignInLinkToEmail } from "firebase/auth";

export const Auth = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:5173/login",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("email", email);
        setLoginLoading(false);
        setLoginError("");
        setInfoMsg("Nós mandamos um email com um link de login! ");
      })
      .catch((err) => {
        setLoginLoading(false);
        setLoginError(err.message);
      });
  };

  return (
    <div className="box-father">
      <div className="box">
        <form className="form-group custom-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type={"email"}
            required
            placeholder="Digite seu email: "
            className="form-control"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-success btn-md">
            {loginLoading ? <span>Logando...</span> : <span>Login</span>}
          </button>
          {loginError !== "" && <div className="error-msg">{loginError}</div>}
          {infoMsg !== "" && <div className="info-msg">{infoMsg}</div>}
        </form>
      </div>
    </div>
  );
};
