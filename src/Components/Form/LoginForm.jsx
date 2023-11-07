import { useEffect, useState } from "react";
import "./CadastroForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/imagens/logo-no-background.svg";
import { auth } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';


// importacoes firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const user = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mensagem, setMensagem] = useState("");


  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [infoMsg, setInfoMsg] = useState('');

  const [initialLoading, setInitialLoading] = useState(false);
  const [initialError, setInitialError] = useState('');

  useEffect(() => {
    
      // user is not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem('email');
        if (!email) {
          email = window.prompt('Please provide your email');
        }
        // after that we will complete the login process
        setInitialLoading(true);
        signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
          .then((result) => {
            // we can get the user from result.user but no need in this case
            console.log(result.user);
            localStorage.removeItem('email');
            setInitialLoading(false);
            setInitialError('');
            navigate('/');
          }).catch((err) => {
            setInitialLoading(false);
            setInitialError(err.message);
            navigate('/login');
          })
      }
      else {
        console.log('enter email and sign in');
      }
  }, [user, navigate]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`http://localhost:3000/public/login`, {
  //       email,
  //       password,
  //     });

  // if (response.status === 200) {
  //   setMensagem("Login bem-sucedido!");

  //   sessionStorage.setItem(
  //     "accessToken",
  //     JSON.stringify(response.data.accessToken)
  //   );

  //   setTimeout(() => {
  //     navigate("/dashboard");
  //   }, 2000);
  //     } else {
  //       const errorData = response.data;
  //       setMensagem(`Erro ao fazer login: ${errorData}`);
  //     }
  //   } catch (error) {
  //     console.error("Erro ao fazer login:", error);
  //     setMensagem("Erro ao fazer login. Tente novamente.");
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        if (response) {
          setMensagem("Login bem-sucedido!");
  
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  
    // Defina a variável de email a partir do estado local
    const email = data.email;
  
    sendSignInLinkToEmail(auth, email, {
      // Esta é a URL para a qual redirecionaremos após clicar no link no email.
      url: 'http://localhost:5173/login',
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem('email', email);
        setLoginLoading(false);
        setLoginError('');
        setInfoMsg('Enviamos um email com um link para fazer login');
      })
      .catch(err => {
        setLoginLoading(false);
        setLoginError(err.message);
      });
  };
  
  return (
    <>
      <div className="container_pai">
        <div className="container">
          <img className="logo" src={logo} height={"150px"} width={"200px"} />
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Usuário"
                  name="email"
                  required
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="textbox">
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  required
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <button className="btn" type="submit">
                Entrar
              </button>
              {mensagem && <p>{mensagem}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
