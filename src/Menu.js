import { useContext } from "react";
import MenuContext from "./practica_5/MenuContext";

export default function Menu () {

    const {selected, selectedHandle} = useContext(MenuContext);

    return (
        <>
            <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
                <select onChange={selectedHandle}>
                    <option value="practica_1">Práctica 1</option>
                    <option value="practica_2">Práctica 2</option>
                    <option value="practica_3">Práctica 3</option>
                    <option value="practica_4">Práctica 4</option>
                </select>
        </>
    );
}