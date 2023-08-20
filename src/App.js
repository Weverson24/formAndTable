import React from 'react';
import grupo from './grupo.json';

import Form from './componentes/Form';
import Arquivo from './componentes/Arquivo';
import { useState } from 'react';

import './App.css';

export default function App() {
  //MINHA CONSTANTE DOS INPUTS NOME IDADE E ENDERENÇO
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');

  //MINHA CONSTANTE COM OS DADOS DO JSON
  const [grupos, setGrupos] = useState(grupo);

  const novaLista = (e) => {
    e.preventDefault();

    const lista = {
      nome,
      idade,
      endereco,
    };

    setGrupos([...grupos, lista]);
  };

  return (
    <div className="App">
      <h1>Arquivos de pessoas</h1>
      <Form
        novaLista={novaLista}
        setNome={setNome}
        setIdade={setIdade}
        setEndereco={setEndereco}
      />
      <Arquivo className="tabela" grupos={grupos} />
    </div>
  );
}
