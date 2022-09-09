import "../App.css";

import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Page from "./components/Page";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

const links = {
  link1: "https://rosario3.com",
  link2: "https://youtube.com",
};

export default function Practica2() {
  return (
    <div>
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main
          pageBody={site.pageBody}
          link1={links.link1}
          link2={links.link2}
        />
      </Page>
    </div>
  );
}
