import { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Data from "./components/Data";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nationalityProbability, setNationalityProbability] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div>
        {" "}
        <Header />
      </div>
      <div>
        {" "}
        <Name setName={setName} />
      </div>
      <section>
        <Data name={name} />
      </section>
      <section>
        <List name={name} />
      </section>
    </>
  );
}

export default App;
