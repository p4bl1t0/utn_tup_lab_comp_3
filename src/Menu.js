import { usePractice } from "./Context";

export default function Menu() {
  const { changePracticeHandler } = usePractice();

  const onClickPracticeOne = () => {
    changePracticeHandler("#practica_1");
  };
  const onClickPracticeTwo = () => {
    changePracticeHandler("#practica_2");
  };
  const onClickPracticeThree = () => {
    changePracticeHandler("#practica_3");
  };
  const onClickPracticeFour = () => {
    changePracticeHandler("#practica_4");
  };

  return (
    <div>
      <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
      <div className="menu">
        <a href="#practica_1" onClick={onClickPracticeOne}>
          Práctica 1
        </a>
        <a href="#practica_2" onClick={onClickPracticeTwo}>
          Práctica 2
        </a>
        <a href="#practica_3" onClick={onClickPracticeThree}>
          Práctica 3
        </a>
        <a href="#practica_4" onClick={onClickPracticeFour}>
          Práctica 4
        </a>
      </div>
    </div>
  );
}
