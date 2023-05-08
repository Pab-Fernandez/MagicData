import { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Name from "./components/Name/Name";
import Data from "./components/Data/Data";
import List from "./components/List/List";
import Table from "./components/List/table";


function App() {
  const [name, setName] = useState("");
 // const [gender, setGender] = useState("");
 // const [nationalityProbability, setNationalityProbability] = useState("");
 // const [country, setCountry] = useState("");
 // const [age, setAge] = useState("");


  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Name setName={setName} />
      </div>
      <section>
        <Data name={name} />
      </section>
      <section>
        <List name={name}/>
        <Table/>
      </section>
    </>
  );
}

export default App;
