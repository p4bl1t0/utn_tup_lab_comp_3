import { useContext } from 'react';

import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';
import Practica3 from './practica_3/Practica3';
import Practica4 from './practica_4/Practica4';
import PractContext from './practica_5/PractContext';

export default function MainContent () {
   
   const {practiceSelected} = useContext(PractContext);
   
    return (
        <main>

            { practiceSelected === '#practica_1' && <Practica1 /> }
            { practiceSelected === '#practica_2' && <Practica2 /> }
            { practiceSelected === '#practica_3' && <Practica3 /> }
            { practiceSelected === '#practica_4' && <Practica4 /> }
        </main>
    );
}