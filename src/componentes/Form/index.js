import React from 'react';

const Form = ({ novaLista, setEndereco, setIdade, setNome }) => {
  return (
    <form className="form" onSubmit={novaLista}>
      <label>
        <span>Nome:</span>
        <input
          type="text"
          required
          placeholder="Coloque o seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        <span>idade:</span>
        <input
          required
          type="number"
          placeholder="Coloque o sua idade"
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <label>
        <span>Endereço:</span>
        <input
          required
          type="text"
          placeholder="Coloque o seu endereço"
          onChange={(e) => setEndereco(e.target.value)}
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Form;
