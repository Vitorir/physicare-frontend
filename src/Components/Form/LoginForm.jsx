import { useState } from "react";
import "./CadastroForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/imagens/logo-no-background.svg";

// importacoes firebase
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

function LoginForm() {
  const auth = getAuth();
  const navigate = useNavigate();

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
    // console.log(data);
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
