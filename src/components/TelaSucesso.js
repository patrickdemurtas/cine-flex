import styled from "styled-components"
import { Link } from "react-router-dom"

export default function TelaSucesso({ sucesso, setSucesso }) {

    if (sucesso === undefined){
        return (
            <TituloSucesso>
            <div>Carregando...</div>
            </TituloSucesso>
        )
    } 
   
    return (
        <>
            <TituloSucesso>
                <p>Pedido feito</p>
                <p>com sucesso!</p>

            </TituloSucesso>

            <FilmeSessao>
                <h1>Filme e sessão</h1>
                <p>{sucesso.titulo}</p>
                <p>{sucesso.data}  {sucesso.hora}</p>
            </FilmeSessao>

            <Ingressos>
                <h1>Ingressos</h1>
                {sucesso.poltronas.map((p) => <p>Assento {p}</p>)}

            </Ingressos>

            <Comprador>
                <h1>Comprador</h1>
                <p>Nome: {sucesso.nome}</p>
                <p>CPF: {sucesso.cpf}</p>
            </Comprador>

            <Link to="/" style={{textDecoration: 'none'}}>
                <ButtonVoltar>
                    <p>Voltar para Home</p>
                </ButtonVoltar>
            </Link>


        </>
    )
}



const TituloSucesso = styled.div`
width: 375px;
height: 110px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
p{
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
}
`

const FilmeSessao = styled.div`
margin: 0 auto;
width: 375px;
h1{
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;

}

p{
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
}

`

const Ingressos = styled.div`
margin: 0 auto;
width: 375px;
h1{
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;

}

p{
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
}

`

const Comprador = styled.div`
margin: 0 auto;
width: 375px;
h1{
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;

}

p{
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
}

`

const ButtonVoltar = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
border: none;
margin-block: 50px;
color: #FFFFFF;
p{
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto';

}

`