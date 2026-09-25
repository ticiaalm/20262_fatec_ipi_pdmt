const Imagem = ({ src, alt }) => { // expressão de desestruturação
    /* const src = props.src
    const alt = props.alt */
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Imagem