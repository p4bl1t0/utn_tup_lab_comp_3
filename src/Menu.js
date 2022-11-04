import { usePractice } from "./context/LabComIIIContext";

export default function Menu ({ onOptionSelected }) {
    const { onChangePractice } = usePractice();

    const onClickOptionHandler = (practice) => { 
        onChangePractice(practice);
    };
    return (
        <div>
            <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
            <div className="menu">
                <a href="#practica_1" onClick={()=> {onClickOptionHandler("#practica_1")}}>Práctica 1</a>
                <a href="#practica_2" onClick={()=> {onClickOptionHandler("#practica_2")}}>Práctica 2</a>
                <a href="#practica_3" onClick={()=> {onClickOptionHandler("#practica_3")}}>Práctica 3</a>
                <a href="#practica_4" onClick={()=> {onClickOptionHandler("#practica_4")}}>Práctica 4</a>
            </div>
        </div>
    );
}