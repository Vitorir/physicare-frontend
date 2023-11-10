import { useState } from 'react';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  const actionCodeSettings = {
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // O link foi enviado com sucesso. Informe o usuário.
        // Salve o e-mail localmente para não precisar solicitar ao usuário novamente se ele abrir o link no mesmo dispositivo.
        window.localStorage.setItem('emailForSignIn', email);
        setInfoMsg('Enviamos um link de autenticação para o seu e-mail.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {infoMsg && <p>{infoMsg}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar link de autenticação</button>
      </form>
    </div>
  );
};

export default Login2;
