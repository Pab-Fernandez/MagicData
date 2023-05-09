import { useState, useEffect } from "react";

const Data = ({ name, setMagicDataList }) => {
  const [gender, setGender] = useState("");
  const [nationalityProbability, setNationalityProbability] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    setGender("");
    setAge("");
    setCountry("");
    setNationalityProbability("");

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
        if (highestProbabilityCountry) {
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

  useEffect(() => {
    if (country && nationalityProbability && age && gender) {
      const listData = JSON.parse(localStorage.getItem("listData")) || [];

      localStorage.setItem(
        "listData",
        JSON.stringify([
          
          {
            name,
            country,
            nationalityProbability,
            age,
            gender,
          },
          ...listData,
        ])
      );
      const updatedListData = JSON.parse(localStorage.getItem("listData")) || [];
      setMagicDataList([
        ...updatedListData, 
  //      {
  //        name,
  //        country,
  //        nationalityProbability,
  //        age,
  //        gender,
  //      },
      ])
    }
  }, [country, nationalityProbability, age, gender]);

//useEffect(() => {
//setMagicDataList  
//}, [listData]);
//

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
