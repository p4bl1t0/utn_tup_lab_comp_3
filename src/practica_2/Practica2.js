
import Page from "./components/page/Page";
const frase = "Heavy metal is de low"
const site = {
    title: 'Argentina es el pais con mayor inflación pero mejor música',
          body: ' Arch enemy de nuevo en Argentina!'
};
const links=[ 
    {name:"Youtube",enlace:"https://www.youtube.com"},
    {name:"Archenemy",enlace:"https://archenemy.net"}
]


export default function Practica2 () {
    return (
        <>
            <Page site={site} links={links} frase={frase} />
                
        </>
    );
}