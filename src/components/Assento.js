import { useEffect, useState } from "react";
import styled from "styled-components";
import {coresBordas, cores, coresAssentos} from "./coresAssentos"

export default function Assento({ assentos, selecionados, setSelecionado, estaSelecionado,as, situacaoAssentos}) {


    
    
    const [disp, setDisp] = useState("disponivel")

    useEffect(() => {
        if (estaSelecionado === true){
            setDisp("selec")
        } else if (as.isAvailable === true ){
            setDisp("disponivel")
        } else {
            setDisp("indisponivel")
        }
    },[estaSelecionado])








  
        
    
        return (
           
                <>

                    <AssentosDispOuNao data-test="seat" disp={disp} cores={cores} coresBordas={coresBordas} onClick={() => situacaoAssentos(as)} >
                        <p>{as.name}</p>
                    </AssentosDispOuNao>


                </>
        )


        

        }




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
background-color: ${props => cores[props.disp]};
border: 2px solid ${props => coresBordas[props.disp]};
margin-right: 10px;
margin-bottom: 18px;
p{
    font-family: Roboto;
    font-weight: 400;
    font-size: 11px;
}

`