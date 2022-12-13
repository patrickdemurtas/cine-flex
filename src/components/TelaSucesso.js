import styled from "styled-components"

export default function TelaSucesso(){
    return (
        <>
        <TituloSucesso>
            <p>Pedido feito</p>
            <p>com sucesso!</p>
            
        </TituloSucesso>
        
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