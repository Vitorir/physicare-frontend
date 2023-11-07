import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarBulma from "../../Components/Sidebar/SidebarBulma";

function Dashboard() {
  const navigate = useNavigate();

  const appointments = [
    {
      id: 1,
      title: "Reunião de equipe",
      date: "2023-09-15",
      time: "09:00 AM",
    },
    {
      id: 2,
      title: "Consulta médica",
      date: "2023-09-16",
      time: "02:30 PM",
    },
    {
      id: 3,
      title: "Apresentação de projeto",
      date: "2023-09-17",
      time: "10:00 AM",
    },
  ];

  function voltar() {
    navigate(-1);
  }

  return (
    <div className="columns">
      <div className="column">
        <section className="section">
          {/* Cabeçalho */}
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className="title is-4">FOTO</p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button className="button is-info" onClick={voltar}>
                  Sair
                </button>
              </div>
            </div>
          </div>

          <div className="box">
            <h2 className="title is-5">Agendamentos</h2>
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <strong>{appointment.title}</strong>
                  <br />
                  Data: {appointment.date}
                  <br />
                  Hora: {appointment.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="box">
            <h2 className="title is-5">Atividades Recentes</h2>
            <ul>
              <li>Atividade 1</li>
              <li>Atividade 2</li>
              <li>Atividade 3</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
