/* 
1. Criar um componente funcional
2. Ele deve receber uma lista como parâmetro chamada photos e já desestruturar na lista de parâmetros da função que o define
3. Chamar a função map sobre essa lista, e para cada item, produzir um componente do tipo Imagem
*/

import Imagem from "./Imagem"

const ListaImagens = ({ photos }) => {
    return (
        photos.map((photo, key) => (
            <Imagem src={photo.src.small} alt={photo.alt} />
        ))
    )
}

export default ListaImagens