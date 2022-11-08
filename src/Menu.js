import { useContext } from "react";
import MenuContext from "./Context/MenuContext";

export default function Menu () {

    const {path, pathHandle} = useContext(MenuContext);

    return (
        <div>
            <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
            <div className="menu">
                <select onChange={pathHandle}>
                    <option value="practica_1">Práctica 1</option>
                    <option value="practica_2">Práctica 2</option>
                    <option value="practica_3">Práctica 3</option>
                    <option value="practica_4">Práctica 4</option>
                </select>
            </div>
        </div>
    );
}