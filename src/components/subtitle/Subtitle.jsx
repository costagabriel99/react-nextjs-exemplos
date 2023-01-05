/*
Exemplo de componente react com props (atributos)
*/

function Subtitle (props) {
    return (
        <h4> {props.text} </h4>
    )
}

Subtitle.defaultProps = {
    text: 'Default Subtitle'
}

export default Subtitle