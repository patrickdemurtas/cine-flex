import styled from "styled-components";


export default function Rodape({title, URL}){

    return (

        <Baixo>
            <CardRodape>
                <img src={URL} alt='poster do filme' />
            </CardRodape>
            <h1>{title}</h1>
        </Baixo>
    )

}





const Baixo = styled.div`
margin: 0 auto;
width: 375px;
height: 117px;
background-color: #DFE6ED;
display: flex;
align-items: center;
h1{
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    margin-left: 10px;

}


`

const CardRodape = styled.div`
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