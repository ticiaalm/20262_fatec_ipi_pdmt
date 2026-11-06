const Imagem = ({ src, alt, imgStyle }) => { // expressão de desestruturação
    return (
        <div className={`${imgStyle} flex-column justify-content-center`}>
            <img className="border-round" 
                src={src} 
                alt={alt} />
        </div>
    )
}

export default Imagem