import "./Cadastro.css";
import { useEffect, useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  // preencher endereco automaticamente
  async function preencherCEP(evento) {
    evento.preventDefault();

    let validacao = /^[0-9]{8}$/;
    if (!validacao.test(cep)) {
      throw "CEP Inválido!!";
    }
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(resposta);

    let dados = await resposta.json();
    console.log(dados);
    preencher(dados);
  }

  function preencher(dados) {
    setCidade(dados.localidade);
    setEstado(dados.estado);
  }

  useEffect(() => {
    preencherCEP();
  }, []);

  // validar CRM | CREF | CRN
  async function buscarCRM() {
    const chave = 4835595981;
    const crm = 20344;
    const url = `https://www.consultacrm.com.br/api/index.php?tipo=TIPO&q=${crm}&chave=${chave}&destino=xml`;

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          console.error(`Erro ${response.status}: ${response.statusText}`);
          return Promise.reject("Erro na requisição");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
      });
  }

  return (
    <>
      <div className="container_pai">
        <div class="container">
          <h2>Cadastro de Educador Físico</h2>
          <form
            id="cadastroForm"
            enctype="multipart/form-data"
            onSubmit={(e) => console.log(e.target.value)}
          >
            <div class="form-group">
              <label for="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="sobrenome">Sobrenome:</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.sobrenome)}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.email)}
                required
              />
            </div>
            <div class="form-group">
              <label for="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.senha)}
                required
              />
            </div>
            <div class="accordion">
              <div class="accordion-item">
                <button class="accordion-button">Informações Adicionais</button>
                <div class="accordion-content">
                  <div class="form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" />
                  </div>
                  <div class="form-group">
                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" />
                  </div>
                  <div class="form-group">
                    <label for="pais">País:</label>
                    <input type="text" id="pais" name="pais" />
                  </div>
                  <div class="form-group">
                    <label for="sexo">Sexo:</label>
                    <select id="sexo" name="sexo">
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="cep">CEP:</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      onMouseOver={preencherCEP}
                    />
                  </div>
                  <div class="form-group">
                    <label for="tempoProfissao">
                      Tempo de Profissão (anos):
                    </label>
                    <input
                      type="number"
                      id="tempoProfissao"
                      name="tempoProfissao"
                    />
                  </div>
                  <div class="form-group">
                    <label for="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" />
                  </div>
                  <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" />
                  </div>
                  <div class="form-group">
                    <label for="documento">Documentos (RG, Diploma):</label>
                    <input
                      type="file"
                      id="documento"
                      name="documento"
                      accept=".pdf, .jpg, .png"
                      multiple
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" onClick={buscarCRM}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
