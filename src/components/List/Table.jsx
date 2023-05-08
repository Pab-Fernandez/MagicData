import { useState, useEffect } from "react";


const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("listData"));
    if (storedData) {
      setData(storedData);
    }
    console.log (storedData)
  }, []);

  return (
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
        {data.map((item, index) => (
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
  );
};

export default Table;