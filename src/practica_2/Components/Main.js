import React from 'react'
import Body from './Body'
import BlogSpot from './BlogSpot'

import "./Main.css";

const Main = ({propMain, linkP5JS, linkQuilez}) => {
  return (
        <>
        <Body styleItalics="italics" propBody={propMain}/>
        <nav>
            <ul>
                <a href={linkP5JS}>{linkP5JS}</a>
            </ul>            
            <ul>
                <a href={linkQuilez}>{linkQuilez}</a>
            </ul>
        </nav>
        <BlogSpot 
        body= "El gran líder de la izquierda brasileña ha obtenido un 50,9% de los apoyos y adelanta a Bolsonaro, con un 49,1%. Es la diferencia más ajustada de la democracia brasileña moderna, apenas dos millones de votos de los 124 emitidos. “Me considero un ciudadano que ha vivido un proceso de resurrección. Intentaron enterrarme vivo y aquí estoy”, ha dicho Lula en su primera comparecencia tras los resultados. “Haremos que los brasileños desayunen, almuercen y cenen todos los días”, ha añadido. Los presidentes progresistas de América Latina han festejado su regreso. En el Estado de São Paulo, motor económico de Brasil y principal colegio electoral del país, ha ganado el candidato de Bolsonaro, Tarcísio de Freitas. Los seguidores de Lula están concentrados en la avenida Paulista frente al Museo de Arte de São Paulo para festejar la victoria, como muestra el vídeo en directo. Bolsonaro mantiene el silencio y no reconoce la derrota."
        title= { "Lula da Silva ha ganado las elecciones a la presidencia de Brasil." }
        >
        </BlogSpot>
    </>
  )

}

export default Main