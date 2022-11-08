
import { useContext } from 'react';
import MenuContext from './Context/MenuContext';
import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';
import Practica3 from './practica_3/Practica3';
import Practica4 from './practica_4/Practica4';

export default function MainContent () {
    const {path, pathHandle} = useContext(MenuContext);

    return (
        <main>
            { path === 'practica_1' && <Practica1 /> }
            { path === 'practica_2' && <Practica2 /> }
            { path === 'practica_3' && <Practica3 /> }
            { path === 'practica_4' && <Practica4 /> }
        </main>
    );
}