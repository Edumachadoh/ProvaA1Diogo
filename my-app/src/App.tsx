import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TarefaListar from './pages/TarefaListar';
import TarefaCadastrar from './pages/TarefaCadastrar';
import TarefaAlterar from './pages/TarefaAlterar';
import TarefaConcluida from './pages/TarefaConcluida';
import TarefaNaoConcluida from './pages/TarefaNaoConcluida';


function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">Cadastrar Tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/alterar">Alterar tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/concluida">Listar concluidas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/nao-concluida">Listar não concluidas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar/>}></Route>
          <Route path="/pages/tarefa/cadastrar" element={<TarefaCadastrar/>}></Route>
          <Route path="/pages/tarefa/alterar" element={<TarefaAlterar/>}></Route>
          <Route path="/pages/tarefa/concluida" element={<TarefaConcluida/>}></Route>
          <Route path="/pages/tarefa/nao-concluida" element={<TarefaNaoConcluida/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;