import {useState, useEffect} from 'react';
import { useRef } from 'react';

const Name = ({setName}) => {
  const inputRef = useRef(null);
  
    function handleButtonClick() {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          setName(data.results[0].name.first);
        });
    }
  
    function handleFormSubmit(event) {
      event.preventDefault();
      const inputText = inputRef.current.value.trim();
  
      if (inputText === "") {
        handleButtonClick();
      } else {
        setName(inputText);
      }
    }
    return (
      <>
      <form onSubmit={handleFormSubmit}>
            <label>
              <h3>Ingrese un nombre</h3>
              
            </label>
            <input ref={inputRef} type="text" />
            <button type="submit">Obtener datos mágicos</button> 
          </form>
           
          
        
          <div>
        <h2>O utilice nuestro</h2>
        <button onClick={handleButtonClick}>Rayo Randomizador</button>
      </div>
      </>
    )
  }
  export default Name;