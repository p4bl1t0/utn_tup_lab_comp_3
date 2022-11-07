import { useContext } from "react";

import { PracticeDispatchContext } from "./Context/PracticeDispatchContext";

export default function Menu() {
  const onClickOptionHandler = (event) => {
    setselectedPractice(event.target.hash);
  };

  const setselectedPractice = useContext(PracticeDispatchContext);

  return (
    <div>
      <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
      <div className="menu">
        <a href="#practica_1" onClick={onClickOptionHandler}>
          Práctica 1
        </a>
        <a href="#practica_2" onClick={onClickOptionHandler}>
          Práctica 2
        </a>
        <a href="#practica_3" onClick={onClickOptionHandler}>
          Práctica 3
        </a>
        <a href="#practica_4" onClick={onClickOptionHandler}>
          Práctica 4
        </a>
      </div>
    </div>
  );
}
