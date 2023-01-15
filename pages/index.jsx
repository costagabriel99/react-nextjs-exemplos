import { useState } from 'react'
import Head from 'next/head'

import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"
import Button from '../src/components/button/Button'


function HomePage (){

    const [click, setClick] = useState(0)

    const handleClick = () => {
        setClick (click + 1)
    }

    return (
        <>
            <Head>
                <title>Titulo diferente da HomePage</title>
            </Head>
            <div>
               <Title>Um titulo</Title>
               <Subtitle text= 'Um subtitulo'/>
              <p>Um paragrafo qualquer</p>
              <Title>Outro titulo</Title>
              <Subtitle/>
              <Button onClick={handleClick}
              
              >
                Botão Teste
            </Button>
            <p>Cliques: {click}</p>
            </div>
        </>
    )
}

export default HomePage