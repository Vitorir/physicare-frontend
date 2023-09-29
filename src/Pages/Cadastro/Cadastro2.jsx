import React, { useState } from "react";
import axios from "axios";
import "./Cadastro.css";

function Cadastro2() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(""); // Para exibir mensagens de erro ou sucesso

  const handleCadastro = async () => {
    try {
      const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:3000"; // Use uma variável de ambiente ou valor padrão
      const response = await axios.post(`${serverUrl}/users`, {
        nome,
        email,
        senha,
      });

      if (response.status === 201) {
        setMensagem("Cadastro bem-sucedido!");
        // Você pode redirecionar o usuário para a página de login ou fazer outra ação aqui
      } else {
        setMensagem("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <h2>Cadastro do Profissional</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
        {mensagem && <p>{mensagem}</p>}
      </form>
    </div>
  );
}

export default Cadastro2;
