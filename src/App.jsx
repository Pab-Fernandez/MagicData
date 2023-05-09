import { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Name from "./components/Name/Name";
import Data from "./components/Data/Data";
import List from "./components/List/List";
import Table from "./components/List/table";


function App() {
  const [name, setName] = useState("");
  const [magicDataList, setMagicDataList] = useState ( 
    localStorage.getItem("listData") ? 
  JSON.parse(localStorage.getItem("listData" )) : [] )



  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Name setName={setName} />
      </div>
      <section>
        <Data name={name} setMagicDataList={setMagicDataList} />
      </section>
      <section>
        <List name={name} magicDataList={magicDataList}/>  
          <Table magicDataList={magicDataList}/>
      </section>
    </>
  );
}

export default App;
