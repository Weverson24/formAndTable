import React from 'react';

export default function Arquivo({ grupos }) {
  return (
    <table frame="hsides" className="tabela">
      <thead>
        <tr>
          <th width="25%">Nome</th>
          <th width="20%">Idade</th>
          <th width="50%">Endereço</th>
        </tr>
      </thead>
      <tbody>
        {grupos.map((pessoa) => {
          return (
            <tr>
              <td>{pessoa.nome}</td>
              <td>{pessoa.idade}</td>
              <td>{pessoa.endereco}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
