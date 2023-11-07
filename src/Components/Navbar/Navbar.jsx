import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo-no-background.svg";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={"/"} className="navbar-item">
          <img className="logo" src={logo} width="150" height="250" alt="logo" />
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to={"/dashboard"} className="navbar-item">
            Home
          </Link>

          <Link to={"/sobre"} className="navbar-item">
            Sobre
          </Link>

          <Link to={"/chat"} className="navbar-item">
            Chat
          </Link>
          <Link to={"/ficha"} className="navbar-item">
            Ficha
          </Link>
        </div>

        {isLoggedIn ? (
          <div className="navbar-end">
            <Link to="/search" className="navbar-item">
              Busca
            </Link>
            <Link to="/filters" className="navbar-item">
              Filtros
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/profile" className="navbar-link">
                <img
                  src="profile.jpg"
                  alt="Profile"
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              </Link>
              <div className="navbar-dropdown is-right">
                <Link to="/profile" className="navbar-item">
                  Meu Perfil
                </Link>
                <Link to="/ficha" className="navbar-item">
                  Fichas
                </Link>
                <Link to="/chat" className="navbar-item">
                  Chat
                </Link>
                <button className="navbar-item" onClick={handleLogout}>
                  Sair
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={"/cadastro"} className="button is-info is-light">
                  <strong>Cadastrar</strong>
                </Link>
                <Link to={"/login"} className="button is-light">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
