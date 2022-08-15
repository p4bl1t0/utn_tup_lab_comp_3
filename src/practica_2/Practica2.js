import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

const { pageTitle } = site;
const { pageBody } = site;

const links = [
  "https://www.youtube.com/", 
  "https://www.facebook.com/"
];

export default function Practica2() {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <Main pageBody={pageBody} />
    </>
  );
}
