import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo-no-background.svg"

function Navbar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={"/"} className="navbar-item" >
            <img 
              className="logo"
              src={logo}
              width="150"
              height="250"
            />
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
            <Link to={"/"} className="navbar-item">
              Home
            </Link>

            <Link to={"/Sobre"} className="navbar-item">
            Sobre
            </Link>

            <Link to={"/contato"} className="navbar-item">
            Contato
            </Link>

            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Mais</a>

              <div className="navbar-dropdown">
                <Link to={"/contato"} className="navbar-item">
                  Contato
                </Link>
                <a className="navbar-item">Sobre</a>
              </div>
            </div> */}
          </div>

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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
