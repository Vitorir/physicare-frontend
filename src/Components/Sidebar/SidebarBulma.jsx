import React from 'react';
import { Link } from 'react-router-dom';

const SidebarBulma = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Geral</p>
      <ul className="menu-list">
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"chat"}>Chat</Link>
        </li>
        <li>
          <Link to={"ficha"}>Fichas</Link>
        </li>
      </ul>
      <p className="menu-label">Sair</p>
      <ul className="menu-list">
        <li>
          <Link>Sair</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarBulma;
