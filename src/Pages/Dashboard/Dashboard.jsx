import React from "react";
import "./Dashboard.css"; // Importe o arquivo de estilo CSS

import profileImage from "./profileimage.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="section-container">
        <section className="profile-section">
          <div className="profile-section-content">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="profile"
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Nome do Profissional</h1>
              <p>Profissão: Desenvolvedor Web</p>
              <p>Localização: Cidade, País</p>
              <p>Email: exemplo@dominio.com</p>
              <p>CREF: 20344</p>
            </div>
          </div>
        </section>
      </div>

      <div className="section-container">
        <section className="clients-section">
          <table className="clients-table">
            <thead>
              <tr>
                <th>Nome do Cliente</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano de tal</td>
                <td>88 987456123</td>
                <td>fulanodetal@gmail.com</td>
                <td>
                  <button className="action-button primary-button">Solicitação</button>
                  <button className="action-button info-button">Chat</button>
                  <button className="action-button success-button">Enviar Ficha</button>
                </td>
              </tr>
              <tr>
                <td>Beltrano da Silva</td>
                <td>85 987123456</td>
                <td>beltranodasilva@gmail.com</td>
                <td>
                  <button className="action-button primary-button">Solicitação</button>
                  <button className="action-button info-button">Chat</button>
                  <button className="action-button success-button">Enviar Ficha</button>
                </td>
              </tr>
              <tr>
                <td>São José das Quantas</td>
                <td>85 987789456</td>
                <td>saojosedasquantas@gmail.com</td>
                <td>
                  <button className="action-button primary-button">Solicitação</button>
                  <button className="action-button info-button">Chat</button>
                  <button className="action-button success-button">Enviar Ficha</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
