import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo.jpeg"

function Navbar() {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link to={"/"} class="navbar-item" >
            <img 
              className="logo"
              src={logo}
              width="75"
              height="150"
            />
          </Link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to={"/"} class="navbar-item">
              Home
            </Link>

            <Link to={"/contato"} class="navbar-item">
            Sobre
            </Link>

            <Link to={"/contato"} class="navbar-item">
            Contato
            </Link>

            {/* <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Mais</a>

              <div class="navbar-dropdown">
                <Link to={"/contato"} class="navbar-item">
                  Contato
                </Link>
                <a class="navbar-item">Sobre</a>
              </div>
            </div> */}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to={"/cadastro"} class="button is-info is-light">
                  <strong>Cadastrar</strong>
                </Link>
                <Link to={"/login"} class="button is-light">
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
