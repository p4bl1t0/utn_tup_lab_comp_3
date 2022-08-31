import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

const links = [
  {
    Page: "Youtube.com",
    Link: "https://www.youtube.com/",
  },
  {
    Page: "Github.com",
    Link: "https://www.github.com/",
  },
];

export default function Practica2() {
  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} links={links} />
    </div>
  );
}
