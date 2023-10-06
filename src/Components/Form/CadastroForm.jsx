import { useState } from "react";
import "./CadastroForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/imagens/logo-no-background.svg";

function CadastroForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/public/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setMensagem("Login bem-sucedido!");

        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );

        setTimeout(() => {
          navigate("/dashboard");
        }, [2000]);
      } else {
        const errorData = response.data;
        setMensagem(`Erro ao fazer login: ${errorData}`);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMensagem("Erro ao fazer login. Tente novamente.");
    }
  };

  function cadastrar(e) {
    e.preventDefault();
    console.log(`Usuario: ${email} - Senha: ${password}`);
  }

  return (
    <>
      <div className="container_pai">
        <div className="container">
          <img className="logo" src={logo} height={"150px"} width={"200px"} />
          <div className="login-box">
            {/* <h2>Login</h2> */}
            <form onSubmit={cadastrar}>
              <div className="textbox">
                <input
                  type="text"
                  placeholder="Usuário"
                  name="emailname"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="textbox">
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn" type="button" onClick={handleLogin}>
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

export default CadastroForm;
