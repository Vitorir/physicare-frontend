import axios from "axios";
import "./Cadastro.css";
import { useEffect, useState } from "react";

function Cadastro() {
  const [name, setname] = useState("");
  const [sobrename, setSobrename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [cidade, setCidade] = useState("");
  // const [estado, setEstado] = useState("");
  // const [cep, setCep] = useState("");

  

  // // preencher endereco automaticamente
  // async function preencherCEP(evento) {
  //   evento.preventDefault();

  //   let validacao = /^[0-9]{8}$/;
  //   if (!validacao.test(cep)) {
  //     throw "CEP Inválido!!";
  //   }
  //   let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  //   console.log(resposta);

  //   let dados = await resposta.json();
  //   console.log(dados);
  //   preencher(dados);
  // }

  // function preencher(dados) {
  //   setCidade(dados.localidade);
  //   setEstado(dados.estado);
  // }

  // useEffect(() => {
  //   preencherCEP();
  // }, []);

  useEffect(() => {
    const form = document.getElementById("cadastroForm");
    const accordionButton = document.querySelector(".accordion-button");
    const accordionContent = document.querySelector(".accordion-content");

    accordionButton.addEventListener("click", function () {
      if (accordionContent.style.display === "none") {
        accordionContent.style.display = "block";
      } else {
        accordionContent.style.display = "none";
      }
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);

      // Aqui você pode usar a variável "formData" para enviar os dados para o servidor,
      // incluindo os documentos que foram selecionados.

      // Exemplo de exibição dos dados no console:
      formData.forEach(function (value, key) {
        console.log(key + ": " + value);
      });
    });
  }, []);

  // // validar CRM | CREF | CRN
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


  

  // cadastrar no sessionstorage
  useEffect(() => {
    // Define um objeto com os dados de usuário e password
    const userData = {
      name,
      email,
      password
    };
  
    // Armazena os dados na sessionStorage como JSON
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }, [name, email, password]);

  const handleCadastro = async () => {
    try {
      // Simulando uma requisição POST para cadastrar o usuário
      const response = await axios.post("http://localhost:3000/public/register", {
        name,
        email,
        password,
      });

      console.log("Cadastro bem-sucedido:", response.data);
      // Você pode redirecionar o usuário para a página de login ou fazer outra ação aqui
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };
  

  return (
    <>
      <div className="container_pai">
        <div className="container">
          <h2>Cadastro do Profissional</h2>
          <form
            id="cadastroForm"
            enctype="multipart/form-data"
            onSubmit={(e) => console.log(e.target.value)}
          >
            <div className="form-group">
              <label for="name">name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="sobrename">Sobrename:</label>
              <input
                type="text"
                id="sobrename"
                name="sobrename"
                value={sobrename}
                onChange={(e) => setSobrename(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="email">E-mail:</label>
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
              <label for="password">password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-button">Informações Adicionais</button>
                <div className="accordion-content">
                  <div className="form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" />
                  </div>
                  <div className="form-group">
                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" />
                  </div>
                  <div className="form-group">
                    <label for="pais">País:</label>
                    <input type="text" id="pais" name="pais" />
                  </div>
                  <div className="form-group">
                    <label for="sexo">Sexo:</label>
                    <select id="sexo" name="sexo">
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="cep">CEP:</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      // onChange={preencherCEP}
                    />
                  </div>
                  <div className="form-group">
                    <label for="tempoProfissao">
                      Tempo de Profissão (anos):
                    </label>
                    <input
                      type="number"
                      id="tempoProfissao"
                      name="tempoProfissao"
                    />
                  </div>
                  <div className="form-group">
                    <label for="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" />
                  </div>
                  <div className="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" />
                  </div>
                  <div className="form-group">
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
            <button type="submit" onClick={handleCadastro}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
