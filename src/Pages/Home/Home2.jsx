import "./Home.css";
import gif from "../../assets/imagens/beam-online-medical-consultation.gif"; // Substitua 'seu_gif.gif' pelo caminho correto do seu arquivo GIF
import qualificados from "../../assets/imagens/bloom-doctors-appointment.png"; // Substitua 'qualificados.png' pelo caminho correto da imagem
import objetivos from "../../assets/imagens/sammy-line-man-with-a-smartwatch-is-running.png"; // Substitua 'objetivos.png' pelo caminho correto da imagem
import flexibilidade from "../../assets/imagens/outline-health-app.png"; // Substitua 'flexibilidade.png' pelo caminho correto da imagem
import { Link } from "react-router-dom";

function Home2() {
  return (
    <>
      <main>
        <aside>
          <h2>Transformando saúde</h2>
          <h3>em união</h3>
          <p>
            Conectamos você aos melhores profissionais de educação física,
            tornando o seu bem-estar uma prioridade. Comece hoje a sua jornada
            para uma vida mais saudável e ativa
          </p>
          <Link to={"/cadastro"}><button>acessar minha conta</button></Link>
        </aside>
        <article>
          <img src={gif} alt="GIF Animado" />
        </article>
      </main>

      <div className="benefits-section" id="benefits">
        <h2>Benefícios do Nosso App</h2>
        <div className="benefits-list">
          <div className="benefit">
            <img src={qualificados} alt="Benefício 1" />
            <h3>Encontre Profissionais Qualificados</h3>
            <p>
              Nosso app conecta você a educadores físicos qualificados e
              certificados, prontos para ajudar.
            </p>
          </div>
          <div className="benefit">
            <img src={objetivos} alt="Benefício 2" />
            <h3>Alcance Seus Objetivos de Fitness</h3>
            <p>
              Trabalhe com um profissional que vai personalizar seu treinamento
              para atingir suas metas.
            </p>
          </div>
          <div className="benefit">
            <img src={flexibilidade} alt="Benefício 3" />
            <h3>Conveniência e Flexibilidade</h3>
            <p>
              Agende sessões de treinamento de acordo com sua agenda e
              preferência.
            </p>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="cadastro_profissionais.html" className="cta-button">
            Quero Ser um Profissional
          </a>
          <a href="link_para_appstore" className="cta-button">
            Baixe Agora
          </a>
        </div>
      </div>
    </>
  );
}

export default Home2;
