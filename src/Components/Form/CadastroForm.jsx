import { useState } from "react";
import "./CadastroForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CadastroForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mensagem, setMensagem] = useState(""); // Para exibir mensagens de erro ou sucesso

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/public/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setMensagem("Login bem-sucedido!");
        // Você pode redirecionar o usuário para a página principal ou fazer outra ação aqui
      } else {
        // Se o servidor retornar um erro, capture a mensagem de erro
        const errorData = response.data; // Supondo que o servidor retorne a mensagem de erro no campo 'data'
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
        <div class="container">
          <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={cadastrar}>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Usuário"
                  name="emailname"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="textbox">
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="button" onClick={handleLogin}>
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
