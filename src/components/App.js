import styled from 'styled-components';
import TelaFilmes from './TelaFilmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TelaAssentos from './TelaAssentos';
import TelaSucesso from './TelaSucesso';
import TelaSessoes from './TelaSessoes'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [filmesURL, setFilmesURL] = useState([])
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [assentos, setAssentos] = useState([])
  const [sessoes, setSessoes] = useState([])
  const [selecionados, Setselecionados] = useState([])


  return (
    <>


      <LogoCineFlex >
        <h1>CINEFLEX</h1>
      </ LogoCineFlex>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<TelaFilmes filmesURL={filmesURL} setFilmesURL={setFilmesURL}/>} />
          <Route path='/sessoes/:idFilme' element={<TelaSessoes sessoes={sessoes} setSessoes={setSessoes} />} />
          <Route path='/assentos/:idSessao' element={<TelaAssentos assentos={assentos} setAssentos={setAssentos} selecionados={selecionados} setSelecionados={Setselecionados}/>} />
          <Route path='/sucesso' element={<TelaSucesso />} />

        </Routes>

      </BrowserRouter>
    </>


  );
}

export default App;




const LogoCineFlex = styled.div`
width: 375px;
height: 67px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9;

h1{
  color: #E8833A;
  font-family: roboto;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

}
`



