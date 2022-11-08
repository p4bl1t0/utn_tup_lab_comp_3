import Body from './Body'
import React from 'react'
import BlogPost from './BlogPost';
import '../Practica2.css';
import ItalicChanger from './ItalicChanger';

// const returnMovieTitle = () => {

//     return watchList.filter(
//         movie => movie.Director === 'Christopher Nolan' && Number(movie.imdbRating) > 8.0
//     ).map(movie => movie.Title)
//     // Aquí adentro escriban la función
// }
// // condición ? si es verdadera  : sino


const links = [
    {
        site: 'https://www.google.com/?gws_rd=ssl',
        name: 'google'
    },
    {
        site: 'https://es-la.facebook.com/',
        name: 'facebook'

    }
];

const returnLinks = () => {
    return links.map(link => link.site)
};

const Main = ({ body }) => {
    let linksArray = returnLinks(links);
    return (
        <div>
            <h2> <strong>He aquí la frase del alumno</strong>  </h2>
            <nav>
                <ul>
                    {/* <a href='https://www.google.com/?gws_rd=ssl'> Google</a>
                    <br></br>
                    <a href='https://es-la.facebook.com/'> Facebook</a> */}

                    {linksArray.map((item, index) => (
                        <a href={item}><br />Link {index}</a>
                    ))}
                    <ItalicChanger>
                        <Body body={'El body del main'} />

                    </ItalicChanger>


                    <BlogPost />
                </ul>
            </nav>
        </div>
    )
}

//<li key={index}>{item}</li>
export default Main