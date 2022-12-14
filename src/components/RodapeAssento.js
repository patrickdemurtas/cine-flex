import styled from "styled-components";

export default function RodapeAssento({ img, nome, weekday, hora }) {
    return (
        <>
            <Baixo>
                <CardRodapeAssento>
                    <img src={img} alt="imagem do filme" />
                </CardRodapeAssento>
                <QuebraLinha>
                <h1>{nome}</h1>
                <h1>{weekday}</h1>
                <h1>{hora}</h1>
                </QuebraLinha>
            </Baixo>
        </>
    )

}


const Baixo = styled.div`
margin: 0 auto;
width: 375px;
height: 117px;
background-color: #DFE6ED;
display: flex;
align-items: center;

`

const CardRodapeAssento = styled.div`
height: 89px;
width: 64px;
padding: 8px;
background-color: white;
border-radius: 3px;
box-shadow: 0 2px 4px 2px #0000001A;
margin-left: 10px;
img{
    width: 48px;
    height: 72px;
}
`

const QuebraLinha = styled.div`
display: flex;
flex-direction: column;
h1{
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    margin-left: 10px;

}
`