import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import RodapeAssento from "./RodapeAssento";


export default function TelaAssentos() {

    const { idSessao } = useParams();
    console.log(idSessao);

    const [assentos, setAssentos] = useState([])
    
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((res) => setAssentos(res.data))
        promise.catch((erro) => console.log(erro.response.data))
    }, [])

    console.log(assentos)

    console.log(assentos.seats)














    return (
        <>
            <TituloAssentos>
                <p>Selecione o(s) assento(s)</p>
            </TituloAssentos>



            <ConteudoAssentos>
                <CarregandoAssentos assentos={assentos} />
            </ConteudoAssentos>

            <DivExemplos>

                <Exemplo1><p>Selecionado</p></ Exemplo1>
                <Exemplo2><p>Disponível</p></ Exemplo2>
                <Exemplo3><p>Indisponível</p></ Exemplo3>

            </DivExemplos>

            <CarregandoRodape assentos={assentos} />






        </>
    )
}



function CarregandoAssentos({ assentos }) {

    if (assentos.length === 0) {
        return (
            <ConteudoAssentos>
                <div>Carregando assentos...</div>
            </ConteudoAssentos>

        )
    } else {
        return (
            assentos.seats.map((as) => (
                <>

                    <AssentosDispOuNao cor={as.isAvailable} onClick={() => funClicar(as)}>
                        <p>{as.name}</p>
                    </AssentosDispOuNao>


                </>
            ))


        )

    }
}




function funClicar(as) {
    if (as.isAvailable === false) {
        alert('Esse assento não está disponível')
    } else if (as.isAvailable === true){
        return true
    }

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

const AssentosDispOuNao = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
border-radius: 12px;
background-color: ${props => {
        if (props.cor === true) {
            return "#C3CFD9"
        } else if (props.cor === false) {
            return "#FBE192"
        } 
    }};
margin-right: 10px;
margin-bottom: 18px;
p{
    font-family: Roboto;
    font-weight: 400;
    font-size: 11px;
}

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