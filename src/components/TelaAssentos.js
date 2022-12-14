import styled from "styled-components"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import RodapeAssento from "./RodapeAssento";

import Assento from "./Assento";


export default function TelaAssentos({ assentos, setAssentos, selecionados, setSelecionados, nome, setNome, cpf, setCpf, sucesso, setSucesso }) {

    const { idSessao } = useParams();
    console.log(idSessao);

    const navigate = useNavigate();



    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((res) => setAssentos(res.data))
        promise.catch((erro) => console.log(erro.response.data))
    }, [])

    console.log(assentos)

    console.log(assentos.seats)


    function situacaoAssentos(as) {
        if (as.isAvailable === false) {
            alert('Esse assento não está disponível')
        } else {
            const estaSelecionado = selecionados.some((s) => s.id === as.id)
            if (estaSelecionado === true) {
                const atualizaSelecionados = selecionados.filter((s) => s.id !== as.id)
                setSelecionados(atualizaSelecionados)
            } else {
                setSelecionados([...selecionados, as])
            }
        }
    }

    function reservar(e) {
        e.preventDefault()
        const ids = selecionados.map(s => s.id)

        const pedido = { ids: ids, name: nome, cpf: cpf }

        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", pedido);
        promise.then((res) => setSucesso({ hora: assentos.name, data: assentos.day.date, titulo: assentos.movie.title, poltronas: selecionados.map(s => s.name), nome: nome, cpf: cpf }));
        navigate("/sucesso");
        promise.catch((erro) => console.log(erro.responde.data))



    }




    if (assentos.length === 0) {
        return (
            <ConteudoAssentos>
                <div>Carregando assentos...</div>
            </ConteudoAssentos>
        )
    }




    return (
        <>
            <TituloAssentos>
                <p>Selecione o(s) assento(s)</p>
            </TituloAssentos>



            <ConteudoAssentos>
                {assentos.seats.map((as) => <Assento as={as} selecionados={selecionados} setSelecionados={setSelecionados} situacaoAssentos={situacaoAssentos} estaSelecionado={selecionados.some((s) => s.id === as.id)} />)}
            </ConteudoAssentos>

            <DivExemplos>

                <Exemplo1><p>Selecionado</p></ Exemplo1>
                <Exemplo2><p>Disponível</p></ Exemplo2>
                <Exemplo3><p>Indisponível</p></ Exemplo3>

            </DivExemplos>

            <Input onSubmit={reservar}>
                <p>Nome do comprador:</p>
                <input data-test="client-name" placeholder="Digite o seu nome" value={nome} onChange={e => setNome(e.target.value)} required/>
                <p>CPF do comprador:</p>
                <input data-teste="client-cpf" placeholder="Digite o seu CPF" value={cpf} onChange={e => setCpf(e.target.value)} required/>
                <button data-teste="book-seat-btn"  type="submit">Reservar assento(s)</button>

            </Input>

            <CarregandoRodape data-test="footer" assentos={assentos} />






        </>
    )
}
















function CarregandoRodape({ assentos }) {
    if (assentos.length === 0) {
        return (
            <div>Carregando...</div>
        )
    } else {
        return (
            <RodapeAssento img={assentos.movie.posterURL} nome={assentos.movie.title} weekday={assentos.day.weekday} hora={assentos.name} />
        )
    }
}

const TituloAssentos = styled.div`
width: 375px;
height: 110px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
p{
    font-size: 24px;
    font-weight: 400;
    color: #293845;
}
`

const ConteudoAssentos = styled.div`
margin: 0 auto;
width: 375px;
display: flex;
flex-wrap: wrap;

`




const DivExemplos = styled.div`
margin: 0 auto;
width: 375px;
display: flex;
justify-content: space-around;
margin-bottom: 40px;

`

const Exemplo1 = styled.div`
background-color: #1AAE9E;
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
border-radius: 12px;
p{
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    color: #4E5A65;
    margin-top: 50px;
}
`

const Exemplo2 = styled.div`
background-color: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
border-radius: 12px;
p{
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    color: #4E5A65;
    margin-top: 50px;
}
`

const Exemplo3 = styled.div`
background-color: #FBE192;
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
border-radius: 12px;
p{
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    color: #4E5A65;
    margin-top: 50px;
}
`

const AssentosSelec = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
border-radius: 12px;
background-color: #1AAE9E;
margin-right: 10px;
margin-bottom: 18px;
p{
    font-family: Roboto;
    font-weight: 400;
    font-size: 11px;
}

`

const Input = styled.form`
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
margin-top: 10px;
}
input{
    width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #000000;
padding-left: 18px;
margin-bottom: 7px;
margin-top: 3px;
::placeholder{font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #AFAFAF;}
:focus{outline: none;}
}
button{
    width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
border: none;
margin-block: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
margin-inline: auto;
color: #FFFFFF;
}
margin-bottom:100px;
padding-inline: 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& p:nth-child(1){
    position: relative;
    left: -79px;
  }
& p:nth-child(3){
    position: relative;
    left: -87px;
  }
`