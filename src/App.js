import React from 'react';
import styled from '@emotion/styled';

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
`;
  
function App() {
  const consultarAPI = ()=>{
    console.log('Consultando')
  }
  return (
    <Contenedor>
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
