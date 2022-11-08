import { useContext } from 'react';
import MenuContext from './practica_5/MenuContext';
import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';
import Practica3 from './practica_3/Practica3';
import Practica4 from './practica_4/Practica4';

export default function MainContent () {
    const {selected, selectedHandle} = useContext(MenuContext);

    return (
        <main>
            { selected === 'practica_1' && <Practica1 /> }
            { selected === 'practica_2' && <Practica2 /> }
            { selected === 'practica_3' && <Practica3 /> }
            { selected === 'practica_4' && <Practica4 /> }
        </main>
    );
}