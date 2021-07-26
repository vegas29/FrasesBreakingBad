import React, {useState} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
display:flex;
align-items:center;
padding-top:5rem;
flex-direction: column;
`;

const Boton = styled.button`
background: white;
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #000;
border-radius: 7px;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
cursor: pointer;
`;
  
function App() {

  //State de frases

  const [frase, guardarFrase] = useState({});

  const consultarAPI = async ()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);

  }
  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
