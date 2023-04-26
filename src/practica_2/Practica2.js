
import Page from "./components/page/Page";
const frase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam"
const site = {
    title: 'Boca perdió con Estudiantes, por Liga Profesional 2023',
    body: 'La frustración se apodera de la Bombonera. Algunos hinchas eligen irse antes, convencidos de que será difícil de empatar. Los que se quedan no pueden creer tanta incapacidad para pisar el área rival. Los tamboriles de La Doce parecen sacados de contexto. Igual que el gol de Mauro Boselli, un rapto de lucidez de Estudiantes que arma una jugada a puro toque que deriva en una espectacular tijera y una floja respuesta de Sergio Romero. Es la tercera derrota consecutiva de Boca, que perdió cinco de los últimos seis juegos. Entonces, fluyen los silbidos. Y un mensaje de la tribuna: “Este martes, cueste lo que cueste, este martes tenemos que ganar”.'
};
const links=[ 
    {name:"Facebook",enlace:"https://www.facebook.com"},
    {name:"Twitter",enlace:"https://twitter.com"}
]


export default function Practica2 () {
    return (
        <>
            <Page site={site} links={links} frase={frase} />
                
        </>
    );
}