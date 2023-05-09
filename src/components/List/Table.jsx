import { useState, useEffect } from "react";


const Table = ({magicDataList}) => {


  return (
    <>
    {magicDataList && (
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Edad</th>
            <th>Nacionalidad</th>
          </tr>
        </thead>
        <tbody>
          {magicDataList.reverse().map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>
                {item.nationalityProbability} {item.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
);
};

export default Table;