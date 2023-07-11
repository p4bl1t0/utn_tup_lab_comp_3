import "./App.css";

export default function Menu({ onOptionSelected }) {
  const onClickOptionHandler = (event) => {
    event.preventDefault();
    onOptionSelected(event.target.hash);
  };
  return (
    <div className="container">
      <h1 className="title">TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
      <div className="menu">
        <a
          className="nav-item"
          href="#practica_1"
          onClick={onClickOptionHandler}
        >
          Práctica 1
        </a>
        <a
          className="nav-item"
          href="#practica_2"
          onClick={onClickOptionHandler}
        >
          Práctica 2
        </a>
        <a
          className="nav-item"
          href="#practica_3"
          onClick={onClickOptionHandler}
        >
          Práctica 3
        </a>
        <a
          className="nav-item"
          href="#practica_4"
          onClick={onClickOptionHandler}
        >
          Práctica 4
        </a>
      </div>
    </div>
  );
}
