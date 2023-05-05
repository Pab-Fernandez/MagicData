import { useState, useEffect } from "react";

const Data = ({ name }) => {
  const [gender, setGender] = useState("");
  const [nationalityProbability, setNationalityProbability] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");


  useEffect(() => {
    fetch(`https://api.genderize.io?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setGender(data.gender);
      })
      .catch((error) => console.error(error));

    fetch(`https://api.nationalize.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        const countries = data.country;
        const highestProbabilityCountry = countries?.[0];
        if (highestProbabilityCountry){
        setCountry(highestProbabilityCountry.country_id);
        setNationalityProbability(
          `${(highestProbabilityCountry.probability * 100).toFixed(2)}%` 
        );
        }
      })
      .catch((error) => console.error(error));

    fetch(`https://api.agify.io?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setAge(data.age);
      })
      .catch((error) => console.error(error));
  }, [name]);

// ?  variable para ListData
  const listData = name && gender && nationalityProbability && country && age
  ? { name, gender, age, nationalityProbability, country }
  : null;

  useEffect(() => {
    if (listData) {
      localStorage.setItem("listData", JSON.stringify(listData));
    }
  }, [listData]);

  console.log (listData)

  return (
    <>
      {name !== "" && <h2>Estos son datos para {name}</h2>}

      {name && (
        <section>
          <h1> Datos</h1>
          <h2>Nuestras magia indica que es</h2>
          <h2 className="mayus"> {gender} </h2>
          <h2> {age} años</h2>
          <h2>
            {" "}
            {nationalityProbability} {country}
          </h2>
        </section>
      )}
    </>
  );
};

export default Data;
