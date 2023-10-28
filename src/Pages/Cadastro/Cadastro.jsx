import axios from "axios";
import "./Cadastro.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/logo-no-background.svg";

function Cadastro() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [sobrename, setSobrename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cref, setCref] = useState("");
  const [isCrefValid, setIsCrefValid] = useState(false)
  // const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  // const [cep, setCep] = useState("");

  // preencher endereco automaticamente
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
      // formData.forEach(function (value, key) {
      //   console.log(key + ": " + value);
      // });
    });
  }, []);

  // validar CRM | CREF | CRN
  async function buscarCRM() {
    const chave = 4835595981;
    // const crm = 20344;
    const url2 = `https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=MG&q=20344&chave=4835595981&destino=json`;
    const url = `https://www.consultacrm.com.br/api/index.php?tipo=crm&uf${estado}=&q=${cref}&chave=${chave}&destino=json`;

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        if (data.status === "true") {
          console.log("URL:", data.url);
          console.log("Total:", data.total);

          if (data.total > 0) {
            console.log("Parabéns! O CREF é válido!");
            setIsCrefValid(true)
          }
          
        } else {
          console.error(
            "A resposta retornou falso. Mensagem de erro:",
            data.mensagem
          );
        }
      } else {
        console.error(`Erro ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  }

  // cadastrar no sessionstorage
  // useEffect(() => {
  //   const userData = {
  //     name,
  //     email,
  //     password,
  //   };
  // }, [name, email, password]);

  const handleCadastro = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post(
        "http://localhost:3000/public/register",
        {
          name,
          email,
          password,
        }
      );

      console.log("Cadastro bem-sucedido:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <>
      <div className="container_pai">
        <div className="container">
          <img className="logo" src={logo} height={"150px"} width={"200px"} />
          {/* <h2>Cadastro do Profissional</h2> */}
          <form
            id="cadastroForm"
            encType="multipart/form-data"
            onSubmit={(e) => console.log(e.target.value)}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Sobrenome"
                id="sobrename"
                name="sobrename"
                value={sobrename}
                onChange={(e) => setSobrename(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Senha"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-button">
                  Informações Adicionais
                </button>
                <div className="accordion-content">
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" onChange={(e) => setEstado(e.target.value)} />
                  </div>  
                  <div className="form-group">
                    <label htmlFor="pais">País:</label>
                    <input type="text" id="pais" name="pais" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sexo">Sexo:</label>
                    <select id="sexo" name="sexo">
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cep">CEP:</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      // onChange={preencherCEP}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tempoProfissao">
                      Tempo de Profissão (anos):
                    </label>
                    <input
                      type="number"
                      id="tempoProfissao"
                      name="tempoProfissao"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="documento">Documentos (RG, Diploma):</label>
                    <input
                      type="file"
                      id="documento"
                      name="documento"
                      accept=".pdf, .jpg, .png"
                      multiple
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cref">CREF:</label>
                    <input
                      type="number"
                      id="cref"
                      name="cref"
                      onChange={(e) => setCref(e.target.value)}
                    />
                  </div>
                  <button className="btn" type="submit" onClick={buscarCRM}>
                    Buscar CREF
                  </button>
                  <p>{isCrefValid && "O CREF é válido!"}</p>
                </div>
              </div>
            </div>
            <button className="btn" type="submit" onClick={handleCadastro}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
