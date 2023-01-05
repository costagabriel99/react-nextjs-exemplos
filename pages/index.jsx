import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function HomePage (){
    return (
        <div>
            <Title>Um titulo</Title>
            <Subtitle text= 'Um subtitulo'/>
            <p>Um paragrafo qualquer</p>
            <Title>Outro titulo</Title>
            <Subtitle/>
            <p>Um paragrafo qualquer</p>
        </div>
    )
}

export default HomePage