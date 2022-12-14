import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import RodapeAssento from "./RodapeAssento";
import Formularios from "./Formularios";
import Assento from "./Assento";


export default function TelaAssentos({ assentos, setAssentos, selecionados, setSelecionados }) {

    const { idSessao } = useParams();
    console.log(idSessao);





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

            <Formularios />

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