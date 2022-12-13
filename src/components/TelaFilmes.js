import styled from "styled-components"
import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function TelaFilmes({filmesURL,setFilmesURL}) {

    
   

    console.log(filmesURL)


    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        promise.then((res) => setFilmesURL(res.data));
        promise.catch((erro) => console.log(erro.response.data));
  
    }, [])
   


    return (
        <>
            <TelaTitulo>
                <p>Selecione o filme</p>
            </TelaTitulo>
           

            <TelaConteudo>
            <CarregandoFilmes filmesURL={filmesURL} />

                {filmesURL.map((f) => (
                    <Link to={`/sessoes/${f.id}`}>
                    <CardFilme data-test="movie">
                        <img  src={f.posterURL} />
                    </CardFilme>
                    </Link>
                   
                    ))}
                    

            </TelaConteudo>
        </>
    )
}

function CarregandoFilmes({filmesURL}){
    if(filmesURL.length === 0){
        return (
            <div>Carregando lista de filmes...</div>
        )
    }
}


const TelaTitulo = styled.div`
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

const TelaConteudo = styled.div`
width: 375px;
margin: 0 auto;
background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const CardFilme = styled.button`
margin-top: 5px;
height: 209px;
width: 145px;
padding: 8px;
background-color: white;
border-radius: 3px;
box-shadow: 0 2px 4px 2px #0000001A;
img{
    width: 129px;
    height: 193px;
}
`