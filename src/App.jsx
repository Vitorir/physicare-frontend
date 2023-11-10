import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Page404 from "./Pages/Page404/Page404";
import Home2 from "./Pages/Home/Home2";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Sobre from "./Pages/Sobre/Sobre";
import Ficha from "./Pages/Ficha/Ficha";
import Chat from "./Pages/Chat/Chat";
import SidebarBulma from "./Components/Sidebar/SidebarBulma";
import { useState } from "react";

// Importacoes do Firebase
import { app, database } from './config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Auth } from "./Pages/Auth/Auth";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home2 />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route
              path="/dashboard/*"
              element={
                <div className="columns">
                  <div className="column is-one-fifth">
                    {/* <SidebarBulma /> */}
                  </div>  
                  <div className="column">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/ficha" element={<Ficha />} />
                      <Route path="/chat" element={<Chat />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
