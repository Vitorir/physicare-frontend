import { useState } from "react";
import "./CadastroForm.css";

function CadastroForm() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function cadastrar(e) {
    e.preventDefault();
    console.log(`Usuario: ${user} - Senha: ${password}`);
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
                  name="username"
                  required
                  onChange={(e) => setUser(e.target.value)}
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
              <input type="submit" class="btn" value="Entrar" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroForm;
